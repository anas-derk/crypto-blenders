import { useEffect, useState } from "react";
import Header from "../../Components/Header/index";
import Intro from "../../Components/Intro/index";
import AboutUs from "../../Components/AboutUs";
import WhyUs from "../../Components/WhyUs";
import Services from "../../Components/Services";
import OurTeam from "../../Components/OurTeam";
import Partners from "../../Components/Partners";
import ContactUs from "../../Components/ContactUs";
import Footer from "../../Components/Footer";
import { RxDoubleArrowDown, RxDoubleArrowUp } from "react-icons/rx";
import "./index.min.css";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";

function Home({ pageTitle }) {

    const [isArrowDownAppeared, setIsArrowDownAppeared] = useState(true);

    const [isArrowUpAppeared, setIsArrowUpAppeared] = useState(false);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 1000) {
            
            setIsArrowDownAppeared(false);

            setIsArrowUpAppeared(true);

        }

        else {

            setIsArrowDownAppeared(true);

            setIsArrowUpAppeared(false);

        }

    });

    useEffect(() => {

        document.title = pageTitle;

        document.querySelector(".intro").style.minHeight = `calc(100vh - ${document.querySelector(".page-header").offsetHeight}px)`;

        AOS.init();

    }, []);

    return (
        // Start Home Page
        <div className="home">
            {isArrowDownAppeared && <HashLink to="#footer">
                <RxDoubleArrowDown className="arrow-down navigate-arrow" />
            </HashLink>}
            {isArrowUpAppeared && <HashLink to="#intro">
                <RxDoubleArrowUp className="arrow-up navigate-arrow" />
            </HashLink>}
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