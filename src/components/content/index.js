import React, { Component } from 'react';
import '../../static/css/content.css';
import Users from './users/';
import { connect } from 'react-redux';
import {showUserComponentFunc} from '../../actions'


class Content extends Component {

    constructor() {
            super();
        }

      onClick(e){
                e.preventDefault();
               this.props.showUserComponent();
           }


  render() {
      return (
            <div className="content container-fluid">
                    <div className="row " id="getUserButtonRow">
                            <div className="col-lg-12 col-md-12 col-s-12 col-xs-12">
                                    <button onClick={this.onClick.bind(this)} className="btn getUserButton">Stockstream.tv Onboarding Task: Click To Get User Details</button>
                            </div>
                    </div>

    {this.props.isUserComponent && < Users/ >}

            </div>
    );
  }
}

const mapStateToProps=(state)=>{
console.log("Inside mapStateToProps");
//Get state of User Compnent to show or hide the compnent accordingly
    return ({
            isUserComponent:state.showUserComponent.showUserComponent
            })
          }

function mapDispatchToProps(dispatch){
                console.log("Under mapDispatchToProps")
                //Change state of isUserComponent to true for maing user compnent visible
        return {
                        showUserComponent:()=>dispatch(showUserComponentFunc())
                }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Content);
