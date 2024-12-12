import { FaAngleUp, FaAngleDown } from "react-icons/fa"
import './index.css'

const up = <FaAngleUp />
const dowm = <FaAngleDown />

const LeftCard = props =>{
    const {isIdeal, changeIdeal}=props
    const onClickChange=()=>{
        changeIdeal()
    }

    return(
        <div className="left-container display-large">
            <div className="checkbox-container">
                <input type="checkbox" className="left-checkbox" id="checkbox1" />
                <label className="left-label" htmlFor="checkbox1">CUSTOMIZBLE</label>
            </div>
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">IDEAL FOR</h1>
                {isIdeal?(<span onClick={onClickChange}>{up}</span>):(<span onClick={onClickChange}>{dowm}</span>)}
            </div>
            <p className="left-container-p">All</p>
            {isIdeal?
            (
                <div className="left-ideal-container">
                    <p className="ideal-p">Unselect all</p>
                    <div className="checkbox-container">
                        <input type="checkbox" className="left-checkbox1" id="checkbox2" />
                        <label className="left-label1" htmlFor="checkbox2">Men</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" className="left-checkbox1" id="checkbox3" />
                        <label className="left-label1" htmlFor="checkbox3">Women</label>
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" className="left-checkbox1" id="checkbox4" />
                        <label className="left-label1" htmlFor="checkbox4">Baby & Kids</label>
                    </div>
                </div>
            ):null}
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">OCCASION</h1>
                {dowm}
            </div>
            <p className="left-container-p">All</p>
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">WORK</h1>
                {dowm}
            </div>
            <p className="left-container-p">All</p>
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">FABRIC</h1>
                {dowm}
            </div>
            <p className="left-container-p">All</p>
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">SEGMENT</h1>
                {dowm}
            </div>
            <p className="left-container-p">All</p>
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">SUITABLE FOR</h1>
                {dowm}
            </div>
            <p className="left-container-p">All</p>
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">RAW MATERIALS</h1>
                {dowm}
            </div>
            <p className="left-container-p">All</p>
            <hr className="left-container-hr"/>
            <div className="left-container-inner1">
                <h1 className="left-container-h1">PATTERN</h1>
                {dowm}
            </div>
            <p className="left-container-p">All</p>
            <hr className="left-container-hr"/>
        </div>
    )
}

export default LeftCard