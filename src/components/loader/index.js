import React,{Component} from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import '../../static/css/loader.css';


class Loader extends Component
{

render()
{
//Loader Component
  return (
    <div className="Loader"><Loading type='bubbles' color='#0E66B1' height="40px" width="110px" position="absolute" top="204px"/></div>
)
}
}
export default Loader;
