function widthLonger(imgDom){
    if(imgDom.width>imgDom.height){
        console.log("width!"+imgDom.width);
        imgDom.style.width="730px";
        console.log("width???"+imgDom.width);
    }else{
        imgDom.style.height="520px";
        console.log("width???"+imgDom.width);
    }
}

function imgPreview(fileDom){
    //判断是否支持FileReader
    if (window.FileReader) {
        var reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }

    //获取文件
    var file = fileDom.files[0];
    var imageType = /^image\//;
    //是否是图片
    if (!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    //读取完成
    reader.onload = function(e) {
        //获取图片dom
        var img = document.getElementById("image");
        //图片路径设置为读取的图片
        console.log("target",e.target);
        img.src = e.target.result;
        // widthLonger(img);

    };
    reader.readAsDataURL(file);
    document.getElementById("edit").style.display="inline-block";
    console.log(document.getElementById("edit").style);
    document.getElementById("inputFile").style.display="none";

}


//
// window.onload = function(){
//     var current = 0;
//     var img=document.getElementById("preview");
//     document.getElementById('rotateBtn').onclick = function(){
//         console.log("current "+current);
//         current = (current+90)%360;
//         img.style.transform = 'rotate('+current+'deg)';
//         widthLonger(img,current);
//     }
// };
//
// var cropBtn=document.getElementById("crop");
// cropBtn.addEventListener('click', function () {
//
//     var image = document.querySelector('#preview');
//     var result = document.querySelector('#result');
//     var cropper = new Cropper(image, {
//         ready: function () {
//             var image = new Image();
//             image.src = cropper.getCroppedCanvas().toDataURL('image/jpeg');
//             console.log("ready",image);
//             result.setAttribute("src",image.src);
//         },
//     });
//
//     var btn = document.getElementById("ok");
//     btn.addEventListener("click",function(){
//         var image = new Image();
//         image.src = cropper.getCroppedCanvas().toDataURL('image/jpeg');
//         console.log("result",image.src);
//         result.setAttribute("src",image.src);
//     });
// });
var showPic=document.getElementsByClassName("showPic")[0];
var border=document.getElementById("border");
var small=document.getElementsByClassName("small")[0];

var btnBar=document.getElementById("btnBar");
var edit=document.getElementById("edit");
var rotateRight=document.getElementById("rotateRight");
var rotateLeft=document.getElementById("rotateLeft");
var oneToOne=document.getElementById("oneToOne");
var twoToThree=document.getElementById("twoToThree");
var threeToFour=document.getElementById("threeToFour");
var nineToSixteen=document.getElementById("nineToSixteen");
var free=document.getElementById("free");

var image=document.getElementById("image");

edit.addEventListener("click",function(){
    border.style.marginLeft="45px";//图片往左撤

    showPic.style.width="90%";//为了响应窗口大小变化
    image.style.width="70%";
    small.style.width="30%";
    edit.style.display="none";

    btnBar.style.display="inline-block";
    rotateRight.style.backgroundImage="url(\"../assets/arrow-rotate-right.png\")"//不知道为什么重显以后加载不出背景图 再手动加一次
    rotateLeft.style.backgroundImage="url(\"../assets/arrow-rotate-left.png\")";
    //
    // horizonTurn.style.backgroundImage="url(\"../assets/horizonTurn.png\")";
    // verticalTurn.style.backgroundImage="url(\"../assets/verticalTurn.png\")";


    var cropper = new Cropper(image, {
        // aspectRatio: 16 / 9,
        viewMode:2,
        preview:".small",
        guides:false,
        crop: function (e) {
            // console.log(e.detail.x);
            // console.log(e.detail.y);
            // console.log(e.detail.width);
            // console.log(e.detail.height);
            // console.log(e.detail.rotate);
            // console.log(e.detail.scaleX);
            // console.log(e.detail.scaleY);
        }
    });

    rotateRight.addEventListener("click",function (ev) {
        cropper.rotate(90);
    })

    rotateLeft.addEventListener("click",function(ev){
        cropper.rotate(-90);
    })

    oneToOne.addEventListener("click",function(ev){
        cropper.setAspectRatio(1/1);
    })

    twoToThree.addEventListener("click",function(ev){
        cropper.setAspectRatio(2/3);
    })

    threeToFour.addEventListener("click",function(ev){
        cropper.setAspectRatio(3/4);
    })

    nineToSixteen.addEventListener("click",function(ev){
        cropper.setAspectRatio(9/16);
    })

    free.addEventListener("click",function (ev) {
        cropper.setAspectRatio(NaN);

    })



})
