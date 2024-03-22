import { Icon } from "@iconify-icon/react";
import { HomeList, HomeSection } from "./Home.styled";

const Home = () => {
  return (
    <HomeSection>
      <h1>Camper rental UA</h1>
      <HomeList>
        <li>
          <h2>Diverse Selection of Campervans</h2>
          <Icon
            icon="fluent:weather-blowing-snow-20-regular"
            style={{ color: "blue", fontSize: "32px" }}
          />
          <Icon
            icon="tabler:automatic-gearbox"
            style={{ color: "blue", fontSize: "24px" }}
          />
          <p>
            We offer a wide range of campervans for rental, from small car-top
            tents to large and comfortable van-based campers.
          </p>
        </li>
        <li>
          <h2>Comprehensive Services</h2>
          <p>
            Our team will provide you with a complete package of services, from
            delivering the camper to your specified location to providing
            support during your journey.
          </p>
        </li>
        <li>
          <h2>Flexible Booking System</h2>
          <p>
            We offer flexible booking terms, quick response to inquiries, and
            the ability to change dates or camper types according to your needs.
          </p>
        </li>
      </HomeList>
    </HomeSection>
  );
};

export default Home;
