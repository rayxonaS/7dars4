import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
