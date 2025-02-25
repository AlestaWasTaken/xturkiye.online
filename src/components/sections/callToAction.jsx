import React, { useState } from "react";
import Slider from "react-slick";
import { RiWhatsappFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

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

    // Separate categories based on your pricing cards
    const tiktokKullaniciCards = [
        {  
            header: "Tiktok Kullanıcı Akım Paketleri",
            title: "Tiktok 50 Kullanıcı",
            price: "1200₺",
            features: [
                "%100 Doğal Kullanıcılar",
                "500 - 10.000 Takipçi Aralığı",
                "Özgün İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili" 
            ]
        },
        {
            title: "Tiktok 100 Kullanıcı",
            price: "2200₺",
            features: [
                "%100 Doğal Kullanıcılar",
                "500 - 10.000 Takipçi Aralığı",
                "Özgün İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili" 
            ]
        },
        {
            title: "Tiktok 150 Kullanıcı",
            price: "3200₺",
            features: [
                "%100 Doğal Kullanıcılar",
                "500 - 10.000 Takipçi Aralığı",
                "Özgün İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili" 
            ]
        },
        {
            header: "Tiktok Kullanıcı Akım Paketleri",
            title: "Tiktok 200 Kullanıcı",
            price: "3950₺",
            features: [
                "%100 Doğal Kullanıcılar",
                "500 - 10.000 Takipçi Aralığı",
                "Özgün İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili" 
            ]
        },
        {
            title: "Tiktok 300 Kullanıcı",
            price: "5850₺",
            features: [
                "%100 Doğal Kullanıcılar",
                "500 - 10.000 Takipçi Aralığı",
                "Özgün İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili" 
            ]
        },
        {
            title: "Tiktok 500 Kullanıcı",
            price: "8000₺",
            features: [
                "%100 Doğal Kullanıcılar",
                "500 - 10.000 Takipçi Aralığı",
                "Özgün İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili" 
                
            ]
        },
        // Add more cards...
    ];

    const tiktokFenomenCards = [
        {
            header: " Tiktok Fenomen Akım Paketleri",
            title: "Tiktok 5 Fenomen",
            price: "3250₺",
            features: [
                "Etkileşimi Yüksek Fenomenler",
                "3.000 - 90.000 Takipçi Aralığı",
                "Kaliteli İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ]
        },
        {
            title: "Tiktok 10 Fenomen",
            price: "5750₺",
            features: [
                "Etkileşimi Yüksek Fenomenler",
                "3.000 - 90.000 Takipçi Aralığı",
                "Kaliteli İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ]
        },
        {
            title: "Tiktok 20 Fenomen",
            price: "9750₺",
            features: [
                "Etkileşimi Yüksek Fenomenler",
                "3.000 - 90.000 Takipçi Aralığı",
                "Kaliteli İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili",
            ]
        },
        {
            header: "Tiktok Fenomen Akım Paketleri",
            title: "Tiktok 30 Fenomen",
            price: "15.000₺",
            features: [
                "Etkileşimi Yüksek Fenomenler",
                "3.000 - 90.000 Takipçi Aralığı",
                "Kaliteli İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ]
        },
        {
            title: "Tiktok 50 Fenomen",
            price: "19.500₺",
            features: [
                "Etkileşimi Yüksek Fenomenler",
                "3.000 - 90.000 Takipçi Aralığı",
                "Kaliteli İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ]
        },
        {
            title: "Tiktok 100 Fenomen",
            price: "32.500₺",
            features: [
                "Etkileşimi Yüksek Fenomenler",
                "3.000 - 90.000 Takipçi Aralığı",
                "Kaliteli İçerikler",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ]
        },
        // Add more cards...
    ];

    const tiktokOzelAkımCards = [
        {
            header: "Tiktok Hepsi Bir Arada Özel Akım Paketleri",
            title: "Özel Tiktok Paketi 1",
            price: "12.500₺",
            features: [
                "100 Kullanıcı Kişi Akım",
                "5 Mikro Fenomen",
                "2 Makro Fenomen",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ],
        },
        {
            title: "Özel Tiktok Paketi 2",
            price: "22.000₺",
            features: [
                "200 Kullanıcı Kişi Akım",
                "10 Mikro Fenomen",
                "3 Makro Fenomen",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ],
        },
        {
            title: "Özel Tiktok Paketi 3",
            price: "35.000₺",
            features: [
                "300 Kişi Akım",
                "20 Mikro Fenomen",
                "5 Makro Fenomen",
                "Sesin Keşfete Düşmesi İçin",
                "%100 Etkili"
            ],
        },
        // Add more cards...
    ];

    const spotifyCards = [
        {
            header: "⁠Editör Playlist Ve Algoritma Etkili Spotify Paketleri",
            title: "Spotify Paket 1",
            price: "2000₺",
            features: [
                "500 Takipçi",
                "Yüksek Etkileşim",
                "Özel Listeler",
            ]
        },
        {
            title: "Spotify Paket 2",
            price: "3500₺",
            features: [
                "1000 Takipçi",
                "Yüksek Etkileşim",
                "Özel Listeler",
            ]
        },
        // Add more cards...
    ];

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

                <center>
                    {/* Tiktok Kullanıcı Akım Paketleri Slider */}
                    <h3>{`  ${tiktokKullaniciCards[0]?.header}`}</h3>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {tiktokKullaniciCards.map((card, index) => (
                                <div className="pricing-card" key={index}>
                                    <h3>{card.title}</h3>
                                    <p className="price">{card.price}</p>
                                    <ul>
                                        {card.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Tiktok Fenomen Akım Paketleri Slider */}
                    <h3>{`  ${tiktokFenomenCards[0]?.header}`}</h3>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {tiktokFenomenCards.map((card, index) => (
                                <div className="pricing-card" key={index}>
                                    <h3>{card.title}</h3>
                                    <p className="price">{card.price}</p>
                                    <ul>
                                        {card.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Tiktok Hepsi Bir Arada Özel Akım Paketleri Slider */}
                    <h3>{`  ${tiktokOzelAkımCards[0]?.header}`}</h3>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {tiktokOzelAkımCards.map((card, index) => (
                                <div className="pricing-card" key={index}>
                                    <h3>{card.title}</h3>
                                    <p className="price">{card.price}</p>
                                    <ul>
                                        {card.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Spotify Slider */}
                    <h3>{`  ${spotifyCards[0]?.header}`}</h3>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {spotifyCards.map((card, index) => (
                                <div className="spotify-card" key={index}>
                                    <h3>{card.title}</h3>
                                    <p className="alesta">{card.price}</p>
                                    <ul>
                                        {card.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </center>

                <div className="btn-container">
                    <Link
                        to="https://api.whatsapp.com/send?phone=905517477767&text=Merhaba,%20xturkiye.online%20sitenizden%20ulaşıyorum,%20yardımcı%20olabilir%20misiniz?"
                        className="whatsapp-btn"
                    >
                        Hadi Tıkla ve İletişime Geç! <RiWhatsappFill size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
