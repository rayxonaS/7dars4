import { useCollectionsData } from "../../hooks/useCollectionsData";

const Overview = () => {
  const { data, isPending, error } = useCollectionsData();

  if (isPending) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error)
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  if (!data) return <p style={{ textAlign: "center" }}>No data</p>;

  const { balance, transactions, pots } = data;

  const totalSaved = Array.isArray(pots)
    ? pots.reduce((sum, pot) => sum + (pot.amount || 0), 0)
    : 0;

  const cardStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const gridContainer = {
    display: "grid",
    gap: "20px",
  };

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Overview
      </h1>

      <div
        style={{
          ...gridContainer,
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          marginBottom: "30px",
        }}
      >
        <div
          style={{ ...cardStyle, backgroundColor: "#191919", color: "white" }}
        >
          <h2 style={{ marginBottom: "10px", fontSize: "16px" }}>
            Current Balance
          </h2>
          <p style={{ fontSize: "26px", fontWeight: "bold" }}>
            ${balance?.amount?.toLocaleString() ?? 0}
          </p>
        </div>
        <div style={cardStyle}>
          <h2 style={{ marginBottom: "10px", fontSize: "16px" }}>Income</h2>
          <p style={{ fontSize: "26px", fontWeight: "bold" }}>$3,814.25</p>
        </div>
        <div style={cardStyle}>
          <h2 style={{ marginBottom: "10px", fontSize: "16px" }}>Expenses</h2>
          <p style={{ fontSize: "26px", fontWeight: "bold" }}>$1,700.50</p>
        </div>
      </div>

      <div style={{ ...gridContainer, gridTemplateColumns: "2fr 1fr" }}>
        <div style={{ ...gridContainer }}>
          <div style={cardStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h2>Pots</h2>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                See Details
              </button>
            </div>
            <h3 style={{ fontSize: "24px" }}>${totalSaved}</h3>
          </div>

          <div style={cardStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h2>Transactions</h2>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                View All
              </button>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {transactions.slice(0, 5).map((tx) => (
                <div
                  key={tx.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontWeight: "500" }}>
                    {tx.name ?? "Unnamed"}
                  </div>
                  <div style={{ color: tx.amount > 0 ? "green" : "red" }}>
                    {tx.amount > 0 ? "+" : ""}
                    {tx.amount}$
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ ...gridContainer }}>
          <div style={cardStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h2>Recurring Bills</h2>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                See Details
              </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "8px" }}>Paid Bills - $190</li>
              <li style={{ marginBottom: "8px" }}>Total Upcoming - $194.98</li>
              <li>Due Soon - $59.98</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
