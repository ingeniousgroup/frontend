import { useState } from 'react';
import './postProperty.css'
import { Outlet, Route, Routes, useNavigate } from 'react-router';
import Flate from '../../PostPropertyForms/Flate/Flate';
import Home from '../../../Home/Home';
import PropertyLocation from '../PropertyLocation/propertyLocation';
import Navbar from '../../../Headers.js/Navbar/navbar';
import { Link } from 'react-router-dom';

function PostProperty() {
    const [propertyType, setPropertyType] = useState("commercial");
    const [property, setProperty] = useState("0");
    const [locationElement , setLocationElement] = useState("0");
    const navigate = useNavigate();
    return <>
            <div className='row inner'>
                <div className='col-md-3  bg-c'>

                </div>
                <div className='col-md-6 p-4'>
                    <div className='row'>
                        {/* <div className='col-md-12 text-center'>
                            <h4 className='bg-dark text-light fs-3'>Post Property</h4><hr/>
                        </div> */}
                        <div className='col-md-12 '>
                            <h4 className='welcome fs-3'>
                                Welcome back Mr.Andrew Aderson<br />
                                fill out basic details
                            </h4>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <p className='fs-5'>
                                <u>what kind of property do you have ?</u>
                            </p>
                            <input type='radio' name='propertyType' id='commercial' onClick={(event) => setPropertyType(event.target.id)} /><label for='commercial' className='ms-2 com-radio'>Commercial</label>
                            <input type='radio' className='ms-5' name='propertyType' id='residential' onClick={(event) => setPropertyType(event.target.id)} /><label for='residential' className='ms-2 res-radio'>Residential</label>
                            {propertyType == "commercial" && <p className=''>
                                <div className='row mt-4 ms-3 com-outer'>
                                    <div className='col-md-12 com-out-inner'>
                                        <Link to="/office"> 
                                            <button name='office' className='ms-3 com-element'>
                                                Office
                                            </button>
                                        </Link>
                                        <Link to="/plot"> 
                                            <button name='plot' className='ms-3 com-element'>
                                               Plot
                                            </button>
                                        </Link>
                                        <Link to="/other"> 
                                            <button name='other' className='ms-3 com-element'>
                                                Others
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </p>}
                            {propertyType == "residential" && <p className=''>
                                <div className='row mt-4 ms-3 com-outer'>
                                    <div className='col-md-12 com-out-inner'>
                                       <Link to="/flat"> 
                                            <button name='flat' className='ms-3 com-element2'>
                                                Flat/Appartment
                                            </button>
                                        </Link>
                                        <Link to="/villa"> 
                                            <button name='villa' className='ms-3 com-element'>
                                                Villa
                                            </button>
                                        </Link>
                                        <Link to="/formHouse"> 
                                            <button name='formHouse' className='ms-3 com-element2'>
                                                FormHouse
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </p>}

                        </div>
                    </div>
                    
                </div>
                <div className='col-md-3 bg-c'>

                </div>
            </div>
            <Outlet/>
    </>

}

export default PostProperty;