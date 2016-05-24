/**
 * Created by lee on 2016/5/24.
 */
function getUrl(picfile,id){
    var cnv = document.getElementById("picCanvas");
    var cntx = cnv.getContext('2d')//获得容器
    var pic = new Image();
    var agoimg = document.getElementById("origin");

    for(var i = 0; i < picfile.length; i++ ){
        var temp = picfile[i];
        var reader = new FileReader();
        reader.readAsDataURL(temp);
        reader.onload = function(e){
            var url = e.target.result;
            pic.src = url;
            agoimg.src = url;
            agoimg.onload = function(e){
                //等比缩放,高为参考值
               var m = pic.width / pic.height;
                cnv.height = 500;
                cnv.width = 500 * m;
                cntx.drawImage(agoimg,0,0,500*m,500);
            }
        }
    }
}

function compress(){
    var picture = document.getElementById("picCanvas").toDataURL("image/png");
    var imgs = document.getElementById("pressed");
    imgs.src = picture;

}
