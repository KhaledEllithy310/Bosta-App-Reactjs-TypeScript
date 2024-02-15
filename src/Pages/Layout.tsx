import { Outlet } from "react-router-dom";
import Navbar from "../Components/Ui/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <section className="">
        <Outlet />
      </section>
    </>
  );
}
