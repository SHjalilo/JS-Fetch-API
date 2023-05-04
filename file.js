// https://jsonplaceholder.typicode.com/posts?userId=1

function getPostWithId(){
  let requset = new XMLHttpRequest();
  requset.open("GET","https://jsonplaceholder.typicode.com/posts?userId=2");
  requset.responseType = "json";
  requset.send();
  requset.onload = function(){
    if(requset.status >= 200 && requset.status < 300){
      let posts = requset.response;
      document.getElementById("right").innerHTML ="";
      for(post of posts){
        let content = `<div class="right"><h2>${post.title}</h2><h3>${post.body}</h3></div><hr>`;
        document.getElementById("right").innerHTML +=content;
      }
      console.log("status code is : "+requset.status);
    }else {
      alert("error !");
    }
  }
}

getPostWithId();

//
function getUserName(){
  let requset = new XMLHttpRequest();
  requset.open("GET","https://jsonplaceholder.typicode.com/users");
  requset.responseType = "json";
  requset.send();
  requset.onload = function(){
    if(requset.status >= 200 && requset.status < 300){
      let users = requset.response;
      document.getElementById("left").innerHTML ="";
      for(user of users){
        let content = `<div class="left"><h1>${user.name}</h1><h4>${user.email}</h4></div>`;
        document.getElementById("left").innerHTML +=content;
      }
      console.log("status code is : "+requset.status);
    }else {
      alert("error !");
    }
  }
}
getUserName();
