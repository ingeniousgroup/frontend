
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import { setUser } from '../../redux-config/UserSlice';
import { useDispatch } from 'react-redux';
import axios from '../../interceptor';
import api from '../../redux-config/WebApi/api';
import { useNavigate } from 'react-router-dom';
function WithGoogle() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return <>
        <GoogleOAuthProvider clientId="613439803904-sp1fhhh936cj70i9pjds2f1gndun9aj8.apps.googleusercontent.com">
            <GoogleLogin
            
                onSuccess={async credentialResponse => {
                    console.log(jwtDecode(credentialResponse.credential));
                    const credential = jwtDecode(credentialResponse.credential);
                    const response = await axios.post(api.USER_CHECK,{email : credential.email});
                    if(response?.data?.status)
                    {
                        const contact = window.prompt("Enter Contact Number");
                        const name = credential.given_name +" "+ credential.family_name;
                        var googleUser = { name, email: credential.email,contact};
                        dispatch(setUser(googleUser));
                        const response = await axios.post(api.USER_SINGIN,{name,email:credential.email,contact,role:'Tenant'});
                        if(response.data.status)
                            {
                                navigate('/');
                                Swal.fire({
                                    icon: 'success',
                                    timer:3000,
                                    title: 'Log in Success',
                                    confirmButtonColor: '#3085d6',
                                    showConfirmButton:false,
                                    timerProgressBar:true,
                                    position:'top',
                                    toast:true,
                                })
                            }
                    }
                    else if(response.data?.user){
                        dispatch(setUser(response.data.user));
                        Swal.fire({
                            icon: 'success',
                            timer:3000,
                            title: 'Log in Success',
                            confirmButtonColor: '#3085d6',
                            showConfirmButton:false,
                            timerProgressBar:true,
                            position:'top',
                            toast:true,
                        })
                        navigate('/');
                    }
                    else
                    {
                        Swal.fire({
                            icon: 'error',
                            timer:3000,
                            title: 'You are already Exists ',
                            confirmButtonColor: '#3085d6',
                            showConfirmButton:false,
                            timerProgressBar:true,
                            position:'top',
                            toast:true,
                        })
                    }
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    </>
}
export default WithGoogle;