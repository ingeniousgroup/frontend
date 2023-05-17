import { useEffect, useState } from 'react';
import './RequestList.css';
import axios from 'axios';
import api from '../../../redux-config/WebApi/api';
import { useSelector } from 'react-redux';
function RequestList(){
    var {currentUser} = useSelector((state)=>state.user);
    const [list,setList] = useState([]);
    
    useEffect(()=>{
     getList();   
    },[]);

    const getList = async()=>{
      let response = await axios.post(api.REQUEST_LIST,{userId:currentUser._id});
      console.log(response);
      if(response.data.status)
         setList(response.data.list);
    }

    return <>
    <div className="row">
            <div className="col-4 offset-4 mt-4">
              <h1 className="profile-h1">View Recent Request</h1>
            </div>

            <div className="row">
              <div className="ml-2 col-md-12">
                <div className="panel">
                  <div className="panel-heading">
                    <div className="row">
                      <div className="col col-sm-3 col-xs-12">
                        <h4 className="title">
                          Recent <span>Request</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>PropertyName</th>
                          <th>Age</th>
                          <th>Job Title</th>
                          <th>City</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list?.map((item,index)=> <tr>
                          <td>{index+1}</td>
                          <td>{item.date}</td>
                          <td>31</td>
                          <td>{item.message}</td>
                          <td>Sinaai-Waas</td>
                          <td>
                            {/* <ul className="action-list">
                              <li>
                                <a href="#" data-tip="edit">
                                  <i className="fa fa-edit" />
                                </a>
                              </li>
                              <li>
                                <a href="#" data-tip="delete">
                                  <i className="fa fa-trash" />
                                </a>
                              </li>
                            </ul> */}
                            {item.status == true&&"pending"}
                            {item.status == false&&"reject"}

                          </td>
                        </tr>)}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
}

export default RequestList;