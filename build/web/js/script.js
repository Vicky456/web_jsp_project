

var name="";
var root=document.getElementById("root");
var k=100;
var matrix="";
var color_max=["#5000ffb5","#ff0065b5","#dd00ffb5","#00793eb5","#ff4c00b5"];

for(let i=1;i<=10;i++){
    var t="<div class='row'>";
    if(i%2==0){

        for(let j=9;j>=0;j--){
            t+="<div class='box_1' style='background: "+color_max[parseInt(Math.random()*color_max.length)]+"' ><p class='box_p'>"+k+"</p><div id='box_id"+k+"' class='play'></div></div>";
            k--;
        }
    }else{

        for(let j=0;j<10;j++){
            t="<div class='box_1' style='background: "+color_max[parseInt(Math.random()*color_max.length)]+"' ><p class='box_p'>"+k+"</p><div class='play' id='box_id"+k+"'></div></div>"+t;
            k--;
        }
    }


    t+='</div>';

    matrix+=t;
}
//console.log(matrix);
root.innerHTML=matrix;


var root_d=document.getElementById("root_d");


var cube_data=document.getElementsByClassName("blo_cube");

var player=1;


function fun() {

    for(var i=0;i<cube_data.length;i++){
        cube_data[i].style.display='none';
    }

    var ii=parseInt((Math.random()*6));
    cube_data[ii].style.display='block';

    //alert(""+parseInt((Math.random()*6)+1));

    document.getElementById("box_id"+player+"").className = " play";

    for (var j=player;j<=(player+ii);j++){


        document.getElementById("box_id"+j+"").className = "disp dis_anm play";



    }




    if(player==1) {
        jsHello(1,((player+ii)));
        player = (player + ii);
    }
    else{



        if(((player+ii)+1)>100){
            for(var t=1;t<100;t++){
                document.getElementById("box_id"+t+"").className = " play";
            }


            document.getElementById("box_id"+player+"").className = "desp play";

        }else{
            jsHello(player-1,((player+ii)+1));



            player=(player+ii+1);
        }




        if(player===100){
            var dd=document.getElementById("won");
            dd.innerHTML="Player "+name+" Won the Game";
            dd.style.display="block";
        }



    }




    var ck=ck_fun();
    if(ck){
        document.getElementById("box_id"+player+"").className = "disp play";
    }

}



function ck_fun() {
    var option={3:33,35:79,54:74};

    //console.log(player);

    for (let key in option ) {
        if(key==player){
            document.getElementById("box_id"+player+"").className = " play";
            document.getElementById("box_id"+option[key]+"").className = "disp play";
            player=option[key];
            return false;
        }

    }
    var option_s={37:8,72:42,94:78};

    for (let key in option_s ) {
        if(key==player){
            document.getElementById("box_id"+player+"").className = " play";
            document.getElementById("box_id"+option_s[key]+"").className = "disp play";
            player=option_s[key];
            return false;
        }

    }
    return true;
}

function jsHello(m,n) {
   // console.log(n+" "+m);
    if (m === n) return;

    setTimeout(function () {

        document.getElementById("box_id"+m+"").className = "play";

        jsHello(++m,n);

    }, 100);


}

document.getElementById('try_btn').style.display="none";

function fun_name(e) {

    if(document.getElementById("username").value!="") {
        document.getElementById('fit_div').style.display = "none";

        name = document.getElementById("username").value;
        document.getElementById('try_btn').style.display = "block";

        document.getElementById('tit').innerHTML = "Play snake and ladder Game " + name;
    }else{
        alert("Username is empty");
    }
}

