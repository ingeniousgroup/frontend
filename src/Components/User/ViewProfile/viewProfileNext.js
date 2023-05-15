import { Link, useNavigate } from 'react-router-dom';
import './viewPorfileNext.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTenantRequest, tenantRequest } from '../../../redux-config/tenantRequestSlice';
import api from '../../../redux-config/WebApi/api';
import axios from 'axios';
import Swal from 'sweetalert2';
import { createReducer } from '@reduxjs/toolkit';
import NavebarNext from '../../Headers.js/Navbar/navbarNext';
function ViewProfileNext() {
    let [behave, setBehave] = useState('');
    const { currentUser } = useSelector((state) => state.user);
    const { properties } = useSelector((state) => state.ownerProperty);
    const { requestTenant } = useSelector((state) => state.requestTenants);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [allRequest, setAllRequest] = useState([]);
    const [allProperty, setAllProperty] = useState([]);
    const [subscriptionData, setSubscriptionData] = useState('');

    useEffect(() => {
        setAllProperty(properties);
    }, [properties]);

    const rejectRequest = (data) => {
        if (window.confirm("reject this request")) {
            dispatch(removeTenantRequest(data));
            setAllRequest(prevItems => prevItems.filter(item => item !== data));
        }
    }

    const ownerFunctionality = async (identify) => {
        if (identify == 'request') {
            dispatch(tenantRequest(currentUser));
            setAllRequest(requestTenant);
            console.log("*")
            console.log(allRequest);
            console.log("*")
        }
        else if (identify == 'subscription') {
            let response = await axios.post(api.SHOW_SUBSCRIPTION, { userId: currentUser._id })
            console.log(response.data.subscriptionList);
            setSubscriptionData(response.data.subscriptionList);
        }
        setBehave(identify)
    }

    const viewDescription = (property) => {
        navigate("/viewDiscription", {
            state: {
                property: property
            }
        });
    }

    const removeProperty = async (data) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "question",
            buttons: true,
            dangerMode: true,
            confirmButtonColor: '#3085d6',
            showCancelButton: true,
            cancelButtonColor: '#d33',
        })
            .then(async (willDelete) => {
                if (willDelete.isConfirmed) {
                    setTimeout(() => {
                        Swal.fire({
                            title: "deleted",
                            icon: "success",
                            buttons: false,
                        });
                    }, 300)
                    let response = await axios.post(api.REMOVE_PROPERTY_OF_OWNER, { _id: data._id });
                    if (response.data.status) {
                        let responseAgain = await axios.post(api.REMOVE_PROPERTY_DETAILS, { propertyID: data._id });
                        if (responseAgain.data.status) {
                            setAllProperty(prevItems => prevItems.filter(item => item !== data));
                        }
                    }
                } else {
                    setTimeout(() => {
                    }, 1000)

                    setTimeout(() => {
                        Swal.fire({
                            title: "Your Property is safe",
                            icon: 'error',
                            buttons: false
                        });
                    }, 300);

                }
            });

    }
    return <>
        <NavebarNext />
        <div className='container-fluid'>
            <div className=' row mb-5'>
                <div className='col-2 border sidebar '>
                    <div className='profileArea p-3 ms-4 '>
                        <span className='photo'>
                            <img src='/images/profile.webp' id='img' />
                        </span>
                        <span>
                            <h3 className='ms-3'>
                                {currentUser.name}
                            </h3>
                        </span>

                    </div><hr />
                    <div className='ms-2 profileContent p-4'>
                        <Link className='l ' onClick={() => ownerFunctionality("details")}>
                            <div className='b-b-default link p-2'>
                                <i class="fa fa-tags"></i>Your Property
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality('profile')}>
                            <div className=' link1 p-2 b-b-default'>
                                <i class="fa fa-user-circle-o"></i> View Profile
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality("request")}>
                            <div className=' link2 p-2 b-b-default'>
                                <i class="fa fa-crosshairs"></i> All Requests
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality('subscription')}>
                            <div className=' link3 p-2 b-b-default'>
                                <i class="fa fa-random"></i> Subscription
                            </div>
                        </Link>
                    </div>
                    {/* <div className='proLast'>
                        <img src='/images/d3.webp' id='downphoto' />
                    </div> */}
                </div>
                <div className='col-10 border contentbar  p-5'>
                    <div className='bg-secondary staticTop'>
                        <div className='row p-4'>
                            <div className='col-4 common'>
                                <h1 className='mt-4 text-white heading ms-3 fs-2 '>
                                    Enjoy Your  <br />
                                    First Home With Us

                                </h1>
                            </div>
                            <div className='col-4  common '>
                                <img src='/images/homehand.png' id='topPhoto' />
                            </div>
                            <div className='col-4 p-3 common'>
                                <div className='row p-3 total'>
                                    <div className='col-5 bg-c all1 text-center '>
                                        <h5 className='fs-5 fw-3 ' id='totalproperty'>Total Property</h5>
                                    </div>
                                    <div className='ms-4 col-5 p-3 bg-c all text-center '>
                                        <h4 className='mt-1'>{properties.length}..</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 container-fluid  text-center rightside p-3'>
                        {behave == 'profile' && <>
                            <div style={{ width: "100%" }}>
                                <div class="">
                                    <div class="row container-fluid d-flex justify-content-center">
                                        <div class="col-xl-11 col-md-12 mt-2">
                                            <div class=" user-card-full">
                                                <div class="row m-l-0 m-r-0">
                                                    <div class="col-sm-4 bg-c-lite-green user-profile bg-secondary">
                                                        <div class="card-block text-center text-white">
                                                            <div class="m-b-20 ms-2">
                                                                <img src="/images/profile.webp" class="img-radius" alt="User-Profile-Image" />
                                                            </div>
                                                            <h6 class="fs-3">{currentUser.name}</h6>
                                                            <p>{currentUser.role}</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-8 pt-5 bg-light border">
                                                        <div class="card-block">
                                                            <h5 class="m-b-20 p-b-5 b-b-default f-w-600">About Me</h5>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <p class="m-b-10 f-w-600 ">Email</p>
                                                                    <h6 class="text-muted f-w-400">{currentUser.email}</h6>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <p class="m-b-10 f-w-600">Phone</p>
                                                                    <h6 class="text-muted f-w-400">{currentUser.contact}</h6>
                                                                </div>
                                                            </div>
                                                            <h5 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Location</h5>
                                                            <div class="row">
                                                                <div class="col-sm-6">
                                                                    <p class="m-b-10 f-w-600">CurrentLocation</p>
                                                                    <h6 class="text-muted f-w-400">Indore</h6>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <p class="m-b-10 f-w-600">Check Your Properties</p>
                                                                    <h6 class="text-muted f-w-400" onClick={() => ownerFunctionality("details")}><Link>Click Here</Link></h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>}
                        {behave == 'subscription' && <>
                            <div className='container-fluid'>
                                <div>
                                    <div className='staticTop1 mt-4 shadow'>
                                        <div className='row ms-5'>
                                            <div className='col-4 common offset-1'>
                                                <h1 className='mt-3 text-white heading ms-3 fs-2 '>
                                                    Now you are Enjoying  <br />
                                                </h1>
                                            </div>
                                            <div className='col-4 offset-1 p-3'>
                                                <h1 className='mt-4 text-white heading ms-3 fs-2 '>
                                                    <label><i class="fa fa-inr fs-2" aria-hidden="true"></i></label>{subscriptionData.subscriptionPrice}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className='row '>
                                            <div className='col-6  startDate p-3'>
                                                <h5 className='mt-4 fs-4' style={{fontWeight:"600"}}>
                                                    Your Subscription  Starts From !
                                                </h5>
                                                <h3 className='text-success'>
                                                    {subscriptionData.startDate}
                                                </h3>
                                            </div>
                                            <div className='col-6  endDate p-3'>
                                                <h5 className='mt-4 fs-4'>
                                                    <b>Your Subscription Expire At !</b>
                                                </h5>
                                                <h3 className='text-danger'>
                                                    {subscriptionData.subscriptionExpiry}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>}
                        {behave == 'details' && <>
                            {allProperty?.map((data, indext) => <div className='row dataPhoto p-3 mb-3 '>
                                <div className='col-2 ps-4'>
                                    <img src={api.PORT + data.imagesUrlArray[0]} height={125} id='img1' width={230} onClick={() => viewDescription(data)} />
                                </div>
                                <div className='col-2  pt-4 ps-5 text-left' style={{ marginLeft: "85px" }}>
                                    <h6 className='fs-6'><i class="fa fa-list-ul fs-5 text-primary" aria-hidden="true"></i>
                                        {data.description.substring(0, 70) + "......"}</h6>
                                </div>
                                <div className='col-3  ps-5 pt-2'>
                                    <p className='fs-5'><i class="fa fa-street-view fs-3" aria-hidden="true"></i>
                                        {data.address}</p>
                                    <p className='text-danger'><i className="fa fa-clock-o" aria-hidden="true"></i>
                                        Posted At : {data.date}</p>
                                </div>
                                <div className='col-4 pt-4 ps-5 ms-1'>
                                    <button className='btn btn-danger' onClick={() => removeProperty(data)}>Remove Property</button>
                                    <button className='btn btn-primary ms-2' data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Reviews</button>
                                    <div class="collapse" id="collapseExample" style={{ position: "relative" }}>
                                        <div class="card card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </div>
                                </div>

                            </div>)}
                        </>}
                        {behave == 'request' && <>
                            {allRequest?.map((data, indext) => <div className='row mt-2 dataPhoto p-3'>
                                <div className='col-3 '>
                                    <img src={api.PORT + data.propertyId?.imagesUrlArray[0]} height={130} id='img1' width={230} />
                                </div>
                                <div className='col-3  pt-3'>
                                    <h6 className='fs-6'>{data.userId.name}</h6>
                                    <h6 className='fs-6'>{data.userId.contact}</h6>
                                    <h6 className='fs-6'>{data.userId.email}</h6>
                                </div>
                                <div className='col-3 mt-3 pt-2'>
                                    <p className='fs-4'>{ }</p>
                                    <p className='text-danger'>Requested At : {data.date}</p>
                                </div>
                                <div className='col-3 pt-4 mt-2'>
                                    <button className='btn btn-outline-success'>Accept</button>
                                    <button className='btn btn-outline-danger ms-2' onClick={() => rejectRequest(data)}>Reject</button>
                                </div>
                            </div>)}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ViewProfileNext;