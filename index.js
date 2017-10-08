function createPost(){
  var pageTemplate = _.template(document.getElementById(`page-template`).innerHTML);
  var postTemplate = _.template(document.getElementById(`post-template`).innerHTML);
  var commentsTemplate = _.template(document.getElementById('comments-template').innerHTML);
  var postTitle = document.getElementById("postTitle").value;
  var postAuthor = document.getElementById('postAuthor').value;
  var post = document.getElementById("postbody").value;

}

function postComment(){
  var commentsTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commentText = document.getElementById("commentText").value;
  var commenterName = document.getElementById("commenter").value;
  var commentsSection = document.getElementById("comments");
  commentsSection.innerHTML += commentTemplate({`comments`: commenterName, `comment`: commentText})
}
