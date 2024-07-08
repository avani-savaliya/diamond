import React from 'react'
import offerImg1 from '../../asstes/Images/HomeImages/offeerImg-1.png'
import offerImg2 from '../../asstes/Images/HomeImages/offerimg-2.png'
import offerImg3 from '../../asstes/Images/HomeImages/offerimg-3.png'
import offerImg4 from '../../asstes/Images/HomeImages/offerimg-4.png'

const OfferArea = () => {
  return (
    <>
      <div className="offerSection">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="offerSection">
                <div className="offerHeader">
                  <div className="title">
                    Special Offers
                  </div>
                  <div className="sub-title">
                    Don't miss out on these savings
                  </div>
                </div>
                <div className="row mt-5 mb-5">
                  <div className="col d-flex justify-content-center align-item-center mb-2">
                    <div className="offerImg">
                      <img src={offerImg1} alt='img' />
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center align-item-center mb-2">
                    <div className="offerImg">
                      <img src={offerImg2} alt='img' />
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center align-item-center mb-2">
                    <div className="offerImg">
                      <img src={offerImg3} alt='img' />
                    </div>
                  </div>
                  <div className="col d-flex justify-content-center align-item-center mb-2">
                    <div className="offerImg">
                      <img src={offerImg4} alt='img' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default OfferArea
