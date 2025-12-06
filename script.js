let randomColor = ()=>{
    return Math.floor(Math.random()*256);
}

let btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    let val1 = randomColor();
    let val2 = randomColor();
    let val3 = randomColor();
    let color = `rgb(${val1},${val2},${val3})`;

    document.querySelectorAll('.container')[0].style.backgroundColor = color;
    document.querySelector('.container p').innerText = `This the new Color ${color}`;

})