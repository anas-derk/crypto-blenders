import services_data_list from "./services_data";
import "./index.min.css";

const Services = () => {
    return (
        // Start Services Section
        <section className="services text-center text-white">
            {/* Start Container */}
            <div className="container">
                <h2 className="section-name h1">Services</h2>
                {/* Start Grid System */}
                <div className="row">
                    {services_data_list.map((serviceInfo) => (
                        /* Start Column */
                        <div className="col-md-4 col-sm-6" key={serviceInfo.id}>
                            <div className="service-info-box pt-5 pb-5 mb-5">
                                <span className="icon">{serviceInfo.icon}</span>
                                <h5 className="service-name mt-4 mb-4">{serviceInfo.name}</h5>
                                <a href={serviceInfo.link} className="btn btn-success" target="_blank">Order Now</a>
                            </div>
                        </div>
                        /* End Column */
                    ))}
                </div>
                {/* End Grid System */}
            </div>
            {/* End Container */}
        </section>
        // End Services Section
    )
}

export default Services;