import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CountUp from 'react-countup';

const AboutCount = () => {
    return (
        <section className="single-page-hero-area">
            <div className="container">

                {/* Video Slider (Carousel) */}
                <Carousel>
                    {/* First Slide with YouTube Video */}
                    <Carousel.Item>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/7nZAbsKG-Jc?si=RMtOsneroLryCfex"
                            title="YouTube video 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </Carousel.Item>

                    {/* Second Slide with YouTube Video */}
                    <Carousel.Item>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/PcH9Pe63EN4"
                            title="YouTube video 2"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        
                    </Carousel.Item>

                    {/* Third Slide with YouTube Video */}
                    <Carousel.Item>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/5sUIcmZSlqM"
                            title="YouTube video 3"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        
                    </Carousel.Item>

                    {/* Fourth Slide with YouTube Video */}
                    <Carousel.Item>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/YG4xKYjx3XE"
                            title="YouTube video 4"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        
                    </Carousel.Item>

                    {/* Fifth Slide with YouTube Video */}
                    <Carousel.Item>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/KKFDogui-OQ"
                            title="YouTube video 5"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        
                    </Carousel.Item>

                    {/* Sixth Slide with YouTube Video */}
                    <Carousel.Item>
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/XW2YNOlH88I"
                            title="YouTube video 6"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        
                    </Carousel.Item>
                </Carousel>

                {/* Stats Section */}
                <div className="row">
                <Card count={1200} title="1200’den Fazla Sanatçı İşbirliği" />
                    <Card count={500} title="500’den fazla Spotify Playlist" />
                    <Card count={100} title="100’den fazla TikTok Fenomen" />
                    <Card count={1600} title="1600’den fazla Total Proje Yönetimi" />
                </div>
            </div>
        </section>
    );
};

export default AboutCount;

const Card = ({ count, title, endOption }) => {
    return (
        <div className="col-6 col-lg-3">
            <div className="hero-counter-area wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                    <span className="count-text plus">
                        <CountUp end={count} />
                        {endOption && <span>{endOption}</span>}
                    </span>
                    <span className="counter-title">{title}</span>
                </div>
            </div>
        </div>
    );
};
