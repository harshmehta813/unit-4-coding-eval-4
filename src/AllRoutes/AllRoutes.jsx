import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import Admin from "../Components/Admin";
import { useSelector } from "react-redux";
import Dashboard from "../Components/Dashboard";

function Routes() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <>
      <Switch>
        <Route path="/dashboard/admin">
          {isAuth ? <Admin /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/reimbursement/">
          <Dashboard />
        </Route>
        <Route exact path="/reimbursement/add">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
