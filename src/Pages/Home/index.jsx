import { useEffect } from "react";
import Header from "../../Components/Header/index";
import Intro from "../../Components/Intro/index";

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
        </div>
        // End Page Not Found
    );
}

export default Home;