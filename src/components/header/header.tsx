import logo from "../../assets/logo.svg"
import effect from "../../assets/effect.svg"
import { HeaderContainer } from "./header.styles"

export function Header() {
    return (
        <HeaderContainer>
            <img
                src={effect}
                className="effect"
            />
            <a href="">
                <img
                    src={logo}
                    className="logo"
                />
            </a>
            <img
                src={effect}
                className="effect"
            />
        </HeaderContainer>
    )
}
