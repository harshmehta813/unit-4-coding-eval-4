import { useDispatch } from "react-redux";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess
} from "../redux/app/action";
import { addTodos, getTodos } from "./api";
import InputForm from "./InputForm";
import ReimbursementList from "./ReimbursementList";

function Dashboard() {
  const dispatch = useDispatch();
  const handleAdd = ({ name, date, purpose, amount }) => {
    dispatch(addTodos({ name, date, purpose, amount })).then((res) => {
      dispatch(getTodos());
    });
  };

  return (
    <div>
      <InputForm onSubmit={handleAdd} />
      <ReimbursementList />
    </div>
  );
}

export default Dashboard;
