import IntroImage1 from "../../Assets/Images/intro.png";
import IntroImage2 from "../../Assets/Images/introBackground.jpg";
import "./index.min.css";

const Intro = () => {
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
                            <h4 className="fw-bold mb-4">We believe that the future in the world of Crypto.</h4>
                            <p className="description mb-5">
                                Master the art of virality and boost your crypto project's community. Discuss about cryptocurrencies. Join our AMA sessions and other events.
                            </p>
                            <a href="#" className="join-link text-white p-3">Join Our Community</a>
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