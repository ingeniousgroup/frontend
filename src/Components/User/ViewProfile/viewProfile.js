import { useDispatch, useSelector } from 'react-redux';
import './viewProfile.css';
import { useEffect, useState } from 'react';
import { currentUser } from '../../../redux-config/UserSlice';
import { viewProperty } from '../../../redux-config/propertyOfOwnerSlice';
import { setLocation } from '../../../redux-config/locationSlice';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../../redux-config/WebApi/api';
import { current } from '@reduxjs/toolkit';
import setProperty from "../../../redux-config/propertyOfOwnerSlice"
import { tenantRequest } from '../../../redux-config/tenantRequestSlice';
import Signin from '../signin';

function ViweProfile() {
    const dispatch=useDispatch();

    const { currentUser } = useSelector((state) => state.user);
    const [ownerFunctionality, setOwnerFunctionality] = useState('');
    const navigate = useNavigate();
    const {properties} = useSelector((state) => state.ownerProperty);
    const {requestTenant} = useSelector((state)=>state.requestTenants);
    console.log(requestTenant);
    const removeProperty = async (propertyId) => {
        if (window.confirm("are you sure ?")) {
            try {
                let response = await axios.post(api.REMOVE_PROPERTY_OF_OWNER, { propertyId: propertyId });
                window.alert(response.data.message);
                //   data.findIndex((data,index)=>{
                //     if(data._id==propertyId){
                //        data.splice(index,1);
                //        dispatch(setProperty([...data]));
                //     }

                //   })
                    
                
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
    
    const setInstraction = (instraction)=>{
        setOwnerFunctionality(instraction);
        if(instraction == "request")
            dispatch(tenantRequest(currentUser));   
    }
    var data1;
    return <>
        <div style={{ marginTop: "270px" }}>

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
                                <button className='btn btn-outline-secondary' onClick={() => { setInstraction("details") }}>
                                    Property Details
                                </button>
                            </div>
                            <div className='col-md-6 text-center fs-4'>
                                <button className='btn btn-outline-primary' onClick={() => { setInstraction("request") }}>
                                    Property Request
                                </button>
                            </div>
                        </div>
                        {ownerFunctionality == '' && <h5 className='mt-5 text-center text-danger'>you can check your all details here</h5>}
                        {ownerFunctionality == "request" && <>
                            
                            {requestTenant?.map((data,index)=><>
                                <div className='mt-4 p-1'><div className=' row rowDataDown'>
                                    <div className='col-md-3 mt-2 p-1  text-center'>
                                        {}
                                    </div>
                                    <div className='col-md-3 p-3 text-right'>
                                    {}

                                    </div>
                                    <div className='col-md-3 p-3 text-center'>
                                        {}
                                    </div>
                                    <div className='col-md-3 p-3 text-center row'>
                                        <button className='btn btn-success disabled col-md-5' >
                                            Active
                                        </button>
                                        <button className='btn btn-outline-danger  ms-2 col-md-6' onClick={() => removeProperty(properties._id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                </div></>)}
                        </>
                        }
                        {ownerFunctionality == "details" && <>
                           {properties?.map((data,indext)=><div className='mt-4 p-1'><div className=' row rowDataDown'>
                                    <div className='col-md-3 mt-2 p-1  text-center'>
                                        <img src={data.imagesUrlArray[0]} height='50' width='50' onClick={() => viewDescription(data)} />
                                    </div>
                                    <div className='col-md-3 p-3 text-right'>
                                        {data.address.substring(16, 0) + "..."}

                                    </div>
                                    <div className='col-md-3 p-3 text-center'>
                                        {data.houseCategory}
                                    </div>
                                    <div className='col-md-3 p-3 text-center row'>
                                        <button className='btn btn-success disabled col-md-5' >
                                            Active
                                        </button>
                                        <button className='btn btn-outline-danger  ms-2 col-md-6' onClick={() => removeProperty(properties._id)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                </div>)}
                        </>

                        }
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default ViweProfile;