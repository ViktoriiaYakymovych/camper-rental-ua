import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCampers } from "../../redux/operations";
import { selectCampers } from "../../redux/selectors";
import SvgCustom from "../SvgCustom";
import { theme } from "../../styles/theme";
import {
  CatalogContentWrap,
  CatalogDescriptionWrap,
  CatalogRatingLocationWrap,
  CatalogTitleWrap,
  Figure,
  Li,
  Ul,
} from "./CapmersList.styled";
import { ModalWindow } from "../Modal/Modal";

const CapmersList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);
  return (
    <>
      {campers && (
        <Ul>
          {campers.map(
            ({
              id,
              name,
              gallery,
              price,
              rating,
              reviews,
              location,
              //   description,
              adults,
              transmission,
              engine,
              details: {
                // kitchen,
                beds,
                // airConditioner
              },
            }) => (
              <Li key={id}>
                <Figure>
                  <img src={gallery[0]} alt={name} />
                </Figure>

                <CatalogContentWrap>
                  <div>
                    <CatalogTitleWrap>
                      <h2>{name}</h2>
                      <div>
                        <p>&#8364;{price.toFixed(2)}</p>{" "}
                        <button>
                          <SvgCustom
                            icon="icon-heart"
                            size="24"
                            stroke={theme.colors.primary}
                          />
                        </button>
                      </div>
                    </CatalogTitleWrap>
                    <CatalogRatingLocationWrap>
                      <div>
                        <SvgCustom
                          icon="icon-rating"
                          size="16"
                          color={theme.colors.rating}
                        />
                        <p>
                          {rating}({reviews.length} Reviews)
                        </p>
                      </div>
                      <div>
                        <SvgCustom
                          icon="icon-map"
                          size="16"
                          stroke={theme.colors.primary}
                        />
                        <p>{location}</p>
                      </div>
                    </CatalogRatingLocationWrap>
                  </div>

                  <span>
                    The pictures shown here are example vehicles of the
                    respective.
                  </span>

                  <CatalogDescriptionWrap>
                    <div>
                      <SvgCustom
                        icon="icon-adults"
                        size="20"
                        color={theme.colors.primary}
                      />
                      <p>{adults} adults</p>
                    </div>
                    <div>
                      <SvgCustom
                        icon="icon-automatic"
                        size="20"
                        stroke={theme.colors.primary}
                      />
                      <p>{transmission}</p>
                    </div>
                    <div>
                      <SvgCustom
                        icon="icon-petrol"
                        size="20"
                        color={theme.colors.primary}
                      />
                      <p>{engine}</p>
                    </div>
                    <div>
                      <SvgCustom
                        icon="icon-kitchen"
                        size="20"
                        stroke={theme.colors.primary}
                      />
                      <p>Kitchen</p>
                    </div>
                    <div>
                      <SvgCustom
                        icon="icon-beds"
                        size="20"
                        stroke={theme.colors.primary}
                      />
                      <p>{beds} beds</p>
                    </div>
                    <div>
                      <Icon
                        icon="fluent:weather-blowing-snow-20-regular"
                        style={{
                          color: `${theme.colors.primary}`,
                          fontSize: "20px",
                        }}
                      />
                      <p>AC</p>
                    </div>
                  </CatalogDescriptionWrap>
                  <button onClick={() => setIsModalOpen(true)}>
                    Show more
                  </button>
                </CatalogContentWrap>
                <ModalWindow
                  isOpen={isModalOpen}
                  onRequestClose={() => setIsModalOpen(false)}
                >
                  Modal Content
                </ModalWindow>
              </Li>
            )
          )}
        </Ul>
      )}
    </>
  );
};

export default CapmersList;
