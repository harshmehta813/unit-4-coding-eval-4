import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import Dashboard from "../Components/Dashboard";

function Routes() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? (
    <>
      <Switch>
        <Route path="/dashboard/admin"></Route>
      </Switch>
    </>
  ) : (
    <Switch>
      <Route exact path="/reimbursement/">
        <Dashboard />
      </Route>
      <Route exact path="/reimbursement/add">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default Routes;
