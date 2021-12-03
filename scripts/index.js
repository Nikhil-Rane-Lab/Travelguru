var a = 1;
var c = 0;

function booked1()
{
    location.assign("./../pages/payment.html");
}

function booked2()
{
    location.assign("arewah2.html");
}

function showDetails()
{
    var book = document.getElementById("entireBook");
    book.style.display = "block";
}

function toggle()
{
    var tgl = document.getElementById("tgl");
    var next = document.getElementById("h11");
    console.log("h11 is ",h11);

    if(tgl.style.visibility == "hidden")
    {
        console.log("hidden => visible");
        tgl.style.visibility = "visible";
        next.style.visibility = "visible";
    }
    else
    {
        console.log("visible => hidden");
        tgl.style.visibility = "hidden";
        next.style.visibility = "hidden";
    }
}

function getData()
{
    let name = document.getElementById("z5").value;
    console.log("Name is "+name);

    let date_par = document.getElementById("z8");
    date1 = date_par.value;
    console.log("date_par is "+date_par);

    let date2 = document.getElementById("z10").value;
    console.log("Date2 is "+date2);

    let database = {
        city: name, 
        date1: date1,
        date2: date2,
        num_adults: a,
        num_children: c,
        num_total: (a+c),
    };

    console.log("database : ",database);

    let db_json = JSON.stringify(database);
    localStorage.setItem("database",db_json);
}

/*   const d = new Date();
console.log("d is "+d);
console.log("date is ", d.getDate());
console.log("month is " , d.getMonth()+1); */

function increment1()
{
    let display1 = document.getElementById("display1");
    display1.textContent = ++a;

    show_count();
}

function decrement1()
{
    let display1 = document.getElementById("display1");
    if(a > 1)
        display1.textContent = --a;

    show_count();
}



function increment2()
{
    let display2 = document.getElementById("display2");
    display2.textContent = ++c;

    show_count();

}

function decrement2()
{
    let display2 = document.getElementById("display2");
    if(c > 0)
        display2.textContent = --c;

    show_count();
}

function show_count()
{
    var show = document.getElementById("ss1");
    var sum = a + c;
    if( (sum) == 1 || (sum) == 0 )
        show.textContent = `1 Person in 1 Room`
    else
        show.textContent = `${sum} People in 1 Room`;
}



function show_1_1()
{
    check_and_remove();

    let a = document.createElement('a');
    a.textContent = "Travelguru Homestays is a marketplace that offers you an opportunity to book unique accommodations anywhere in the country. Be it a heritage home in a city, an aesthetic villa on a beachside, a hilltop solitary stay or a bungalow for an extended family vacation; we strive to get you a dream property for a comfortable holiday. Our inventory of homestays and hotels is an inspiring one. With a wide assortment of accommodations listed on our platform, we endeavor to add new ones consistently to grow our community of users. Not only you can discover and book accommodations with us, but you can also list your property at an attractive price point. Travelguru Homestays App allows you to host your property with us, and it also provides any prospective traveller an easy access to various incredible stay options available on our website.";
    a.href = "#";

    let pp = document.getElementById('parent');
    pp.appendChild(a);
}

function show_1_2()
{
    check_and_remove();

    let a = document.createElement('a');
    a.textContent = "Travel Guide";
    a.href = "#";

    let pp = document.getElementById('parent');
    pp.appendChild(a);
}

function show_1_3()
{
    check_and_remove();

    let a1 = document.createElement('a');
    a1.textContent = "Hotels";
    a1.href = "www.#";

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.textContent = "Home Stays";
    a2.href = "www.#";

    let pp = document.getElementById('parent');
    pp.append(a1, br1, br2, a2);
}

function show_1_4()
{
    check_and_remove();

    let a1 = document.createElement('a');
    a1.textContent = "Privacy Policy";
    a1.href = "www.#";

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.textContent = "Terms and Conditions";
    a2.href = "www.#";

    let pp = document.getElementById('parent');
    pp.append(a1, br1, br2, a2);
}

function show_1_5()
{
    check_and_remove();

    let a1 = document.createElement('a');
    a1.textContent = "Travel Blog";
    a1.href = "www.#";

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.textContent = "Sitemap";
    a2.href = "www.#";

    let pp = document.getElementById('parent');
    pp.append(a1, br1, br2, a2);
}

function check_and_remove()
{
    let s = document.getElementById("parent2");
    if(s != null || s != undefined)
        s.remove();

    let t = document.getElementById("parent3");
    if(t != null || t != undefined)
    t.remove();

    let p = document.getElementById("parent");
    if(p != null || p != undefined)
        p.remove();

    let parent = document.createElement("div");
    let outer = document.getElementById("outer");
    parent.setAttribute("id", "parent");
    outer.appendChild(parent);
}



function show_2_1()
{
    check_and_remove2();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1" class= "cl"><a href = "#">Homestays in Shimla </a>                                       <a href = "#">Homestays in Kolkata</a>                                     <a href = "#">Homestays in New Chennai </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Pune </a>                                         <a href = "#">Homestays in Vadodara</a>                                    <a href = "#">Homestays in Mumbai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Indore </a>                                       <a href = "#">Homestays in Calicut</a>                                     <a href = "#">Homestays in Mysore</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a');
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                                   <a href = "#">Homestays in Jaipur</a>                                      <a href = "#">Homestays in Vadodara</a></pre>`;



    let pp = document.getElementById('parent2');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function show_2_2()
{
    check_and_remove2();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Puri </a>                                   <a href = "#">Homestays in Bodhgaya</a>                                    <a href = "#">Homestays in Konark </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Jammu </a>                                  <a href = "#">Homestays in Leh</a>                                         <a href = "#">Homestays in Varnasai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Haridwar </a>                               <a href = "#">Homestays in Konark</a>                                      <a href = "#">Homestays in Somnath</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a'); 
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                             <a href = "#">Homestays in Amritsar</a>                                    <a href = "#">Homestays in Shirpur</a></pre>`;



    let pp = document.getElementById('parent2');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function show_2_3()
{
    check_and_remove2();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Shimla </a>                                       <a href = "#">Homestays in Kolkata</a>                                     <a href = "#">Homestays in New Chennai </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Pune </a>                                         <a href = "#">Homestays in Vadodara</a>                                    <a href = "#">Homestays in Mumbai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Indore </a>                                       <a href = "#">Homestays in Calicut</a>                                     <a href = "#">Homestays in Mysore</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a');
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                                   <a href = "#">Homestays in Jaipur</a>                                      <a href = "#">Homestays in Vadodara</a></pre>`;



    let pp = document.getElementById('parent2');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function show_2_4()
{
    check_and_remove2();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Puri </a>                                   <a href = "#">Homestays in Bodhgaya</a>                                    <a href = "#">Homestays in Konark </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Jammu </a>                                  <a href = "#">Homestays in Leh</a>                                         <a href = "#">Homestays in Varnasai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Haridwar </a>                               <a href = "#">Homestays in Konark</a>                                      <a href = "#">Homestays in Somnath</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a'); 
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                             <a href = "#">Homestays in Amritsar</a>                                    <a href = "#">Homestays in Shirpur</a></pre>`;



    let pp = document.getElementById('parent2');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function show_2_5()
{
    check_and_remove2();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Shimla </a>                                       <a href = "#">Homestays in Kolkata</a>                                     <a href = "#">Homestays in New Chennai </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Pune </a>                                         <a href = "#">Homestays in Vadodara</a>                                    <a href = "#">Homestays in Mumbai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Indore </a>                                       <a href = "#">Homestays in Calicut</a>                                     <a href = "#">Homestays in Mysore</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a');
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                                   <a href = "#">Homestays in Jaipur</a>                                      <a href = "#">Homestays in Vadodara</a></pre>`;



    let pp = document.getElementById('parent2');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function check_and_remove2()
{
    let s = document.getElementById("parent");
    if(s != null || s != undefined)
        s.remove();

    let t = document.getElementById("parent3");
    if(t != null || t != undefined)
    t.remove();

    let p = document.getElementById("parent2");
    if(p != null || p != undefined)
        p.remove();

    let parent2 = document.createElement("div");
    let outer2 = document.getElementById("outer2");
    parent2.setAttribute("id", "parent2");
    outer2.appendChild(parent2);
}



function show_3_1()
{
    check_and_remove3();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Shimla </a>                                       <a href = "#">Homestays in Kolkata</a>                                     <a href = "#">Homestays in New Chennai </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Pune </a>                                         <a href = "#">Homestays in Vadodara</a>                                    <a href = "#">Homestays in Mumbai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Indore </a>                                       <a href = "#">Homestays in Calicut</a>                                     <a href = "#">Homestays in Mysore</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a');
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                                   <a href = "#">Homestays in Jaipur</a>                                      <a href = "#">Homestays in Vadodara</a></pre>`;



    let pp = document.getElementById('parent3');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function show_3_2()
{
    check_and_remove3();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Puri </a>                                   <a href = "#">Homestays in Bodhgaya</a>                                    <a href = "#">Homestays in Konark </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Jammu </a>                                  <a href = "#">Homestays in Leh</a>                                         <a href = "#">Homestays in Varnasai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Haridwar </a>                               <a href = "#">Homestays in Konark</a>                                      <a href = "#">Homestays in Somnath</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a'); 
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                             <a href = "#">Homestays in Amritsar</a>                                    <a href = "#">Homestays in Shirpur</a></pre>`;



    let pp = document.getElementById('parent3');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}
    
function show_3_3()
{
    check_and_remove3();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Shimla </a>                                       <a href = "#">Homestays in Kolkata</a>                                     <a href = "#">Homestays in New Chennai </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Pune </a>                                         <a href = "#">Homestays in Vadodara</a>                                    <a href = "#">Homestays in Mumbai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Indore </a>                                       <a href = "#">Homestays in Calicut</a>                                     <a href = "#">Homestays in Mysore</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a');
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                                   <a href = "#">Homestays in Jaipur</a>                                      <a href = "#">Homestays in Vadodara</a></pre>`;



    let pp = document.getElementById('parent3');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function show_3_4()
{
    check_and_remove3();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Puri </a>                                   <a href = "#">Homestays in Bodhgaya</a>                                    <a href = "#">Homestays in Konark </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Jammu </a>                                  <a href = "#">Homestays in Leh</a>                                         <a href = "#">Homestays in Varnasai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Haridwar </a>                               <a href = "#">Homestays in Konark</a>                                      <a href = "#">Homestays in Somnath</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a'); 
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                             <a href = "#">Homestays in Amritsar</a>                                    <a href = "#">Homestays in Shirpur</a></pre>`;



    let pp = document.getElementById('parent3');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}      
    
function show_3_5()
{
    check_and_remove3();

    let a1 = document.createElement('a');
    a1.innerHTML = `<pre id="ho1"  class= "cl"><a href = "#">Homestays in Shimla </a>                                       <a href = "#">Homestays in Kolkata</a>                                     <a href = "#">Homestays in New Chennai </a></pre>`; 


    let br1 = document.createElement("br");

    let a2 = document.createElement('a');
    a2.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Pune </a>                                         <a href = "#">Homestays in Vadodara</a>                                    <a href = "#">Homestays in Mumbai </a></pre>`;

    let br3 = document.createElement("br");

    let a3 = document.createElement('a');
    a3.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Indore </a>                                       <a href = "#">Homestays in Calicut</a>                                     <a href = "#">Homestays in Mysore</a></pre>`;


    let br5 = document.createElement("br");

    let a4 = document.createElement('a');
    a4.innerHTML = `<pre id="ho1"><a href = "#">Homestays in Coimbatore </a>                                   <a href = "#">Homestays in Jaipur</a>                                      <a href = "#">Homestays in Vadodara</a></pre>`;



    let pp = document.getElementById('parent3');
    pp.append(a1, br1, a2, br3, a3, br5, a4);
}

function check_and_remove3()
{
    let s = document.getElementById("parent");
    if(s != null || s != undefined)
        s.remove();

    let t = document.getElementById("parent2");
    if(t != null || t != undefined)
    t.remove();

    let p = document.getElementById("parent3");
    if(p != null || p != undefined)
        p.remove();

    let parent3 = document.createElement("div");
    let outer3 = document.getElementById("outer3");
    parent3.setAttribute("id", "parent3");
    outer3.appendChild(parent3);
}




    var warn = document.getElementById("warn");
    var warn2 = document.getElementById("warn2");

    function book()
    {
        var p1 = document.getElementById("p1").value;
        var p2 = document.getElementById("p2").value;
        var p2a = document.getElementById("p2a").value;
        var p3 = document.getElementById("p3").value;
        var p4 = document.getElementById("p4").value;


        if( (p1 == "") || (p2 == "") || (p2a == "") || (p3 == "") || (p4 == ""))
            warn2.style.display = "block";
        else
        {
            warn2.style.display = "none";  
            var a = document.getElementById("booked");
            a.style.visibility = "visible";
        }


    }
    

    function makeVisible()
    {
  
        var c3 = document.getElementById("c3").value;
        var c6 = document.getElementById("c6").value;
        var c3a = document.getElementById("c3a").value;
        var c6a = document.getElementById("c6a").value;

        console.log("c3 is ",c3);
        if( (c3 == "") || (c6 == "") || (c3a == "") || (c6a == ""))
            warn.style.display = "block";
        else
        {
            var b = document.getElementById("creditCard");
            b.style.display = "block";
        }
        
    }
