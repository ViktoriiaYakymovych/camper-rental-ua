import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllCampers } from "../../redux/operations";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return <div>Home</div>;
};

export default Home;
