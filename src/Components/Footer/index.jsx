import "./index.min.css";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RxTwitterLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <footer className="page-footer pt-5 pb-5 text-center">
            {/* Start Container */}
            <div className="container">
                {/* Start Contact Links List */}
                <ul className="contact-links-list d-flex justify-content-center mb-4">
                    <li className="link-item">
                        <a href="https://t.me/CryptoBlenders" className="contact-link">
                            <FaTelegramPlane />
                        </a>
                    </li>
                    <li className="link-item">
                        <a href="https://instagram.com/crypto_blenders" className="contact-link">
                            <BsInstagram />
                        </a>
                    </li>
                    <li className="link-item">
                        <a href="https://twitter.com/CryptoBlenders" className="contact-link">
                            <RxTwitterLogo />
                        </a>
                    </li>
                </ul>
                {/* End Contact Links List */}
                {/* Start Copyright Box */}
                <h6 className="copyright-msg m-0 text-white">Copyright &copy; 2022 CRYPTBLENDERS</h6>
                {/* End Copyright Box */}
            </div>
            {/* End Container */}
        </footer>
    );
}

export default Footer;