import { useEffect } from "react";
import Header from "../../Components/Header/index";
import Intro from "../../Components/Intro/index";
import AboutUs from "../../Components/AboutUs";
import WhyUs from "../../Components/WhyUs";
import Services from "../../Components/Services";
import OurTeam from "../../Components/OurTeam";
import Partners from "../../Components/Partners";
import ContactUs from "../../Components/ContactUs";
import Footer from "../../Components/Footer";

function Home({ pageTitle }) {

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".intro").style.minHeight = `calc(100vh - ${document.querySelector(".page-header").offsetHeight}px)`;

    }, []);

    return (
        // Start Home Page
        <div className="home">
            <Header />
            <Intro />
            <AboutUs />
            <WhyUs />
            <Services />
            <OurTeam />
            <Partners />
            <ContactUs />
            <Footer />
        </div>
        // End Page Not Found
    );
}

export default Home;