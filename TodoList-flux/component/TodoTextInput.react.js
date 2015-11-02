/** @jsx React.DOM */
var React=require('react');
var ReactPropsTypes=React.PropTypes;

var ENTER_KEY_CODE=13;

var TodoTextInput=React.createClass({
  getInitialState:function () {
    return {
      value:this.props.value||""
    };
  },
  propTypes:{
    className:ReactPropsTypes.string,
    id:ReactPropsTypes.string,
    placeholder:ReactPropsTypes.string,
    onSave:ReactPropsTypes.func.isRequired,
    value:ReactPropsTypes.string
  },


  render:function () {
    return(<input className={this.props.className} id={this.props.id} placeholder={this.props.placeholder} onBlur={this._save}
      onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.value} autoFocus={true}/>
    );
  },
  _onSave:function () {
    this.props.onSave(this.state.value);
    this.setState({
      value:''
    });
  },
  _onKeyDown:function (event) {
    if(event.keyCode===ENTER_KEY_CODE){
      this._onSave();
    }
  },
  _onChange:function (event) {
    this.setState({
      value:event.target.value
    });
  }
});

module.exports = TodoTextInput;
