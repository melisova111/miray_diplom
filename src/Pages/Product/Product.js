import { useContext } from "react";
import { AppContext } from "../../App";
import { useMatch } from "react-router";
import NotFound from "../NotFound/NotFound";

export default function Product() {
  const { products } = useContext(AppContext);
  const { params } = useMatch("/products/:slug");

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="Product">
      <div className="hero">
        <h1>{product.name}</h1>
        <img src={product.picture} alt={product.name} />
        <span>{product.price}$</span>
        <p>{product.description}</p>
      </div>
      <div className="info">
        <p className="info">{product.info}</p>
      </div>
    </div>
  )
}