import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../utilities";
import fav from "../assets/fav.png";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(null);
  const { addToCart } = useCart();
  const { currentUser } = useContext(AuthContext);

  const [selectedImg, setSelectedImg] = useState("");
  const [selectedColor, setSelectedColor] = useState("navy");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const getProduct = () => {
    fetch("https://json-sever-vercel.vercel.app/categories")
      .then((res) => res.json())
      .then((categories) => {
        const product = categories
          .flatMap((category) => category.products)
          .find((product) => product.id == id);
        setCurrentProduct(product);
        setSelectedImg(product.images[0].image);
        setSelectedStorage(product.storage[0].size);
        setProductPrice(product.storage[0].price);
      });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!currentProduct) {
    return <div>Loading...</div>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleStorageChange = (storage, price) => {
    setSelectedStorage(storage);
    setProductPrice(price);
  };

  const handleImageChange = (img) => {
    setSelectedImg(img);
  };

  const handleAddToCart = () => {
    // If user is not logged in => navigate to login page or show alert
    if (!currentUser) {
      alert("You must be logged in to add items to the cart.");
      navigate("/login");
    } else {
      addToCart({
        ...currentProduct,
        storage: selectedStorage,
        price: productPrice,
      });
    }
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
                key={index}
              >
                <img src={img.image} alt={`Thumbnail ${index + 1}`} />
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
            {currentProduct.storage.map((item) => (
              <button
                key={item.size}
                className={`storage-button ${
                  selectedStorage === item.size ? "selected" : ""
                }`}
                onClick={() => handleStorageChange(item.size, item.price)}
              >
                {item.size}
              </button>
            ))}
          </div>

          <p className="price">${productPrice}</p>

          <button className="add-to-cart" onClick={handleAddToCart}>
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
              return <p key={item.size}>{item.size}</p>;
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
