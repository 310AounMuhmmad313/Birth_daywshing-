function btn() {
  let Wish = [
    "Happy birthday jani",
    "Happy birthday jigar",
    "Happy birthday janan",
    "Happy birthday sanaullah jani",
    "Happy birthday usman jani"
    
    ];


  let value = Math.floor(Math.random() * Wish.length);
  console.log(value);
  

document.write(Wish[value]);
    }
btn()