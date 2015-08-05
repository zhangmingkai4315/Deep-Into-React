var HelloWorld=React.createClass({displayName: "HelloWorld",
  render:function(){
    return(React.createElement("div", null, React.createElement("h1", null, "Hello world")));
  }
});
React.render(React.createElement(HelloWorld, null),document.body);
