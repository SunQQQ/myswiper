/**
 * Created by sunq on 2017/7/1.
 */
function moveEnter() {
    document.getElementsByClassName("mybutton")[0].style.display = "block";
    document.getElementsByClassName("mybutton2")[0].style.display = "block";
}
function moveOut() {
    document.getElementsByClassName("mybutton")[0].style.display = "none";
    document.getElementsByClassName("mybutton2")[0].style.display = "none";
}
function swip(picWidth,picHeigh) {
    var liWidth = picWidth;
    var liHeign = picHeigh;

    var picNum = document.getElementById("myul").getElementsByTagName("li").length;
    var clicknum = 0;

    document.getElementsByClassName("points")[0].style.width = liWidth + "px";
    document.getElementById("myul").style.width = picNum * liWidth + "px";
    document.getElementsByClassName("swiper")[0].style.width = liWidth + "px";
    document.getElementsByClassName("swiper")[0].style.height = liHeign + "px";
    document.getElementsByClassName("mybutton2")[0].style.left=liWidth -50 +"px";
    var lis = document.getElementById("myul").getElementsByTagName("li");
    for(var i = 0;i<lis.length;i++){
        lis[i].style.width = liWidth + "px";
    }

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