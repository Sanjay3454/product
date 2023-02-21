

function addProduct(){
    product={pname:pname.value,pid:pid.value,pprize:pprize.value,pquantity:pquantity.value}
    console.log(product,"product");
    if(product.pid in localStorage){
        alert("product already exist")
    }
    else{
        localStorage.setItem(product.pid,JSON.stringify(product))
    }
}




function register(){
    //access datas
uname=ps1.value
pass=ps2.value
con_pass=ps3.value
mobile=ps4.value

//objetc
acdetails={uname,pass,con_pass,mobile}
if(mobile in localStorage){
    alert("ac already present")
    window.location="index.html"
}
else{
    //STORE IN LOCAL STORAGE
    localStorage.setItem(uname,JSON.stringify(acdetails))
    alert("registration success")
    window.location="index.html"
}
}
function login(){
    accnm=u1.value
    password=p1.value
    if(accnm in localStorage){
 data=JSON.parse(localStorage.getItem(accnm))
 console.log(data,"data");
 if(password==data["pass"]){
     window.location="product_add.html"
     alert("login success")
 }
 else{
     alert("incorrect password")
 }
 
    }
 
    else{
     alert("incurrect acno")
    }
 
 }
 function viewProduct(){
    console.log("hai");
    window.location="seachproduct.html"
}


function searchProduct(){
    keyid=s1.value
    if(keyid in localStorage ){
        //if present access the curresponding object from local storage
        //end convert to js then stored in a variable emp
        product=JSON.parse(localStorage.getItem(keyid))
        // console.log(emp);
        result.innerHTML=`
        <h3 Class="text-dark">Product Name:  ${product.pname} </h3>
        <h3 Class="text-dark">Product id:  ${product.pid} </h3>
        <h3 Class="text-dark">Product prize:   ${product.pprize} </h3>
        <h3 Class="text-dark">Product quantity:   ${product.pquantity} </h3>
       
        `        
        
    }  

    else{
        alert("product is not present")
        result.innerHTML=''
    }
    
}



function logout(){
    window.location="index.html"
}