import { Link, useNavigate } from 'react-router-dom';
import './viewPorfileNext.css';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTenantRequest, tenantRequest } from '../../../redux-config/tenantRequestSlice';
import api from '../../../redux-config/WebApi/api';
import axios from 'axios';
import Swal from 'sweetalert2';
function ViewProfileNext() {
    let [behave, setBehave] = useState('');
    const { currentUser } = useSelector((state) => state.user);
    const { properties } = useSelector((state) => state.ownerProperty);
    const { requestTenant } = useSelector((state) => state.requestTenants);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [allRequest, setAllRequest] = useState([]);
    const [allProperty, setAllProperty] = useState([]);

    useEffect(() => {
        setAllProperty(properties);
    }, [properties]);

    const rejectRequest = (data) => {
        if (window.confirm("reject this request")) {
            dispatch(removeTenantRequest(data));
            setAllRequest(prevItems => prevItems.filter(item => item !== data));
        }
    }

    const ownerFunctionality = (identify) => {
        if (identify == 'request') {
            dispatch(tenantRequest(currentUser));
            setAllRequest(requestTenant);
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
            showCancelButton:true,
            cancelButtonColor: '#d33',
        })
            .then(async(willDelete) => {
                if (willDelete.isConfirmed) {
                    setTimeout(() => {
                        Swal.fire({
                            title:"deleted",
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
                            title:"Your Property is safe",
                            icon: 'error',
                            buttons: false
                        });
                    }, 300);

                }
            });

    }
    return <>
        <div className='container-fluid'>
            <div className=' row mb-5'>
                <div className='col-3 border sidebar '>
                    <div className='profileArea p-3'>
                        <span className='photo '>
                            <img src='/images/profile.webp' id='img' />
                        </span>
                        <span className='ms-2 ' style={{ marginTop: "6.5vh" }}>
                            <h3 className='name fs-3'>
                                {currentUser.name + "..."}
                            </h3>
                            <label className=' mt-3 acti text-center p-2'>
                                <i className="fa fa-check fs-5 ms-3" aria-hidden="true">ACTIVE</i>
                            </label>
                        </span>

                    </div><hr />
                    <div className='ms-2 profileContent p-3'>
                        <Link className='l ' onClick={() => ownerFunctionality("details")}>
                            <div className=' link p-2'>
                                Your Property
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality('')}>
                            <div className=' link1 p-2'>
                                Recent Users
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality("request")}>
                            <div className=' link2 p-2'>
                                All Requests
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality('')}>
                            <div className=' link3 p-2'>
                                Delete Account
                            </div>
                        </Link>
                    </div>
                    <div className='proLast'>
                        <img src='/images/d3.webp' id='downphoto' />
                    </div>
                </div>
                <div className='col-9 border contentbar  p-3' >
                    <div className='bg-dark staticTop'>
                        <div className='row p-3'>
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
                                    <div className='ms-4 col-5  p-3 all text-center'>
                                        <h4>{properties.length}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 container-fluid  text-center rightside p-3'>
                        {behave == '' && <>
                            <center>
                                <h2 className='mt-1 ms-2'>
                                    Welcome back Mr.{currentUser.name + ".."}
                                </h2>
                                <p>
                                    you can manage your profile and your dashboard
                                </p>
                                <img src='/images/wel.avif' width={800} height={300} />
                            </center>
                        </>}
                        {behave == 'wishlist' && <>
                            <div className='container mt-5 bg-warning'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <h4>
                                            your wishList is here ..........
                                        </h4>
                                    </div>
                                    <div className='col-6'>
                                        <h4>total wishList items...........</h4>
                                    </div>
                                </div>
                            </div>
                        </>}
                        {behave == 'details' && <>
                            {allProperty?.map((data, indext) => <div className='row mt-2 dataPhoto p-3'>
                                <div className='col-2 '>
                                    <img src={api.PORT + data.imagesUrlArray[0]} height={130} id='img1' width={200} onClick={() => viewDescription(data)} />
                                </div>
                                <div className='col-2  pt-4 text-left' style={{ marginLeft: "85px" }}>
                                    <h6 className='fs-6'><i className="fa fa-list-ul fs-5 text-primary" aria-hidden="true"></i>
                                        {data.description.substring(0, 70) + "......"}</h6>
                                </div>
                                <div className='col-3  p-3'>
                                    <p className='fs-5'><i className="fa fa-street-view fs-3" aria-hidden="true"></i>
                                        {data.address}</p>
                                    <p className='text-danger'><i className="fa fa-clock-o" aria-hidden="true"></i>
                                        Posted At : {data.date}</p>
                                </div>
                                <div className='col-4 pt-5'>
                                    <button className='btn btn-danger' onClick={() => removeProperty(data)}>Remove Property</button>
                                    <button className='btn btn-primary ms-2'>Reviews</button>
                                </div>
                            </div>)}
                        </>}
                        {behave == 'request' && <>
                            {allRequest?.map((data, indext) => <div className='row mt-2 dataPhoto p-3'>
                                <div className='col-3 '>
                                    <img src={api.PORT + data.propertyId?.imagesUrlArray[0]} height={130} id='img1' width={230} />
                                </div>
                                <div className='col-3  pt-4'>
                                    <h6 className='fs-6'>{data.userId.name}</h6>
                                    <h6 className='fs-6'>{data.userId.contact}</h6>
                                    <h6 className='fs-6'>{data.userId.email}</h6>
                                </div>
                                <div className='col-3  p-3'>
                                    <p className='fs-4'>{ }</p>
                                    <p className='text-danger'>Requested At : {data.date}</p>
                                </div>
                                <div className='col-3  p-5'>
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