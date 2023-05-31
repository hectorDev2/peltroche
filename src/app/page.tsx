import Image from "next/image";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import CtaBanner from "./components/CtaBanner/CtaBanner";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Trainers from "./components/Trainers/Trainers";
import Gallery from "./components/Gallery/Gallery";
import BmiCalc from "./components/BMI/BmiCalc";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      {/* <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <Blog />
      <CtaBanner />
      <Footer /> */}
    </>
  );
}
