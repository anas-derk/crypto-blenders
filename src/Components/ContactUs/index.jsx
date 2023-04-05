import "./index.min.css";
import contactUsImage1 from "../../Assets/Images/contactUs1.png";

const ContactUs = () => {
    return (
        // Start Contact Us Section
        <section className="contact-us pt-5 pb-5 text-center text-white">
            {/* Start Container */}
            <div className="container">
                <h2 className="section-name">Write Us Something</h2>
                {/* Start Grid System */}
                <div className="row align-items-center">
                    {/* Start Column */}
                    <div className="col-lg-5">
                        {/* Start Contact Us Images Box */}
                        <div className="contact-us-images-box">
                            <img src={contactUsImage1} alt="Contact Us Image 1 !" className="contact-us-image1" />
                        </div>
                        {/* End Contact Us Images Box */}
                    </div>
                    {/* End Column */}
                    {/* Start Column */}
                    <div className="col-lg-7">
                        {/* Start Contact Us Box */}
                        <div className="contact-us-box p-4">
                            <h3 className="mb-4 text-left">Get In Touch</h3>
                            {/* Start Contact Us Form */}
                            <form className="contact-us-form">
                                {/* Start Grid System */}
                                <div className="row mb-4">
                                    {/* Start Column */}
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Your Name" className="form-control p-3" />
                                    </div>
                                    {/* End Column */}
                                    {/* Start Column */}
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Your Email" className="form-control p-3" />
                                    </div>
                                    {/* End Column */}
                                </div>
                                {/* End Grid System */}
                                <input type="text" placeholder="Subject" className="form-control mb-4 p-3" />
                                <textarea placeholder="Your Message" className="form-control mb-4 p-3" />
                                <button type="submit" className="btn btn-success d-block w-100 p-3">Send</button>
                            </form>
                            {/* End Contact Us Form */}
                        </div>
                        {/* End Contact Us Box */}
                    </div>
                    {/* End Column */}
                </div>
                {/* End Grid System */}
            </div>
            {/* End Container */}
        </section>
        // End Contact Us Section
    );
}

export default ContactUs;