//控制菜单固定


window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop;
    var omg = document.getElementsByClassName('omg')[0];
    if(scrollTop > 262){
        omg.className = "omg containerfixed";
    }else {
        omg.className = "omg";
    }
}

//菜单切换显示
var tab = document.getElementsByClassName('tab')[0].getElementsByTagName('li');
var part = document.getElementsByClassName('seckill-con')[0].getElementsByClassName('container');

    for (var i = 0; i < tab.length; i ++){
        tab[i].onclick = showlist;
    }

    function showlist() {
        for(var i = 0; i < tab.length; i ++){
            if(tab[i] === this){
                tab[i].className = "active";
                part[i].style.display = "block";
            }else {
                tab[i].className = "";
                part[i].style.display = "none";
            }
        }
    }

