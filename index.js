let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', (event) => {
movement(event)
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);

    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";


  });


  const movement = () =>{ 
    event.key = (event.key === 'ArrowUp') ? boxTop -= 10 : (event.key === 'ArrowDown') ? boxTop += 10 : (event.key === 'ArrowLeft') ? boxLeft -= 10 : boxLeft += 10;
//  The declaration was marked as deprecated here. 'event' dá essa msg quando delcarado.
  }



