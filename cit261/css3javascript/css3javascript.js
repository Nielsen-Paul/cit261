
function changeBackground() {
    document.getElementById('div1').style.background = 'blue';
}

function changeText() {
    document.getElementById('div2').style.textDecoration = 'overline';
    document.getElementById('div2').style.textTransform = 'uppercase';
}

function changeFont() {
    document.getElementById('div3').style.fontStyle = 'italic';
    document.getElementById('div3').style.fontSize = '30px';
}

function changeShadow() {
    document.getElementById('div4').style.textAlign = 'center';
    document.getElementById('div4').style.letterSpacing = '4px';
    document.getElementById('div4').style.color = 'white';
    document.getElementById('div4').style.textShadow = '4px 4px 5px green';
}

function changeBox() {
    document.getElementById('div5').style.textAlign = 'right';
    document.getElementById('div5').style.boxShadow = '20px 30px 5px purple';
}

function changeBody() {
    document.body.style.background = 'orange';
    document.body.style.textTransform = 'uppercase';
    document.body.style.fontStyle = 'italic';
    document.body.style.fontFamily = 'Impact, Charcoal, sans-serif';
    document.body.style.fontSize = '25px';
    document.body.style.textAlign = 'center';
    document.body.style.textShadow = '3px 3px blue';
}