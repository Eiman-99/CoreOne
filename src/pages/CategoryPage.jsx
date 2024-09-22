// import React, { useContext, useEffect, useState } from "react";
// import { CategoryContext } from "../App";
// import { useParams } from "react-router-dom";
// import ProductCard from "../components/ProductCard";

// export default function CategoryPage() {
//   const { id } = useParams();
//   const [currentCategory, setCurrentCategory] = useState(null);

//   // fetching the categories and filter them based on the id received from the URL
//   useEffect(() => {
//     fetch(`http://localhost:8000/categories`)
//       .then((res) => res.json())
//       .then((categories) => {
//         const category = categories.find((category) => category.id == id);
//         setCurrentCategory(category);
//       })
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, [id]);

//   if (!currentCategory) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="categoryPage">
//       <div className="category-container">
//         {currentCategory.products.map((product) => {
//           return <ProductCard key={product.id} product={product} />;
//         })}
//       </div>
//     </div>
//   );
// }
