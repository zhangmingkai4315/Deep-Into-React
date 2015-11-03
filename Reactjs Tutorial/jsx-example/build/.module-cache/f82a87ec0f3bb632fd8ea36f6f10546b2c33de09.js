/** @jsx React.DOM */
var Nolink=React.createClass({displayName: "Nolink",
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
      return (React.createElement("div", null, 
        React.createElement("input", {type: "text", ref: "message", onChange: this.handleChange, name: "name", value: message}), 
        message)
      )
  }
});

var Withlink=React.createClass({displayName: "Withlink",
    mixins:[React.addons.LinkedStateMixin],
    getInitialState:function () {
      return {
        message:"No input"
      };
    },
    render:function () {
      var message=this.state.message;
      return (React.createElement("div", null, 
        React.createElement("input", {type: "text", valueLink: this.linkState('message')}), 
        message)
      )
  }
});



React.render(React.createElement(Nolink, null),document.getElementById("content"));
React.render(React.createElement(Nolink, null),document.getElementById("content1"));
