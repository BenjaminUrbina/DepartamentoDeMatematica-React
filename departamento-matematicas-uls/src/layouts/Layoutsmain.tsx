import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

type Props = {};

export default function Layoutsmain({}: Props) {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
}
