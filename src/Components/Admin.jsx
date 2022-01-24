import { useDispatch } from "react-redux";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess
} from "../redux/app/action";
import { addTodos, getTodos } from "./api";
import AdminList from "./AdminList";

function Admin() {
  const dispatch = useDispatch();
  const handleAdd = ({ name, date, purpose, amount }) => {
    dispatch(addTodos({ name, date, purpose, amount })).then((res) => {
      dispatch(getTodos());
    });
  };

  return (
    <div>
      <AdminList />
    </div>
  );
}

export default Admin;
