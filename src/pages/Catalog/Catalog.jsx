import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../redux/operations";
import { selectCampers } from "../../redux/selectors";
import FilterCatalog from "../../components/FilterCatalog/FilterCatalog";
import { CatalogWrap } from "./Catalog.styled";
import CapmersList from "../../components/CapmersList/CapmersList";

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);
  return (
    <CatalogWrap>
      <FilterCatalog />
      <CapmersList campers={campers} />
    </CatalogWrap>
  );
};

export default Catalog;
