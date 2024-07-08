import React from 'react'
import diamondImg1 from '../../asstes/Images/HomeImages/diamond-1.png'
import diamondImg2 from '../../asstes/Images/HomeImages/diamond-2.png'
import diamondImg3 from '../../asstes/Images/HomeImages/diamond-3.png'
import diamondImg4 from '../../asstes/Images/HomeImages/diamond-4.png'
import diamondImg5 from '../../asstes/Images/HomeImages/diamond-5.png'
import diamondImg6 from '../../asstes/Images/HomeImages/diamond-6.png'
import diamondImg7 from '../../asstes/Images/HomeImages/diamond-7.png'
import diamondImg8 from '../../asstes/Images/HomeImages/diamond-8.png'
import diamondImg9 from '../../asstes/Images/HomeImages/diamond-9.png'
import diamondImg10 from '../../asstes/Images/HomeImages/diamond-10.png'
import { Link } from 'react-router-dom'

const ShopArea = () => {
    return (
        <>
            <div className="DiamondShopArea section-padding">
                <div className="container">
                    <div className="row d-flex align-items-center position-relative justify-content-center ">
                        <div className="col-lg-12">
                            <div className="shopHeader text-align-center">
                                <h1>Shop Diamonds By Shape</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 g-lg-3 mt-5">
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <Link to={'/diamond/category'}>
                                    <div className="diamondImg">
                                        <img src={diamondImg1} alt='img' />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg2} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg3} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg4} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg5} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg6} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg7} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg8} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg9} alt='img' />
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center p-0">
                            <div className="shopImgBox">
                                <div className="diamondImg">
                                    <img src={diamondImg10} alt='img' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ShopArea
