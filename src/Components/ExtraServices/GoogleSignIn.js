
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
function WithGoogle(){
    return <>
    <GoogleOAuthProvider clientId="613439803904-sp1fhhh936cj70i9pjds2f1gndun9aj8.apps.googleusercontent.com">
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(jwtDecode(credentialResponse.credential));
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
        </GoogleOAuthProvider>
    </>
}
export default WithGoogle;