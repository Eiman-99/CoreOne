import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import fav from "../assets/fav.png";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [currentProduct, setCurrentProduct] = useState(null);

  // Declare state hooks at the top level, outside of any conditions
  const [selectedImg, setSelectedImg] = useState("img-1");
  const [selectedColor, setSelectedColor] = useState("navy");
  const [selectedStorage, setSelectedStorage] = useState("256 GB");
  const [productPrice, setProductPrice] = useState("");

  // Fetch product data based on ID from URL
  const getProduct = () => {
    fetch(`https://json-sever-vercel.vercel.app/categories`)
      .then((res) => res.json())
      .then((categories) => {
        const product = categories
          .flatMap((category) => category.products)
          .find((product) => product.id == id);
        setCurrentProduct(product);
        setSelectedImg(product.images[0].image);
      });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  // If data is still loading, return a loading message
  if (!currentProduct) {
    return <div>Loading...</div>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
    if (storage === "256 GB") setProductPrice(69999);
    else if (storage === "512 GB") setProductPrice(79999);
    else if (storage === "1 TB") setProductPrice(89999);
  };

  const handleImageChange = (img) => {
    setSelectedImg(img);
  };

  return (
    <div className="product-page">
      <h1 className="header-container">{currentProduct.name}</h1>
      <div className="product-container">
        <div className="product-image">
          <div className="main-container">
            <img
              src={selectedImg}
              alt={currentProduct.name}
              className="main-image"
            />
          </div>
          <div className="image-thumbnails">
            {/* Thumbnail Images */}
            {currentProduct.images.map((img, index) => (
              <div
                className={`thumbnail-container thumbnail ${
                  selectedImg === img.image ? "selected-thumbnail" : ""
                }`}
                onClick={() => handleImageChange(img.image)}
              >
                <img
                  key={index}
                  src={img.image}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h1>{currentProduct.name}</h1>

          {/* Color Options */}
          <div className="color-options">
            {["navy", "black", "gray", "white"].map((color) => (
              <span
                key={color}
                className={`color-circle ${color} ${
                  selectedColor === color ? "selected" : ""
                }`}
                onClick={() => handleColorChange(color)}
              ></span>
            ))}
          </div>

          {/* Storage Options */}
          <div className="storage-options">
            {["256 GB", "512 GB", "1 TB"].map((storage) => (
              <button
                key={storage}
                className={`storage-button ${
                  selectedStorage === storage ? "selected" : ""
                }`}
                onClick={() => handleStorageChange(storage)}
              >
                {storage}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            className="add-to-cart"
            onClick={() => onAddToCart(selectedStorage, productPrice)}
          >
            Add to Cart
          </button>
        </div>
        <div className="fav-btn">
          <Link>
            <img src={fav} alt="" />
          </Link>
        </div>
      </div>
      <div className="product-specs">
        <h1 className="header-container">Specifications</h1>
        <div className="feature">
          <h3>Capacity</h3>
          <div className="info">
            {currentProduct.storage.map((item) => {
              return <p>{item.size}</p>;
            })}
          </div>
        </div>
        <div className="feature">
          <h3>Display</h3>
          <div className="info">
            <p>{currentProduct.display}</p>
          </div>
        </div>
        <div className="feature">
          <h3>Processor</h3>
          <div className="info">
            <p>{currentProduct.processor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
