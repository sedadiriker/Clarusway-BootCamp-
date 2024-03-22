import { categories } from "../../helper/data"
import './Header.scss'


const Header = ({clickChange}) => {
  return (
    <header>
      <h1>Products List</h1>
      <ul>‚
        {
          categories.map((category,index) => 
            <li key={index} onClick={() => clickChange(category) }>{category}</li>
          )
        }
      </ul>
    </header>
  )
}


export default Header

