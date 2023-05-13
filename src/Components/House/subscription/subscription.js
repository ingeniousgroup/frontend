import { useDispatch, useSelector } from 'react-redux';
import './subscription.css';
import { createSubscription } from '../../../redux-config/subscriptionSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import api from '../../../redux-config/WebApi/api';
function Subscription() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const choosePackage = async (price) => {
    Swal.fire({
      text: 'This dialog uses a custom icon!',
      iconHtml: '<i class="fa fa-ravelry" aria-hidden="true"></i>',
      text: "Want to buy this pachage for 3 months ?",
      icon: "question",
      buttons: true,
      confirmButtonColor: '#3095d6',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonColor: '#d30',
      customClass: {
        confirmButton: 'mx-2 btn rounded-pill',
        cancelButton: 'mx-2 btn rounded-pill',
      },
    })
      .then(async (willDelete) => {
        if (willDelete.isConfirmed) {

          let response = await axios.post("/payment/razorpay", { amount: price });

          if (response.status != 200)
            window.alert("Something Went Wrong");
          else {
            let data = response.data
            const options = {
              key: "rzp_test_Vhg1kq9b86udsY",
              currency: data.currency,
              amount: data.amount,
              name: "Kirayewala",
              description: "Search your rooms",
              image: "https://tse2.mm.bing.net/th?id=OIP.4p7ztcUW4gAM6_1VGZ1EVwHaIj&pid=Api&P=0",
              order_id: data.id,
              handler: async function (response) {
                // console.log(response.razorpay_payment_id);
                // console.log(response.razorpay_order_id);
                // console.log(response.razorpay_signature);
                dispatch(createSubscription({ currentUser, price }));
                let response1 = await axios.post(api.VIEW_ADMIN);
                if(response1.data.status){
                  let actuallBalance = (response1.data.result[0].balance * 1) + price;
                  let response2 = await axios.post(api.UPDATE_BALANCE, { balance: actuallBalance });
                  if(response2.data.status){
                    let res = await axios.post(api.EMAIL_SEND,{email:currentUser.email,otp:""+price+"Subscription Successfull , <br/> Now you are eligible to post property at kirayewala.com for 3 months...."});
                    if(res.data.status){
                      Swal.fire({
                        icon: 'success',
                        timer:2500,
                        title: 'Subscription Successfull ',
                        confirmButtonColor: '#3085d6',
                        showConfirmButton:false,
                        timerProgressBar:true,
                        position:'top',
                        toast:true,
                    })
                    navigate('/');
                    }
                     
                  }
                }
              },
              theme: {
                color: "dodgerblue"
              }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          }

        }
      });
  }
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);
  return <>
    <div style={{ marginTop: "110px" }}>

    </div>
    <div className='container p-4' style={{ marginBottom: "10vh" }}>
      <div className='row  '>
        <div className=' col-lg-4'>
          <div className="card " id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Basic</p>
              <p style={{ marginLeft: "2vh" }} id="rs"><i class="fa fa-inr fs-1" aria-hidden="true"></i>799/-</p>
              <p id="info">Maintain the standard  <br />listening active for 30 days</p>

            </div>
            <div className="card-body text-center">
              <p id="detail">
                This Plan includes per Property<br />
                Properties are visible for 90 days
              </p>
              <p id="detail2">standard listening</p>
              <p id="detail2">24/7 Support</p>
              <button onClick={() => { choosePackage(799) }} className='btn btn-outline-primary' style={{ width: "70%" }}>
                buy package
              </button>
            </div>
          </div>

        </div>
        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Extended</p>
              <p style={{ marginLeft: "2vh" }} id="rs"><i class="fa fa-inr fs-1" aria-hidden="true"></i>399/-</p>
              <p id="info">it's basic and <br />
                highlighted in the serach result</p>


            </div>
            <div className="card-body text-center">

              <p id="detail" >
                This Plan includes per Property<br />
                Properties are visible for 30 days</p>
              <p id="detail2">basic listening</p>
              <p id="detail2">Limited Support</p>
              <button onClick={() => { choosePackage(399) }} className='btn btn-outline-primary' style={{ width: "70%" }}>
                buy package
              </button>

            </div>
          </div>

        </div>

        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Proffesional</p>
              <p style={{ marginLeft: "2vh" }} id="rs"><i class="fa fa-inr fs-1" aria-hidden="true"></i>1999/-</p>
              <p id="info">Unlimited listening and availabilty for <br />month</p>


            </div>
            <div className="card-body text-center">

              <p id="detail" >
                This Plan includes 10 Property<br />
                Properties are visible for 90 days</p>
              <p id="detail2">unlimited listening</p>
              <p id="detail2">24/7 Support</p>
              <button onClick={() => { choosePackage(1999) }} className='btn btn-outline-primary' style={{ width: "70%" }}>
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