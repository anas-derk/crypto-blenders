import { useSelector } from "react-redux";
import IntroImage1 from "../../Assets/Images/intro.png";
import IntroImage2 from "../../Assets/Images/introBackground.jpg";
import "./index.min.css";
import { useState } from "react";
import { useEffect } from "react";

const Intro = () => {

    const smothlyTextWriting = useSelector((state) => state.smothlyTextWriting);

    const [summary, setSummaryText] = useState("");

    const [description, setDescriptionText] = useState("");

    useEffect(() => {

        smothlyTextWriting("We believe that the future in the world of Crypto.", setSummaryText);

        smothlyTextWriting("Master the art of virality and boost your crypto project's community. Discuss about cryptocurrencies. Join our AMA sessions and other events.", setDescriptionText);

    }, []);

    return (
        // Start Intro Section
        <section className="intro text-white" style={{ backgroundImage: `url(${IntroImage2})` }} id="intro">
            {/* Start Container */}
            <div className="container">
                {/* Start Grid System */}
                <div className="row align-items-center">
                    {/* Start Column */}
                    <div className="col-md-7">
                        <div className="summary">
                            <h1 className="company-name mb-5 fw-bold">Crypto Blenders</h1>
                            <h4 className="fw-bold mb-4">{ summary }</h4>
                            <p className="description mb-5">
                                {description}
                            </p>
                            <a href="https://t.me/CryptoBlenders" className="join-link text-white p-3">Join Our Community</a>
                        </div>
                    </div>
                    {/* End Column */}
                    {/* Start Column */}
                    <div className="col-md-5 text-center">
                        <img src={IntroImage1} alt="Intro Image 1" className="intro-image" />
                    </div>
                    {/* End Column */}
                </div>
                {/* End Grid System */}
            </div>
            {/* End Container */}
        </section>
        // End Intro Section
    );
}

export default Intro;