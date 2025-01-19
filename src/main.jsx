import { createRoot } from "react-dom/client";
// -- STYLE
import "./index.scss";
// -- SCREEN
import App from "./App.jsx";
import NotFound from "./screen/notFound/NotFound.jsx";
import PlanetDetail from "./screen/planetDetail/PlanetDetail.jsx";
// -- REDUX
import store from "./store/index.js";
import { Provider } from "react-redux";
// -- ROUTING
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/planet/:planetId" element={<PlanetDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
