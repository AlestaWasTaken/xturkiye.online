import React from 'react'
import profile from "../../assets/images/about/me.gif"
import { RiDownloadLine, RiWhatsappLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="glitch">
                            <img src={profile} alt="About Me" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {/* <!-- START HERO DESIGN AREA --> */}
                        <div className="hero-content wow fadeInUp delay-0-2s">
                            <h1>Merhaba X Türkiye İle Artık Tüm Müzik İhtiyaçlarınızı Karşılayabilirsiniz</h1>
                            <h2>Ekibimizle doğru bir planlama yapın, müziklerinizi oluşturmanın ve tanıtmanın doğru matematiğini oluşturun ve bu planları gerçeğe dönüştürün.</h2>
                            <div className="hero-btns">
                                <Link to="https://api.whatsapp.com/send?phone=905517477767&text=Merhaba,%20xturkiye.online%20sitenizden%20ulaşıyorum,%20yardımcı%20olabilir%20misiniz?" className="theme-btn">İletişime Geç <i><RiWhatsappLine size={16}/></i></Link>
                            </div>
                        </div>
                        {/* <!-- / END HERO DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero