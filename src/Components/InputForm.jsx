import { useState } from "react";

function InputForm({ onSubmit }) {
  const [state, setState] = useState({
    name: "",
    date: "",
    purpose: "",
    amount: ""
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };
  return (
    <>
      <div>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <input
            placeholder="Name"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
          <input
            placeholder="Date of claim/reimbursement"
            name="date"
            value={state.date}
            onChange={handleInputChange}
          />
          <input
            placeholder="Purpose of the claim"
            name="purpose"
            value={state.purpose}
            onChange={handleInputChange}
          />
          <input
            placeholder="Amount to be claimed"
            name="amount"
            value={state.amount}
            onChange={handleInputChange}
          />
          <input type="submit" value="add" />
        </form>
      </div>
    </>
  );
}

export default InputForm;
