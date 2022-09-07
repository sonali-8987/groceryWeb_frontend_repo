import { useEffect, useState } from "react";
import itemService from "../services/itemService"


const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    itemService.fetchAllItem().then((items) => {
        setItems(items);
    });
  }, []);

  return {

    allItem: items,
  };
};

export default useItems;
