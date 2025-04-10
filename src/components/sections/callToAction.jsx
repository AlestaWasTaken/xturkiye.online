import React from "react";
import Slider from "react-slick";
import { RiWhatsappFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import "./CallToAction.css";

// Custom slider buttons
const CustomPrevArrow = (props) => (
    <div className="custom-prev-arrow" onClick={props.onClick}>
        <RiArrowLeftSLine size={30} />
    </div>
);

const CustomNextArrow = (props) => (
    <div className="custom-next-arrow" onClick={props.onClick}>
        <RiArrowRightSLine size={30} />
    </div>
);

const CallToAction = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const tiktokFenomenCards = [/*...*/]; // aynı kalıyor
    const tiktokOzelAkımCards = [/*...*/]; // aynı kalıyor
    const spotifyCards = [/*...*/]; // aynı kalıyor

    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="text-content">
                    <h2>Müziğinizi Milyonlarca Dinleyiciyle Buluşturmaya Şimdi Başlamak İstemez Misiniz?</h2>
                    <p>
                        XTürkiye olarak 6 Yıl Boyunca 1950’den fazla sanatçımız ile güzel projelere imza attık.
                        Majör isimlerle organizasyon / konser etkinlikleri yapmaya devam ediyoruz.
                        Sende şimdi bize katıl, müziğini duyurmaya hemen başla.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
