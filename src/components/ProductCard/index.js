import { GoHeart } from "react-icons/go";
import './index.css'

const heart1 = <GoHeart className="display-small" />
const heart2 = <GoHeart className="display-large" /> 

const ProductCard=props=>{
    const {productData1}=props
    const {title, image}=productData1

    return(
        <li className="product-container">
            <img className="product-image" src={image} alt={title} />
            <div className="product-inner">
                <h1 className="product-h1">{title}</h1>
                {heart1}
            </div>
            <div className="product-inner">
                <p className="product-p">
                    <span className="product-span">
                        Sign in 
                    </span>
                    <span> </span>
                    or Create an account to see pricing
                </p>
                {heart2}
            </div>
        </li>
    )
}

export default ProductCard