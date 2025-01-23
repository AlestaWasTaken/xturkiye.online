import React, { useState } from 'react'
import workScribble from "../../assets/images/custom/work-scribble.svg"
import { projectsData } from '../../utlits/fackData/projectData'
import ImageSlider from '../ui/imageSlider'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openSlider = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeSlider = () => {
        setIsOpen(false);
    };

    const whatsappNumbers = {
        1: '905517477767', // Spotify Playlist için
        2: '905517477767', // TikTok Akım için
        3: '905517477767', // YouTube Trend için
        4: '905517477767', // Mix & Mastering için
        5: '905517477767', // Altyapı için
        6: '905517477767', // Ücretsiz Dağıtım için
        7: '905517477767', // Klip Çekimi için
    };

    const whatsappMessages = {
        1: 'xturkiye.online sitenizden ulaşıyorum, Spotify Playlist hakkında bilgi almak istiyorum.',
        2: 'xturkiye.online sitenizden ulaşıyorum, TikTok Akım hakkında bilgi almak istiyorum.',
        3: 'xturkiye.online sitenizden ulaşıyorum, YouTube Trend hakkında bilgi almak istiyorum.',
        4: 'xturkiye.online sitenizden ulaşıyorum, Mix & Mastering Desteği hakkında bilgi almak istiyorum.',
        5: 'xturkiye.online sitenizden ulaşıyorum, Altyapı / Beat Planlaması hakkında bilgi almak istiyorum.',
        6: 'xturkiye.online sitenizden ulaşıyorum, Ücretsiz Dağıtım hakkında bilgi almak istiyorum.',
        7: 'xturkiye.online sitenizden ulaşıyorum, Profesyonel Klip Çekimi hakkında bilgi almak istiyorum.'
    };

    return (
        <>
            <div className="projects-area" id="portfolio">
                <div className="custom-icon">
                    <img src={workScribble} alt="custom" />
                </div>
                <div className="container-fluid">
                    <div className="row g-4 portfolio-grid">
                        {projectsData.map(({ category, id, size, src, title }, index) => {
                            const phoneNumber = whatsappNumbers[id] || '905517477767'; // Varsayılan numara
                            const message = whatsappMessages[id] || '';
                            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                            return (
                                <div key={id} className={`${size === "large" ? "col-md-6 col-xl-6" : "col-md-6 col-xl-4"} portfolio-item category-${id}`}>
                                    <div className="work-popup">
                                        <div onClick={() => openSlider(index)} className="portfolio-box">
                                            <img src={src} alt="" data-rjs="2" />
                                            <span className="portfolio-category">{category}</span>
                                            <h1 className="portfolio-caption">
                                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{title}</a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
