import { Link, useLocation } from 'react-router-dom';
import './ImagePost.css';
import { useRef, useState } from 'react';
import api from '../../../../redux-config/WebApi/api';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ImagePost() {
    const DetaileWithLocation = useLocation();
    let locationTag = DetaileWithLocation.state.currentLocation.locationTag;
    let latilongi = locationTag?.split('/');
    var locationAddress 
    var latitude
    var longitude
    if(latilongi?.length == 2){
         latitude = latilongi[0];
         longitude = latilongi[1];
    }
    else{
        locationAddress = latilongi[0];
    }

    const { currentUser } = useSelector((state) => state.user);
    let imagesUrlArray = {};
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
    userId = currentUser._id;
    status = "true";
    

    const uploadimage = (event) => {
        imagesUrlArray = (Array.from(event.target.files));
        console.log(locationAddress);
    }

    

    houseCategory = DetaileWithLocation.state.HouseAllDetails.state.typeOfPropertyDetails.state.PropertyDetails;
    const Submit = async () => {
        let formData = new FormData();
        imagesUrlArray?.map((f) => {
            formData.append('imagesUrlArray', f);
        })

        formData.append("userId",userId);
        formData.append("houseCategory",houseCategory);
        formData.append("rent",rent);
        formData.append("status",status);
        formData.append("balconies",balconies);
        formData.append("carpetArea",carpetArea);
        formData.append("floor",floor);
        formData.append("furnshing",furnshing);
        formData.append("noOfBathoom",noOfBathoom);
        formData.append("otherRoom",otherRoom);
        formData.append("address",address);
        formData.append("description",description);
        formData.append("locationAddress",locationAddress);
        formData.append("latitude",latitude);
        formData.append("longitue",longitude);
        
        try {
            let response = await axios.post(api.POST_PROPERTY, formData);
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
                </div><hr />
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
                                    <input type="file" id="myFile" name="filename" onChange={uploadimage} multiple />

                                    <button className='uploadphoto'>
                                        <label for='myFile'>upload</label>
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
                        <input onChange={(event) => { rent = event.target.value }} className='ms-4 ' id='rentinput' type='text' /><label className='sless'>/-</label>
                    </div>
                </div>
                <div className='row mt-0'>
                    <div className='col-md-12  ms-2'>
                    </div>
                </div><hr />
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