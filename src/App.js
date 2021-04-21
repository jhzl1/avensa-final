import "antd/dist/antd.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./assets/css/home.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reservaciones from "./components/Reservaciones";
import Tarjetas from "./components/Tarjetas";
import Carusel from "./components/Carusel";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Reservaciones />
            <Tarjetas />
            <Carusel />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
