import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import Logo from "../../assets/img/logoDoggift.png";
import AmexLogo from "../../assets/img/path-to-amex-logo.png";
import VisaLogo from "../../assets/img/path-to-visa-logo.png";
import MasterCardLogo from "../../assets/img/path-to-mastercard-logo.png";
import PayPalLogo from "../../assets/img/path-to-paypal-logo.png";

const Footer = () => {
    const navigate = useNavigate();

    const handleShowTerms = () => {
        navigate('/terms');
    };

    const handleShowCookiesPolicy = () => {
        navigate('/cookies');
    };

    const handleShowPrivacyPolicy = () => {
        navigate('/privacy');
    };

    const handleAcceptTerms = () => {
        navigate('/home');
    };

    const handleAcceptCookiesPolicy = () => {
        navigate('/home');
    };

    const handleAcceptPrivacyPolicy = () => {
        navigate('/home');
    };

    return (
        <footer className="footer">
            <div className="footer-section logo">
                <a href='#' className='logo'>
                    <img src={Logo} alt="Logo" className='doggiftLogo'></img>
                </a>
                <p>Comida saludable para mascotas, alternativa a las croquetas.</p>
                <div className="footer-social">
                    <a href="https://wa.me/+5930960444123"><i className="fa fa-phone"></i></a>
                    <a href="https://www.instagram.com/the_doggift/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>

            <div className="footer-section contact">
                <h4>Contacto</h4>
                <p>+593 96 044 4123</p>
                <p>doggift@org.com</p>
            </div>

            <div className="footer-section address">
                <h4>Dirección</h4>
                <p>Av. de los Shyris y Naciones Unidas</p>
            </div>

            <div className="footer-section info">
                <h4>Más información</h4>
                <p><a href="#" onClick={handleShowTerms}>Términos y condiciones</a></p>
                <p><a href="#" onClick={handleShowCookiesPolicy}>Políticas de cookies</a></p>
                <p><a href="#" onClick={handleShowPrivacyPolicy}>Protección de datos</a></p>
            </div>

            <div className="footer-section newsletter">
                <h4>Boletín</h4>
                <p>Ingrese su correo para suscribirse al boletín y recibir información.</p>
                <form>
                    <input type="email" placeholder="Correo" /><br></br>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="footer-bottom">
                <div className="footer-payment">
                    <a href='path-to-amex-logo' className='payment-logo'>
                        <img src={AmexLogo} alt="American Express"/>
                    </a>
                    <a href='path-to-visa-logo' className='payment-logo'>
                        <img src={VisaLogo} alt="Visa"/>
                    </a>
                    <a href='path-to-mastercard-logo' className='payment-logo'>
                        <img src={MasterCardLogo} alt="MasterCard"/>
                    </a>
                    <a href='path-to-paypal-logo' className='payment-logo'>
                        <img src={PayPalLogo} alt="PayPal"/>
                    </a>
                </div>
                <p>© 2024. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
