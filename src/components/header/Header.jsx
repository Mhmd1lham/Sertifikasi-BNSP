import { Link } from "react-router-dom";
import StyledHeader from "./Header.styled";

function Header() {
    return (
        <StyledHeader>
            <nav>
                <div>
                    <h1>TechNova</h1>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">About Us</Link>
                        </li>
                        <li>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">Conctact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledHeader>

    );
}

export default Header;