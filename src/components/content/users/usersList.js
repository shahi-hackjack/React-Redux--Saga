import React, { Component } from 'react';
import { connect } from 'react-redux';
import locationImg from '../../../static/img/location.png';


class UsersList extends Component {

    constructor() {
        super();
      }

  render() {
      let userContent
      if(this.props.data)
                {
                     let key ,innerKey

                    userContent=Object.keys(this.props.data).map((key, index) =>{
                    return  <div key={index} className="row profileTab">
                                <div className="col-md-1"></div>
                                <div className="col-md-3"><img src={this.props.data[key]['profileImage']} className="profileImage"/></div>
                                <div className="col-md-4 hr"><span className="fullName">{this.props.data[key]['fullname']}</span><br/><span className="location"><img src={locationImg} className="locationImage"/>{this.props.data[key]['location']}</span></div>
                                <div className="col-md-4">{this.props.data[key]["following"]?<span className="following"><button className="btn  btn-success">Following</button></span>:<span className="follow"><button className="btn follow-btn">Follow</button></span>}</div>
                                </div>
                                })
                    }
     return (
            <div className="row" id="userListRow">
                {userContent}
            </div>
    );
  }
}

const mapStateToProps=(state)=>{
        console.log("Inside mapStateToProps",state.usersList.data);
        return ({
                //User Content from Firebase API is loaded
                data:state.usersList.data
                })
          }


export default connect(mapStateToProps,null)(UsersList);
