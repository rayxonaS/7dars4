import { useCollectionsData } from "../../hooks/useCollectionsData";
import style from "./overview.module.scss";

function Overview() {
  const { data, isPending } = useCollectionsData();
  console.log(data);
  return <div>Overview</div>;
}

export default Overview;
