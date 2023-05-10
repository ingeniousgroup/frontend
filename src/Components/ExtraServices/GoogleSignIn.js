
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
function WithGoogle(){
    return <>
    <GoogleOAuthProvider clientId="613439803904-sp1fhhh936cj70i9pjds2f1gndun9aj8.apps.googleusercontent.com">
        <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
        </GoogleOAuthProvider>
    </>
}
export default WithGoogle;