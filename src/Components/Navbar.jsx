import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/reimbursement/add">
        Raise Request
      </NavLink>
      <NavLink exact to="/dashboard/admin">
        Admin
      </NavLink>
    </nav>
  );
}

export default Navbar;
