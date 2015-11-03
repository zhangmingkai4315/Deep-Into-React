/** @jsx React.DOM */
var React= require("react");
var MessageBox=React.createClass({

  getInitialState:function () {
    return {
      isVisible:true,
      titleMessage:"My name is title!",
      messages:[
        "this is first message",
        "this is seconde message",
        "this is third message"
      ]
    }
  },
  render:function () {
    var inlineStyle={
      display:this.state.isVisible ? "block" : "none"
    };
    var messagesForBox=this.state.messages.map(function (message) {
      return <div><SubMessage title={message}/></div>
    });
    return (
      <div className="container" style={inlineStyle}>
       <h1> Hello world! {this.state.titleMessage}</h1>
       {messagesForBox}
      </div>
    )
  }
});
var titleForSubMessage="Yo SubMessage";
var SubMessage=React.createClass({
  propTypes:function () {
   title:React.PropTypes.string.isRequired
  },
  getDefaultProps:function () {
    return {
      title:"Message Default"
   }
  },
  render:function () {
    return (<small>{this.props.title}</small>);
  }
});

module.exports= MessageBox;
