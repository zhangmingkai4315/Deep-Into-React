/*** @jsx React.DOM */

var React = require('React');
var FeedItem=require("./FeedItem.js");
var FeedList=require("./FeedList.js");
var FeedForm=require("./FeedForm.js");
var ShowAddButton=require("./ShowAddButton.js");
var Firebase = require('firebase');

var _=require('lodash');
var Feed=React.createClass({
  loadData:function () {
    var ref=new Firebase('https://luminous-heat-1841.firebaseio.com/feed');

    ref.on('value',function (snap) {
      var items=[];
      var sortedItems=[];
      console.log(snap.val());
      snap.forEach(function (itemSnap) {
        var item=itemSnap.val();
        item.key=itemSnap.key();
        items.push(item);
      });
      sortedItems=_.sortBy(items,function (item) {
        return -item.voteNumber;
      })
      this.setState({
        items:sortedItems
      });
    }.bind(this));
  },
  componentDidMount:function(){
     this.loadData();
  },
  getInitialState:function () {
    var FEED_ITEMS=[
      {key:"1",title:"This is first voteit",description:'First',voteNumber:40},
      {key:"2",title:"This is second voteit",description:'second',voteNumber:10},
      {key:"3",title:"This is third voteit",description:'third',voteNumber:100}
    ];
    return {
      items:FEED_ITEMS,
      showForm:true
    };
  },
  taggelButton:function () {
    var show=this.state.showForm;
    this.setState({showForm:!show});
  },
  handleSubmit:function (newItem) {

    var items=this.state.items;
    var key=items.length+1;
    newItem.key=key;
    items.push(newItem);
    this.setState({
      items:items,
      showForm:false
    });
    var ref=new Firebase('https://luminous-heat-1841.firebaseio.com/feed');
    ref.push(newItem);
    this.loadData();
  },
  changeVote:function (newItem) {

    // var items=_.uniq(this.state.items);
    // var index=_.findIndex(items,function(feedItems){
    //   console.log(feedItems);
    //   return feedItems.key===newItem.key;
    // });
    //
    // var oldObj=items[index];
    // var newItems=_.pull(items,oldObj);
    // newItems.push(newItem);
    // this.setState({
    //   items:newItems
    // });
    //
    //
    //
    console.log(newItem);
    var ref=new Firebase('https://luminous-heat-1841.firebaseio.com/feed').child(newItem.key);
    ref.update(newItem);

    //
    // var items=this.state.items;
    // items.map(function (item) {
    //   if(item.description==newItem.description&&item.title==newItem.title){
    //     item.voteNumber=newItem.voteNumber;
    //     // debugger;
    //   }
    // });
    // // console.log(items);
    // this.setState({
    //   items:items
    // });

  },
  render:function () {
    return (
      <div>
        <div className="container">
          <ShowAddButton taggelButton={this.taggelButton} ShowAddButton={this.state.showForm}/>
        </div>
        <FeedForm showForm={this.state.showForm} onNewItem={this.handleSubmit}/>
        <br/>
        <br/>
        <FeedList items={this.state.items} changeVote={this.changeVote}/>
      </div>
    );
  }
});

module.exports=Feed;
