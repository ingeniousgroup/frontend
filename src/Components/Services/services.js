import { useNavigate } from 'react-router-dom';
import NavebarNext from '../Headers.js/Navbar/navbarNext';
import './services.css';

function Services() {
    const navigate = useNavigate();
    const categoryClick = (data)=>{
        navigate("/categoryProperty",{state:data});
    }
    return <>
        <NavebarNext />
        <div className='container-fluid serviceMain p-4 '>
            <div className='row d-flex justify-content-between p-3'>
                <div className='col-5 border furnishing shadow'>
                    <div className='row'>
                        <div className='col-6 p-3'>
                            <h1 className='text-center mt-3 WildData'><b>Furnished !</b></h1>
                            <h5 className='mt-5 dataa'>
                                A furnished room or house is available to be rented together with the furniture in it.
                                furnished is very amazing home <b>click on image........</b>
                            </h5>
                        </div>
                        <div className='col-6 blue'>
                            <img onClick={()=>categoryClick("furnished")} src='/images/furnishedd.jpg' className='furImage' />
                        </div>
                    </div>
                </div>
                <div className='col-5 border'>

                </div>
            </div>
            <div className='row justify-content-between  p-3'>
                <div className='col-5 border '>

                </div>
                <div className='col-5 border semi_furnishing shadow'>
                    <div className='row'>
                        <div className='col-6 blue'>
                            <img onClick={()=>categoryClick("unFurnished")} src='/images/unfurnished.jpg' className='semifurImage' />
                        </div>
                        <div className='col-6 blue p-2'>
                            <h1 className='text-center mt-3 WildData'><b>Unfurnished!</b></h1>
                            <h5 className='mt-5 dataa'>
                                A furnished room or house is available to be rented together with the furniture in it.
                                furnished is very amazing home<b>click on image........</b>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-between p-3'>
                <div className='col-5 border unfurnishing shadow'>
                    <div className='row'>
                        <div className='col-6 '>
                            <h1 className='text-center mt-3 WildData'><b>Semi-Furnished !</b></h1>
                            <h5 className='mt-5 dataa'>
                                To the door of this, the twelfth house whose bell he had rung, came a housekeeper who made him think of an unwholesome,<b>click on image........</b>
                            </h5>
                        </div>
                        <div className='col-6 blue'>
                            <img onClick={()=>categoryClick("semiFurnished")} src='/images/semi.jpg' className='furImage' />
                        </div>
                    </div>
                </div>
                <div className='col-5 border'>

                </div>
            </div>
        </div>
    </>
}


export default Services;