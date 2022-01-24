import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../redux/app/action";
import { getTodos } from "./api";

function TodoItem({ name, date, purpose, amount, status, id }) {
  return (
    <>
      <td>{name}</td>
      <td>{date}</td>
      <td>{purpose}</td>
      <td>{amount}</td>
      <td>{`${status}`}</td>
    </>
  );
}

function ReimbursementList() {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos());
  }, []);

  console.log(todos);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      <table>
        <tr>
          <td>name</td>
          <td>date</td>
          <td>purpose</td>
          <td>amount</td>
          <td>status</td>
        </tr>
        {todos.map((item) => (
          <tr>
            <TodoItem key={item.id} {...item} />
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ReimbursementList;
