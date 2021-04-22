let nums=function(num){
    var val = document.getElementById('box1').textContent;

    if (val == 0) {
        let box1=document.getElementById("box1");
        box1.innerHTML=num;
    }
    else{
        let box3=document.getElementById("box3");
        box3.innerHTML=num; 
    }
}

let opr =function(op){

    let box2=document.getElementById("box2");
    box2.innerHTML=op;

}

