const width = 1200;
const heigth = 1200;

let target = {
x: getRandomNumber(width),
y: getRandomNumber(heigth)
};

console.log(target);

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 130) {
        alert(`Nice! You found the tresure in ${clicks} clicks!`);
    location.reload();
    }
});