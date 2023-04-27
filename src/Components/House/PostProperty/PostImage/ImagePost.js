import './ImagePost.css';

function ImagePost() {
    const uploadimage = (event) => {
        let data = document.querySelector('input[type=file]');
    }
    return <>
        <div className='row  inner'>
            <div className='col-md-3  bg-c'>

            </div>
            <div className='col-md-6 p-4'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h4 className='welcome fs-3'>
                            Add photos of your property !
                        </h4>
                    </div>
                    <div className='col-md-12 '>
                        <h6 className='mess mt-3 mb-0 ms-2'>
                            A picture is worth a thousand words.87% of <br />buyers look at photo before buying
                        </h6>
                    </div>
                </div>
                <div className='row mt-5 imagerow'>
                    <div className="upload">
                        <div className="upload-files">
                            <header>
                                <p>
                                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                    <span className="up">up</span>
                                    <span className="load">&nbsp;load</span>
                                </p>
                            </header>
                            <div className="body" id="drop">
                                <i className="fa fa-file-text-o pointer-none" aria-hidden="true" ></i>
                                <p className="pointer-none">
                                    <input type="file" id="myFile" name="filename" onClick={uploadimage} />
                                    <button className='uploadphoto'>
                                        <label for='myFile'>upload</label>
                                    </button> files here <br /> or  to begin the upload

                                </p>

                            </div>
                            <footer>
                                <div className="divider">
                                    <span>FILES</span>
                                </div>
                                <div className="list-files">
                                </div>
                                <button className="importar">UPDATE FILES</button>
                            </footer>
                        </div>
                    </div>

                </div>
                <div className='row mt-4'>
                    <div className='col-md-12  ms-2'>
                    </div>
                </div>
                <div className='row mt-4 '>
                    <div className='col-md-12 imgcontinue ms-2'>
                        <button className='continue' style={{ marginLeft: "-330px" }}>
                            Continue
                        </button>

                    </div>
                </div>
            </div>
            <div className='col-md-3 bg-c'>

            </div>
        </div>
    </>
}

export default ImagePost;