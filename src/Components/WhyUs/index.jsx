import whyUsImage1 from "../../Assets/Images/whyUs1.png";
import whyUsImage2 from "../../Assets/Images/whyUs2.png";
import whyUsImage3 from "../../Assets/Images/whyUs3.png";
import whyUsImage4 from "../../Assets/Images/whyUs4.png";
import whyUsImage5 from "../../Assets/Images/whyUs5.png";
import "./index.min.css";

const WhyUs = () => {
    return (
        // Start Why Us Section
        <section className="why-us text-center text-white pt-5 pb-5" id="why-us">
            {/* Start Container */}
            <div className="container">
                <h2 className="h1 section-name">Why Only Crypto Blenders ?</h2>
                {/* Start Grid System */}
                <div className="row align-items-center">
                    {/* Start Column */}
                    <div className="col-lg-6" data-aos="fade-right" data-aos-offset="420">
                        <div className="images-box">
                            <img src={whyUsImage5} alt="Why Us Image 5" className="why-us-image5" />
                            <img src={whyUsImage2} alt="Why Us Image 4" className="why-us-image2" />
                            <img src={whyUsImage3} alt="Why Us Image 3" className="why-us-image3" />
                            <img src={whyUsImage4} alt="Why Us Image 4" className="why-us-image4" />
                        </div>
                    </div>
                    {/* End Column */}
                    {/* Start Column */}
                    <div className="col-lg-6" data-aos="fade-left" data-aos-offset="420">
                        <h5 className="choose-reason mb-4">The reason why you have to choose Crypto Blenders as a service partner and also a quality service .</h5>
                        <img src={whyUsImage1} alt="Why Us Image 1" className="why-us-image1" />
                    </div>
                    {/* End Column */}
                </div>
                {/* End Grid System */}
            </div>
            {/* End Container */}
        </section>
        // End Why Us Section
    );
}

export default WhyUs;