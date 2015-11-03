/** @jsx React.DOM */
var Nolink=React.createClass({
    getInitialState:function () {
      return {
        message:"No input"
      };
    },
    handleChange:function (event) {
       this.setState({message:event.target.value});
    },
    render:function () {
      var message=this.state.message;
      return (<div>
        <input type="text" ref="message" onChange={this.handleChange} name="name" value={message}/>
        {message}</div>
      )
  }
});

var Withlink=React.createClass({
    mixins:[React.addons.LinkedStateMixin],
    getInitialState:function () {
      return {
        message:"No input"
      };
    },
    render:function () {
      var message=this.state.message;
      return (<div>
        <input type="text" valueLink={this.linkState('message')}/>
        {message}</div>
      )
  }
});



React.render(<Nolink/>,document.getElementById("content"));
React.render(<Nolink/>,document.getElementById("content1"));
