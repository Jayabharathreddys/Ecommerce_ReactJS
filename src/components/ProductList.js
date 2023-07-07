import useApi from "../hooks/useApi";
import Product from "./Product";
import { useParams } from "react-router-dom";
/**
 * 
 * fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
 */
const ProductList = ({ selectedCategory }) => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProducts(json);
  //       setLoading(false);
  //       console.log(json);
  //     });
  // }, [selectedCategory]);
  const a = useParams();
  console.log("jb", a);

  const { data, loading, loadError } = useApi(
    `https://fakestoreapi.com/products/category/${selectedCategory}`
  );
  // console.log("msg", loadError);
  if (loading) return <div className="loading"> Fetching products...</div>;
  else if (loadError) return <div>Retry again...</div>;
  else
    return (
      <div className="products">
        {data.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    );
};

export default ProductList;
