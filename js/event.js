// option 1: directly set on the HTML element.
// <button onclick="console.log(65)">Another Button</button>


// option 2: add onclick function.
// IMPORTANT: we will use this.
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'Red';
}


/* option 3 */
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


/* option 3: another. */
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


/* option 4: */
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


/* option 4: another */
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreenButton() {
    document.body.style.backgroundColor = 'green'
})


/* option 5: Final */
// IMPORTANT: we will use this sometimes.
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
});
