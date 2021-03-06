import { appConstants } from "./actionTypes";

export const getTodosRequest = () => {
  return {
    type: appConstants.GET_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const getTodosSuccess = (todos) => {
  return {
    type: appConstants.GET_TODO_SUCCESS,
    payload: {
      todos: todos
    }
  };
};

export const getTodosFailure = () => {
  return {
    type: appConstants.GET_TODO_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const getTodos = () => (dispatch) => {
  // pre fetch
  const requestAction = getTodosRequest();
  dispatch(requestAction);
  return fetch("https://booking-flights-api.herokuapp.com/ReimbursementList")
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = getTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = getTodosFailure();
      dispatch(failureAction);
    });
};

export const addTodosRequest = () => {
  return {
    type: appConstants.ADD_TODO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const addTodosSuccess = (todos) => {
  return {
    type: appConstants.ADD_TODO_SUCCESS,
    payload: {
      todos: todos
    }
  };
};

export const addTodosFailure = () => {
  return {
    type: appConstants.ADD_TODO_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const addTodo = ({ title, status, id }) => {
  return {
    type: appConstants.ADD_TODO,
    payload: {
      title,
      status,
      id
    }
  };
};

export const addTodos = (text) => (dispatch) => {
  const requestAction = addTodosRequest();
  dispatch(requestAction);
  return fetch("https://booking-flights-api.herokuapp.com/ReimbursementList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: text,
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

export const removeTodo = (id) => ({
  type: appConstants.REMOVE_TODO_ITEM,
  payload: {
    id: id
  }
});

export const toggleTodo = (id) => ({
  type: appConstants.TOGGLE_TODO_STATUS,
  payload: {
    id: id
  }
});
