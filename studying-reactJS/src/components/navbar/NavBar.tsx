import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="container">
            <div>
                <Link to={'/condicionalRender'}>Condicional render</Link>
            </div>
            <br />
            <div>
                <Link to={'/'}>Learning useState</Link>
            </div>
        </nav>
    )
}

export default NavBar