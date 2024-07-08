import React from 'react'
import designcollectionImg1 from '../../asstes/Images/HomeImages/designcollectionimg-1.png'
import designcollectionImg2 from '../../asstes/Images/HomeImages/designcollectionimg-2.png'
import designcollectionImg3 from '../../asstes/Images/HomeImages/designcollectionimg-3.png'

const JewelleryCollection = () => {
    return (
        <>
            <div className="OurCollectionArea">
                <div className="container">
                    <div className="row mt-5 mb-3 m-0">
                        <div className="col-lg-6 col-md-6 mb-4 d-flex justify-content-left align-items-center">
                            <div className="ourText">
                                <h1>For You, For Them, For All</h1>
                                <p className='pb-3'>Celebrate Pride Month with a responsibly sourced design
                                    that honors who you are.</p>
                                <button className='b1'>Shop Gender Natural Rings</button>
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="ourCollectionImg ">
                                <img src={designcollectionImg1} alt='img' />
                            </div>
                            
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-6">
                            <div className="ourCollectionImg">
                                <img src={designcollectionImg2} alt='img' />
                            </div>
                            <div className="ourText pt-4  ">
                                <h1>The Hoop Shop</h1>
                                <p className='pb-3'>Your one-stop-shop for perfectly proportioned pairs..</p>
                                <button className='b1'>Shop Now</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ourCollectionImg">
                                <img src={designcollectionImg3} alt='img' />
                            </div>
                            <div className="ourText pt-4">
                                <h1>The Essentials Edit</h1>
                                <p className='pb-3 w-500'>Signature pieces to swear by. Your jewelry capsule starts here.</p>
                                <button className='b1'>Shop Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default JewelleryCollection
