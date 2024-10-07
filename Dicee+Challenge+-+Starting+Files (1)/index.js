let randomNumber1 =Math.floor(Math.random()*6)+1;
let randomdiceimage ="images/dice"+randomNumber1 + ".png";
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdiceimage);

let randomNumber2 =Math.floor(Math.random()*6)+1;
let randomdiceimage2 ="images/dice"+randomNumber2 + ".png";
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomdiceimage2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="PLAYER 1 IS A WINNER !!";
}

else if(randomNumber1<randomNumber2)
    {
      document.querySelector("h1").innerHTML="PLAYER 2 IS A WINNER !!";
    } 

else
{
    document.querySelector("h1").innerHTML="ITS A TIE,PLAY AGAIN !";
}
