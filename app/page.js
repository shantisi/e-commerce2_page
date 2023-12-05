import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header.js"
import 	Sliderbox from "./Sliderbox";
import Home from "./Homepage";
import Subfooter from "./subfooter";
const Page = () => {
  return (
    <>
      <Header/><br/>
      <Sliderbox/><br/>
      <Home/><br/>
      <Subfooter/><br/>
       
    </>
  );
};
export default Page;

