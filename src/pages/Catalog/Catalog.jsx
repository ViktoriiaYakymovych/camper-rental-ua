import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../redux/operations";
import { selectCampers } from "../../redux/selectors";

const Catalog = () => {
  const dispatch = useDispatch();
const campers = useSelector(selectCampers)
console.log(campers);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);
  return (
    <div>
      {campers && (
        <ul>
          {campers.map((camper) => (
            <li key={camper.id}>
              <p>{camper.name}</p>
              <p>{camper.price}</p>
              <p>{camper.rating}</p>
              <p>{camper.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Catalog;
