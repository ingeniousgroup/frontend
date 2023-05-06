import { Link, useNavigate } from 'react-router-dom';
import './navbarNext.css';
import { useEffect } from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../../redux-config/UserSlice';
import { fetchRequestByTenant } from '../../../redux-config/requestByTenantSlice';
import { viewProperty } from '../../../redux-config/propertyOfOwnerSlice';
import { createSubscription } from '../../../redux-config/subscriptionSlice';
import { wishList } from '../../../redux-config/wishListSlice';



function NavebarNext() {

    useEffect(() => {
        $(".share").on("click", function (e) {
            $(".fab").removeClass("no");
            if (e.target != this) return;
            $(".share, .fab").toggleClass("active");
        });
    }, []);

    const navigate = useNavigate();
    const propertyPost = () => {
        navigate("/propertypost");
    }
    const { currentUser } = useSelector((state) => state.user);
    const {subscription} = useSelector((state) => state.subscription)
    const dispatch = useDispatch();

    
    const signout = () => {
        dispatch(removeUser());
    }
    const signupUser = () => {
        navigate("/signup")
    }
    const signipUser = () => {
        navigate("/signin")
    }
    const viewProfile = () => {
        dispatch(viewProperty(currentUser));
        // dispatch(fetchRequestByTenant(currentUser));
        navigate("/viewProfile");
    }

    const viewTenantProfile = () => {
        dispatch(wishList(currentUser));
        navigate("/viewTenantProfile");
       
        // dispatch(fetchRequestByTenant(currentUser));
        
    }

    const takeSubscription = ()=>{
        dispatch(createSubscription(currentUser));
        navigate("/takeSubscription");
    }

    const conditionalRendar = ()=>{
        if(currentUser){
        if(currentUser.role == "Owner")
          return <div class="fab no" data-hover='Profile' onClick={viewProfile}></div>
        else
          return <div class="fab no" data-hover='Profile' onClick={viewTenantProfile}  ></div>  
        }
        else
         return <div class="fab no" data-hover='Profile' onClick={viewProfile}></div> 

    }
    return <>
        <div className='p-1 pb-2 main1'>
            <div className='row mt-2 m'>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-2 text-white logo text-center fs-2'>
                            <Link className='text-white' to='/'>KirayeWala</Link>
                        </div>
                        <div className='col-md-6 centerspace '>
                            <div className='row'>
                                <div className='col-4  text-right'>
                                    <select className='option '>
                                        <option>
                                            indore
                                        </option>
                                        <option>
                                            ujjain
                                        </option>
                                        <option>
                                            bhopal
                                        </option>
                                    </select>
                                </div>
                                <div className='col-8 text-left '>
                                    <input type='text' className=' inputfield' placeholder='&nbsp;&nbsp;Search Something' />
                                    <label className='searchicon'>
                                        <i class="fa fa-search icon" aria-hidden="true"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 '>
                            <div className='row ' style={{marginLeft:"-80px"}}>
                            <div className='col-md-6 text-end'>
                                <button onClick={propertyPost} className='btn  rounded-pill btn-light mt-1 post'>
                                    Post Property
                                </button>
                            </div>
                            <div className='col-md-6 text-start '>
                                {subscription && <button onClick={takeSubscription} className='btn bg-danger text-white rounded-pill btn-light mt-1 post'>
                                    expire Subscription
                                </button>
                                }
                                {!subscription && <button onClick={takeSubscription} className='btn  rounded-pill btn-light mt-1 post'>
                                    Take Subscription
                                </button>
                                }
                            </div>
                            </div>
                        </div>
                        <div className='col-md-1'>
                            <div className='share ms-3'>
                                <div class="fab no " data-hover='SignIn' onClick={signipUser}></div>
                                <div class="fab no " data-hover='SignUp' onClick={signupUser}></div>
                                {conditionalRendar()}
                                {/* {currentUser&&{currentUser.role=="Owner"&&<div class="fab no " data-hover='Profile' onClick={viewProfile}></div>}
                                {currentUser.role=="tenant"&&<div class="fab no " data-hover='Profile'  ></div>}} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavebarNext;