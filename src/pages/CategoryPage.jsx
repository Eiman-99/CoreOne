import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { id } = useParams();
  const [currentCategory, setCurrentCategory] = useState(null);

  function getCategory() {
    fetch(`https://json-sever-vercel.vercel.app/categories`)
      .then((res) => res.json())
      .then((categories) => {
        const category = categories.find((category) => category.id == id);
        setCurrentCategory(category);
      });
  }

  // fetching the categories and filter them based on the id received from the URL
  useEffect(() => {
    getCategory();
  }, [id]);

  if (!currentCategory) {
    return <div>Loading...</div>;
  }
  return (
    <div className="categoryPage">
      <div className="category-container">
        {currentCategory.products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
