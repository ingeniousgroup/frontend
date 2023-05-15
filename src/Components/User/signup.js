import axios from 'axios';
import './signin.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../redux-config/WebApi/api';
import validation from "../ExtraServices/Validataions/Input_Validations"
import Swal from 'sweetalert2';
import NavebarNext from '../Headers.js/Navbar/navbarNext';


function Signup() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [role, setRole] = useState("");
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    // const [emailError, setEmailError] = useState(false);
    // const [passwordError, setPasswordError] = useState(false);
    // const [nameError,setNameError] = useState(true);
    // const [contactError , setContacctError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);
    const [abc, setAbc] = useState();
    const userNameEvent = async (event) => {
        setName(event.target.value);
    }
    const handleSubmit = async (event) => {
        setOpen = true;
        try {
            event.preventDefault();
            // let response = await axios.post(api.OWNER_SIGNUP, { name, email, password, contact, role, latitude, longitude });
            // if (response.data.status) {
            //     console.log(response.data);
            //     Swal.fire({
            //         icon: 'success',
            //         timer: 2500,
            //         title: 'Sign-In Successfully ',
            //         confirmButtonColor: '#3085d6',
            //         showConfirmButton: false,
            //         timerProgressBar: true,
            //         position: 'top',
            //         toast: true,
            //     })
            //     navigate('/signin');
            // }
        }
        catch (err) {
            console.log(err);
        }
    }
    return <>
        <NavebarNext />
        <section className="section container">
            <div className="row" style={{ boxShadow: "5px 8px 15px black" }}>
                <div className="col-md-6 p-0">
                    <img src="/images/icon2.jpg" id="logimg" height="100%" width="100%" alt="" />
                </div>
                <div className="col-md-6" id="sec">
                    <br />
                    <hr className='text-white' />
                    <form onSubmit={handleSubmit}>
                        <h1 id="log">
                            <b>Register Here</b>
                        </h1>
                        <select className='btn btn rounded-pill border w-50' required onChange={(event) => setRole(event.target.value)} style={{ marginLeft: "10.5vh", marginTop: "4vh", backgroundColor: "white" }}>
                            <option id='null'>
                                Select Role
                            </option>
                            <option id='owner'>
                                Owner
                            </option>
                            <option id='tenant'>
                                Tenant
                            </option>
                        </select>
                        <br />
                        <br />
                        <input
                            required
                            onChange={userNameEvent}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter name"
                        />
                        <br />
                        <br />
                        <input
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                        />
                        <br />
                        <br />
                        <input
                            required
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            id="pass"
                            name="password"
                            placeholder="Enter password"
                        />
                        <br />
                        <br />
                        <input
                            required
                            onChange={(event) => setContact(event.target.value)}
                            type="text"
                            id="contact"
                            name="contact"
                            placeholder="Enter contact"
                        />
                        <br />
                        <br />
                        <button
                            type="submit"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            id="in"
                            className="btn btn-outline-dark rounded-pill mt-4 view-modal">
                            Sign Up
                        </button><br /><br /><br />
                        <span id="with">
                            <b>SignUp With</b>
                        </span>
                        <span>
                            <i className="fa fa-facebook-square ms-4" aria-hidden="true" />{" "}
                            <i className="fa fa-twitter" aria-hidden="true" />
                            <i className="fa fa-google-plus" aria-hidden="true" />
                        </span>
                        <Link to="/signin" className='ms-5'>
                            <small>Existing User ?</small>
                        </Link>
                        <br />
                        <br />
                    </form>
                    <hr className='text-white' /><br />
                </div>
            </div>
        </section>
        <br />
        <br />
        <br />
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">User verification</h5>
                        <button type="button" class="close p-4" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><button className='btn btn-outline-danger'>X</button></span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                        <h2 className='ms-4 '><b>OTP SENT TO ...!</b></h2>
                        <label className='ms-4 fs-5 text-danger'>{email}</label>
                        <h6 className='fs-6 mt-3 ms-4'>
                            Please enter the otp which has been send on your email id
                        </h6>
                        <img src="/images/email.png"/>
                        <input className='offset-4 mt-3 otpinput' placeholder='enter otp here' type='text'/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>


}
export default Signup;