

var name="";
var name2="";
var root=document.getElementById("root");
var k=100;
var matrix="";
var color_max=["#5000ffb5","#ff0065b5","#dd00ffb5","#00793eb5","#ff4c00b5"];
var ai_player=false;

for(let i=1;i<=10;i++){
    var t="<div class='row'>";
    if(i%2==0){

        for(let j=9;j>=0;j--){
            t+="<div class='box_1' style='background: "+color_max[parseInt(Math.random()*color_max.length)]+"' ><p class='box_p'>"+k+"</p><div id='box_id"+k+"' class='play'></div><div id='box_id"+k+"_p' class='play2'></div></div>";
            k--;
        }
    }else{

        for(let j=0;j<10;j++){
            t="<div class='box_1' style='background: "+color_max[parseInt(Math.random()*color_max.length)]+"' ><p class='box_p'>"+k+"</p><div class='play' id='box_id"+k+"'></div><div id='box_id"+k+"_p' class='play2'></div></div>"+t;
            k--;
        }
    }


    t+='</div>';

    matrix+=t;
}
//console.log(matrix);
root.innerHTML=matrix;

var rount=[-1,-1,-1,-1,-1];
var rot=0;


var root_d=document.getElementById("root_d");


var cube_data=document.getElementsByClassName("blo_cube");

var player=1;
var player2=1;


function fun() {

    var tmp_val = player;
    try {

        for (var i = 0; i < cube_data.length; i++) {
            cube_data[i].style.display = 'none';
        }


        for (var i = 1; i <= 100; i++) {
            document.getElementById("box_id" + i + "").className = " play";
        }

        var ii = parseInt((Math.random() * 6));
        cube_data[ii].style.display = 'block';


        //oprtion


        var op=document.getElementById("dei");
            op.style.display="block";
            op.innerText=""+(ii+1);

        setTimeout(function() { document.getElementById("dei").style.display='none'; }, 2000);




        //alert(""+parseInt((Math.random()*6)+1));

        document.getElementById("box_id" + player + "").className = " play";

        for (var j = player; j <= (player + ii); j++) {


            document.getElementById("box_id" + j + "").className = "disp dis_anm play";


        }


        var ck_hu = false;




        if (player == 1) {
            jsHello(1, ((player + ii)));
            player = (player + ii);
        }
        else {


            if (((player + ii) + 1) > 100) {
                ck_hu = true;


                alert("Out of Range try next !.");
                throw "lo";



            } else {
                jsHello(player - 1, ((player + ii) + 1));


                player = (player + ii + 1);
            }


            if (player === 100) {
                var dd = document.getElementById("won");
                dd.innerHTML = "Player " + name + " Won the Game";
                dd.style.display = "block";
                rount[rot]=1;
               init();
            }


        }


        var ck = ck_fun();
        if (ck_hu) {

            clr();
            document.getElementById("box_id" + tmp_val + "").className = "disp play";
            ck = false;
            return;
        }
        if (ck) {
            document.getElementById("box_id" + player + "").className = "disp play";
        }


        if (ai_player) {

            document.getElementById('try_btn').style.display = 'none';
            setTimeout(function () {
                play_ai();
            }, 2000);
        } else {
            document.getElementById('try_btn').style.display = 'none';
            setTimeout(function () {
                document.getElementById('try_btn2').style.display = 'block';
            }, 1000);


        }

    }catch (e) {
        alert("Out of Range try next !.");
        clr();
        document.getElementById("box_id" + tmp_val + "").className = "disp play";
        player=tmp_val;
    }

}



function clr() {
    for(let i=1;i<=100;i++){
        document.getElementById("box_id"+i+"").className = "play";
    }
}

function clrai() {
    for(let i=1;i<=100;i++){
        document.getElementById("box_id"+i+"_p").className = "play2";
    }
}

function init() {

    rot++;
    player=1;
    player2=1;

    document.getElementById("round").innerHTML="Round "+(rot+1);

    if(rot>=4){

        let p1=0,p2=0;
        for(let t in rount){
            if(t==1)
                p1++;
            else if(t==2)
                p2++;
        }

        var dd = document.getElementById("won");
        if(p1>p2)
        dd.innerHTML = "Player " + name + " Won the Game";
        else if(p1<p2)
        dd.innerHTML = "Player " + name2 + " Won the Game";
        else
        dd.innerHTML = "Player all Won the Game";
        dd.style.display = "block";
    }else{
        setTimeout(function() { document.getElementById("won").style.display='none'; }, 5000);
    }

    alert("game start round "+(rot+1));
}

function play_ai() {

    var tmp_val=player;

    try {
        setTimeout(function () {
            document.getElementById('try_btn').style.display = 'block';
        }, 1000);

        document.getElementById('try_btn2').style.display = 'none';


        for (var i = 0; i < cube_data.length; i++) {
            cube_data[i].style.display = 'none';
        }


        for (var i = 1; i <= 100; i++) {
            document.getElementById("box_id" + i + "_p").className = " play2";
        }


        var ii = parseInt((Math.random() * 6));
        //ii=2;
        cube_data[ii].style.display = 'block';


        if(!ai_player){

            var op=document.getElementById("dei");
            op.style.display="block";
            op.innerText=""+(ii+1);

            setTimeout(function() { document.getElementById("dei").style.display='none'; }, 2000);

        }

        //alert(""+parseInt((Math.random()*6)+1));

        document.getElementById("box_id" + player2 + "_p").className = " play2";

        for (var j = player2; j <= (player2 + ii); j++) {


            document.getElementById("box_id" + j + "_p").className = "disp dis_anm play2";


        }


        let ck_hu = false;


        if (player2 === 1) {
            jsHelloai(1, ((player2 + ii)));
            player2 = (player2 + ii);
        }
        else {

            console.log("" + (((player2 + ii) + 1) > 100) + " " + ((player2 + ii) + 1) + "");

            if (((player2 + ii) + 1) > 100) {
                ck_hu = true;

                alert("Out of Range try next !.");

                throw "lo";


            } else {
                jsHelloai(player2 - 1, ((player2 + ii) + 1));


                player2 = (player2 + ii + 1);
            }


            if (player2 === 100) {


                let dd = document.getElementById("won");

                if (ai_player) {
                    dd.innerHTML = "Player ai Won the Game";
                }
                else {
                    dd.innerHTML = "Player 2 " + name2 + " Won the Game";

                }
                dd.style.display = "block";

                rount[rot]=2;

               init();




            }


        }


        let ck = ck_fun_ai();

        if (ck_hu) {

            clrai();
            document.getElementById("box_id" + tmp_val + "_p").className = "disp play2";
            ck = false;
            return;
        }

        if (ck) {
            document.getElementById("box_id" + player2 + "_p").className = "disp play2";
        }

    }catch (e) {
        alert("Out of Range try next !.");
        clrai();
        document.getElementById("box_id" + tmp_val + "_p").className = "disp play2";
        player2=tmp_val;
    }


    //setTimeout(function() { fun(); }, 2000);

}

//image 
function snake_img() {

    document.getElementById('snake').style.display='block';
    setTimeout(function() {     document.getElementById('snake').style.display='none';}, 1000);
}

function lader_imd() {
    document.getElementById('lad_div').style.display='block';
    setTimeout(function() {     document.getElementById('lad_div').style.display='none';}, 1000);
}
//image end


const option={3:33,35:79,54:74};
const option_s={37:13,72:42,94:78};
function ck_fun() {


    //console.log(player);

    for (let key in option ) {
        if(key==player){
            lader_imd();
            document.getElementById("box_id"+player+"").className = " play";
            document.getElementById("box_id"+option[key]+"").className = "disp play";
            player=option[key];
            return false;
        }

    }


    for (let key in option_s ) {
        if(key==player){
            snake_img();
            document.getElementById("box_id"+player+"").className = " play";
            document.getElementById("box_id"+option_s[key]+"").className = "disp play";
            player=option_s[key];
            return false;
        }

    }
    return true;
}
function ck_fun_ai() {


    //console.log(player2);

    for (let key in option ) {
       // console.log(key==player2);
        if(key==player2){
            lader_imd();
            console.log("working");
            document.getElementById("box_id"+player2+"_p").className = " play2";
            document.getElementById("box_id"+option[key]+"_p").className = "disp play2";
            player=option[key];
            return false;
        }

    }


    for (let key in option_s ) {
        if(key==player2){
            snake_img();
            document.getElementById("box_id"+player2+"_p").className = " play2";
            document.getElementById("box_id"+option_s[key]+"_p").className = "disp play2";
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

function jsHelloai(m,n) {
   // console.log(n+" "+m);
    if (m == n) return;

    setTimeout(function () {

        document.getElementById("box_id"+m+"_p").className = "play2";

        jsHelloai(++m,n);

    }, 100);


}

document.getElementById('try_btn').style.display="none";

function fun_name(e) {

    if(document.getElementById("username").value!="") {
        document.getElementById('fit_div').style.display = "none";

        name = document.getElementById("username").value;
        name2 = document.getElementById("play2").value;
        document.getElementById('try_btn').style.display = "block";

        if(e){
            document.getElementById('tit').innerHTML = "Play snake and ladder Game " + name +" with AI";
        }else{
            document.getElementById('tit').innerHTML = "Play snake and ladder Game " + name +" with "+name2;
        }


        ai_player=e;


        document.getElementsByClassName('box')[0].style.transform="perspective(509px) rotatex(32deg)";
        document.getElementsByClassName('box')[1].style.transform="perspective(509px) rotatex(32deg)";


    }else{
        alert("Username is empty");
    }
}

