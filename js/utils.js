/**
 * Created by huanghaitao on 2016/11/23.
 */
    //将utils定义为window对象下的一个属性，属性值为对象
window.utils = {};

//鼠标位置
window.utils.captureMouse= function(element){
    var mouse={ x:0 , y:0 }

    element.addEventListener("mousemove",function(event){
        var x,y;
        //获取鼠标位于当前屏幕的位置， 并作兼容处理
        if(event.pageX||event.pageY){
            x = event.pageX;
            y = event.pageY;
        }else{
            x = event.clientX + document.body.scrollLeft +document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop +document.documentElement.scrollTop;
        }
        x -= element.offsetLeft;
        y -= element.offsetTop;
        mouse.x = x;
        mouse.y = y;
    },false);
    return mouse;
}

//监听键盘按下哪个键
window.utils.onKeyboard=function(){
    switch (event.keyCode){
        case 38:
            console.log('up!');
            break;
        case 40:
            console.log('down!');
            break;
        case 37:
            console.log('left!');
            break;
        case 39:
            console.log('right!');
            break;
        default:
            console.log(event.keyCode);
    }
}

//调用onKeyboard
window.addEventListener('keydown',window.utils.onKeyboard,false)
