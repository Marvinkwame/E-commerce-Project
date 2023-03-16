import React from "react";
import Categories from "../components/Categories";
import Detail from "../components/Detail";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Note from "../components/Note";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Note />
      <Navbar />
      <Slider />
      <Detail />
      <Categories />
      <Experience />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
