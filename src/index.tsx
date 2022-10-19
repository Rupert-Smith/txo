import ReactDOM from "react-dom/client";
import "./index.css";
import TXOApp from "./txo-app";
import "./assets/fonts/MessinaSansWeb-Regular.woff";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<TXOApp />);
