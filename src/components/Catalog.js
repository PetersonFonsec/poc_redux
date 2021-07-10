import { useSelector } from "react-redux";

export function Catalog() {
  const store = useSelector((state) => state);
  console.log(store);
  return <h1>Hello World</h1>;
}
