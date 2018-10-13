var SINGLEBUTTON='[data-single-button]';
var MULTIPLEBUTTON='[data-multiple-button]';
var singleBtn=document.querySelector(SINGLEBUTTON);
var multipleBtn=document.querySelector(MULTIPLEBUTTON);

singleBtn.addEventListener("click",function (event) {
    console.log("Button Yes");
    console.log(event);
});

document.addEventListener("click",function(){
    console.log("click!");
});