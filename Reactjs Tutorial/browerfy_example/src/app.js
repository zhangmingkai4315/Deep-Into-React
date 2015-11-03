/** @jsx React.DOM */
var React=require('react');
var MessageBox=require('./MessageBox.js');
var reactComponent=React.render(
React.createElement(MessageBox, null),document.getElementById("content")
);
