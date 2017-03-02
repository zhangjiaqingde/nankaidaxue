/**
 * Created by missSS on 2016/12/4.
 */
function lunboqi(obj,objaImg){

    obj.style.width=objaImg[0].offsetWidth*objaImg.length+'px';
   // alert(obj.offsetWidth);
    var num=1;      //计数器
    var num2=5;     //计数器
    //alert(num2);
    setInterval(function(){
        if(num<5) {
            sportFrame(obj, 'marginLeft',-(num *1000)); // 运动框架运动
            num++;                         //计数器自增
        }

        else
        {
            if(num2>0) {
                num2--;
                sportFrame(obj,'marginLeft', -(num2 * 1000));
            }
            else
            {
                num=1;       // 恢复计数器原始状态
                num2=5;
            }
        }
    },2000);
}