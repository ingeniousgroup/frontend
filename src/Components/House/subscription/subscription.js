import './subscription.css';
function Subscription() {
  return <>
    <div className='container'>
      <div className='row mt-5 '>
        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Basic</p>
              <p id="rs">$0.00</p>
              <p id="info">Free of charge one standard <br />listening active for 30 days</p>

            </div>
            <div className="card-body text-center">
              <p id="detail" className="card-text ">
                This Plan includes 1 Property<br />
                Properties are visible for 30 days
              </p>
              <p id="detail2">standard listening</p>
              <p id="detail2">Limited Support</p>
              <a href="#" className="btnbtn "><input className='form-check-input me-2' type='checkbox'></input>
                Buy this Package
              </a>
            </div>
          </div>

        </div>
        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Extended</p>
              <p id="rs">$199.00</p>
              <p id="info">One time fee for one listening<br />
              highlighted in the serach result</p>


            </div>
            <div className="card-body text-center">

              <p id="detail" className="card-text ">
                This Plan includes 1 Property<br />
                Properties are visible for 90 days</p>
                <p id="detail2">One listening</p>
                <p id="detail2">24/7 Support</p>
                <a href="#" className="btnbtn "><input className='form-check-input me-2' type='checkbox'></input>
                  Buy this Package
                </a>

            </div>
          </div>

        </div>

        <div className=' col-lg-4'>
          <div className="card" id="card" style={{ width: "24rem" }}>
            <div className="head">
              <p id="type">Proffesional</p>
              <p id="rs">$399.00</p>
              <p id="info">Unlimited listening and availabilty for <br />month</p>


            </div>
            <div className="card-body text-center">

              <p id="detail" className="card-text ">
                This Plan includes 10 Property<br />
                Properties are visible for 90 days</p>
                <p id="detail2">unlimited listening</p>
                <p id="detail2">24/7 Support</p>
                <a href="#" id="btnbtn "><input className='form-check-input me-2' type='checkbox'></input>
                  Buy this Package
                </a>

            </div>
          </div>

        </div>
      </div>
    </div>

  </>

}

export default Subscription;