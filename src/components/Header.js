import { useEffect } from "react";
import useApi from "../hooks/useApi";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);

  const { data, loading, loadError } = useApi(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    if (data.length > 0) {
      setSelectedCategory(data[0]);
    }
  }, [data, setSelectedCategory]);

  console.log(selectedCategory);

  if (loading) return <div> Fetching categories</div>;
  else if (loadError) return <div>Retry again ...</div>;
  else
    return (
      <div className="header-items">
        {data.map((category) => (
          <div
            key={category}
            className={
              "header-item " +
              (category === selectedCategory ? "header-item-selected" : "")
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
    );
};
export default Header;
