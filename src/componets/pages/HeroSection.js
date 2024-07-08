import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bannerGet } from '../redux/slice/BannerSlice'
import { baseURL } from '../utill/config'



const HeroSection = () => {
  const [data, setData] = useState([])
  const { banner } = useSelector((state) => state.banner)
  const dispatch = useDispatch()

  const [page, setPage] = useState(0)
  const [rowPerPage, setRowperPage] = useState(10)
  const [search, setSearch] = useState("")


  const payload = {
    page,
    limit: rowPerPage,
    search
  }

  useEffect(() => {
    dispatch(bannerGet({ ...payload, command: false }))
  }, [page, rowPerPage, search])

  useEffect(() => {
    dispatch(bannerGet({ ...payload, command: true }))
  }, [])

  useEffect(() => {
    setData(banner)
  }, [banner]);


  return (
    <>
      <div className="videoArea position-relative">
        <div className="container">
          <div className="row justify-content-center">
            {
              data?.map((items) => {
                return (
                  <>
                    <div className="col-lg-12">
                      <video className='videoPlayer' playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={baseURL ? baseURL + items?.url : items.url} type="video/mp4" />
                      </video>
                      <div className="bannerInfo position-relative">
                        <h1 className='title text-white'>{items.title}</h1>
                        <p>{items.subTitle}</p>
                        <div className="commonBtn mt-5">
                          <button>shop our collections</button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
