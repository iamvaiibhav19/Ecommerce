import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import Navbar from "../layout/Header/Navbar";
import FeaturedProduct from "./FeaturedProduct";
import "./Home.scss";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

/*dummy data*/
// const product = {
//   name: "Blue Tshirt",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price: "Rs. 100",
//   _id: "vaibhavv",
// };

const title = "SastiCheeze";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={title} />
          <div className="banner">
            <p>Welcome to SastiCheeze.com</p>
            <h1>FIND AMAZING PRODUCTS FOR REASONABLE PRICES</h1>

            <a href="#1">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <Navbar />
          <FeaturedProduct />
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
