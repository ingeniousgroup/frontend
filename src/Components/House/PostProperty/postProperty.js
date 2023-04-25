import { useState } from 'react';
import './postProperty.css'
import { useNavigate } from 'react-router';


function PostProperty() {
    const [propertyType, setPropertyType] = useState("commercial");
    const [property , setProperty] = useState("");
    const navigate = useNavigate();
    const changecontent = (event)=>{
        setProperty(event.target.name);
    }
    const Continue = () => {
        window.alert("called")
        navigate("/");
    }
    return <>
        <div className='container-fluid main'>
            <div className='row mt-4 inner '  >
                <div className='col-md-3  bg-light'>

                </div>
                <div className='col-md-6 p-4'>
                    <div className='row'>
                        {/* <div className='col-md-12 text-center'>
                            <h4 className='bg-dark text-light fs-3'>Post Property</h4><hr/>
                        </div> */}
                        <div className='col-md-12 '>
                            <h4 className='welcome'>
                                Welcome back Mr.Andrew Aderson<br/>
                                fill out basic details
                            </h4>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12'>
                            <p className='fs-5'>
                                what kind of property do you have ?
                            </p>
                            <input  type='radio' name='propertyType' id='commercial' onClick={(event) => setPropertyType(event.target.id)} /><label for='commercial' className='ms-2 com-radio'>Commercial</label>
                            <input type='radio'  className='ms-5' name='propertyType' id='residential' onClick={(event) => setPropertyType(event.target.id)} /><label for='residential' className='ms-2 res-radio'>Residential</label>
                            {propertyType == "commercial" && <p className=''>
                                <div className='row mt-4 ms-3 com-outer'>
                                    <div className='col-md-12 com-out-inner'>
                                        <button name='office' onClick={changecontent} className='ms-3 com-element'>
                                            Office
                                        </button>
                                        <button name='plot' onClick={changecontent} className='ms-3 com-element'>
                                            Plot
                                        </button>
                                        <button name='others' onClick={changecontent} className='com-element ms-3'>
                                            Others
                                        </button>
                                    </div>
                                </div>
                            </p>}
                            {propertyType == "residential" && <p className=''>
                                <div className='row mt-4 ms-3 com-outer'>
                                    <div className='col-md-12 com-out-inner'>
                                        <button name='flat' onClick={changecontent} className='ms-3 com-element2'>
                                            Flat/Appartment
                                        </button>
                                        <button name='villa' onClick={changecontent} className='ms-3 com-element'>
                                            Villa
                                        </button>
                                        <button name='formHouse' onClick={changecontent} className='com-element1 ms-3'>
                                            Form House
                                        </button>
                                    </div>
                                </div>
                            </p>}

                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md-12  ms-2'>
                            <button className='continue' onClick={Continue}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 bg-light'>

                </div>
            </div>
        </div>
    </>
}

export default PostProperty;