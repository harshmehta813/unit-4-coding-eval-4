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
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  fontSize: "20px"
};

function TodoItem({
  name,
  date,
  purpose,
  amount,
  status,
  onDelete,
  id,
  onToggle
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <td>{name}</td>
      <td>{date}</td>
      <td>{purpose}</td>
      <td>{amount}</td>
      <td>{`${status}`}</td>
      <td>
        <EditIcon onClick={handleOpen} sx={{ cursor: "pointer" }} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Button variant="outlined">Reject</Button>
            <Button variant="outlined">In-Progress</Button>
            <Button variant="outlined" onClick={() => onToggle(id)}>
              Settled
            </Button>
          </Box>
        </Modal>
      </td>
    </>
  );
}

function AdminList() {
  const [sortMethod, setSortMethod] = React.useState(null);
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos());
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };
  const handleSort = (order) => {
    setSortMethod(order);
  };
  const handleToggle = (id) => {
    const action = toggleTodo(id);
    dispatch(action);
  };
  console.log(todos);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      <table>
        <th>Name</th>
        <th>
          <div className="sortButton">
            DATE
            {["asc", "desc"].map((order) => (
              <button key={order} onClick={() => handleSort(order)}>
                {order}
              </button>
            ))}
          </div>
        </th>
        <th>Purpose</th>
        <th>Amount</th>
        <th>Status</th>
        {todos
          .sort((a, b) => {
            if (sortMethod === null) {
              return 0;
            }
            if (sortMethod === "asc") {
              return new Date(a.date) - new Date(b.date);
            }
            if (sortMethod === "desc") {
              return new Date(b.date) - new Date(a.date);
            }
          })
          .map((item) => (
            <tr>
              <TodoItem
                key={item.id}
                {...item}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            </tr>
          ))}
      </table>
    </div>
  );
}

export default AdminList;
