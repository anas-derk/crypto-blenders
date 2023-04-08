import { useState } from "react";
import "./slider.min.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ partnersImagesURLs }) => {

    const [currentPartnerImageIndex, setCurrentPartnerImageIndex] = useState(0);
    
    const handleGetNextPartner = () => {

        if (currentPartnerImageIndex < partnersImagesURLs.length) {

            setCurrentPartnerImageIndex(currentPartnerImageIndex + 1);

        }

    }

    const handleGetPreviousPartner = () => {

        setCurrentPartnerImageIndex(currentPartnerImageIndex - 1);

    }

    return (
        /* Start Slider */
        <div className="slider text-white text-center">
            {currentPartnerImageIndex < partnersImagesURLs.length - 1 &&
                <IoIosArrowForward
                    className="right-arrow control-arrow p-2"
                    onClick={handleGetNextPartner}
                />
            }
            {currentPartnerImageIndex !== 0 &&
                <IoIosArrowBack
                    className="left-arrow control-arrow p-2"
                    onClick={handleGetPreviousPartner}
                />
            }
            {/* Start Slider Content */}
            <ul className="partner-images-list d-flex justify-content-center align-items-center flex-wrap">
                <li className="partner-image-item">
                    <img src={partnersImagesURLs[currentPartnerImageIndex]} alt="Partner Image !" className="partner-image" />
                </li>
            </ul>
            {/* End Slider Content */}
        </div>
        /* End Slider */
    );
}

export default Slider;