function imgPreview(fileDom){
    //判断是否支持FileReader
    if (window.FileReader) {
        var reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }

    //获取文件
    var file = fileDom.files;//多张图片
    var length = file.length;

    var imageType = /^image\//;

    for(var i=0;i<length;i++){
        console.log(file[i]);
        if (!imageType.test(file[i].type)) {

            alert("请选择图片！");
            return;
        }
    }

    // console.log(reader);
    reader.onload = function(e) {
        console.log(reader);

    };

    // var imageType = /^image\//;
    // //是否是图片
    // if (!imageType.test(file.type)) {
    //     alert("请选择图片！");
    //     return;
    // }
    // //读取完成
    // reader.onload = function(e) {
    //     //获取图片dom
    //     var img = document.getElementById("image");
    //     //图片路径设置为读取的图片
    //     console.log("target",e.target);
    //     img.src = e.target.result;
    //     // widthLonger(img);
    //
    // };
    // reader.readAsDataURL(file);
}
