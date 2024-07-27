let status=false;
function on(){
    status=true;
    document.getElementById("result").value="0";
}
function dis(val){
    if(status==false){
        return;
    }
    let currentDisplay=document.getElementById("result").value;
    if(currentDisplay=="0"){
        document.getElementById("result").value="";
    }
    document.getElementById("result").value+=val;
}
function clr(){
    if(status==false){
        return;
    }
    let a=document.getElementById("result").value;
    document.getElementById("result").value=a.toString().slice(0,-1);
    let currentDisplay=document.getElementById("result").value;
    if(currentDisplay==""){
        document.getElementById("result").value="0";
    }
}
function allclr()
{
    if(status==false){
        return;
    }
    document.getElementById("result").value="0";
}
function solve()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y;
    try{
        y=eval(x);
        
    }
    catch(err){
        alert("Enter Valid Operations!!!");
    }
    document.getElementById("result").value=y;
    let b=document.getElementById("result").value;
    if(b.includes('.')){
        b=(b)*1000;
        b=Math.round(b);
        b=b*1.0/1000;
    }
    document.getElementById("result").value=b;
}
function log()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y=Math.log(x);
    document.getElementById("result").value=y;
    let b=document.getElementById("result").value;
    if(b.includes('.')){
        b=(b)*1000;
        b=Math.round(b);
        b=b*1.0/1000;
    }
    document.getElementById("result").value=b;
}

function sqrt()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y=Math.sqrt(x);
    document.getElementById("result").value=y;
    let b=document.getElementById("result").value;
    if(b.includes('.')){
        b=(b)*1000;
        b=Math.round(b);
        b=b*1.0/1000;
    }
    document.getElementById("result").value=b;
}
function sqr()
{
    if(status==false){
        return;
    }
    let x=document.getElementById("result").value;
    let y=eval(x*x);
    document.getElementById("result").value=y;
    let b=document.getElementById("result").value;
    if(b.includes('.')){
        b=(b)*1000;
        b=Math.round(b);
        b=b*1.0/1000;
    }
    document.getElementById("result").value=b;
}
function off()
{
    status=false;
    document.getElementById("result").value="";
}