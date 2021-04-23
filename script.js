let nums=function(num){
    var valBox2 = document.getElementById('box2').textContent;
    var valBox1 = document.getElementById('box1').textContent;
    var valBox3 = document.getElementById('box3').textContent
    if (valBox2 == '') {
        let box1=document.getElementById("box1");
        box1.innerHTML= valBox1+=num ;
    }
    else{
        let box3=document.getElementById("box3");
        box3.innerHTML= valBox3+=num ; 
    }
}

let opr =function(op){

    let box2=document.getElementById("box2");
    box2.innerHTML=op;
}

let del =function(){
    box1.innerHTML='';
    box2.innerHTML='';
    box3.innerHTML='';
}

let eq = function(){

    var n1 = document.getElementById('box1').textContent;
    var _op = document.getElementById('box2').textContent;
    var n2 = document.getElementById('box3').textContent;
    if (_op == '+'){
        a = parseInt(n1) + parseInt(n2);
    }
    else if (_op == '-') {
        a = parseInt(n1) - parseInt(n2);
    }
    else if (_op == '*') {
        a = parseInt(n1) * parseInt(n2);
    }
    else if (_op == '/') {
        a = parseInt(n1) / parseInt(n2);
    }
    

    ansLable.innerHTML=a;
    
}

