import partner1Image from "../../Assets/Images/partner1.png";
import partner2Image from "../../Assets/Images/partner2.png";
import partner3Image from "../../Assets/Images/partner3.jpg";
import partner4Image from "../../Assets/Images/partner4.jpg";
import partner5Image from "../../Assets/Images/partner5.jpg";
import partner6Image from "../../Assets/Images/partner6.jpg";
import partner7Image from "../../Assets/Images/partner7.jpg";
import partner8Image from "../../Assets/Images/partner8.jpg";
import partner9Image from "../../Assets/Images/partner9.jpg";
import Slider from "./slider";

const Partners = () => {
    const partnersImagesURLs = [
        partner1Image,
        partner2Image,
        partner3Image,
        partner4Image,
        partner5Image,
        partner6Image,
        partner7Image,
        partner8Image,
        partner9Image,
    ];
    return (
        // Start Partners Section
        <section className="partners pt-5 pb-5">
            <h2 className="section-name text-white text-center h1">Partners</h2>
            <Slider partnersImagesURLs={partnersImagesURLs} />
        </section>
        // End Partners Section
    );
}

export default Partners;