import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.Products);
  return (
    <div className="product section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center">
        Browse all products
      </h2>
      <div className="products-wrapper  grid gird-clos-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center justify-items-center gap-10">
        {status && <p>{status}</p>}
        {data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
