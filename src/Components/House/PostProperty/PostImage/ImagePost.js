import { Link, useLocation } from 'react-router-dom';
import './ImagePost.css';
import { useRef } from 'react';
import api from '../../../../redux-config/WebApi/api';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ImagePost() {
    let imagesUrlArray = useRef();
    let userId = useRef();
    let address = useRef();
    let houseCategory = useRef();
    let description = useRef();
    let rent = useRef();
    let status = useRef();
    const {currentUser} = useSelector((state)=>state.user);
    const uploadimage = (event) => {
        imagesUrlArray = "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    }

    const DetaileWithLocation = useLocation();
    console.log("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
    console.log(DetaileWithLocation);
    console.log("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
    const latitude = DetaileWithLocation.state.currentLocation.latitude;
    
    const longitude = DetaileWithLocation.state.currentLocation.longitude;
    console.log(latitude + "--------------------" + longitude);
    userId = currentUser._id;
    address = 'vijay nagar square ,indore';
    description = "near mangal city";
    rent = "9000";
    status = "true";
    houseCategory = DetaileWithLocation.state.HouseAllDetails.state.typeOfPropertyDetails.state.PropertyDetails;
    const Submit = async()=>{
        window.alert("request ja rhi hai .......................");
        try{
            let response = await axios.post(api.POST_PROPERTY,{userId,description,rent,address,status,houseCategory,imagesUrlArray,latitude,longitude});
            window.alert("8888888888888");
            if(response.data.status){
                window.alert(response.data.state + "--------------------")
            }
           }
          catch(err){
             console.log(err);
          }
    }
    return <>
        <div className='row mb-2 inner'>
            <div className='col-md-3  bg-c'>

            </div>
            <div className='col-md-6 p-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h4 className='welcome fs-3'>
                            Add photos of your property !
                        </h4>
                    </div>
                    <div className='col-md-12 '>
                        <h6 className='mess mt-3 mb-0 ms-2'>
                            A picture is worth a thousand words.87% of <br />buyers look at photo before buying
                        </h6>
                    </div>
                </div>
                <div className='row mt-5 imagerow'>
                    <div className="upload">
                        <div className="upload-files">
                            <header>
                                <p>
                                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                    <span className="up">up</span>
                                    <span className="load">&nbsp;load</span>
                                </p>
                            </header>

                            <div className="body" id="drop">
                                <i className="fa fa-file-text-o pointer-none" aria-hidden="true" ></i>
                                <p className="pointer-none">
                                    <input type="" id="myFile" name="filename" onClick={uploadimage}  />

                                    <button className='uploadphoto'>
                                        <label for='myFile' onClick={uploadimage}>upload</label>
                                    </button> files here <br /> or  to begin the upload

                                </p>

                            </div>
                            <footer>
                                <div className="divider">
                                    <span>FILES</span>
                                </div>
                                <div className="list-files">
                                </div>
                                <button className="importar">UPDATE FILES</button>
                            </footer>
                        </div>
                    </div>

                </div>
                <div className='row mt-4'>
                    <div className='col-md-12  ms-2'>
                    </div>
                </div>
                <div className='row mt-4 '>
                    <div className='col-md-12 imgcontinue ms-2'>
                        <Link to='/'>
                            <button className='continue' style={{ marginLeft: "-330px" }} onClick={Submit}>
                                Continue
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className='col-md-3 bg-c'>

            </div>
        </div>
    </>
}

export default ImagePost;