import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginSuccess } from "../redux/auth/action";

function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  const handleAdd = () => {
    const action = loginSuccess(Date.now());
    dispatch(action);
  };
  return (
    <div>
      <h3>Login</h3>
      <button onClick={handleAdd}>Please click on this to login</button>
    </div>
  );
}

export default Login;
