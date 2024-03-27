import { useState } from "react";
import { Icon } from "@iconify-icon/react";
import SvgCustom from "../SvgCustom";
import { theme } from "../../styles/theme";
import {
  FilterContainer,
  FilterInput,
  FilterLabel,
  FilterText,
  FilterTitle,
  FilterWrap,
  Form,
  LocationLable,
  FilterSecondContainer,
  SubmitBtn,
} from "./FilterCatalog.styled";

const FilterCatalog = () => {
  const [location, setLocation] = useState("");

  const [ac, setAc] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTv] = useState(false);
  const [shower, setShower] = useState(false);

  const [van, setVan] = useState(false);
  const [fullyIntergrated, setFullyIntergrated] = useState(false);
  const [alcove, setAlcove] = useState(false);

  const onInputChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <Form>
      <LocationLable>
        Location
        <input type="text" value={location} onChange={onInputChange} placeholder="City" />
        <div>
          <SvgCustom
            icon="icon-map"
            size="20"
            stroke={
              location !== "" ? theme.colors.primary : theme.colors.primary60
            }
          />
        </div>
      </LocationLable>

      <FilterText>Filters</FilterText>
      <FilterWrap>
        <FilterTitle>Vehicle equipment</FilterTitle>
        <FilterContainer>
          <FilterLabel>
            <Icon
              icon="fluent:weather-blowing-snow-20-regular"
              style={{ color: `${theme.colors.primary}`, fontSize: "32px" }}
            />
            <FilterInput
              type="checkbox"
              checked={ac}
              onChange={() => setAc(!ac)}
            />
            AC
          </FilterLabel>
          <FilterLabel>
            <SvgCustom
              icon="icon-automatic"
              size="32"
              stroke={theme.colors.primary}
            />
            <FilterInput
              type="checkbox"
              checked={automatic}
              onChange={() => setAutomatic(!automatic)}
            />
            Automatic
          </FilterLabel>
          <FilterLabel>
            <SvgCustom
              icon="icon-kitchen"
              size="32"
              stroke={theme.colors.primary}
            />
            <FilterInput
              type="checkbox"
              checked={kitchen}
              onChange={() => setKitchen(!kitchen)}
            />
            Kitchen
          </FilterLabel>
          <FilterLabel>
            <SvgCustom icon="icon-tv" size="32" stroke={theme.colors.primary} />
            <FilterInput
              type="checkbox"
              checked={tv}
              onChange={() => setTv(!tv)}
            />
            TV
          </FilterLabel>
          <FilterLabel>
            <SvgCustom
              icon="icon-shower"
              size="32"
              stroke={theme.colors.primary}
            />
            <FilterInput
              type="checkbox"
              checked={shower}
              onChange={() => setShower(!shower)}
            />
            Shower/WC
          </FilterLabel>
        </FilterContainer>
      </FilterWrap>

      <FilterWrap>
        <FilterTitle>Vehicle type</FilterTitle>
        <FilterSecondContainer>
          <FilterLabel>
            <SvgCustom icon="icon-van" size="40" color={theme.colors.primary} />
            <FilterInput
              type="checkbox"
              checked={van}
              onChange={() => setVan(!van)}
            />
            Van
          </FilterLabel>
          <FilterLabel>
            <SvgCustom
              icon="icon-fully-intergrated"
              size="40"
              color={theme.colors.primary}
            />
            <FilterInput
              type="checkbox"
              checked={fullyIntergrated}
              onChange={() => setFullyIntergrated(!fullyIntergrated)}
            />
            Fully Integrated
          </FilterLabel>
          <FilterLabel>
            <SvgCustom
              icon="icon-alcove"
              size="40"
              color={theme.colors.primary}
            />
            <FilterInput
              type="checkbox"
              checked={alcove}
              onChange={() => setAlcove(!alcove)}
            />
            Alcove
          </FilterLabel>
        </FilterSecondContainer>
      </FilterWrap>

      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};

export default FilterCatalog;
