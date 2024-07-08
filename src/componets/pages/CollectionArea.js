import React from 'react'
import collectionImg1 from '../../asstes/Images/HomeImages/collectionImg-1.png'
import collectionImg2 from '../../asstes/Images/HomeImages/collectionImg-2.png'
import collectionImg3 from '../../asstes/Images/HomeImages/collectionImg-3.png'
import collectionImg4 from '../../asstes/Images/HomeImages/collectionImg-4.png'
import OwlCarousel from 'react-owl-carousel'

const CollectionArea = () => {
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
            <div className="collectionSection">
                <div className="container">
                    <div className="row">
                        <div className="collectioneHeader">
                            <div className="title">
                                More Captivating Collection
                            </div>
                            <div className="sub-title">
                                Here more than collection of diamonds
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-12">
                            <OwlCarousel className='owl-theme' loop
                                nav={true}
                                dots={false}
                                responsive={responsive} margin={20} >
                                <div className="item">
                                    <div className="CollectionMainbox">
                                        <div className="collectionImg">
                                            <img src={collectionImg1} alt='img' />
                                        </div>
                                        <div className="collectionText">
                                            <p>Diamonds Studs </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="CollectionMainbox">
                                        <div className="collectionImg">
                                            <img src={collectionImg2} alt='img' />
                                        </div>
                                        <div className="collectionText">
                                            <p>Tennis Bracelets </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="CollectionMainbox">
                                        <div className="collectionImg">
                                            <img src={collectionImg3} alt='img' />
                                        </div>
                                        <div className="collectionText">
                                            <p>Diamonds Pendants </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="CollectionMainbox">
                                        <div className="collectionImg">
                                            <img src={collectionImg4} alt='img' />
                                        </div>
                                        <div className="collectionText">
                                            <p>Eternity Rings </p>
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

export default CollectionArea
