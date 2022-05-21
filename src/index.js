import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
class Doc extends React.Component {
  componentDidMount() {
    document.title = "Amai Bake Shop";
  }

  render() {
    return <div></div>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Doc />
    <App />
  </React.StrictMode>
);
