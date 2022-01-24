import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess
} from "../redux/app/action";

export const getTodos = () => (dispatch) => {
  const requestAction = getTodosRequest();
  dispatch(requestAction);
  return fetch("https://booking-flights-api.herokuapp.com/ReimbursementList")
    .then((res) => res.json())
    .then((res) => {
      const successAction = getTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = getTodosFailure();
      dispatch(failureAction);
    });
};

export const addTodos = ({ name, date, purpose, amount }) => (dispatch) => {
  const requestAction = addTodosRequest();
  dispatch(requestAction);
  return fetch("https://booking-flights-api.herokuapp.com/ReimbursementList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      date: date,
      purpose: purpose,
      amount: amount,
      status: false
    })
  })
    .then((res) => res.json())
    .then((res) => {
      const successAction = addTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = addTodosFailure();
      dispatch(failureAction);
    });
};
