/*** @jsx React.DOM */

var React = require('React');
var FeedItem=React.createClass({
  changeVote:function (number) {

      this.props.changeVote({
        key:this.props.item.key,
        voteNumber:number,
        title:this.props.item.title,
        description:this.props.item.description
      });
  },
  voteUp:function () {
    var voteNumber=parseInt(this.props.item.voteNumber);
    this.changeVote(voteNumber+1);
  },
  voteDown:function () {
    var voteNumber=parseInt(this.props.item.voteNumber);
    this.changeVote(voteNumber-1);
  },
  render:function () {
    var styleColor= this.props.item.voteNumber<0?{background:"red"}:{background:'steelblue'};

    return (

      <li className="list-group-item">
        <span style={styleColor} className="badge badge-success">{this.props.item.voteNumber}</span>
        <h2>{this.props.item.title}</h2>
        <h4>{this.props.item.description}:{this.props.item.key}</h4>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
          <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
        </span>
        <br/>
        <br/>
      </li>
    );
  }
});

module.exports=FeedItem;
