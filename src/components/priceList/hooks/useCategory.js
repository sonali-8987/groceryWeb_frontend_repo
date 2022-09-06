import { useEffect, useState } from "react";
import categoryService from "../services/categoryService"


const useCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoryService.fetchAllCategory().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return {

    categories: categories,
  };
};

export default useCategory;
