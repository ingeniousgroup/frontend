import { useState } from 'react';
import './signin.css';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux-config/UserSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../redux-config/WebApi/api';

import { wishList } from '../../redux-config/wishListSlice';
import { tenantRequest } from '../../redux-config/tenantRequestSlice';
import { showSubscription } from '../../redux-config/subscriptionSlice';
import WithGoogle from '../ExtraServices/GoogleSignIn';

function Signin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state.user);
    const handleSubmit = async (event)=>{
        try {
            event.preventDefault();
            let response = await axios.post(api.OWNER_SIGNIN,{email,password});
            console.log(response);
            if(response.data.status){
                let done = await dispatch(setUser(response.data.user));
                if(done){
                    dispatch(tenantRequest());
                    dispatch(wishList(response.data.user));
                    dispatch(showSubscription(response.data.user));
                    window.alert("signin success")
                    navigate("/");
                }                
            }
        } catch (error) {
            console.log(error);
        }
    }
    return <>
        <section className="section container">
            <div className="row " style={{ boxShadow: "5px 8px 15px black" }}>
                <div className="col-md-6 p-0">
                    <img src="/images/icon2.jpg" id="logimg" height={491} width="100%" alt="" />
                </div>
                <div className="col-md-6" id="sec">
                    <br />
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <h1 id="log">
                            <b>Login Here</b>
                        </h1>
                        <br />
                        <input
                            onChange={(event)=>setEmail(event.target.value)}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="  email......"
                            required
                        />
                        <br />
                        <br />
                        <input
                            onChange={(event)=>setPassword(event.target.value)}
                            type="password"
                            id="pass"
                            name="password"
                            placeholder="  password ......"
                            required
                        />
                        <br />
                        <br />
                        <Link to='/forgotPassword'><small className='offset-5 text-danger'> Forgot Password ?</small></Link>
                        <br />
                        <br />
                        <button
                            type="submit"
                            id="in"
                            className="btn btn-outline-dark rounded-pill mt-3"
                        >
                            Sign In
                        </button>
                        <br />
                        <br />
                        <br />
                        <span id="with">
                            <b>SignIn With</b>
                        </span>
                        <span>
                            <i className="fa fa-facebook-square ms-4" aria-hidden="true" />{" "}
                            <i className="fa fa-twitter" aria-hidden="true" />
                            
                        </span>
                        <Link className='ms-5' to="/signup">
                            <small>New User ?</small>
                        </Link>
                        <br />
                        <br />
                    </form>
                    <hr />
                    <br />
                </div>
            </div>
        </section>
        <br />
        <br />
        <br />
    </>

}

export default Signin;