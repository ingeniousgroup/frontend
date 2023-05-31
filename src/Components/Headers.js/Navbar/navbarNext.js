import { Link, useNavigate } from 'react-router-dom';
import './navbarNext.css';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../../redux-config/UserSlice';
import { viewProperty } from '../../../redux-config/propertyOfOwnerSlice';
import { wishList } from '../../../redux-config/wishListSlice';
import { createSubscription, showSubscription } from '../../../redux-config/subscriptionSlice';
import Swal from 'sweetalert2';

function NavebarNext({ search }) {

    useEffect(() => {
        $(".share").on("click", function (e) {
            $(".fab").removeClass("no");
            if (e.target != this) return;
            $(".share, .fab").toggleClass("active");
        });
    }, []);

    const navigate = useNavigate();
    const propertyPost = async () => {
        navigate("/propertypost");
    }
    const { currentUser } = useSelector((state) => state.user);
    const { subscription } = useSelector((state) => state.ownerSubscription);
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();

    const handleEvent = (event) => {
        // handler(event);
        setSearchText(event.target.value);
        search(searchText);
    }

    const signout = () => {
        dispatch(removeUser());
        window.location.reload();

    }
    const signinUser = () => {
        Swal.fire({
          title: "Who you are??",
          icon: "question",
          buttons: true,
          dangerMode: true,
          confirmButtonText:'Owner',
          cancelButtonText:'Tenant',
          confirmButtonColor: '#3085d6',
          showCancelButton: true,
          cancelButtonColor: '#d33',
      })
          .then(async (willDelete) => {
              if (willDelete.isConfirmed)
                navigate('/signin',{state:{status:true}});  
              else
                navigate('/signin',{state:{status:false}});
          });
      }

    const viewProfile = () => {
        dispatch(viewProperty(currentUser));
        if(currentUser?.role == "Owner")
          navigate("/viewProfile");
        else
          navigate("/viewTenantProfile");
    }


    const viewTenantProfile = () => {
        dispatch(wishList(currentUser));
        navigate("/viewTenantProfile");
    }

    const takeSubscription = () => {
        dispatch(createSubscription(currentUser));
        navigate("/takeSubscription");
    }
    const conditionalRendar = () => {
        if (currentUser) {
            if (currentUser.role == "Owner")
                return <div className="fab no" data-hover='Profile' onClick={viewProfile}></div>
            else
                return <div className="fab no" data-hover='Profile' onClick={viewTenantProfile}  ></div>
        }
        else
            return <div className="fab no" data-hover='Profile' onClick={viewProfile}></div>
    }

    return <>
        <div className='p-1 pb-2 main1 '>
            <div className='row mt-2'>
                <div className='col-md-12 container-fluid'>
                    <div className='row'>
                        <div className='col-md-2 text-white logo text-right fs-2'>
                            <Link className='text-white' to='/'>KirayeWala</Link>
                        </div>
                        <div className='col-md-6 centerspace'>
                            <div className='row'>
                                <div className='col-4  text-right'>
                                    <select className='option '>
                                        <option>
                                            Indore
                                        </option>
                                        <option>
                                            Ujjain
                                        </option>
                                        <option>
                                            Bhopal
                                        </option>
                                    </select>
                                </div>
                                <div className='col-8 text-left '>
                                    <input value={searchText}
                                        onChange={handleEvent} type='text' className=' inputfield' placeholder='&nbsp;&nbsp;Search Something' />
                                    <label className='searchicon'>
                                        <i className="fa fa-search icon" aria-hidden="true"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 mt-0'>
                            <div className='row ms-5 '>
                                <div className='col-md-6 d-flex justify-content-start text-end'>
                                    {currentUser?.role==='Tenant'?<></>:<button onClick={propertyPost} className='btn  rounded-pill btn-light mt-1 post'>
                                        Post Property
                                    </button>}
                                </div>
                                <div className='col-md-3 d-flex justify-content-end text-end '>
                                <Link to='/services' style={{textDecoration:"none",color:"black"}}>
                                    <button className='btn  rounded-pill btn-light mt-1 post'>
                                        Services
                                    </button>
                                    </Link>
                                </div>
                                <div className='col-md-3 d-flex justify-content-end'>
                                    <button className='btn  rounded-pill btn-light mt-1 post' onClick={()=>navigate("/aboutUs")}>
                                        About
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1'>
                            <i className='share ms-3 fa fa-bars'>
                                {!currentUser && <div className="fab no " data-hover='SignIn' onClick={signinUser}></div>}
                                {currentUser && <div className="fab no " data-hover='SigOut' onClick={signout}></div>}
                                {/* <div className="fab no " data-hover='SignUp' onClick={signupUser}></div> */}
                                <div className="fab no " data-hover='Profile' onClick={viewProfile}></div>

                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavebarNext;