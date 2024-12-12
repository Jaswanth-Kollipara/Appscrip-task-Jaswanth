import { CiGrid42 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa"
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoPersonOutline, IoReorderThreeSharp } from "react-icons/io5";
import './index.css'

const grid = <CiGrid42 className="headder-icon headder-container1-icon" />
const dowm = <FaAngleDown className="headder-icon" />
const search = <CiSearch className="headder-icon headder-container2-icon" />
const bag = <BsHandbag className="headder-icon headder-container2-icon" />
const person = <IoPersonOutline className="headder-icon display-large headder-container2-icon" />
const heart = <GoHeart className="headder-icon headder-container2-icon" />
const bars = <IoReorderThreeSharp className="headder-icon display-small" /> 

const Headder= ()=>(
    <div className="headder-container">
        <div className="headder-container1">
            <p className="headder-container1-p1">{grid} Lorem ipsum dolor</p>
            <p className="headder-container1-p1 display-large">{grid} Lorem ipsum dolor</p>
            <p className="headder-container1-p1 display-large">{grid} Lorem ipsum dolor</p>
        </div>
        <div className="headder-container2">
            <div className="headder-container2-inner1">
                {bars}
                <img className="headder-container2-image" src="https://cdn.create.vista.com/api/media/small/145303535/stock-photo-celtic-knot-symbol" alt="logo" />
            </div>
            <h1>LOGO</h1>
            <div className="headder-container2-inner2">
                {search}
                {heart}
                {bag}
                {person}
                <p className="headder-container2-p display-large">ENG {dowm}</p>
            </div>
        </div>
        <div className="headder-container3 display-large">
            <h1 className="headder-container3-h1 headder-container3-h2">SHOP</h1>
            <h1 className="headder-container3-h1 headder-container3-h2">SKILLS</h1>
            <h1 className="headder-container3-h1 headder-container3-h2">STORIES</h1>
            <h1 className="headder-container3-h1 headder-container3-h2">ABOUT</h1>
            <h1 className="headder-container3-h2">CONTACT US</h1>
        </div>
        <hr className="headder-hr" />
        <div className="headder-container4 display-small">
            <p className="headder-container4-p1">Home</p>
            <p className="headder-container4-p2">SHOP</p>
        </div>
        <div className="headder-container5">
            <h1 className="headder-container5-h1">DISCOVER OUR PRODUCTS</h1>
            <p className="headder-container5-p">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
        <hr className="headder-hr" />
    </div>
)

export default Headder