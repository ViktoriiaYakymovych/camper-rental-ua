import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCampers } from "../../redux/operations";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);
  return <div>Catalog</div>;
};

export default Catalog;
