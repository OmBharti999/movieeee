import Header from "./components/Header";
import Card from "./components/card/Card";
import List from "./components/List";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <List />
    </div>
  );
}
