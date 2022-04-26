
function changeText2(){ 
  var oteladi=document.getElementById('oteladi').value;
  var otelpuani=document.getElementById('otelpuani').value;
  
  var node1=document.createElement("div");
  node1.className="card"; 
  node1.style="width: 550px ;height: 220px;padding: 15px;margin-top: 2%;margin-left: 30%;background-color: white;box-shadow: 1px 4px 11px 0px grey; z-index:1"; // card ın özelliğini verdik
  node1.id="node1";
  
  var node3=document.createElement("img"); 
  node3.className="card-img-top"; 
  node3.src="img/img1.jpg"; 
  node3.style="position: relative;margin-left: 2%;margin-top:2%;width:51%;height:auto;" 
  
  var node4=document.createElement("a"); 
  node4.className="btn btn-outline-primary"; 
  node4.id="arttır";
  node4.text="Puan Arttır";
  node4.style="height: 38px;width: 22%;margin-left: 55%;margin-top: 18%;";
  
  var node6=document.createElement("a"); 
  node6.className="btn btn-outline-primary"; 
  node6.id="azalt";
  node6.text="Puan Azalt";
  node6.style="height: 38px;width: 22%;margin-left: 78%;margin-top: -13.6%;";

  var node9=document.createElement("a"); 
  node9.className="btn btn-danger"; 
  node9.id="silme";
  node9.text="Sil";
  node9.style="height:30px;width:18%;margin-left:85%;margin-top:-46%";
  
  var node2=document.createElement("div"); 
  node2.className="card-body"; 
  
  var node5=document.createElement("h4"); 
  node5.className="card-title"; 
  node5.style="color: black;font-size:20px;margin-left: 60%;margin-top: -33%;";
  node5.innerText=oteladi; 
  
  var node7=document.createElement("h5"); 
  node7.className="card-title"; 
  node7.style="color: black;font-size: 20px;margin-left: 60%;margin-top: -28%;"; 
  node7.innerText="Puan"; 
  
  var node8=document.createElement("h5"); 
  node8.className="card-title"; 
  node8.id="deger";
  node8.style="color: black;font-size: 20px;margin-left: 75%;margin-top: -7%;"; 
  node8.innerText=otelpuani; 
  
  node1.appendChild(node2); 
  
  node2.appendChild(node3); 
  node2.appendChild(node5);
  node2.appendChild(node4);
  node2.appendChild(node6);
  node2.appendChild(node7);
  node2.appendChild(node8);
  node2.appendChild(node9);

  localStorage.setItem("ad",oteladi); 
  localStorage.setItem("puan",otelpuani); 
  node4.addEventListener('click',clikEvent) 
  node6.addEventListener('click',clikEvent) 
  node9.addEventListener('click',clickEvent2) 
  
  
  function clikEvent(){
    this.id == "arttır" ? otelpuani +=1 : otelpuani -=1
    localStorage.setItem("puan",otelpuani)
    node8.innerHTML=otelpuani
   
  }

     document.getElementById("container").appendChild(node1); 
}  
const otelsil =document.querySelector('#otelsilme');
const silbuton = document.querySelector("#silbuton");
const vazgecbuton = document.querySelector("#vazgecbuton");

function clickEvent2(){ 
  
  otelsil.style.display="flex";

  silbuton.addEventListener('click',()=>{
  
  node1.style.display="none";
  localStorage.removeItem("ad",oteladi)
  localStorage.removeItem("puan",otelpuani)
  localStorage.removeItem("oteladi",oteladi)
  localStorage.removeItem("otelpuani",oteladi) 
  otelsil.style.display="none";
  });

  vazgecbuton.addEventListener('click',()=>{
    otelsil.style.display="none";
  });

}
const eklebuton=document.getElementsByClassName('eklebuton');


eklebuton[0].addEventListener("click",()=>{

    const otelekle=document.querySelector('#otelekleme');
    const oteladi=document.querySelector("#oteladi");
    const otelpuani=document.querySelector("#otelpuani");
    const kayitbuton=document.querySelector("#kayitbuton");
    const kapatbuton=document.querySelector("#kapatbuton");

    otelekle.style.display="flex";
    kayitbuton.innerHTML="Ekle";
    kayitbuton.className="btn btn3 btn-primary";

    kayitbuton.addEventListener('click',()=>{
      oteladi.value=oteladi;
      otelpuani.value=otelpuani;
      localStorage.setItem("oteladi",oteladi); 
      oteladi.innerHTML=oteladi;
      localStorage.setItem("otelpuani",otelpuani); 
      otelpuani.innerHTML=otelpuani;
    });

    kapatbuton.addEventListener('click',()=>{
        otelekle.style.display="none";
        oteladi.Value="";
        otelpuani.Value="";
    });

    otelpuani.addEventListener("keyup", () => {
        if (otelpuani.value > 9 ||
          otelpuani.value < 1 ||
          otelpuani.value.length > 1) {
          otelpuani.value = "";
        }
      });
});

function eklemebutonu(){
    var ad=document.getElementById('oteladi').value;
    var puan=document.getElementById('otelpuani').value;

    if(ad!=''){
        if(puan!=''){
          changeText2();
        }
        else{
          alert("Puan değerini girin")
        }
    }
    else if (puan!='')
    {
          if(ad!=''){
             changeText2();
          }
          else{
            alert("Ad değerini girin")
          }
    }
    else{
        alert("Otel adı ve puanı girin")
    }
}






