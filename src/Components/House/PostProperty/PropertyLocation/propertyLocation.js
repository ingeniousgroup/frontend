import './propertyLocation.css'

function PropertyLocation() {
    const findCurrentLocation = ()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            document.getElementById('demo').defaultValue = position.coords.latitude;
});

    }
    return <>
        <div className='container-fluid main'>
            <div className='row mt-4 inner'>
                <div className='col-md-3  bg-light'>

                </div>
                <div className='col-md-6 p-4'>
                    <div className='row'>
                        <div className='col-md-12 '>
                            <h4 className='welcome fs-1'>
                                Where your property Located ?
                            </h4>
                        </div>
                        <div className='col-md-12 '>
                            <h6 className='mess mt-3 ms-2 '>
                                An accurate location can help you connect with right buyers....
                            </h6>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-12 ms-2'>
                            <span>
                                <input type="text" list="browsers" className="locationfinder" id='demo' />
                                <datalist id='browsers'>
                                    <option value='indore'/>
                                    <option value='mumbai'/>
                                    <option value='bhopal'/>
                                    <option value='ujjain'/>
                                    <option value='dewas'/>
                                    <option value='harda'/>
                                    <option value='chattishgarh'/>
                                    <option value='agra'/>
                                    <option value='kanpur'/>
                                    <option value='delhi'/>
                                </datalist>
                                <span className='locationFinder'>
                                    <i class="fa fa-map-marker ms-1" aria-hidden="true" ></i>
                                    <label  onClick={findCurrentLocation} className='find'>
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
                            <button className='continue'>
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

export default PropertyLocation;