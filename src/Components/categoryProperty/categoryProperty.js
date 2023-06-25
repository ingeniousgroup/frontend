import { useEffect, useState } from 'react';
import NavebarNext from '../Headers.js/Navbar/navbarNext';
import './categoryProperty.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../interceptor'
import api from '../../redux-config/WebApi/api';
import { useSelector } from 'react-redux';
function CategoryProperty() {
    const furn = useLocation();
    const navigate = useNavigate();
    var pro = useSelector((state) => state.wishList);
    const { currentUser } = useSelector(state => state.user);
    const [categoryByFurnishing, setCategoryByFurnishing] = useState([]);
    const [flag, setFlag] = useState(true);
    const [propertyCategory, setPropertyCategory] = useState([]);
    useEffect(() => {
        furnishingProperty();
    }, []);

    const furnishingProperty = async () => {
        let response = await axios.post(api.PROPERTY_BY_FURNISHING, { category: furn.state });
        if (response.data.status) {
            setTimeout(() => {
                setCategoryByFurnishing(response.data.propertyDetails);
            }, 2300);
            console.log(response.data.propertyDetails[0]);
        }
    }
    const viewDescription = (property) => {
        navigate("/viewDiscription", {
            state: {
                property: property
            }
        });
    }
    const checkIfLike = (id) => {
        var w = pro.propertyList[0]?.find((item) => item.propertyId?._id == id);
        console.log(w);
        if (w) {
            console.log("-----1")
            return true;
        }
        return false;
    }
    const addToCart = async (property, index) => {
        let response = await axios.post(api.ADD_TO_WISHLIST, { userId: currentUser._id, propertyId: property._id });
        if (response.data.status)
            document.getElementById("like" + index).style.color = "red";
        else {
            document.getElementById("like" + index).style.color = "white";
            await axios.post(api
                .REMOVE_FROM_WISHLIST, {
                userId: currentUser._id,
                propertyId: property._id,
            });
        }
    }

    const categorySelect = async (category,id) => {
        setFlag(false);
        document.getElementById("a").style.backgroundColor= "white";
        document.getElementById("b").style.backgroundColor= "white";
        document.getElementById("c").style.backgroundColor= "white";
        document.getElementById("d").style.backgroundColor= "white";
        document.getElementById("e").style.backgroundColor= "white";
        document.getElementById(id).style.backgroundColor= "rgb(62, 168, 239)";

        let response = await axios.post(api.PROPERTY_BY_CATEGORY, { category: category });
        setPropertyCategory(response.data.result);

    }
    return <>
        <NavebarNext />
        <div className='container-fluid'>
            <div className='row'>
                {/* I am a newly skilled web developer,
looking for an organization where a can gain skills and experience  */}
                <div className='col-2 bg-light sideFilter p-4 '>
                    <div className='text-primary text-left mt-3'>
                        All Categories
                    </div>
                    <div onClick={() => categorySelect("flat","a")} id='a' className=' mt-4 fs-5 shadow sideBarButtons p-2'>
                        Flat
                    </div>
                    <div onClick={() => categorySelect("villa","b")} id='b' className=' mt-3 fs-5 shadow p-2 sideBarButtons' >
                        Villa
                    </div>
                    <div onClick={() => categorySelect("office","c")} id='c' className=' mt-3 fs-5 shadow p-2 sideBarButtons'>
                        Office
                    </div>
                    <div onClick={() => categorySelect("other","d")} id='d' className=' mt-3 fs-5 shadow p-2 sideBarButtons'>
                        Others
                    </div>
                    <div onClick={() => categorySelect("formHouse","e")} id='e' className=' mt-3 fs-5 shadow p-2 sideBarButtons'>
                        FarmHouse
                    </div>
                </div>
                <div className='col-10'>
                    {flag && <div className='row p-5'>
                        {categoryByFurnishing.length == 0 && <div>
                            <div id="splash">
                                <div class="anim">
                                    <div id="loader">
                                        <svg version="1.1" width="60px" height="70px" viewBox="0 0 60 70">
                                            <defs>
                                                <filter id="f1" x="0" y="0">
                                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                                                </filter>
                                            </defs>
                                            <g id="airplane" >
                                                <path fill="#ffff" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
          h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
          c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
          c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
          c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
          C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(44,0) rotate(90 0 0)" />
                                            </g>
                                            <g id="shadow" transform="scale(.9)">
                                                <path fill="#000" fill-opacity="0.3" d="M0.677,20.977l4.355,1.631c0.281,0.104,0.579,0.162,0.88,0.16l9.76-0.004L30.46,41.58c0.27,0.34,0.679,0.545,1.112,0.541
      		h1.87c0.992,0,1.676-0.992,1.322-1.918l-6.643-17.439l6.914,0.002l6.038,6.037c0.265,0.266,0.624,0.412,0.999,0.418l1.013-0.004
      		c1.004-0.002,1.684-1.012,1.312-1.938l-2.911-7.277l2.912-7.278c0.372-0.928-0.313-1.941-1.313-1.938h1.017
      		c-0.375,0-0.732,0.15-0.996,0.414l-6.039,6.039h-6.915l6.646-17.443c0.354-0.926-0.33-1.916-1.321-1.914l-1.87-0.004
      		c-0.439,0.004-0.843,0.203-1.112,0.543L15.677,17.24l-9.765-0.002c-0.3,0.002-0.597,0.055-0.879,0.16L0.678,19.03
      		C-0.225,19.36-0.228,20.637,0.677,20.977z" transform="translate(64,30) rotate(90 0 0)" filter="url(#f1)" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {categoryByFurnishing?.map((data, index) => data.property.map((property, proIndex) => <div className="col-md-3">

                            <div className="profile-card-2" >
                                <img
                                    src={api.PORT + property?.imagesUrlArray[1]}
                                    className="img img-responsive"
                                    alt="IMAGES NOT FOUND"
                                    onClick={() => viewDescription(property)}
                                />
                                <div className="profile-name fs-4 p-1"><i class="fa fa-inr fs-2" aria-hidden="true"></i><label style={{ marginLeft: "-0.7vh" }}>{property.rent}</label></div>
                                <div className="profile-username">Deposite/month</div>
                                <div className="profile-icons">
                                    {(currentUser && checkIfLike(property._id)) ? <a onClick={() => addToCart(property, index)}><i id={"like" + index} className="fa fa-heart like-icon" style={{ color: 'red' }} aria-hidden="true"></i></a> : (currentUser ? <a ><i id={"like" + index} className="fa fa-heart like-icon" aria-hidden="true"></i></a> : !currentUser && <a ><i className="fa fa-heart like-icon" aria-hidden="true"></i></a>)}
                                </div>

                            </div>
                            <div className="profile-textDiv">

                                <div className="row">
                                    <div className="text-title col">
                                        <h4 >{property.houseCategory.toUpperCase()}</h4>
                                    </div>
                                    <div className="vierMoreButtomDiv col text-right">
                                        <a onClick={() => viewDescription(property)} type="button" class="btn-view">More...</a>
                                    </div>
                                    <div className="text-address ">
                                        <p >{property.address.substring(0, 30).toUpperCase()}..</p>
                                    </div>
                                </div>
                                <div className="posted-property ">
                                    <span>PostedOn</span><span className="paddingStyle"><a className='ms-4'>{property.date}</a></span>
                                </div>
                            </div>
                        </div>))}
                    </div>}
                    {!flag && <div className='row p-5'>
                        {propertyCategory.length == 0 && <div className='nothingFound'>
                            <div className='mt-4'>
                                <div class="spinner-grow" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>}
                        {propertyCategory?.map((property, index) => <div className="col-md-3">
                            <div className="profile-card-2" >
                                <img
                                    src={api.PORT + property?.imagesUrlArray[1]}
                                    className="img img-responsive"
                                    alt="IMAGES NOT FOUND"
                                    onClick={() => viewDescription(property)}
                                />
                                <div className="profile-name fs-4 p-1"><i class="fa fa-inr fs-2" aria-hidden="true"></i><label style={{ marginLeft: "-0.7vh" }}>{property.rent}</label></div>
                                <div className="profile-username">Deposite/month</div>
                                <div className="profile-icons">
                                    {(currentUser && checkIfLike(property._id)) ? <a onClick={() => addToCart(property, index)}><i id={"like" + index} className="fa fa-heart like-icon" style={{ color: 'red' }} aria-hidden="true"></i></a> : (currentUser ? <a ><i id={"like" + index} className="fa fa-heart like-icon" aria-hidden="true"></i></a> : !currentUser && <a ><i className="fa fa-heart like-icon" aria-hidden="true"></i></a>)}
                                </div>

                            </div>
                            <div className="profile-textDiv">

                                <div className="row">
                                    <div className="text-title col">
                                        <h4 >{property.houseCategory.toUpperCase()}</h4>
                                    </div>
                                    <div className="vierMoreButtomDiv col text-right">
                                        <a onClick={() => viewDescription(property)} type="button" class="btn-view">More...</a>
                                    </div>
                                    <div className="text-address ">
                                        <p >{property.address.substring(0, 30).toUpperCase()}..</p>
                                    </div>
                                </div>
                                <div className="posted-property ">
                                    <span>PostedOn</span><span className="paddingStyle"><a className='ms-4'>{property.date}</a></span>
                                </div>
                            </div>
                        </div>)}
                    </div>}
                </div>
            </div>
        </div>

    </>
}

export default CategoryProperty;