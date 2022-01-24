import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import InputForm from "../Components/InputForm";

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
      <Route path="/reimbursement/add">
        <InputForm />
      </Route>
    </Switch>
  );
}

export default Routes;
