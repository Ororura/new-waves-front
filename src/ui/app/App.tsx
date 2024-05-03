import { FC } from "react";
import "./App.css";
import { ContextWrapper } from "../../core/Context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../../constants/routes";
import Header from "../hoc/header/Header";
import "bootstrap/dist/css/bootstrap.css"

const App: FC = () => {
  return (
    <BrowserRouter>
      <ContextWrapper>
        <Header>
          <Switch>
            {routes.map((value, index) => (
              <Route key={index} path={value.path} component={value.element} exact></Route>
            ))}
          </Switch>
        </Header>
      </ContextWrapper>
    </BrowserRouter>
  );
};

export default App;
