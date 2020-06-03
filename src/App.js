//external
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//internal
// import { Home } from "./pages";
import { useRoutes } from "./routes/routes";
//styles
import "@/styles/index.scss";

function App() {
    const routes = useRoutes(false);

    return <Router>{routes} </Router>;
}

export default App;
