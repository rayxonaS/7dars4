import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollectionsData = (names) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    async function fetchMultipleCollection() {
      try {
        const balanceRef = collection(db, "balance");
        const transactionsRef = collection(db, "transactions");
        const potsRef = collection(db, "pots");
        const budgetsRef = collection(db, "budgets");

        const [
          balanceSnapshot,
          transactionsSnapshot,
          potsSnapshot,
          budgetsSnapshot,
        ] = await Promise.all([
          getDocs(balanceRef),
          getDocs(transactionsRef),
          getDocs(potsRef),
          getDocs(budgetsRef),
        ]);

        const balance = {
          id: balanceSnapshot.docs[0].id,
          ...balanceSnapshot.docs[0].data(),
        };
        const transactions = transactionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const pots = potsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const budgets = budgetsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(balance, transactions, pots, balance);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsPending(false);
      }
    }
    fetchMultipleCollection();
  }, []);
};
