import { Link, useLocation } from 'react-router-dom';
import './ImagePost.css';
import { useRef } from 'react';
import api from '../../../../redux-config/WebApi/api';
import axios from 'axios';

function ImagePost() {
    let imagesUrlArray = useRef();
    let userId = useRef();
    let address = useRef();
    let houseCategory = useRef();
    let description = useRef();
    let rent = useRef();
    let status = useRef();

    const uploadimage = (event) => {
        imagesUrlArray = "https://images.wallpaperscraft.com/image/single/sofa_fireplace_furniture_75511_1920x1080.jpg";
    }

    const DetaileWithLocation = useLocation();
    const latitude = DetaileWithLocation.state.currentLocation.latitude;
    const longitude = DetaileWithLocation.state.currentLocation.longitude;
    userId = '644615d3ae34a129de44360c';
    address = "Annpurna Road Opposite Of Rnjeet Temple, indore";
    description = "Best Location for Leaving";
    rent = "8500";
    status = "true";
    houseCategory = DetaileWithLocation.state.HouseAllDetails.state.typeOfPropertyDetails.state.PropertyDetails;
    const Submit = async()=>{
        window.alert("request ja rhi hai .......................");
        try{
            let response = await axios.post(api.POST_PROPERTY,{userId,description,rent,address,status,houseCategory,imagesUrlArray,latitude,longitude});
            if(response.data.status){
                console.log(response.data);
            }
           }
          catch(err){
             console.log(err);
          }
    }
    return <>
        <div className='row  inner'>
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
                    <div class="upload">
                        <div class="upload-files">
                            <header>
                                <p>
                                    <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                    <span class="up">up</span>
                                    <span class="load">&nbsp;load</span>
                                </p>
                            </header>
                            <div class="body" id="drop">
                                <i class="fa fa-file-text-o pointer-none" aria-hidden="true" ></i>
                                <p class="pointer-none">
                                    <input type="file"  name="filename" onClick={uploadimage} />
                                    <button className='uploadphoto'>
                                        <label for='myFile' onClick={uploadimage}>upload</label>
                                    </button> files here <br /> or  to begin the upload

                                </p>

                            </div>
                            <footer>
                                <div class="divider">
                                    <span>FILES</span>
                                </div>
                                <div class="list-files">
                                </div>
                                <button class="importar">UPDATE FILES</button>
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
                        <Link to='/home'>
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