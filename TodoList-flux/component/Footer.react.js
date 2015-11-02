/** @jsx React.DOM */

var React=require("react");
//设定类型要求
var ReactPropTypes=React.PropTypes;
var TodoActions=require('../actions/TodoActions');

var Footer=React.createClass({
  propTypes:{
    allTodos:ReactPropTypes.object.isRequired
  },
  render:function () {
    var allTodos=this.props.allTodos;
    var total=Object.keys(allTodos).length;
    if(total===0){
      return null;
    }
    var complete=0;
    for(var key in allTodos){
      if(allTodos[key].complete)
      {
        complete++;
      }
    }

    var itemsLeft=total-complete;
    var itemsLeftPhrase=itemsLeft===1?'item':'items';
    itemsLeftPhrase+=' left';
    var clearCompletedButton;
    if(complete){
      clearCompletedButton=<button id="clear-completed" onClick={this._onClearCompletedClick}>
      Clear completed({complete})</button>;
    }

    return(
      <footer id="footer"><span id="todo-count"><strong>{itemsLeft}</strong>{itemsLeftPhrase}</span>{clearCompletedButton}</footer>
    );

  },
  _onClearCompletedClick:function () {
    TodoActions.destroyCompleted();
  }
});
module.exports=Footer;
