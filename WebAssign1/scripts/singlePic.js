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
        var img = document.getElementById("preview");
        //图片路径设置为读取的图片
        img.src = e.target.result;
        widthLonger(img,0);
    };
    reader.readAsDataURL(file);
}

function widthLonger(imgDom,angle){
    if(angle==90||angle==270){
        if(imgDom.width>imgDom.height){
            imgDom.setAttribute("width","530px");
        }else{
            img.setAttribute("height","730px");
        }
    }else{
        if(imgDom.width>imgDom.height){
            imgDom.setAttribute("width","730px");
        }else{
            img.setAttribute("height","530px");
        }
    }

}

window.onload = function(){
    var current = 0;
    var img=document.getElementById("preview");
    document.getElementById('rotateBtn').onclick = function(){
        current = (current+90)%360;
        img.style.transform = 'rotate('+current+'deg)';
        widthLonger(img,current);
    }
};
