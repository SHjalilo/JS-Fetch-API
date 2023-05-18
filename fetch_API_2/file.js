//
function showUsers(){
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(function (data){
           console.log(data);
           document.getElementById("i-l").innerHTML="";
           for(user of data){
		console.log(user.name);
		console.log(user.email);
		let content = `<div class="item" onclick="changeIndex(${user.id})"> <h3>${user.name}</h3> <span>${user.email}</span> </div>`;
		document.getElementById("i-l").innerHTML += content;
 	   }
      })
}
//
showUsers();  
//   

//
function changeIndex(index){
    showPosts(index);
}
//
function showPosts(id){

fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
      .then(response => response.json())
      .then(function (data){
           console.log(data);
           document.getElementById("i-r").innerHTML="";
           for(post of data){
		console.log(post.title);
		console.log(post.body);
		let content = `<div class="items" onclick="changeIndex()"> <h3>${post.title}</h3> <p>${post.body} </p> </div>`;
		document.getElementById("i-r").innerHTML += content;
 	   }
      })   
}
///



//for(user of users){

//}

//let x = json;
//console.log(json.name);
//let content = `<div class="item"id="item-value"> <h3>Full Name: ${data[0][name]}</h3> <span>Email</span> </div>`;
//document.getElementById("item-value").innerHTML = content;
