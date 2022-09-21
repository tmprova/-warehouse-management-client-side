import { useEffect, useState } from "react";

const useInventoryHook = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("InventoryData.json")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return [inventory, setInventory];
};

export default useInventoryHook;
