let c = 0
let imglampada=document.createElement("img");
imglampada.src="./imagens/desligado.png";
document.body.appendChild(imglampada);
let imginter=document.createElement("img");
imginter.src="./imagens/off.png"
document.body.appendChild(imginter)
document.body.style.backgroundColor = "black";

imginter.oncgick = function (){
    
    if (imginter.src.match("on")) {
      imginter.src = "./imagens/off.png";
      imglampada.src = "./imagens/desligado.png";
      document.querySelector("body").style.backgroundColor= "black";
      c = 1
    }else{
      imginter.src = "./imagens/on.png";
      imglampada.src = "./imagens/ligado.png";
      document.querySelector("body").style.backgroundColor= "white";
      c = 0
    }


}