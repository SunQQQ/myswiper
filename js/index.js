/**
 * Created by sunq on 2017/7/1.
 */
// 这种写法好像不太好，以为直接设置left或者right的值。
// 感觉封装一个方法，往方法里传参，这样就可以解决点击小点点，切换照片了。
function moveEnter() {
    document.getElementsByClassName("mybutton")[0].style.display = "block";
    document.getElementsByClassName("mybutton2")[0].style.display = "block";
}
function moveOut() {
    document.getElementsByClassName("mybutton")[0].style.display = "none";
    document.getElementsByClassName("mybutton2")[0].style.display = "none";
}
function swip(picWidth,picHeigh) {
    var clicknum = 0;

    // 图片宽度，图片高度
    var liWidth = picWidth;
    var liHeign = picHeigh;

    // 根据图片宽度设置整体构架
    var picNum = document.getElementById("myul").getElementsByTagName("li").length;
    document.getElementById("myul").style.width = picNum * liWidth + "px";
    document.getElementsByClassName("swiper")[0].style.width = liWidth + "px";
    document.getElementsByClassName("swiper")[0].style.height = liHeign + "px";
    var lis = document.getElementById("myul").getElementsByTagName("li");

    for(var i = 0;i<lis.length;i++){
        lis[i].style.width = liWidth + "px";
    }

    // 设置右面按钮的位置
    document.getElementsByClassName("mybutton2")[0].style.left=liWidth -50 +"px";

    var pos = document.getElementById("pos");
    for(var w=0;w<picNum;w++){
        var newdiv = document.createElement("div");
        newdiv.setAttribute("class","po");
        pos.append(newdiv);
    }

    // // 获取、设置points的宽度，并使其水平居中
    document.getElementsByClassName("points")[0].style.width = liWidth + "px";
    pointsWidth = document.getElementsByClassName("po")[0].clientWidth;
    pointsNumber = document.getElementsByClassName("pos")[0].getElementsByTagName("div").length;
    pointsTotalWidth = pointsWidth*pointsNumber+ pointsNumber*20;
    document.getElementsByClassName("pos")[0].style.width = pointsTotalWidth+"px";
    // //水平居中
    var pointsLeft = (picWidth-pointsTotalWidth)/2;
    document.getElementsByClassName("pos")[0].style.left = pointsLeft + "px";

    // 为小点点添加监听
    function pointEvent(ll){
        document.getElementsByClassName("po")[ll].onclick = function () {
            clicknum = ll-1;
            moveRight();
        }
    }
    for(var ss=0;ss<picNum;ss++){
        pointEvent(ss);
    }

    // 左右按钮添加事件
    document.getElementsByClassName('mybutton')[0].onclick = moveRight();
    document.getElementsByClassName('mybutton2')[0].onclick=moveLeft();

    setInterval(moveRight,2000);
    function moveRight() {
        clicknum++;
        if(clicknum<picNum){
            document.getElementById("myul").style.left = -liWidth*clicknum + "px";
        }
        if(clicknum==picNum){
            clicknum = 0;
            document.getElementById("myul").style.left = -liWidth*clicknum + "px";
        }
    }
    function moveLeft(){
        clicknum--;
        if(clicknum<picNum){
            document.getElementById("myul").style.left = -liWidth*clicknum + "px";
        }
        if(clicknum<0){
            clicknum = picNum-1;
            document.getElementById("myul").style.left = -liWidth*clicknum + "px";
        }
    }
}