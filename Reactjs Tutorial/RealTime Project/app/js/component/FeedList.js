/*** @jsx React.DOM */

var React = require('React');
var FeedItem=require("./FeedItem.js");
var FeedList=React.createClass({
  changeVote:function (item) {
    this.props.changeVote(item);
  },
  render:function () {
    var feedItems=this.props.items.map(function (item) {
      console.log(item);
      // debugger;
      return <FeedItem changeVote={this.changeVote}
              key={item.key} item={item}
      />;
    }.bind(this));
    return (
      <div className="container">
      <ul className="list-group">
        {feedItems}
      </ul>
      </div>
    );
  }
});

module.exports=FeedList;
