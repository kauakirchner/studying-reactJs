import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        return (event: MouseEvent<HTMLDivElement>) => {
            navigate(path)
        }
    }

    return (
        <nav className="container">
            <div>
                <div onClick={handleNavigate('/render')}>Condicional render</div>
            </div>
            <br />
            <div>
                <div onClick={handleNavigate('/state')}>Learning useState</div>
            </div>
            <br />
            <div>
                <div onClick={handleNavigate('/callback')}>Learning callBack</div>
            </div>
        </nav>
    )
}

export default NavBar