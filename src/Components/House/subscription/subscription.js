import { useDispatch, useSelector } from 'react-redux';
import './subscription.css';
import { createSubscription } from '../../../redux-config/subscriptionSlice';
import { Navigate, useNavigate } from 'react-router-dom';
function Subscription() {
  const navigate = useNavigate();
  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
const choosePackage = (price)=>{
 if(window.confirm("would you like to buy this package")){
  dispatch(createSubscription({currentUser,price}));
  navigate("/");
 }
}
return <>
  <div style={{ marginTop: "170px" }}>

</div>
    <div className='container ' style={{marginBottom:"10vh"}}>
      <div className='row mt-5 '>
        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Basic</p>
              <p style={{marginLeft:"2vh"}} id="rs"><i class="fa fa-inr fs-1" aria-hidden="true"></i>799/-</p>
              <p id="info">Maintain the standard  <br />listening active for 30 days</p>

            </div>
            <div className="card-body text-center">
              <p id="detail" className="card-text ">
                This Plan includes per Property<br />
                Properties are visible for 90 days
              </p>
              <p id="detail2">standard listening</p>
              <p id="detail2">24/7 Support</p>
              <button onClick={()=>{choosePackage(799)}} className='btn btn-outline-primary' style={{width:"70%"}}>
                    buy package
                  </button>
            </div>
          </div>

        </div>
        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Extended</p>
              <p style={{marginLeft:"2vh"}} id="rs"><i class="fa fa-inr fs-1" aria-hidden="true"></i>399/-</p>
              <p id="info">it's basic and <br />
              highlighted in the serach result</p>


            </div>
            <div className="card-body text-center">

              <p id="detail" className="card-text ">
                This Plan includes per Property<br />
                Properties are visible for 30 days</p>
                <p id="detail2">basic listening</p>
              <p id="detail2">Limited Support</p>
              <button onClick={()=>{choosePackage(399)}} className='btn btn-outline-primary' style={{width:"70%"}}>
                    buy package
                  </button>

            </div>
          </div>

        </div>

        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Proffesional</p>
              <p style={{marginLeft:"2vh"}} id="rs"><i class="fa fa-inr fs-1" aria-hidden="true"></i>1999/-</p>
              <p id="info">Unlimited listening and availabilty for <br />month</p>


            </div>
            <div className="card-body text-center">

              <p id="detail" className="card-text ">
                This Plan includes 10 Property<br />
                Properties are visible for 90 days</p>
                <p id="detail2">unlimited listening</p>
                <p id="detail2">24/7 Support</p>
                <button onClick={()=>{choosePackage(1999)}} className='btn btn-outline-primary' style={{width:"70%"}}>
                    buy package
                  </button>
                

            </div>
          </div>

        </div>
      </div>
    </div>

  </>

}

export default Subscription;