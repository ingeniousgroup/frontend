import { useState } from 'react';
import './HouseDescription.css';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function HouseDescription() {
    const [image , setImage] = useState('/images/home1.jpg');
    const [image2 , setImage2] = useState('/images/home2.jpg');
    const [image3 , setImage3] = useState('/images/home3.jpg');

    const change = (event)=>{
        setImage(event.target.src);
        
    }
    return <>
        <div className='container ' id='outer'>
            <div className='row'>
                <div id='main' className='col-lg-8 col-md-8 text-center mt-2'>
                    <div className='row'>
                        <div className='col-md-6 p-2'>
                            <img  src={image} className="logimg" height={400} width="100%" />
                            <div className='row mt-2'>
                                <div className='col-md-6'>
                                    <img onClick={change} src={image2} className="logimg" height={150} width="100%" />
                                </div>
                                <div className='col-md-6'>
                                    <img onClick={change} src={image3} className="logimg" height={150} width="100%" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 p-3' id='side'>
                            <div className='row ' id='desc'>
                                <div className='col-md-6 text-left  p-2'>
                                    <p>
                                        <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                                        <span className='ms-2 config' >Configuration</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                        2 bedroom, 2 bathrooms
                                    </p><hr/>
                                    <p>
                                        <i class="fa fa-map-marker ms-1" aria-hidden="true"></i>
                                        <span className='ms-2 config' >Area</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                        15 / 40 <span className='text-info ms-2'>(in feet)</span>
                                    </p><hr/>
                                    <p>
                                        <span className='ms-2 config' >Furnishing</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                        Semi-furnished
                                    </p><hr/>
                                    <p>
                                        <i class="fa fa-calendar ms-1"></i>
                                        <span className='ms-2 config' >Available Date</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                        16 - may -23
                                    </p><hr/>
                                </div>
                                <div className='col-md-6 text-left p-2'>
                                    <p>
                                        <span className='ms-2 config' >Rent</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                        <i class="fa fa-inr" aria-hidden="true"></i> 1500/-
                                    </p><hr/>
                                    <p>
                                        <i class="fa fa-map-marker ms-1" aria-hidden="true"></i>
                                        <span className='ms-2 config' >Address</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                        vijay nagar,indore
                                    </p><hr/>
                                    <p>
                                        <i class="fa fa-calendar ms-1"></i>
                                        <span className='ms-2 config' >Available For</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                         family only
                                    </p><hr/>
                                    <p>
                                        <i class="fa fa-calendar ms-1"></i>
                                        <span className='ms-2 config' >Posted On</span>
                                    </p>
                                    <p className='ms-5 contant'>
                                         17 - mar - 22
                                    </p><hr/>
                                </div>
                                <div className='row mt-2' id='down'>
                                    <div className='col-md-12'>
                                        <h4 className='text-left mb-4 '>
                                            <u>About Property</u>
                                        </h4>
                                        <p>
                                        I want to rent out a 2 bhk apartment available in db pride,talawali chanda, <br/>indore.Located in a serene place, it has a super built-Up area of 600 <br/>sq.Ft. It is an attractive and a newly constructed property. 
                                        </p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default HouseDescription;