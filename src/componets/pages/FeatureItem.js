import React from 'react'
import FeatureItemImg from '../../asstes/Images/HomeImages/featureitembanner.png'

const FeatureItem = () => {
    return (
        <>
            <div className="FeatureItemSection">
                <div className="container">
                    <div className="row">
                        <div className="FeatureItemHeader">
                            <div className="title">
                                Featured Item
                            </div>
                            <div className="sub-title">
                                A must-have look at an incredible value
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="FeatureItemImg">
                                <img src={FeatureItemImg} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FeatureItem
