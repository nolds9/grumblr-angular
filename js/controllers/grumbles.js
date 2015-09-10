var app = angular.module("grumblr");

app.controller("grumblesController", function(){
  this.grumbles = [
    {
      authorName: "Nick",
      content: "^this Cage is awesome",
      photo_url: "http://placecage.com/400/400",
      comments:
        [
          {commentAuthor: "Bob", commentContent: "Sweet post"},
          {commentAuthor: "Tom", commentContent: "^what he said"}
        ]
    },
    {
      authorName: "Matt",
      content: "^this Bear is awesome",
      photo_url: "http://placebear.com/400/400",
      comments:
      [
        {commentAuthor: "Bob", commentContent: "Sweet post"},
        {commentAuthor: "Tom", commentContent: "^what he said"}
      ]
    },
    {
       authorName: "Mac",
       content: "^this Pic is awesome",
       photo_url: "http://lorempixel.com/400/400",
       comments:
       [
         {commentAuthor: "Bob", commentContent: "Sweet post"},
         {commentAuthor: "Tom", commentContent: "^what he said"}
       ]
     }
  ];

  this.formIsVisible = false;

  this.toggleForm = function(){
    event.preventDefault();
    if(!this.formIsVisible){
      this.formIsVisible = true;
    } else{
      this.formIsVisible = false;
    }
  };

  this.createGrumble = function(data){
    this.grumbles.unshift(data);
    this.data = {};
    this.toggleForm();
  };

  this.updateGrumble = function(index, data){
    this.grumbles[index] = data;
  };

  this.currentGrumble = function(index){
    this.updated = this.grumbles[index];
  };

  this.destroyGrumble = function(index){
    event.preventDefault();
    this.grumbles.splice(index,1);
  };
});
