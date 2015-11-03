/*** @jsx React.DOM */

var React = require('React');
var ShowAddButton=React.createClass({

  render:function () {
    if(this.props.ShowAddButton){
      classString="btn btn-primary btn-block";
      buttonString="Create New Item";
    }else{
      classString="btn btn-warning btn-block";
      buttonString="Cancel";
    }
    return (
    <button className={classString} onClick={this.props.taggelButton}>{buttonString}</button>
    )
  }
});

module.exports=ShowAddButton;
