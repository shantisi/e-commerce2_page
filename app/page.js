import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header.js"
import Sliderbox from "./Sliderbox";
import Home from "./Product_list";
import Subfooter from "./subfooter";
import Footer from "./Footer.js";
const Page = () => {
  return (
    <>
      <Header/><br/>
      <Sliderbox/><br/>
      <Home/><br/>
      <Subfooter/><br/>
      <Footer/><br/>
       
    </>
  );
};
export default Page;

