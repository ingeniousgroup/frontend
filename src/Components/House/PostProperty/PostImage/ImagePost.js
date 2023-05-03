import { Link, useLocation } from 'react-router-dom';
import './ImagePost.css';
import { useRef } from 'react';
import api from '../../../../redux-config/WebApi/api';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ImagePost() {
    const DetaileWithLocation = useLocation();
    let imagesUrlArray = useRef();
    let userId = useRef();
    let houseCategory = useRef();
    let rent = useRef();
    let status = useRef();
    let balconies = DetaileWithLocation.state.HouseAllDetails.state.ActualHouseDetails.balconies;
    let carpetArea = DetaileWithLocation.state.HouseAllDetails.state.ActualHouseDetails.carpetArea;
    let floor = DetaileWithLocation.state.HouseAllDetails.state.ActualHouseDetails.floor;
    let furnshing = DetaileWithLocation.state.HouseAllDetails.state.ActualHouseDetails.furnshing;
    let noOfBathoom = DetaileWithLocation.state.HouseAllDetails.state.ActualHouseDetails.noOfBathoom;
    let otherRoom = DetaileWithLocation.state.HouseAllDetails.state.ActualHouseDetails.otherRoom;
    let address = DetaileWithLocation.state.currentLocation.userAddress;
    let description = DetaileWithLocation.state.currentLocation.userDescription;

    const { currentUser } = useSelector((state) => state.user);

    const uploadimage = (event) => {
        imagesUrlArray = "https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?w=1060&t=st=1682890708~exp=1682891308~hmac=3bf637652884945afcd833e1882257b7de99c59aae56292a4705946707a2d430";
    }

    const latitude = DetaileWithLocation.state.currentLocation.latitude;
    const longitude = DetaileWithLocation.state.currentLocation.longitude;

    userId = currentUser._id;
    status = "true";
    houseCategory = DetaileWithLocation.state.HouseAllDetails.state.typeOfPropertyDetails.state.PropertyDetails;
    const Submit = async () => {
        window.alert("request ja rhi hai .......................");
        try {
            let response = await axios.post(api.POST_PROPERTY, { userId, description, rent, address, status, houseCategory, imagesUrlArray, latitude, longitude });
            if (response.data.status) {
                console.log("property saved successfull");
                let propertyID = response.data.addproperty._id;
                let nextResponse = await axios.post(api.POST_PROPERTY_DETAILS, { userId, balconies, carpetArea, floor, furnshing, noOfBathoom, otherRoom, propertyID });
                if (nextResponse)
                    console.log("property details are also saved successfully.............");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return <>
        <div className='row mb-2 inner'>
            <div className='col-md-3  bg-c'>

            </div>
            <div className='col-md-6 p-4 '>
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
                </div><hr/>
                <div className='row mt-5 imagerow  p-1'>
                    <div className="upload ">
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
                                    <input type="" id="myFile" name="filename" onClick={uploadimage} />

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
                    <div className='mt-4'>
                        <label className='welcome fs-3' id='renting'>
                            Property Rent
                        </label ><i class="fa fa-inr fs-5" id='rs' aria-hidden="true"></i>
                        <input onChange={(event)=>{rent = event.target.value}} className='ms-4 ' id='rentinput' type='text'/><label className='sless'>/-</label>
                    </div>
                </div>
                <div className='row mt-0'>
                    <div className='col-md-12  ms-2'>
                    </div>
                </div><hr/>
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