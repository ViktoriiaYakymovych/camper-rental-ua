import { Icon } from "@iconify-icon/react";
import SvgCustom from "../SvgCustom";
import { theme } from "../../styles/theme";

const CapmersList = ({ campers }) => {
  return (
    <>
      {campers && (
        <ul>
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
              <li key={id}>
                <figure>
                  <img src={gallery[0]} alt={name} width={290} height={310} />
                </figure>

                <div>
                  <div>
                    <div>
                      <h2>{name}</h2>
                      <div>
                        <p>&#8364;{price.toFixed(2)}</p>{" "}
                        <SvgCustom
                          icon="icon-heart"
                          size="24"
                          stroke={theme.colors.primary}
                        />
                      </div>
                    </div>
                    <div>
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
                    </div>
                  </div>

                  <p>
                    The pictures shown here are example vehicles of the
                    respective.
                  </p>

                  <div>
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
                  </div>
                  <button>Show more</button>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default CapmersList;
