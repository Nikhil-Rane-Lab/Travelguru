
//sugnup should have emailid& password
var user_details=[
   
];

function loginpagego(){
    console.log("hi");
    window.location=("./../pages/signinf.html");
}
console.log(user_details);
function signup(event){
    var regsucc=false;
    event.preventDefault();
    var fname=document.getElementById("fn").value;
    var lname=document.getElementById("ln").value;
    var mob=document.getElementById("mn").value;
    var mail=document.getElementById("eid").value;
    var pass=document.getElementById("pw").value;
    var cpass=document.getElementById("cpw").value;
    if(cpass!=pass){
        var miss_pwd=document.getElementById('password_missmatch_m');
        miss_pwd.style.visibility="visible";

    }
   
   else if( my_checkif_user(mail)===false) {
    var divv=document.getElementById('email_m');
    divv.style.visibility = "visible";
       console.log("exist");
   }
    else {
        var newuseradd= {
            emailid:mail,
            password:pass,
            firstname:fname,
        }
      user_details.push(newuseradd);
      regsucc=true;
    }
   
    var local_user=localStorage.setItem("user_details",JSON.stringify(user_details));
    console.log(user_details);
    if(regsucc==true) window.location=("./../pages/redirectpage.html");
   
}
function  my_checkif_user(mail){
    var local_user_details=localStorage.getItem("user_details");
 var ud=JSON.parse(local_user_details);
 if(ud==null) return true;
 else{
    for(var i=0;i<ud.length;i++){
        if(ud[i].emailid==mail) return false;
    }
    return true;
}
}


var local_user_details=localStorage.getItem("user_details");
var ud=JSON.parse(local_user_details);
console.log(ud);

//sugnup should have emailid& password
var user_details=[];
function signinpagego(){
   console.log("hi");
   window.location=("./../pages/signupf.html");
}


function signin(event){
   event.preventDefault();

   var em=document.getElementById("eidd").value;
   var pa=document.getElementById("pww").value;
   console.log(em);
   console.log(pa);
var flag=false;
var name;
for(var i=0;i<ud.length;i++){
 /*   console.log(ud[i].emailid);
   console.log(ud[i].password); */
   if(ud[i].emailid==em && ud[i].password==pa){
       console.log("&");
        name=ud[i].firstname;
        flag=true;
   }
}
var divv=document.getElementById('login_false_m');
if(flag==false) {
   console.log("NOT successgul");
  
   divv.style.visibility = "visible";
}
else {
   var divv_true=document.getElementById('login_m');
   divv_true.style.visibility = "visible";
   console.log("successgul");
   console.log(name);
  
    console.log(" going to home page");
    timerId=setTimeout(()=>{
        window.location=("./../pages/home.html");
    },3500);
 }
  
       
   


}


//  console.log(user_details);