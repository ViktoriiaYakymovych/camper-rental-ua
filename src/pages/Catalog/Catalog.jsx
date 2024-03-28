
import FilterCatalog from "../../components/FilterCatalog/FilterCatalog";
import { CatalogWrap } from "./Catalog.styled";
import CapmersList from "../../components/CapmersList/CapmersList";

const Catalog = () => {
  
  return (
    <CatalogWrap>
      <FilterCatalog />
      <CapmersList/>
    </CatalogWrap>
  );
};

export default Catalog;
