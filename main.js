/**
 * Created by zhaojing on 2017/7/12.
 */

window.onload=function () {
    for(var i = 1;i<=6;i++){
        var circle = document.querySelector('#path-'+i);
        var pathLength = circle.getTotalLength();
        console.log(pathLength);
    }

}