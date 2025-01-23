import React from 'react';
import workScribble from "../../assets/images/custom/work-scribble.svg";
import { projectsData } from '../../utlits/fackData/projectData';

const Portfolio = () => {
    const whatsappNumbers = {
        1: '905517477767', 
        2: '905517477767',
        3: '905517477767',
        4: '905517477767', 
        5: '905517477767',
        6: '905517477767', 
        7: '905517477767',
    };

    const whatsappMessages = {
        1: 'xturkiye.online sitenizden ulaşıyorum, Spotify Hizmetleri hakkında bilgi almak istiyorum.',
        2: 'xturkiye.online sitenizden ulaşıyorum, TikTok Hizmetleri hakkında bilgi almak istiyorum.',
        3: 'xturkiye.online sitenizden ulaşıyorum, YouTube Hizmetleri hakkında bilgi almak istiyorum.',
        4: 'xturkiye.online sitenizden ulaşıyorum, Mix & Mastering Hizmetleri hakkında bilgi almak istiyorum.',
        5: 'xturkiye.online sitenizden ulaşıyorum, Altyapı / Beat Planlaması hakkında bilgi almak istiyorum.',
        6: 'xturkiye.online sitenizden ulaşıyorum, Ücretsiz Şarkı Dağıtım Hizmetleri hakkında bilgi almak istiyorum.',
        7: 'xturkiye.online sitenizden ulaşıyorum, Profesyonel Klip Çekimi Hizmetleri hakkında bilgi almak istiyorum.'
    };

    return (
        <>
            <div className="projects-area" id="portfolio">
                <div className="custom-icon">
                    <img src={workScribble} alt="custom" />
                </div>
                <div className="container-fluid">
                    <div className="row g-4 portfolio-grid">
                        {projectsData.map(({ category, id, size, src, title }) => {
                            const phoneNumber = whatsappNumbers[id] || '905517477767';
                            const message = whatsappMessages[id] || '';
                            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                            return (
                                <div 
                                    key={id} 
                                    className={`${size === "large" ? "col-md-6 col-xl-6" : "col-md-6 col-xl-4"} portfolio-item category-${id}`}
                                >
                                    <a 
                                        href={whatsappLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="portfolio-box"
                                        style={{ display: "block", textDecoration: "none" }}
                                    >
                                        <img 
                                            src={src} 
                                            alt={title} 
                                            className="portfolio-image" 
                                            style={{ width: "100%", height: "auto", display: "block" }}
                                        />
                                        <span className="portfolio-category">{category}</span>
                                        <h1 className="portfolio-caption">{title}</h1>
                                    </a>
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
