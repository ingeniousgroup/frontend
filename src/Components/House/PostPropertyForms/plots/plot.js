import './plot.css';

function Plot() {
    return <>
        <>
            <div className="mtt" />
            <div className="row">
                <div className="col-3 bg-c" />
                <div className="col-6 p-4  ">
                    <button> ⟸ Back </button>
                    <h3 className="ml-2 mb-5 mt-4">Tell us about your property</h3>
                    <h5>Add Area Details ?</h5>
                    <div className="row">
                        <small className="small ml-3">Carpet area is mandatory</small>
                        <div className="row">
                            <div className="carpetArea ml-4 ">
                                <div className="inputArea   ">
                                    {/* <input ref="{carpetArea}" type="text" placeholder="Carpet Area" /> */}
                                </div>
                                <div className="carpetAreaDD ">
                                    <select
                                        onchange="{carpetAreaFun}"
                                        className="form-select selectStyle"
                                        id="sel1"
                                        name="sellist1"
                                    >
                                        <option>sq.ft.</option>
                                        <option>sq.yards</option>
                                        <option>sq.m.</option>
                                        <option>acres</option>
                                        <option>marla</option>
                                        <option>cents</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <p />
                            <h5>Describe your office setup</h5>
                            <div className="row">
                                <div className="carpetArea ml-4 ">
                                    <div className="input">
                                        <input type="text" placeholder="Mini. no. of Seats" />
                                    </div>
                                </div>
                                <p />
                                <div className="carpetArea ml-4 ">
                                    <div className="input">
                                        <input type="text" placeholder="no. of Cabins" />
                                    </div>
                                </div>
                            </div>
                            <p />
                            <div className="row mt-5">
                                <h5>No. of Meeting Rooms</h5>
                                <div className="carpetAreaDD ">
                                    <select
                                        className="form-select selectStyle ml-3"
                                        id="sel1"
                                        name="sellist1"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6+</option>
                                    </select>
                                </div>
                                <div className="col-6" />
                            </div>
                            <h5 className="mt-5">Reception Area</h5>
                            <div className="row d-flex justify-content-center">
                                <div className="car">
                                    <div className="card-body">
                                        <label className="check">
                                            <input type="radio" name="otherroom" />
                                            <span>Available</span>
                                        </label>
                                        <label className="check">
                                            <input type="radio" name="otherroom" />
                                            <span>Not - Available</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h5 className="mt-5 mb-4">Pantry Type</h5>
                            <div className="row ml-2">
                                <div className="col-3">
                                    <label className="check">
                                        <input type="radio" id="furnished" name="Furnishing" />
                                        <span>Private</span>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label className="check">
                                        <input type="radio" id="semiFurnished" name="Furnishing" />
                                        <span>Shared</span>
                                    </label>
                                </div>
                                <div className="col-3">
                                    <label className="check">
                                        <input type="radio" id="unFurnished" name="Furnishing" />
                                        <span>Not - Available</span>
                                    </label>
                                </div>
                            </div>
                            <h5 className="mt-5 mb-4">Please select the facility available</h5>
                            <div className="row ml-3">
                                <label htmlFor="html">
                                    Furnishing
                                    <input
                                        className="radio ml-5"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Available</small>
                                    <input
                                        className="radio ml-5"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Not-Available</small>
                                </label>
                                <br />
                            </div>
                            <div className="row ml-3">
                                <label htmlFor="html">
                                    Air Conditioning
                                    <input
                                        className="radio ml-2"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Available</small>
                                    <input
                                        className="radio ml-5"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Not-Available</small>
                                </label>
                                <br />
                            </div>
                            <div className="row ml-3">
                                <label htmlFor="html">
                                    Oxygen Ductt
                                    <input
                                        className="radio ml-4"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Available</small>
                                    <input
                                        className="radio ml-5"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Not-Available</small>
                                </label>
                                <br />
                            </div>
                            <div className="row ml-3">
                                <label htmlFor="html">
                                    U - P - S is?
                                    <input
                                        className="radio ml-5"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Available</small>
                                    <input
                                        className="radio ml-5"
                                        type="radio"
                                        id="html"
                                        name="fav_language"
                                        defaultValue="HTML"
                                    />
                                    <small>Not-Available</small>
                                </label>
                                <br />
                            </div>
                            <h5 className="mt-5">Fire safety measures include</h5>
                            <div className="row d-flex justify-content-center">
                                <div className="car">
                                    <div className="card-body">
                                        <label className="check">
                                            <input
                                                type="checkbox"
                                                name="otherroom"
                                                defaultValue="poojaRoom"
                                            />
                                            <span>Fire Extinguisher</span>
                                        </label>
                                        <label className="check">
                                            <input
                                                type="checkbox"
                                                name="otherroom"
                                                defaultValue="studyRoom"
                                            />
                                            <span>Fire Sensors</span>
                                        </label>
                                        <label className="check">
                                            <input
                                                type="checkbox"
                                                name="otherroom"
                                                defaultValue="studyRoom"
                                            />
                                            <span>Sprinklers</span>
                                        </label>
                                        <label className="check">
                                            <input
                                                type="checkbox"
                                                name="otherroom"
                                                defaultValue="studyRoom"
                                            />
                                            <span>Fire Hose</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h5 className="mt-5 mb-4">Floor Details</h5>
                            <small>
                                Enter the total number of floors and select the floors your office
                                space occupies
                            </small>
                            <div className="row">
                                <div className="col-6  row flor-input mt-2 ml-4">
                                    <div className="bg-border">
                                        <small className="col-8">Total Floor</small>
                                        <input
                                            onkeyup="{noOffloor}"
                                            className="floor-input col-8"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="col-6  row ">
                                    <div className="bg-border mt-2">
                                        <small className="col-8">Property on floor</small>
                                        <select
                                            className="form-select selectStyle w-100"
                                            name="sellist1"
                                        >
                                            <option>Basement</option>
                                            <option>Ground</option>
                                            <option>Lower Ground</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <h5 className="mt-5">Lifts</h5>
                            <div className="row d-flex justify-content-center">
                                <div className="car">
                                    <div className="card-body">
                                        <label className="check">
                                            <input
                                                type="radio"
                                                name="otherroom"
                                                defaultValue="poojaRoom"
                                            />
                                            <span>Available</span>
                                        </label>
                                        <label className="check">
                                            <input
                                                type="radio"
                                                name="otherroom"
                                                defaultValue="studyRoom"
                                            />
                                            <span>Not - Available</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h5 className="mt-5">Parking</h5>
                            <div className="row d-flex justify-content-center">
                                <div className="car">
                                    <div className="card-body">
                                        <label className="check">
                                            <input
                                                type="radio"
                                                name="otherroom"
                                                defaultValue="poojaRoom"
                                            />
                                            <span>Available</span>
                                        </label>
                                        <label className="check">
                                            <input
                                                type="radio"
                                                name="otherroom"
                                                defaultValue="studyRoom"
                                            />
                                            <span>Not - Available</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h5 className="mt-5">Availablity Status</h5>
                            <div className="row d-flex justify-content-center">
                                <div className="car">
                                    <div className="card-body">
                                        <label className="check">
                                            <input type="radio" name="otherroom" defaultValue="cheaked" />
                                            <span>Ready to Move</span>
                                        </label>
                                        <label className="check">
                                            <input
                                                type="radio"
                                                name="otherroom"
                                                defaultValue="studyRoom"
                                            />
                                            <span>Under Constructuion</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="submitBtnDiv">
                                <button onclick="{submit}" className="submitbtn">
                                    Continue
                                </button>
                            </div>
                        </div>
                        <div className="col-3 bg-c" />
                    </div>
                </div>
            </div>
        </>

    </>
}

export default Plot;