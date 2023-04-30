import { useSelector } from 'react-redux';
import './viewProfile.css';
import { useEffect, useState } from 'react';

function ViweProfile() {
    const { currentUser } = useSelector((state) => state.user);
    const [ownerFunctionality, setOwnerFunctionality] = useState('');

    
    return <>
        <div className='profileMain'>
            <div className='row rowmain'>
                <div className='col-md-4 leftSide ms-2 bg-c'>
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
                        <div className='col-md-6 mt-3'>
                            {currentUser?.name}
                        </div>
                    </div>
                    <div className='row mt-2 mb-2 '>
                        <div className='col-md-6 profileHeading text-center mt-4'>
                            Email :
                        </div>
                        <div className='col-md-6 mt-3'>
                            {currentUser?.email}
                        </div>
                    </div>
                    <div className='row mt-2 mb-2 '>
                        <div className='col-md-6 profileHeading text-center mt-4'>
                            Role :
                        </div>
                        <div className='col-md-6 mt-3'>
                            {currentUser?.role}
                        </div>
                    </div>
                    <div className='row mt-2 mb-2 '>
                        <div className='col-md-6 profileHeading text-center mt-4'>
                            Contact :
                        </div>
                        <div className='col-md-6 mt-3'>
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
                <div className='col-md-7 border rightSide bg-c'>
                    <div className='p-4'>
                        <div className='row'>
                            <div className='col-md-6 text-center fs-4'>
                                <button className='btn btn-outline-secondary' onClick={() => { setOwnerFunctionality("details") }}>
                                    Property Request
                                </button>
                            </div>
                            <div className='col-md-6 text-center fs-4'>
                                <button className='btn btn-outline-primary' onClick={() => { setOwnerFunctionality("request") }}>
                                Property Details
                                </button>
                            </div>
                        </div>
                        {ownerFunctionality == "request" && <div className='inside1 p-4'>
                            <div className='row rowData mt-1 mb-1'>
                                <div className='col-md-3 p-1 text-center'>
                                    <img src='/images/login.png' height='60' width='60' />
                                </div>
                                <div className='col-md-3 p-3 text-center'>
                                    Flat/Villa
                                </div>
                                <div className='col-md-3 p-3 text-center'>
                                    Raj Mohalla,indore
                                </div>
                                <div className='col-md-3 p-2 mt-2 text-left '>
                                    <button className='btn btn-outline-success'>
                                        Active
                                    </button>
                                    <button className='btn ms-1 btn-outline-danger '>
                                        Deactive
                                    </button>
                                </div>
                            </div>
                        </div>
                        }
                        {ownerFunctionality == "details" && <div className='inside2 p-4'>
                            <div className='row rowDataDown mt-1 mb-1'>
                                <div className='col-md-3 p-1 text-center'>
                                    <img src='/images/login.png' height='60' width='60' />
                                </div>
                                <div className='col-md-3 p-3 text-center'>
                                    Flat/Villa
                                </div>
                                <div className='col-md-3 p-3 text-center'>
                                    Raj Mohalla,indore
                                </div>
                                <div className='col-md-3 p-3 text-center'>
                                    <button className='btn btn-outline-success '>
                                        Accept
                                    </button>
                                    <button className='btn btn-outline-danger  ms-2'>
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                        }
                    </div>


                </div>
            </div>
        </div>
    </>
}

export default ViweProfile;