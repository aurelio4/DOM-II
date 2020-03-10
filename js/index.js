const replies = {
  "1": "nope",
  "2": "try again",
  "3": "its this one -->",
  "4": "sike"
}

// change nav anchor tags
const nav = document.querySelectorAll('nav *');

for(let i = 0; i < nav.length; i++) {
  document.querySelector(`nav a:nth-child(${i + 1})`).addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById(`${i + 1}`).innerText = replies[i + 1];
  })
}

// change header to secret text
const header = document.querySelector('.logo-heading')

header.addEventListener('dblclick', (event) => {
  header.innerText = 'snq unℲ';
  console.log('working');
})

// change nav bg color on mouse leave
document.querySelector('header').addEventListener('mouseleave', () => document.querySelector('header').style.backgroundColor = 'cornflowerblue');

// picks up all img tags on mouse over
const funbus = document.getElementById('funbus')

function addStickyMouseover(element) {
  element.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = element.x + element.clientWidth / 2;
    const centerY = element.y + element.clientHeight / 2;
  
    const transX = mouseX - centerX;
    const transY = mouseY - centerY;
  
    element.style.transform = `translate(${transX}px,${transY}px)`;
  });
}

addStickyMouseover(funbus);

// spin adventure pic on mouse enter
const adventurePic = document.getElementById('adventure-pic');

adventurePic.addEventListener('mouseenter', (event) => {
  adventurePic.style.animation = `rotate 2s`
})

// scale size based on drag distance
const funPic = document.getElementById('fun-pic');
const funPicCoords = {
  x: 0,
  y: 0
}

funPic.addEventListener('mousedown', (event) => {
  funPicCoords.x = event.clientX;
  funPicCoords.y = event.clientY;
})

funPic.addEventListener('drag', (event) => {
  const deltaX = funPicCoords.x - event.clientX; 
  const deltaY = funPicCoords.y - event.clientY;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const scale = Math.min(10, distance / 100);

  funPic.style.transform = `scale(${scale})`
})

funPic.addEventListener('dragstart', (event) => {
  document.querySelector('body').style.backgroundColor = 'cornflowerblue';
})

funPic.addEventListener('dragend', (event) => {
  funPic.style.transform = `scale(1)`;
});

// do something on mouse down and mouse up for the buttons
const buttons = document.querySelectorAll('.content-pick .btn');

document.querySelector('.destination .btn').addEventListener('mousedown', (event) => {
  event.preventDefault();
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = 'cornflowerblue';
    buttons[i].style.border = '10px solid orange';  
  }
})

document.querySelector('.destination .btn').addEventListener('mouseup', (event) => {
  event.preventDefault();
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = '#17A2B8';
    buttons[i].style.border = '1px solid #C0C0C0'
  }
})

// change footer bg color on right click
document.querySelector('footer').addEventListener('contextmenu', (event) => {
  document.querySelector('footer').style.backgroundColor = 'cornflowerblue';
})