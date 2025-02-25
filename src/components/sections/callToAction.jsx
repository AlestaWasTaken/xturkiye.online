import React, { useState } from "react";
import { RiWhatsappFill, RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./CallToAction.css";

// Özelleştirilmiş slider butonları
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
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

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
        afterChange: (index) => {
            setCurrentSlide(index); // Update the slide index when the slide changes
        },
    };

    const pricingCards = [
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
        // Add the other cards as needed...
    ];

    // Spotify Cards
    const spotifyCards = [
        {
            header: "⁠Editör Playlist Ve Algoritma Etkili Spotify Paketleri",
            title: "Spotify İlk Evre",
            price: "2750₺",
            features: [
                "2.000 - 12.000 AYLIK DİNLEYİCİ",
                "2.000 - 24.000 DİNLENME",
                "RADYO RELEASE %70",
                "ARTİST RADYO %70",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            title: "Spotify 2. Evre",
            price: "5100₺",
            features: [
                "5000 - 15.000 AYLIK DİNLEYİCİ",
                "2.000 - 30.000 DİNLENME",
                "RADYO RELEASE %70",
                "ARTİST RADYO %70",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            title: "Spotify İlk Adım",
            price: "7600₺",
            features: [
                "7000 - 25.000 AYLIK DİNLEYİCİ",
                "7000 - 50.000 DİNLENME",
                "RADYO RELEASE %70",
                "ARTİST RADYO %70",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            header:  "⁠Editör Playlist Ve Algoritma Etkili Spotify Paketleri",
            title: "Spotify Giriş",
            price: "17.300₺",
            features: [
                "15.000 - 45.000 AYLIK DİNLEYİCİ",
                "15.000 - 90.000 DİNLENME",
                "RADYO RELEASE %75",
                "ARTİST RADYO %75",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            title: "Spotify Yükseliş",
            price: "23.100₺",
            features: [
                "30.000 - 65.000 AYLIK DİNLEYİCİ",
                "30.000 - 150.000 DİNLENME",
                "RADYO RELEASE %77",
                "ARTİST RADYO %77",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            title: "Spotify Viral",
            price: "36.000₺",
            features: [
                "55.000 - 100.000 AYLIK DİNLEYİCİ",
                "55.000 - 200.000 DİNLENME",
                "RADYO RELEASE %80",
                "ARTİST RADYO %80",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            header: " ⁠Editör Playlist Ve Algoritma Etkili Spotify Paketleri",
            title: "Spotify Vezir",
            price: "52.000₺",
            features: [
                "80.000 - 200.000 AYLIK DİNLEYİCİ",
                "80.000 - 400.000 DİNLENME",
                "RADYO RELEASE %80",
                "ARTİST RADYO %80",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            title: "Spotify ŞAH",
            price: "59.000₺",
            features: [
                "90.000 - 300.000 AYLIK DİNLEYİCİ",
                "90.000 - 600.000 DİNLENME",
                "RADYO RELEASE %82",
                "ARTİST RADYO %83",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        },
        {
            title: "Spotify KRAL",
            price: "101.000₺",
            features: [
                "150.000 - 600.000 AYLIK DİNLEYİCİ",
                "150.000 - 1.200.000 DİNLENME",
                "RADYO RELEASE %82",
                "ARTİST RADYO %83",
                "TARZA UYGUN LİSTELER",
                "EDİTÖR VE ALGORİTMA ETKİLİ"
            ]
        }
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
                    <h3>{`  ${pricingCards[currentSlide]?.header}`}</h3>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {pricingCards.map((card, index) => (
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
                    <h3>{`  ${spotifyCards[currentSlide]?.header}`}</h3>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {spotifyCards.map((card, index) => (
                                <div className="spotify-card" key={index}>
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
