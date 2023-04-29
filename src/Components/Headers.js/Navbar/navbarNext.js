import { Link, useNavigate } from 'react-router-dom';
import './navbarNext.css';
import { useEffect } from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../../redux-config/UserSlice';
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
        navigate("/viewProfile");
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
                        <div className='col-md-3  '>
                            <button onClick={propertyPost} className='btn offset-5 rounded-pill btn-light mt-1 post'>
                                Post Property
                            </button>
                        </div>
                        <div className='col-md-1'>
                            <div className='share'>
                                <div class="fab no ms-3" data-hover='SignIn' onClick={signipUser}></div>
                                <div class="fab no ms-3" data-hover='SignUp' onClick={signupUser}></div>
                                <div class="fab no ms-3" data-hover='Profile' onClick={viewProfile}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default NavebarNext;