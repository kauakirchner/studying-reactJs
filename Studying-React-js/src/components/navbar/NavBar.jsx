import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        return () => {
            navigate(path)
        }
    }

    return (
        <nav className="container">
            <div>
                <button onClick={handleNavigate('/state')}>Learning useState</button>
            </div>
            <br />
            <div>
                <button onClick={handleNavigate('/callback')}>Learning useCallBack</button>
            </div>
            <br />
            <div>
                <button onClick={handleNavigate('/effect')}>Learning useEffect</button>
            </div>
        </nav>
    )
}

export default NavBar