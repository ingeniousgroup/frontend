import { Link, useNavigate } from 'react-router-dom';
import './viewPorfileNext.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tenantRequest } from '../../../redux-config/tenantRequestSlice';

function ViewProfileNext() {
    let [behave,setBehave] = useState();
    const {currentUser} = useSelector((state)=>state.user);
    const {properties} = useSelector((state) => state.ownerProperty);
    const {requestTenant} = useSelector((state)=>state.requestTenants);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ownerFunctionality = (identify) => {
        if(identify == 'request'){
            dispatch(tenantRequest(currentUser));
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
                                {currentUser.name.toUpperCase()+"..."}
                            </h3>
                            <label className=' mt-3 acti text-center p-2'>
                            <i class="fa fa-check fs-5 ms-3" aria-hidden="true">ACTIVE</i>   
                            </label>
                        </span>

                    </div><hr />
                    <div className='ms-2 profileContent p-3'>
                        <Link className='l ' onClick={() => ownerFunctionality("details")}>
                            <div className=' link p-2'>
                                Your Property
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality("update")}>
                            <div className=' link1 p-2'>
                                Update Property
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality("request")}>
                            <div className=' link2 p-2'>
                                All Requests
                            </div>
                        </Link>
                        <Link className='l' onClick={() => ownerFunctionality("delete")}>
                            <div className=' link3 p-2'>
                                Delete Account
                            </div>
                        </Link>
                    </div>
                    <div className='proLast'>
                        <img src='/images/d3.webp' id='downphoto' />
                    </div>
                </div>
                <div className='col-9 border contentbar  p-3'>
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
                        {behave == 'update' && <>
                        ?
                        </>}
                        {behave == 'details' && <>
                        {properties?.map((data,indext)=><div className='row mt-2 dataPhoto p-3'>
                            <div className='col-3 '>
                                <img src={data.imagesUrlArray[0]} height={130} id='img1' width={230} onClick={() => viewDescription(data)}/>
                            </div>
                            <div className='col-3  pt-4'>
                                <h6 className='fs-6'>{data.description.substring(0,70)+"......"}</h6>
                            </div>
                            <div className='col-3  p-3'>
                                <p className='fs-5'>{data.address}</p>
                                <p className='text-danger'>Posted At : {data.date}</p>
                            </div>
                            <div className='col-3  p-5'>
                                <button className='btn btn-danger'>Remove Property</button>
                            </div>
                        </div>)}
                        </>}
                        {behave == 'request' && <>
                        {requestTenant?.map((data,indext)=><div className='row mt-2 dataPhoto p-3'>
                            <div className='col-3 '>
                                <img src={data.propertyId.imagesUrlArray[0]} height={130} id='img1' width={230} onClick={() => viewDescription(data)}/>
                            </div>
                            <div className='col-3  pt-4'>
                                <h6 className='fs-6'>{data.userId.name}</h6>
                                <h6 className='fs-6'>{data.userId.contact}</h6>
                                <h6 className='fs-6'>{data.userId.email}</h6>
                            </div>
                            <div className='col-3  p-3'>
                                <p className='fs-4'>{}</p>
                                <p className='text-danger'>Requested At : {data.date}</p>
                            </div>
                            <div className='col-3  p-5'>
                                <button className='btn btn-outline-success'>Accept</button>
                                <button className='btn btn-outline-danger ms-2'>Reject</button>
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