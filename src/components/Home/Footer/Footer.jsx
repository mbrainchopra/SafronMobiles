import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa6";

import '../Footer/Footer.css'
import { SiPaytm, SiPhonepe } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer_top">

        <div className="footer_about">
          <h2>
            <span>SAFRAN</span> MOBILE
          </h2>

          <p>
            Your one-stop destination for smartphones,
            accessories and gadgets at the best prices.
          </p>

          <div className="social_icons">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>

        <div>
          <h3>Shop</h3>

          <ul>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Accessories</li>
            <li>Offers</li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>

          <ul>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>

          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="newsletter">

          <h3>Newsletter</h3>

          <p>Get latest offers directly to your inbox.</p>

          <div className="newsletter_box">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>Subscribe</button>

          </div>

        </div>

      </div>

      <div className="footer_bottom">

        <p>
          © 2026 Safran Mobile. All Rights Reserved.
        </p>

        <div className="payments">
          <FaCcVisa />
          <FaCcMastercard />
          <SiPhonepe />
          <SiPaytm />
        </div>

      </div>

    </footer>
  );
}