window.onload = () => {
    console.log("hey")
    let photo = document.querySelector("#photoFix")
    if(screen.width < 600){
        photo.setAttribute("src","./aboutM.jpg")
    }
    else{
        photo.setAttribute("src","./about.jpg")
    }
  };