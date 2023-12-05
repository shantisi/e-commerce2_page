import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header.js"
import 	Sliderbox from "./Sliderbox";
import Home from "./Homepage";
const Page = () => {
  return (
    <>
      <Header/><br/>
      <Sliderbox/><br/>
       <Home/><br/>
    </>
  );
};
export default Page;

