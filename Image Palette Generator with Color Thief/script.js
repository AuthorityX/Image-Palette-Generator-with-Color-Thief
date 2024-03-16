//function to load image, after loading you'll see the hex code to copy

function loadImage() {
  const img = document.getElementById("image");
  img.src = URL.createObjectURL(document.getElementById("img-file").files[0]);
}
 
//function to extract the palette from desired image

function getPaleta() {
  const img = document.getElementById("image");
  const colorThief = new ColorThief();
  const paleta = colorThief.getPalette(img, 8);
  myPaleta(paleta);
  }

//function to see the color palette displayed and also hex id
function myPaleta(paleta) {
  const paletaBox = document.getElementById("palette");
  paletaBox.innerHTML = "";
    
  paleta.forEach(function(color) {
    const colorDiv = document.createElement("div");
    const colorRGB = rgbHex(color[0], color[1], color[2]);
    colorDiv.style.backgroundColor = colorRGB;
    colorDiv.classList.add("colors");
      
    const popout = document.createElement('span');
    popout.textContent = colorRGB;
    popout.classList.add("popout")

    colorDiv.appendChild(popout);

    colorDiv.addEventListener('mouseover', function() {
      popout.style.visibility = 'visible'
    });

    colorDiv.addEventListener('mouseout', function() {
      popout.style.visibility = 'hidden'
    });

    paletaBox.appendChild(colorDiv);

  });
}
  
//function to convert rgb to hex id for easy copy and paste  

function rgbHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

//intial image load

window.onload = function() {
  const img = document.getElementById("image");
  img.onload = getPaleta;
    
  if (img.complete) {
    getPaleta();
  }
}


  