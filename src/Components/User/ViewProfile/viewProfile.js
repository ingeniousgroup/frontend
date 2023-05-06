import { useDispatch, useSelector } from 'react-redux';
import './viewProfile.css';
import { useEffect, useState } from 'react';
import { fetchRequestByTenant } from '../../../redux-config/requestByTenantSlice';
import { currentUser } from '../../../redux-config/UserSlice';
import { viewProperty } from '../../../redux-config/propertyOfOwnerSlice';
import { setLocation } from '../../../redux-config/locationSlice';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../../redux-config/WebApi/api';
import { current } from '@reduxjs/toolkit';

function ViweProfile() {
    const { currentUser } = useSelector((state) => state.user);
    const [ownerFunctionality, setOwnerFunctionality] = useState('');
    const navigate = useNavigate();
    const data = useSelector((state) => state.ownerProperty);

    // for (let ele of data.ownerProperty) {
    //     for (let element of ele) {
    //         console.log(element._id);
    //     }
    // }
    const removeProperty = async (propertyId) => {
        if (window.confirm("are you sure ?")) {
            try {
                let response = await axios.post(api.REMOVE_PROPERTY_OF_OWNER, { propertyId: propertyId });
                if (response.data.status) {
                    window.alert("ho gai delete");
                    
                }
            }
            catch (err) {
                console.log(err);
            }
        }

    }
    const viewDescription = (property) => {
        navigate("/viewDiscription", {
            state: {
                property: property
            }
        });
    }

    return <>
        <div style={{ marginTop: "70px" }}>

        </div>
        <div className='profileMain'>
            <div className='row rowmain'>
                <div className='col-md-4 leftSide ms-2 '>
                    <div className='row'>
                        <div className='col-md-12 mt-4 text-center mb-4 profileDiv'>
                            <span className='profile'>
                                <img src='/images/profile.webp' heigth='130' width='130' />
                            </span>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-md-6 profileHeading text-center mt-4'>
                            Name :
                        </div>
                        <div className='col-md-6 mt-4'>
                            {currentUser?.name}
                        </div>
                    </div>
                    <div className='row mt-2 mb-2 '>
                        <div className='col-md-6 profileHeading text-center mt-4'>
                            Email :
                        </div>
                        <div className='col-md-6 mt-4'>
                            {currentUser?.email}
                        </div>
                    </div>
                    <div className='row mt-2 mb-2 '>
                        <div className='col-md-6 profileHeading text-center mt-4'>
                            Role :
                        </div>
                        <div className='col-md-6 mt-4'>
                            {currentUser?.role}
                        </div>
                    </div>
                    <div className='row mt-2 mb-2 '>
                        <div className='col-md-6 profileHeading text-center mt-4'>
                            Contact :
                        </div>
                        <div className='col-md-6 mt-4'>
                            {currentUser?.contact}
                        </div>
                    </div>
                    <div className='row mt-2 mb-2 '>
                        <div className='col-md-12'>
                            <p className=' fs-6 mt-4 offset-2'>
                                One person lived in the city becouse of your<br />
                                performance at
                                our plateform
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-7 border rightSide '>
                    <div className='p-4'>
                        <div className='row'>
                            <div className='col-md-6 text-center fs-4'>
                                <button className='btn btn-outline-secondary' onClick={() => { setOwnerFunctionality("details") }}>
                                    Property Details
                                </button>
                            </div>
                            <div className='col-md-6 text-center fs-4'>
                                <button className='btn btn-outline-primary' onClick={() => { setOwnerFunctionality("request") }}>
                                    Property Request
                                </button>
                            </div>
                        </div>
                        {ownerFunctionality == "request" && <>
                            {
                                data.ownerProperty.map(ele => ele.map(element => <div className='mt-4 p-1'><div className=' row rowDataDown'>
                                    <div className='col-md-3 mt-2 p-1  text-center'>
                                        <img src={element.imagesUrlArray[0]} height='50' width='50' />
                                    </div>
                                    <div className='col-md-3 p-3 text-right'>
                                        {element.address.substring(16, 0) + "..."}

                                    </div>
                                    <div className='col-md-3 p-3 text-center'>
                                        {element.houseCategory}
                                    </div>
                                    <div className='col-md-3 p-3 text-center row'>
                                        <button className='btn btn-outline-success col-md-5'>
                                            Accept
                                        </button>
                                        <button className='btn btn-outline-danger  ms-2 col-md-6'>
                                            Reject
                                        </button>
                                    </div>
                                </div>
                                </div>
                                ))
                            }
                        </>
                        }
                        {ownerFunctionality == "details" && <>
                            {
                                data.ownerProperty.map(ele => ele.map(element => <div className='mt-4 p-1'><div className=' row rowDataDown'>
                                    <div className='col-md-3 mt-2 p-1  text-center'>
                                        <img src={element.imagesUrlArray[0]} height='50' width='50' onClick={() => viewDescription(element)} />
                                    </div>
                                    <div className='col-md-3 p-3 text-right'>
                                        {element.address.substring(16, 0) + "..."}

                                    </div>
                                    <div className='col-md-3 p-3 text-center'>
                                        {element.houseCategory}
                                    </div>
                                    <div className='col-md-3 p-3 text-center row'>
                                        <button className='btn btn-success disabled col-md-5' >
                                            Active
                                        </button>
                                        <button className='btn btn-outline-danger  ms-2 col-md-6' onClick={() => removeProperty(element._id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                </div>
                                ))
                            }
                        </>

                        }
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default ViweProfile;