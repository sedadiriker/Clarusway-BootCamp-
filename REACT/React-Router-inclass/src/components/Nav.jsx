import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
            <NavLink to="/instructors">Instructors</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
