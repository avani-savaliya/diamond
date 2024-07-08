import React from 'react'
import featureImg1 from '../../asstes/Images/HomeImages/feature-img-1.png'
import featureImg2 from '../../asstes/Images/HomeImages/feature-img-2.png'
import featureImg3 from '../../asstes/Images/HomeImages/feature-img-3.png'
import featureImg4 from '../../asstes/Images/HomeImages/feature-img-4.png'
import OwlCarousel from 'react-owl-carousel'

const FeaturedArea = () => {
    const responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },

        1000: {
            items: 4,
        },
        1200: {
            items: 4,
        }
    };
    return (
        <>
            <div className="FeatureSection">
                <div className="container">
                    <div className="row">
                        <div className="FeatureHeader">
                            <div className="title">
                                Featured Categories
                            </div>
                            <div className="sub-title">
                                Save every day on fine jewelry
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-12">
                            <OwlCarousel className='owl-theme' loop={true}
                                nav={true}
                                dots={false}
                                responsive={responsive} margin={20} >
                                <div className="item">
                                    <div className="FeatureMainbox">
                                        <div className="featureImg">
                                            <img src={featureImg1} alt='img' />
                                            <div className="featureText">
                                                <p>Engagement Rings</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="item">
                                    <div className="FeatureMainbox">
                                        <div className="featureImg">
                                            <img src={featureImg2} alt='img'  />
                                            <div className="featureText">
                                                <p> Women’s Wedding Rings</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="FeatureMainbox">
                                        <div className="featureImg">
                                            <img src={featureImg3} alt='img' />
                                            <div className="featureText">
                                                <p>   Men’s Wedding Rings</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="FeatureMainbox">
                                        <div className="featureImg">
                                            <img src={featureImg4} alt='img' />
                                            <div className="featureText">
                                                <p>   Gemstone Rings  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default FeaturedArea
