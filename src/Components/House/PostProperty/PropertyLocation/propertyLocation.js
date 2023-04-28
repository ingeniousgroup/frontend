import { Route, Routes, useNavigate,useLocation } from 'react-router';
import './propertyLocation.css'
import Flate from '../../PostPropertyForms/Flate/Flate';
import { useRef } from 'react';

function PropertyLocation(props) {

    const HouseAllDetails = useLocation();
    

    const navigate = useNavigate();
    let latitude = useRef('');
    let longitude = useRef('');
    const findCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            document.getElementById('demo').defaultValue = position.coords.latitude;
        });
    }
    const PropertyDetails = () => {
        const currentLocation = {latitude,longitude};
        navigate("/uploadImage",{state:{currentLocation,HouseAllDetails}});
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
                <div className='row mt-5'>
                    <div className='col-md-12 ms-2'>
                        <span>
                            <input type="text" list="browsers" className="locationfinder" id='demo' />
                            <datalist id='browsers'>
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
                <div className='row mt-4'>
                    <div className='col-md-12  ms-2'>
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