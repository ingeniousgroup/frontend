
import Navbar from "../Headers.js/Navbar/navbar";

import { useSelector } from "react-redux";
import HouseDescription from "../House/HouseDescription/HouseDescription";
import Signin from "../User/signin";
import Signup from "../User/signup";
import PostProperty from "../House/PostProperty/postProperty";

function Home(){
  return <>
  <h1>Home Component</h1>
  <PostProperty/>
  </>
}

export default Home;