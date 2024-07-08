import React, { useState } from 'react'
import Title from '../../extra/Title'
import { Link } from 'react-router-dom';
import diamondImg1 from '../../../asstes/Images/HomeImages/diamond-1.png'
import diamondImg2 from '../../../asstes/Images/HomeImages/diamond-2.png'
import diamondImg3 from '../../../asstes/Images/HomeImages/diamond-3.png'
import diamondImg4 from '../../../asstes/Images/HomeImages/diamond-4.png'
import diamondImg5 from '../../../asstes/Images/HomeImages/diamond-5.png'
import diamondImg6 from '../../../asstes/Images/HomeImages/diamond-6.png'
import diamondImg7 from '../../../asstes/Images/HomeImages/diamond-7.png'
import diamondImg8 from '../../../asstes/Images/HomeImages/diamond-8.png'
import diamondImg9 from '../../../asstes/Images/HomeImages/diamond-9.png'
import diamondImg10 from '../../../asstes/Images/HomeImages/diamond-10.png'
import OwlCarousel from 'react-owl-carousel'
const DiamondMainCategory = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const getNextTab = () => {
        switch (activeTab) {
            case 'tab1':
                return 'tab2';
            case 'tab2':
                return 'tab3';
            case 'tab3':
                return 'tab1';
            default:
                return 'tab1';
        }
    };

    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 6
        },
        1440: {
            items: 6
        }
    }
    const [minValue, setMinValue] = useState(0.34);
    const [maxValue, setMaxValue] = useState(30.76);
    const gap = 0.1;

    const handleInputChange = (e) => {
        let minRange = parseFloat(e.target.className.includes('range-min') ? e.target.value : minValue);
        let maxRange = parseFloat(e.target.className.includes('range-max') ? e.target.value : maxValue);

        if (maxRange - minRange < gap) {
            if (e.target.className.includes('range-min')) {
                setMinValue(maxRange - gap);
            } else {
                setMaxValue(minRange + gap);
            }
        } else {
            setMinValue(minRange);
            setMaxValue(maxRange);
        }
    };


    const [minPriceValue, setMinPriceValue] = useState(290);
    const [maxPriceValue, setMaxPriceValue] = useState(415000);
    const gapPrice = 1;

    const handleInputChangePrice = (e) => {
        let minPriceRange = parseFloat(e.target.className.includes('range-min') ? e.target.value : minPriceValue);
        let maxPriceRange = parseFloat(e.target.className.includes('range-max') ? e.target.value : maxPriceValue);

        if (maxPriceRange - minPriceRange < gapPrice) {
            if (e.target.className.includes('range-min')) {
                setMinPriceValue(maxPriceRange - gapPrice);
            } else {
                setMaxPriceValue(minPriceRange + gapPrice);
            }
        } else {
            setMinPriceValue(minPriceRange);
            setMaxPriceValue(maxPriceRange);
        }
    };
    return (
        <div>
            <div className='diamondMainCategory'>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <Title name={`Round Cut Diamonds`} />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center pt-4">
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                            <nav className='tabButton row'>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>Shape, Carat, & Price</button>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>Color, Clarity, & Cut</button>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-around">
                                    <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => setActiveTab('tab3')}>More Filters</button>
                                    <p className="tabnav">
                                        <Link to={`#${getNextTab()}`} onClick={() => setActiveTab(getNextTab())}>
                                            <i className='ri-arrow-right-s-fill'></i>
                                        </Link>
                                    </p>
                                </div>
                            </nav>
                            <article className='tabs'>
                                {
                                    activeTab === 'tab1' && (
                                        <section id="tab1">
                                            <div className="col-6">
                                                <div>
                                                    <div className='diamondShapeTitle'>Diamond Shape</div>
                                                    <div className='pt-4'>
                                                        <OwlCarousel
                                                            className='owl-theme'
                                                            loop={false}
                                                            nav={true}
                                                            mouseDrag={false}
                                                            dots={false}
                                                            responsive={responsive}
                                                            margin={10}
                                                        >
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg1} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">round</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg2} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">oval</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg3} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">emerald</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg4} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">cushion</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg5} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">pear</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg6} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">radiant</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg7} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">princess</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg8} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">marquise</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg9} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">asscher</div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg10} alt='img' />
                                                                </div>
                                                                <div className="diamondCategoryName">heart</div>
                                                            </div>
                                                        </OwlCarousel>
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <div className='diamondShapeTitle'>Diamond Origin</div>
                                                    <div className='mt-4'>
                                                        <button className='diamondOriginBtn bg-third text-light'>Natural Diamonds</button>
                                                        <button className='diamondOriginBtn'>Lab Diamonds</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 ps-5">
                                                <div className='carat'>
                                                    <div className='diamondShapeTitle'>Carat</div>
                                                    <div className="flex relative justify-center items-center h-20 w-full mx-auto rounded pt-4">
                                                        <div className="range-slider">
                                                            <div
                                                                className="progress"
                                                                style={{
                                                                    left: `${(minValue / 30.76) * 100}%`,
                                                                    right: `${100 - (maxValue / 30.76) * 100}%`
                                                                }}
                                                            ></div>
                                                            <span className="range-min-wrapper">
                                                                <input
                                                                    className="range-min"
                                                                    type="range"
                                                                    step="0.1"
                                                                    min="0.34"
                                                                    max="30.76"
                                                                    value={minValue}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </span>
                                                            <span className="range-max-wrapper">
                                                                <input
                                                                    className="range-max"
                                                                    type="range"
                                                                    step="0.1"
                                                                    min="0.34"
                                                                    max="30.76"
                                                                    value={maxValue}
                                                                    onChange={handleInputChange}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className='d-flex mt-4 justify-content-between'>
                                                            <div className="min-value numberVal">
                                                                <input type="number" min="0.34" max="30.76" value={minValue.toFixed(2)} disabled />
                                                            </div>
                                                            <div className="max-value numberVal">
                                                                <input type="number" min="0.34" max="30.76" value={maxValue.toFixed(2)} disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='diamondPrice mt-5'>
                                                    <div className='diamondShapeTitle'>Diamond Price</div>
                                                    <div className="flex relative justify-center items-center h-20 w-full mx-auto rounded pt-4">
                                                        <div className="range-slider">
                                                            <div
                                                                className="progress"
                                                                style={{
                                                                    left: `${(minPriceValue / 415000) * 100}%`,
                                                                    right: `${100 - (maxPriceValue / 415000) * 100}%`
                                                                }}
                                                            ></div>
                                                            <span className="range-min-wrapper">
                                                                <input
                                                                    className="range-min"
                                                                    type="range"
                                                                    step="1"
                                                                    min="290"
                                                                    max="415000"
                                                                    value={minPriceValue}
                                                                    onChange={handleInputChangePrice}
                                                                />
                                                            </span>
                                                            <span className="range-max-wrapper">
                                                                <input
                                                                    className="range-max"
                                                                    type="range"
                                                                    step="1"
                                                                    min="290"
                                                                    max="415000"
                                                                    value={maxPriceValue}
                                                                    onChange={handleInputChangePrice}
                                                                />
                                                            </span>
                                                        </div>
                                                        <div className='d-flex mt-4 justify-content-between'>
                                                            <div className="min-value numberVal">
                                                                <input type="number" min="290" max="415000" value={minPriceValue} disabled />
                                                            </div>
                                                            <div className="max-value numberVal">
                                                                <input type="number" min="290" max="415000" value={maxPriceValue} disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    )
                                }

                                {
                                    activeTab === 'tab2' && (
                                        <section id="tab2">
                                            <p>This content appears on tab 2.</p>
                                            <p>Fusce ullamcorper orci vel turpis vestibulum eu congue nisl euismod. Maecenas euismod, orci non tempus fermentum, leo metus lacinia lacus, nec ultrices quam ligula ac leo. Quisque tortor neque, vulputate quis ultricies ut, rhoncus mollis metus.</p>
                                        </section>
                                    )
                                }

                                {
                                    activeTab === 'tab3' && (
                                        <section id="tab3">
                                            <p>This content appears on tab 3.</p>
                                            <p>Sed et diam eu ipsum scelerisque laoreet quis in nibh. Proin sodales augue lectus. Maecenas a lorem a mi congue pharetra. Sed sed risus in nisi venenatis condimentum. Donec ac consectetur arcu. Integer urna neque, rutrum at pretium eu.</p>
                                        </section>
                                    )
                                }
                            </article>


                        </div>
                    </div>
                </div >
            </div >
            <TableDiamond />
        </div>
    )
}

export default DiamondMainCategory


export const TableDiamond = () => {
    return (
        <div>dsgfd</div>
    )
}




//     < div className = "row d-flex justify-content-center pt-4" >
//         <div className="col-lg-7 col-md-12 col-sm-12 col-12">
//             <nav className='tabButton row'>
//                 <div className="col-lg-4 col-md-4 col-sm-12 col-12">
//                     <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => setActiveTab('tab1')}>Shape, Carat, & Price</button>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-12 col-12">
//                     <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => setActiveTab('tab2')}>Color, Clarity, & Cut</button>
//                 </div>
//                 <div className="col-lg-4 col-md-4 col-sm-12 col-12 d-flex justify-content-around">
//                     <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => setActiveTab('tab3')}>More Filters</button>
//                     <p className="tabnav">
//                         <Link to={`#${getNextTab()}`} onClick={() => setActiveTab(getNextTab())}>
//                             <i className='ri-arrow-right-s-fill'></i>
//                         </Link>
//                     </p>
//                 </div>
//             </nav>
//             <article className='tabs'>
//                 {
//                     activeTab === 'tab1' && (
//                         <section id="tab1">
//                             <div className="col-6">
//                                 <div>
//                                     <div className='diamondShapeTitle'>Diamond Shape</div>
//                                     <div className='pt-4'>
//                                         <OwlCarousel
//                                             className='owl-theme'
//                                             loop={false}
//                                             nav={true}
//                                             mouseDrag={false}
//                                             dots={false}
//                                             responsive={responsive}
//                                             margin={10}
//                                         >
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg1} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">round</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg2} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">oval</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg3} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">emerald</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg4} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">cushion</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg5} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">pear</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg6} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">radiant</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg7} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">princess</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg8} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">marquise</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg9} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">asscher</div>
//                                             </div>
//                                             <div className="shopImgBox">
//                                                 <div className="diamondImg">
//                                                     <img src={diamondImg10} alt='img' />
//                                                 </div>
//                                                 <div className="diamondCategoryName">heart</div>
//                                             </div>
//                                         </OwlCarousel>
//                                     </div>
//                                 </div>
//                                 <div className='mt-4'>
//                                     <div className='diamondShapeTitle'>Diamond Origin</div>
//                                     <div className='mt-4'>
//                                         <button className='diamondOriginBtn bg-third text-light'>Natural Diamonds</button>
//                                         <button className='diamondOriginBtn'>Lab Diamonds</button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-6 ps-5">
//                                 <div className='carat'>
//                                     <div className='diamondShapeTitle'>Carat</div>
//                                     <div className="flex relative justify-center items-center h-20 w-full mx-auto rounded pt-4">
//                                         <div className="range-slider">
//                                             <div
//                                                 className="progress"
//                                                 style={{
//                                                     left: `${(minValue / 30.76) * 100}%`,
//                                                     right: `${100 - (maxValue / 30.76) * 100}%`
//                                                 }}
//                                             ></div>
//                                             <span className="range-min-wrapper">
//                                                 <input
//                                                     className="range-min"
//                                                     type="range"
//                                                     step="0.1"
//                                                     min="0.34"
//                                                     max="30.76"
//                                                     value={minValue}
//                                                     onChange={handleInputChange}
//                                                 />
//                                             </span>
//                                             <span className="range-max-wrapper">
//                                                 <input
//                                                     className="range-max"
//                                                     type="range"
//                                                     step="0.1"
//                                                     min="0.34"
//                                                     max="30.76"
//                                                     value={maxValue}
//                                                     onChange={handleInputChange}
//                                                 />
//                                             </span>
//                                         </div>
//                                         <div className='d-flex mt-4 justify-content-between'>
//                                             <div className="min-value numberVal">
//                                                 <input type="number" min="0.34" max="30.76" value={minValue.toFixed(2)} disabled />
//                                             </div>
//                                             <div className="max-value numberVal">
//                                                 <input type="number" min="0.34" max="30.76" value={maxValue.toFixed(2)} disabled />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='diamondPrice mt-5'>
//                                     <div className='diamondShapeTitle'>Diamond Price</div>
//                                     <div className="flex relative justify-center items-center h-20 w-full mx-auto rounded pt-4">
//                                         <div className="range-slider">
//                                             <div
//                                                 className="progress"
//                                                 style={{
//                                                     left: `${(minPriceValue / 415000) * 100}%`,
//                                                     right: `${100 - (maxPriceValue / 415000) * 100}%`
//                                                 }}
//                                             ></div>
//                                             <span className="range-min-wrapper">
//                                                 <input
//                                                     className="range-min"
//                                                     type="range"
//                                                     step="1"
//                                                     min="290"
//                                                     max="415000"
//                                                     value={minPriceValue}
//                                                     onChange={handleInputChangePrice}
//                                                 />
//                                             </span>
//                                             <span className="range-max-wrapper">
//                                                 <input
//                                                     className="range-max"
//                                                     type="range"
//                                                     step="1"
//                                                     min="290"
//                                                     max="415000"
//                                                     value={maxPriceValue}
//                                                     onChange={handleInputChangePrice}
//                                                 />
//                                             </span>
//                                         </div>
//                                         <div className='d-flex mt-4 justify-content-between'>
//                                             <div className="min-value numberVal">
//                                                 <input type="number" min="290" max="415000" value={minPriceValue} disabled />
//                                             </div>
//                                             <div className="max-value numberVal">
//                                                 <input type="number" min="290" max="415000" value={maxPriceValue} disabled />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     )
//                 }

//                 {
//                     activeTab === 'tab2' && (
//                         <section id="tab2">
//                             <p>This content appears on tab 2.</p>
//                             <p>Fusce ullamcorper orci vel turpis vestibulum eu congue nisl euismod. Maecenas euismod, orci non tempus fermentum, leo metus lacinia lacus, nec ultrices quam ligula ac leo. Quisque tortor neque, vulputate quis ultricies ut, rhoncus mollis metus.</p>
//                         </section>
//                     )
//                 }

//                 {
//                     activeTab === 'tab3' && (
//                         <section id="tab3">
//                             <p>This content appears on tab 3.</p>
//                             <p>Sed et diam eu ipsum scelerisque laoreet quis in nibh. Proin sodales augue lectus. Maecenas a lorem a mi congue pharetra. Sed sed risus in nisi venenatis condimentum. Donec ac consectetur arcu. Integer urna neque, rutrum at pretium eu.</p>
//                         </section>
//                     )
//                 }
//             </article>


//         </div>
// </div >
{/* <OwlCarousel>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg1} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg2} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg3} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg4} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg5} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg6} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg7} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg8} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg9} alt='img' />
                                                                </div>
                                                            </div>
                                                            <div className="shopImgBox">
                                                                <div className="diamondImg">
                                                                    <img src={diamondImg10} alt='img' />
                                                                </div>
                                                            </div>
                                                        </OwlCarousel> */}
//     < OwlCarousel
// className = 'owl-theme'
// loop
// nav = { true}
// dots = { false}
// responsive = { responsive }
// margin = { 10}
//     >
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg1} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg2} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg3} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg4} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg5} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg6} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg7} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg8} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg9} alt='img' />
//     </div>
// </div>
// <div className="shopImgBox">
//     <div className="diamondImg">
//         <img src={diamondImg10} alt='img' />
//     </div>
// </div>
// </OwlCarousel >


{/* <p className="tabnav"><a href="#tab2" onClick={() => setActiveTab('tab2')}><i className='ri-arrow-right-s-fill'></i></a></p> */ }
{/* <p className="tabnav"><a href="#tab3" onClick={() => setActiveTab('tab3')}><i className='ri-arrow-right-s-fill'></i></a></p> */ }
{/* <p className="tabnav"><a href="#tab1" onClick={() => setActiveTab('tab1')}><i className='ri-arrow-right-s-fill'></i></a></p> */ }

{/* <article class="tabs">
                        <section id="tab1">
                            <h2><a href="#tab1">Tab 1</a></h2>
                            <p>This content appears on tab 1.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia elit nec mi ornare et viverra massa pharetra. Phasellus mollis, massa sed suscipit pharetra, nunc tellus sagittis nunc, et tempus dui lorem a ipsum.</p>
                            <p class="tabnav"><a href="#tab2">next ➧</a></p>
                        </section>
                        <section id="tab2">
                            <h2><a href="#tab2">Tab 2</a></h2>
                            <p>This content appears on tab 2.</p>
                            <p>Fusce ullamcorper orci vel turpis vestibulum eu congue nisl euismod. Maecenas euismod, orci non tempus fermentum, leo metus lacinia lacus, nec ultrices quam ligula ac leo. Quisque tortor neque, vulputate quis ultricies ut, rhoncus mollis metus.</p>
                            <p class="tabnav"><a href="#tab3">next ➧</a></p>
                        </section>
                        <section id="tab3">
                            <h2><a href="#tab3">Tab 3</a></h2>
                            <p>This content appears on tab 3.</p>
                            <p>Sed et diam eu ipsum scelerisque laoreet quis in nibh. Proin sodales augue lectus. Maecenas a lorem a mi congue pharetra. Sed sed risus in nisi venenatis condimentum. Donec ac consectetur arcu. Integer urna neque, rutrum at pretium eu.</p>
                            <p class="tabnav"><a href="#tab1">next ➧</a></p>
                        </section>
                    </article> */}