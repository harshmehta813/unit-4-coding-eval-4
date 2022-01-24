import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink exact activeClassName="selected" to="/dashboard">
        Home
      </NavLink>
      <NavLink exact activeClassName="selected" to="/reimbursement/add">
        Raise Request
      </NavLink>
      <NavLink exact activeClassName="selected" to="/dashboard/admin">
        Admin
      </NavLink>
    </nav>
  );
}

export default Navbar;
