import { FooterContainer } from "./Footer.Styles"
import logo from '../../../public/QCFX White.png'
import { Logo } from "../common/Styles"
export default function Footer() {
    return (
        <FooterContainer>
            <Logo src={logo.src} />
        </FooterContainer>
    )
}