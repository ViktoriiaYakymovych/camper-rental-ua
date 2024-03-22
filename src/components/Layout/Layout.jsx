import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import { Header, Link } from "./Layout.styled";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="favorites">Favorites</Link>
          </li>
        </ul>
      </Header>
      <main style={{ flex: "1" }}>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
