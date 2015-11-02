/** @jsx React.DOM */
var Footer=require('./Footer.react');
var Header=require('./Header.react');
var MainSection=require('./MainSection.react');
var React=require('react');
var TodoStore=require('../store/TodoStores');

function getTodoState(argument) {
  // body..
  return{
    allTodos:TodoStore.getAll(),
    areAllComplete:TodoStore.areAllComplete()
  }
}

var TodoApp=React.createClass({
  getInitialState:function () {
    return getTodoState();
  },
  componentDidMount:function () {
    //注册一个标准的数据监听器到TodoStore上，一旦数据发生变化，执行回调
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount:function () {
    TodoStore.removeChangeListener(this._onChange);
  },
  render:function () {
    return(<div>
              <Header />
                <MainSection allTodos={this.state.allTodos} areAllComplete={this.state.areAllComplete}/>
                <Footer allTodos={this.state.allTodos}/>
            </div>)
  },
  _onChange:function () {
    this.setState(getTodoState());
  }
});


module.exports = TodoApp;
