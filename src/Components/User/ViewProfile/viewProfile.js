import { useSelector } from 'react-redux';
import './viewProfile.css';

function ViweProfile(){
    const {currentUser} = useSelector((state)=>state.user);
    
    return <>
        <div className='row'>
            <div className='col-md-4 bg-light'>
                <div className='row'>
                    <div className='col-md-12 mt-4 mb-4 profileDiv'>
                        <span className='profile bg-info'>
                            <img src='/images/login.png' heigth='130' width='130'/>
                        </span>
                    </div>
                </div>
                <div className='row bg-secondary'>
                    <div className='col-md-6 profileHeading text-center mt-3'>
                        Name : 
                    </div>
                    <div className='col-md-6 mt-3'>
                        {currentUser?.name}
                    </div>          
                </div>
                <div className='row mt-2 mb-2 bg-body'>
                    <div className='col-md-6 profileHeading text-center mt-3'>
                        Email : 
                    </div>
                    <div className='col-md-6 mt-3'>
                    {currentUser?.email}
                    </div>          
                </div>
                <div className='row mt-2 mb-2 bg-c'>
                    <div className='col-md-6 profileHeading text-center mt-3'>
                        Role : 
                    </div>
                    <div className='col-md-6 mt-3'>
                        {currentUser?.role}
                    </div>          
                </div>
                <div className='row mt-2 mb-2 bg-danger'>
                    <div className='col-md-6 profileHeading text-center mt-3'>
                        Contact : 
                    </div>
                    <div className='col-md-6 mt-3'>
                        {currentUser?.contact}
                    </div>          
                </div>
            </div>
            <div className='col-md-8 bg-warning'>

            </div>
        </div>
    </>
}

export default ViweProfile;