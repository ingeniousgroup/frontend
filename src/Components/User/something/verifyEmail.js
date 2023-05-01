import "./forgetPasswword.css"
function VerifyEmail() {
    return <>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="card" style={{ width: "22rem" ,borderRadius:"10px"}}>
                    <div className="header mt-3"><i className="fa fa-arrow-left" aria-hidden="true"></i><span id="heading">Verify Your Email</span></div>
                    <div id="imgdiv" className="mt-3"><img id="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1zl_VuoT1L5PuRUS5m0te8DbjkPGEqhnSw&usqp=CAU"></img></div>
                    <div className="card-body">
                        <p id="info" className="card-text">Please Enter the 4 Digit Code Sent To  <br/> Your Email Id</p>
                        <input  id="email" type="text"></input><br/>


                       <div id="btn"><a className="btn btn-primary  mt-5">
                            Verify
                        </a></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default VerifyEmail;