import React, { Component } from 'react';
import { connect } from 'react-redux';
import {dontShowUserComponentFunc,loadUsersDataFunc} from '../../../actions'
import UsersList from './usersList'
import '../../../static/css/users.css';
import closeImg from '../../../static/img/close.png';
import Loader from '../../loader';

class Users extends Component {

    componentWillMount(){
            console.log("Mounted");
            //action dispactch to load data from firebse API
            this.props.loadUsersData();
    }

    onClick(e){
              e.preventDefault();
              //isUserComponent state is changed to false
               this.props.dontShowUserComponent();
  }

  render() {
         return (
          <div className="users container-fluid">
                    <div className="row" id="userModalRow">
                                <div className="col-lg-8 col-md-8 col-s-8 col-xs-8" id="usersListHeading">
                                        <h3>USER LIST</h3>
                               </div>
                               <div className="col-lg-4 col-md-4 col-s-4 col-xs-4">
                               <img  src={closeImg} onClick={this.onClick.bind(this)} id="closeImg"/>
                               </div>
                    </div>{this.props.data==null?<Loader/>:<UsersList/>}
        </div>
        );
  }
}

function mapDispatchToProps(dispatch){
        console.log("Under mapDispatchToProps Users")

        return {//For hiding dontShowUserComponent (Action dispatch)
                    dontShowUserComponent:()=>dispatch(dontShowUserComponentFunc()),
                     //For laodingJSon data from firebase API (Action dispatch)
                    loadUsersData:()=>dispatch(loadUsersDataFunc())
        }
  }

  const mapStateToProps=(state)=>{
      console.log("Inside mapStateToProps ",state.usersList.data);
      //If data is not loaded based on the data props LOADER will be visible
      return ({
                data:state.usersList.data
                })
        }



export default connect(mapStateToProps,mapDispatchToProps)(Users);
