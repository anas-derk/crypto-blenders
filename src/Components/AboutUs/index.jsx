import AboutUsImage from "../../Assets/Images/aboutUs.png";
import "./index.min.css";

const AboutUs = () => {
    return (
        // Start About Us Section
        <section className="about-us text-white pt-5 pb-5" id="about-us">
            {/* Start Container */}
            <div className="container">
                {/* Start Grid System */}
                <div className="row align-items-center">
                    {/* Start Column */}
                    <div className="col-md-6 text-center" data-aos="fade-right" data-aos-offset="400">
                        <img src={AboutUsImage} alt="About Us Image" className="about-us-image" />
                    </div>
                    {/* End Column */}
                    {/* Start Column */}
                    <div className="col-md-6" data-aos="fade-left" data-aos-offset="400">
                        <div className="info-box">
                            <h2 className="h1 section-name">About Us</h2>
                            <h6 className="fw-bold caption mt-5 mb-4">We are a group of experts in cryptocurrency in the Middle East.</h6>
                            <p className="description">We believe Blockchain and CryptoCurrency are the real future so here we are. We are a team of 8 people, we all work hard and mastery, and the name of the Crypto Blenders team remains more famous and trusted. We have reached this stage because of the cooperation of the team by working as one because cooperation is the basis of success in teamwork and we trust that We attend large and small projects and focus on small projects before the big ones that have a place in the cryptocurrency world and we always support them through the AMA meeting with the business team. We have achieved many partnerships with huge and powerful projects and strive to be the best always, now and in the future.</p>
                        </div>
                    </div>
                    {/* End Column */}
                </div>
                {/* End Grid System */}
            </div>
            {/* End Container */}
        </section>
        // End About Us Section
    );
}

export default AboutUs;