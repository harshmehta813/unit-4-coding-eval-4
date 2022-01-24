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
            name=""
            value="name"
            onChange={handleInputChange}
          />
          <input
            placeholder="Date of claim/reimbursement"
            name="date"
            value=""
            onChange={handleInputChange}
          />
          <input
            placeholder="Purpose of the claim"
            name=""
            value="purpose"
            onChange={handleInputChange}
          />
          <input
            placeholder="Amount to be claimed"
            name=""
            value="amount"
            onChange={handleInputChange}
          />
          <input type="submit" value="add" />
        </form>
      </div>
    </>
  );
}

export default InputForm;
