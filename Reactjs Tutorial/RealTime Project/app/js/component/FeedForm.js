/*** @jsx React.DOM */

var React = require('React');
var FeedForm=React.createClass({
  handleSubmit:function (e) {
    e.preventDefault();
    var newItem={
      title:this.refs.title.getDOMNode().value,
      description:this.refs.description.getDOMNode().value,
      voteNumber:0
    };
    this.refs.feedForm.reset();
    this.props.onNewItem(newItem);

  },
  render:function () {
    var style={
      display:this.props.showForm?"block":'none'
    };
    return (

      <form ref="feedForm" style={style} className="container" >
        <div className="form-group">
          <input type="text" ref="title" className="form-control" placeholder="Title"/>
          <input type="text" ref="description" className="form-control" placeholder="Description"/>
          <button type="submit" className=" btn btn-primary btn-block" onClick={this.handleSubmit}>Add</button>
        </div>
      </form>
    );
  }
});

module.exports=FeedForm;
