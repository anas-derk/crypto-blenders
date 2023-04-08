import header_data from "./header_data.json";
import logo from "../../Assets/Images/logo.png";
import "./index.min.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        // Start Header
        <header className="page-header">
            <nav className="navbar navbar-expand-xl">
                <div className="container">
                    <div className="navbar-brand">
                        <img src={logo} alt="Company Logo" width="80" />
                        <span className="company-name text-white fw-bold">Crypto Blenders</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {header_data.routes.map((route, index) => (
                                <li className="nav-item" key={route.id}>
                                    <HashLink
                                        className={`nav-link text-white ${index === header_data.routes.length - 1 ? 'joined' : ''}`}
                                        to={route.id}
                                        smooth
                                    >{route.name}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        // End Header
    );
}

export default Header;