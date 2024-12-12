import { Component } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import Loader from 'react-loader-spinner'
import Headder from '../Headder'
import Footer from '../Footer'
import ProductCard from '../ProductCard'
import SelectCard from '../SelectCard'
import LeftCard from '../LeftCard'
import './index.css'

const left = <FaAngleLeft />
const right = <FaAngleRight />

const selectStatus=[
  {
    selectId: "RECOMMEND",
    value: "RECOMMEND",
  },
  {
    selectId: "NEWEST FIRST",
    value: "NEWEST FIRST",
  },
  {
    selectId: "POPULAR",
    value: "POPULAR",
  },
  {
    selectId: "PRICE: HIGH TO LOW",
    value: "PRICE: HIGH TO LOW",
  },
  {
    selectId: "PRICE: LOW TO HIGH",
    value: "PRICE: LOW TO HIGH",
  },
]

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Home extends Component{
    state={
        productData: [],
        apiStatus: apiStatusConstants.initial,
        isShow: false,
        isIdeal: false,
        selectedId: selectStatus[0].selectId,
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        this.setState({
          apiStatus: apiStatusConstants.inProgress,
        })
        const apiUrl = 'https://fakestoreapi.com/products?limit=20'
        const response = await fetch(apiUrl)
        if (response.ok === true) {
          const fetchedData = await response.json()
          const updatedData = fetchedData.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
          }))
          this.setState({
            productData: updatedData,
            apiStatus: apiStatusConstants.success,
          })
        } else if (response.status === 401) {
          this.setState({
            apiStatus: apiStatusConstants.failure,
          })
        }
    }

    renderProductDetailsView = () => {
        const {productData, isShow} = this.state
        const width=!isShow?"full-width":"less-width"
        return (
          <div className={`products-container ${width}`}>
            <ul className="home-ul">
              {productData.map(product => (
                <ProductCard productData1={product} key={product.id} />
              ))}
            </ul>
          </div>
        )
    }

    renderLoadingView = () => {
      const {isShow} = this.state
      const width=!isShow?"full-width":"less-width"
      return (
        <div className={`products-loader-container ${width}`}>
          <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )
    }
    
    renderFailureView = () => {
      const {isShow} = this.state
      const width=!isShow?"full-width":"less-width"
      return (
        <div className={`products-error-view-container ${width}`}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
            alt="all-products-error"
            className="products-failure-img"
          />
          <h1 className="product-failure-heading-text">
            Oops! Something Went Wrong
          </h1>
          <p className="products-failure-description">
            We are having some trouble processing your request. Please try again after some time.
          </p>
        </div>
      )
    }

    renderProductDetails = () => {
        const {apiStatus} = this.state
    
        switch (apiStatus) {
          case apiStatusConstants.success:
            return this.renderProductDetailsView()
          case apiStatusConstants.failure:
            return this.renderFailureView()
          case apiStatusConstants.inProgress:
            return this.renderLoadingView()
          default:
            return null
        }
    }

    changeId=selectId=>{
      this.setState({selectedId : selectId})
    }

    onClickShow=()=>{
      this.setState(prevState=>({
        isShow: !prevState.isShow
      }))
    }

    changeIdeal=()=>{
      this.setState(prevState=>({
        isIdeal: !prevState.isIdeal
      }))
    }

    render(){
      const {selectedId, isShow, isIdeal} = this.state

        return (
            <>
                <Headder />
                    <div className="home-container">
                        <div className="home-headder-container">
                          <div className="home-headder-inner1 display-large">
                            <h1 className="home-headder-h1">3425 ITEMS</h1>
                            {isShow?
                              (<h1 className="home-headder-h2" onClick={this.onClickShow}>{left} <span className="home-headder-sp">HIDE FILTER</span></h1>):
                              (<h1 className="home-headder-h2" onClick={this.onClickShow}>{right} <span className="home-headder-sp">SHOW FILTER</span></h1>)
                            }
                          </div>
                          <h1 className="home-headder-h3 display-small">FILTER</h1>
                          <SelectCard selectStatus={selectStatus} selectedId={selectedId} changeId={this.changeId}/>
                        </div>
                        <hr className="home-hr" />
                        <div className="home-main-container">
                          {isShow?<LeftCard isIdeal={isIdeal} changeIdeal={this.changeIdeal} />:null}
                          {this.renderProductDetails()}
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}

export default Home