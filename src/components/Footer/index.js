import { FaLinkedin } from "react-icons/fa"
import { FaDiamond, FaAngleDown } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsCCircle } from "react-icons/bs";
import './index.css'

const instagram = <AiFillInstagram />
const dowm = <FaAngleDown className="display-small" />
const linkedin = <FaLinkedin />
const diamond = <FaDiamond className="footer-icon1" />
const circle = <BsCCircle className="footer-icon2" />

const Footer = ()=>(
    <div className="footer-container">
        <div className="footer-container1">
            <p className="footer-container-p1">BE THE FIRST TO KNOW</p>
            <p className="display-large">Sign up for updates from metta muse.</p>
            <p className="footer-container-p2 display-small">Lorem Ipsum is simply dummy text of the printing and typrsetting industry. this is simply dummy text.</p>
            <div className="footer-container1-inner1">
                <input type="text" className="footer-container1-input" placeholder="Enter your e-mail..." />
                <button className="footer-container1-button">SUBSCRIBE</button>
            </div>
        </div>
        <hr className="footer-container-hr display-small" />
        <div className="footer-container2">
            <p className="footer-container-p1 display-large">CONTACT US</p>
            <p className="footer-container-p1 display-small">CALL US</p>
            <p className="footer-container-p2 display-large">+44 221 133 5360</p>
            <p className="footer-container-p2 display-small">+44 221 133 5360 {diamond} customercare@mettamuse.com</p>
            <hr className="footer-container-hr display-small" />
            <p className="display-large">customercare@mettamuse.com</p>
            <p className="footer-container-p1">CURRENCY</p>
            <div className="footer-container2-inner1">
                <img className="footer-container2-image" src="https://media.istockphoto.com/id/1849900899/vector/united-states-of-america-flag-correct-proportion-aspect-ratios-of-national-flags-official.jpg?s=612x612&w=0&k=20&c=ZPOO02NJCVYBZuKUTKAk2TI3Pt5mNrliBD4M-d19k1I=" alt="contact-image" />
                {diamond}
                <p className="footer-container-p1"> USD</p>
            </div>
            <p className="footer-container-p3 display-large">Transactions will be compleated in EUROS and a currency reference is available on hover.</p>
        </div>
        <hr className="footer-container-hr1" />
        <div className="footer-container3">
            <div className="footer-container-inner1">
                <p className="footer-container-p1">metta muse</p>
                {dowm}
            </div>
            <div className="footer-container3-inner2 display-large">
                <p className="footer-container-p2">About Us</p>
                <p className="footer-container-p2">Stories</p>
                <p className="footer-container-p2">Artisans</p>
                <p className="footer-container-p2">Boutiques</p>
                <p className="footer-container-p2">Contact Us</p>
                <p className="footer-container-p2">EU Compliances Docs</p>
            </div>
            <hr className="footer-container-hr display-small" />
        </div>
        <div className="footer-container4">
            <div className="footer-container-inner1">
                <p className="footer-container-p1">QUICK LINKS</p>
                {dowm}
            </div>
            <div className="footer-container4-inner2 display-large">
                <p className="footer-container-p2">Orders & Shipping</p>
                <p className="footer-container-p2">Join/Login as a Seller</p>
                <p className="footer-container-p2">Payment & Refunds</p>
                <p className="footer-container-p2">FAQs</p>
                <p className="footer-container-p2">Privacy Policy</p>
                <p className="footer-container-p2">Terms & Conditions</p>
            </div>
            <hr className="footer-container-hr display-small" />
        </div>
        <div className="footer-container5">
            <div className="footer-container-inner1">
                <p className="footer-container-p1">FOLLOW US</p>
                {dowm}
            </div>
            <div className="footer-container5-inner2 display-large">
                <p className="footer-icon-p">{instagram}</p>
                <p className="footer-icon-p">{linkedin}</p>
            </div>
            <hr className="footer-container-hr display-small" />
            <p className="footer-container-p1">metta muse ACCEPTS</p>
            <div className="footer-container5-inner3">
                <img className="footer-container5-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1024px-Google_Pay_Logo.svg.png" alt="gPayImage" />
                <img className="footer-container5-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png" alt="masterCardImage" />
                <img className="footer-container5-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/97px-PayPal_Logo_Icon_2014.svg.png" alt="payPalImage" />
                <img className="footer-container5-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolfhl8bST90-tSA8Tek4J-r2vhSvp3-aM5w&s" alt="amexImage" />
                <img className="footer-container5-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWxYUQvdwKXZ9meVu4Jx6fr7nNNo99TLl-bA&s" alt="applePayImage" />
            </div>
        </div>
        <p className="footer-container-p4">Copyright {circle} 2023 mettamuse. All rights reserved.</p>
    </div>
)

export default Footer