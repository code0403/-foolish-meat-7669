import Navbar from "../components/Navbar";
import SliderOne from "../Slider/Slider_one";
import SliderTwo from "../Slider/Slider_two";
import SliderThree from "../Slider/Slider_three";
import HomeandFurnishing from "../HomePageComponent/HomeandFurnishing";
import Faq from "../HomePageComponent/Faq";
import Footer from "../HomePageComponent/Footer";

function Home(){

    return (
        <>
        <Navbar />
        <SliderOne />
        <SliderTwo />
        <SliderThree />
        <HomeandFurnishing/>
        <Faq />
        <Footer />
        </>
    )
}

export default Home;