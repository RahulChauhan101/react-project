import { Link } from "react-router-dom"
import './Header.css';
const Header = () => {
  return (
    <nav className="Header">
        <div className="Header_l">
            <h1>Logo</h1>
        </div>
        <div className="Header_m">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contect">Contect</Link></li>
            
            </ul>
        </div>
        <div className="Header_r">
            <h1>Login</h1>
        </div>

    </nav>
  )
}

export default Header