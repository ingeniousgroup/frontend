import { Route, Routes, useNavigate,useLocation } from 'react-router';
import './propertyLocation.css'
import Flate from '../../PostPropertyForms/Flate/Flate';
import { useRef, useState } from 'react';
import { event } from 'jquery';

function PropertyLocation(props) {

    const HouseAllDetails = useLocation();
    const navigate = useNavigate();
    var userAddress
    var userDescription
    var locationTag 

    const findCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            document.getElementById('demo5').defaultValue = position.coords.latitude+"/"+position.coords.longitude;
            locationTag =  position.coords.latitude+"/"+position.coords.longitude;
        });
    }
    const PropertyDetails = () => {
        const currentLocation = {locationTag,userDescription,userAddress};
        navigate("/uploadImage",{state:{currentLocation,HouseAllDetails}});
    }
    const selectCity = (event)=>{
        locationTag = event.target.value;
    }
    return <>
        <div className='row mb-2 inner'>
            <div className='col-md-3  bg-c'>

            </div>
            <div className='col-md-6 p-4'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h4 className='welcome fs-3'>
                            Where your property Located ?
                        </h4>
                    </div>
                    <div className='col-md-12 '>
                        <h6 className='mess mt-3 mb-0 ms-2'>
                            An accurate location can help you <br />connect with right buyers....
                        </h6>
                    </div>
                </div>
                <div className='row mt-5 '>
                    <div className='col-md-12 ms-2'>
                        <span>
                            <input type="text"  onChange={selectCity} list="browsers" className="locationfinder" id='demo5'/>
                            <datalist id='browsers' >
                                <option value='indore' />
                                <option value='mumbai' />
                                <option value='bhopal' />
                                <option value='ujjain' />
                                <option value='dewas' />
                                <option value='harda' />
                                <option value='chattishgarh' />
                                <option value='agra' />
                                <option value='kanpur' />
                                <option value='delhi' />
                            </datalist>
                            <span className='locationFinder'>
                                <i className="fa fa-map-marker ms-1" aria-hidden="true" ></i>
                                <label onClick={findCurrentLocation} className='find'>
                                    Find My Location
                                </label>
                            </span>
                        </span>
                    </div>
                </div>
                <div className='row mt-4 '>
                    <div className='col-md-12  ms-2'>
                    <h4 className='mt-4 welcome fs-4'>Fill Up Your Address</h4>
                    <h6 className='mess mt-3 mb-4 ms-2'>
                            Enter full address to attract whit <br />New user & customer
                        </h6>
                    <div className='mt-5'>
                        <input onChange={(event)=>{userAddress=event.target.value}} id='textarea1' placeholder='Your Full Address Here' type='text'/>
                    </div>
                    </div>
                </div>
                <div className='row mt-4 '>
                    <div className='col-md-12  ms-2'>
                    <h4 className='mt-4 welcome fs-4'>Add Some Description About Property</h4>
                    <h6 className='mess mt-3 mb-4 ms-2'>
                            List your property description for better <br />experience & connections
                        </h6>
                    <div className='mt-5'>
                        <input onChange={(event)=>{userDescription=event.target.value}} id='textarea2' placeholder='Your Property Description Here' type='text'/>
                    </div>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-12  ms-2'>
                        <button onClick={PropertyDetails} className='continue'>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
            <div className='col-md-3 bg-c'>

            </div>
        </div>
    </>
}

export default PropertyLocation;