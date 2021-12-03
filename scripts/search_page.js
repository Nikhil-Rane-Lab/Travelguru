var cc=0;
async function  display_filter(value){
    console.log(value);
    value=Number(value);
    var price2;
   var dd=document.getElementById('results_display');
  
  
   if(value==2000) { price2=Number(4000); }
   else if(value==4000){price2=Number(7000);}
   else if(value==7000){price2=Number(9500);}
   else {price2=Number(20000);}
   
        let data_d=await fetch(`http://localhost:3000/search_data?rate_gte=${value}&rate_lte=${price2}`);
        let datad_d=await data_d.json();
       console.log(data_d);
       display_search(datad_d,cc);
       cc++;

      
   }
  /*  else if(value==4000){
       var price2=Number(7000);
       let data=await fetch(`http://localhost:3000/search_data?price_gte=${value}&price_lte=${price2}`);
  
       let datad=await data.json();
       console.log(datad);
       display_search(datad);
}
else if(value==7000){
   let data=await fetch('http://localhost:3000/search_data?price_gte=7000&price_lte=10000');
  
       let datad=await data.json();
       console.log(datad);
       display_search(datad);
}
else if(value==10000) {
   let data=await fetch('http://localhost:3000/search_data?price_gte=10000');
  
  let datad=await data.json();
  console.log(datad);
  display_search(datad);
} */

  
   var dd=document.getElementById('results_display');
   async function func(){
     //  document.getElementsByClassName('sorting_btn').style.color = "black";
     console.log("price");
       dd.innerHTML=null;
       let data_dd=await fetch('http://localhost:3000/search_data?_sort=star_count&order=asc');
       let datad_dd=await data_dd.json();
       console.log(datad_dd);
    /*   var ddd= document.getElementsByClassName('sorting_btn');
      ddd.style.color = "black"; */
      var c=1;
       display_search(datad_dd,c);
   }
   async function func2(){
       console.log("rateing");
     //  document.getElementsByClassName('sorting_btn').style.color = "black";
     
       dd.innerHTML=null;
       let data_ddd=await fetch('http://localhost:3000/search_data?_sort=rate&order=asc');
       let datad_ddd=await data_ddd.json();
       console.log(datad_ddd);
    /*   var ddd= document.getElementsByClassName('sorting_btn');
      ddd.style.color = "black"; */
      var c=1;
       display_search(datad_ddd,c);
   }
   
   async function fun(){
       let data_dddd=await fetch('http://localhost:3000/search_data');
       let datad_dddd=await data_dddd.json();
       console.log(datad_dddd);
       var c=1;
       display_search(datad_dddd,c);
   }
   fun();

   function display_search(d,cc){
       var dd=document.getElementById('results_display');
     
       if(cc===0){  dd.innerHTML=null;}
      // console.log(dd);
       d.forEach(({id,img_link,locality,rating,place_name,price,info,extra1,extra2,extra3,extra4,star_count}) => {
          // console.log(ele.place_name);
           console.log(id);
          let div=document.createElement('div');
          div.setAttribute('id','each_div');
         // console.log(extra);
         /*   let name=document.createElement('p');
           let name=document.createElement('p');
           let name=document.createElement('p'); */
        
           //name.innerHTML=id;

//star symbol
             /*  <div><i class="fas fa-star"></i></div>  */
/*  div.innerHTML=`<div id="m">
<img id="img_hotel" src=${img_link}>
<div id="each_detail">
   <div class="h_name">${place_name}</div>
     <div class="l_name"><i class="fas fa-map-marker-alt"></i>${locality}</div>
     
     
     <i class="fas fa-bullseye"></i><i class="fas fa-bullseye"></i>
     <div>${rating}</div>

     <div>${info}</div>
     <i class="fas fa-mug-hot"></i>
     <div>${extra1}</div>
     <div>${extra2}</div>
     <div>${extra3}</div>
     </div>
  
</div>` */

let mm=document.createElement('div');
mm.setAttribute('id','m');
let mm_div=document.createElement('div');
mm_div.setAttribute('id','mm_d');
let f_div=document.createElement('div');
f_div.setAttribute('id','f_d');
let ed=document.createElement('div');
ed.setAttribute('id','each_detail');
let imagee=document.createElement('img');
let place_he=document.createElement('div');
place_he.setAttribute('class',"h_name");
place_he.innerHTML=`&nbsp; `+`${place_name}` ;


let location_n=document.createElement('p');
location_n.setAttribute('class',"l_name");
location_n.innerHTML=`<i class="fas fa-map-marker-alt"></i>`+`&nbsp; `+`${locality}` ;

 imagee.setAttribute('id','img_hotel');
 imagee.src=`${img_link}`;


 //for rating
 let star=document.createElement('p');
star.setAttribute('class',"star_color");
if(star_count==3) star.innerHTML=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
else if(star_count==4) star.innerHTML=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
else if(star_count==5) star.innerHTML=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
/*  for(var i=1;i<=star_count;i++){
   <i class="fas fa-star"></i>
 } */
 
 let e1=document.createElement('p');
 let e2=document.createElement('p');
 let e3=document.createElement('p');
 let e4=document.createElement('p');

/*  e1.setAttribute('id','extra') */
console.log(extra1);
 if(extra1!="") e1.innerHTML=`<i class="far fa-check-circle"></i>`+`&nbsp; `+`${extra1}`;
 if(extra2!="") e2.innerHTML=`<i class="fas fa-mug-hot"></i>`+ `&nbsp;`+`${extra2}`;
 if(extra3!="") e3.innerHTML=`<i class="fas fa-wifi"></i>`+`&nbsp; `+`${extra3}`;
 if(extra4!="") e4.innerHTML=`<i class="fas fa-dumbbell"></i>`+`&nbsp; `+`${extra4}`;
 ed.append(place_he);
 f_div.append(e1,e2,e3,e4);



 let rating_d=document.createElement('div');
 rating_d.setAttribute('id','rating_css');

 let r=document.createElement('p');
 let booking_btn=document.createElement('button');
 booking_btn.setAttribute('id',"button_booking");
 booking_btn.innerHTML="Choose Room";
 let inf=document.createElement('p');
 let price_d=document.createElement('h1');
/*  price_d.setAttribute('class',"price_disp"); */
 let nights=document.createElement('p');
 r.innerHTML=`<i class="fas fa-bullseye">`+`<i class="fas fa-bullseye">`+`&nbsp; `+`<span id="color_b">${rating}</span>`+`&nbsp; `+`<span id="color_b">Excellent</span>`; 
   inf.innerHTML=`${info}`+`&nbsp; `+`<span id="color_b">${rating}</span>`;
   price_d.innerHTML=`${price}`;
   nights.innerHTML="for 3 nights";
   
   rating_d.append(r,inf,price_d,nights,booking_btn);
 mm_div.append(star,location_n,f_div);
 
//image.src=img_link;
//console.log(img_link);
mm.append(imagee,ed,mm_div,rating_d);

div.appendChild(mm);



         //  div.appendChild(name);
           dd.append(div);
         /*   document.getElementById("myButton").onclick = function () {
            window.location=("www.yoursite.com");
        }; */
        booking_btn.addEventListener('click',function(){
          console.log("eufh");
         window.location=("./../pages/apply.html");
        
     })
       });
     
     //  body.append(dd);
   }
   function func_redirect_dyn(){
     window.location('./../pages/apply.html');
   }
  async function seach_hotel_bar(){
   var searchh=document.getElementById('input_s').value;
      console.log(searchh);
     
     
      if(searchh.length<=0){
          console.log("null0");
       var search_fr=document.getElementById('input_scroll');
       search_fr.innerHTML=null; search_fr.style.visibility="hidden";
      }
      else{
     let data=await fetch(`http://localhost:3000/search_data?q=${searchh}`);
       let datahs=await data.json();
       console.log(datahs);
       debounce_result(datahs);
      }
     //  display_search(datad);
    
  }
var c=0;

  var search_fr=document.getElementById('input_scroll');
function seach_hotel_bar_list(datahs){
 //  var searchh=document.getElementById('input_s').value;
  // if(searchh==null) {  console.log("null");search_fr.innerHTML=null; search_fr.style.visibility="hidden";return;}
   search_fr.innerHTML=null;
   search_fr.style.visibility="visible";
   datahs.forEach(({id,img_link,locality,rating,place_name,price,info,extra1,extra2,extra3,extra4,star_count}) =>{
       let s_p=document.createElement('p');
       s_p.setAttribute('class',"each_hotel_result_s")
       s_p.innerHTML=`${place_name}`+`</br>`;
       search_fr.appendChild(s_p);
      //  s_p.addEventListener('click',function(){console.log("hello:",place_name)});
    //   s_p.addEventListener('onclick',func3());
    s_p.addEventListener('click',function(){
       
       
               func3(id,img_link,locality,rating,place_name,price,info,extra1,extra2,extra3,extra4,star_count)
               c++;
           })
   });

}
function func3(id,img_link,locality,rating,place_name,price,info,extra1,extra2,extra3,extra4,star_count){
//  event.preventDefault();
   console.log(place_name);

    let divv=document.createElement('div');
          divv.setAttribute('id','each_div');
          var dd=document.getElementById('results_display');

      
       if(c===0){ dd.innerHTML=null;}
      // console.log(dd);
     
          // console.log(ele.place_name);
           console.log(id);
         

let mmm=document.createElement('div');
mmm.setAttribute('id','m');
let mmm_div=document.createElement('div');
mmm_div.setAttribute('id','mm_d');
let ff_div=document.createElement('div');
ff_div.setAttribute('id','f_d');
let edd=document.createElement('div');
edd.setAttribute('id','each_detail');
let imageen=document.createElement('img');
let place_hee=document.createElement('div');
place_hee.setAttribute('class',"h_name");
place_hee.innerHTML=`${place_name}` ;


let location_nn=document.createElement('p');
location_nn.setAttribute('class',"l_name");
location_nn.innerHTML=`<i class="fas fa-map-marker-alt"></i>`+`&nbsp; `+`${locality}` ;

 imageen.setAttribute('id','img_hotel');
 imageen.src=`${img_link}`;


 //for rating
 let starr=document.createElement('p');
starr.setAttribute('class',"star_color");
if(star_count==3) starr.innerHTML=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
else if(star_count==4) starr.innerHTML=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
else if(star_count==5) starr.innerHTML=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`;
/*  for(var i=1;i<=star_count;i++){
   <i class="fas fa-star"></i>
 }
 */
 
 let e11=document.createElement('p');
 let e22=document.createElement('p');
 let e33=document.createElement('p');
 let e44=document.createElement('p');

  e11.setAttribute('id','extra') ;

console.log(extra1);
 if(extra1!="") e11.innerHTML=`<i class="far fa-check-circle"></i>`+`&nbsp; `+`${extra1}`;
 if(extra2!="") e22.innerHTML=`<i class="fas fa-mug-hot"></i>`+ `&nbsp;`+`${extra2}`;
 if(extra3!="") e33.innerHTML=`<i class="fas fa-wifi"></i>`+`&nbsp; `+`${extra3}`;
 if(extra4!="") e44.innerHTML=`<i class="fas fa-dumbbell"></i>`+`&nbsp; `+`${extra4}`;
 edd.append(place_hee);
 ff_div.append(e11,e22,e33,e44);



 let rating_dd=document.createElement('div');
 rating_dd.setAttribute('id','rating_css');

 let rr=document.createElement('p');
 let booking_btnn=document.createElement('button');
 booking_btnn.setAttribute('id',"button_booking");
 booking_btnn.innerHTML="Choose Room";
 let inff=document.createElement('p');
 let price_dd=document.createElement('h1');
/*  price_d.setAttribute('class',"price_disp"); */

let nightss=document.createElement('p');
 rr.innerHTML=`<i class="fas fa-bullseye">`+`<i class="fas fa-bullseye">`+`&nbsp; `+`<span id="color_b">${rating}</span>`+`&nbsp; `+`<span id="color_b">Excellent</span>`; 
   inff.innerHTML=`${info}`+`&nbsp; `+`<span id="color_b">${rating}</span>`;
   price_dd.innerHTML=`${price}`;
   nightss.innerHTML="for 3 nights";
   
   rating_dd.append(rr,inff,price_dd,nightss,booking_btnn);
 mmm_div.append(starr,location_nn,ff_div);
 
//image.src=img_link;
//console.log(img_link);
mmm.append(imageen,edd,mmm_div,rating_dd);

divv.appendChild(mmm);



         //  div.appendChild(name);
           dd.append(divv);
           booking_btnn.addEventListener('click',function(){
             console.log("eufh");
            window.location=("./../pages/apply.html");
           
        })
          /*  document.getElementById("button_booking").onclick=function(){
            console.log("wihrg");
         //   window.location=("./../pages/apply.html");
             // func_redirect_dyn();
          }; */
     
           

}
var timerId;
function debounce_result(datahs){
  // let name=document.getElementById("query").value;

  
   if(timerId){
       clearTimeout(timerId);
   }

   timerId=setTimeout(()=>{
       seach_hotel_bar_list(datahs);
   },1000);
}

