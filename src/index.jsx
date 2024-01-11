import React from "react";
import ReactDOMClient from "react-dom/client";
import { ScreenToMake } from "./screens/ScreenToMake";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ScreenToMake />);