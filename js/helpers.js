let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if (distance < 160) {
        return "Boiling AF";
    } else if (distance < 220) {
        return "Really hot;"
    } else if (distance < 360) {
        return "Hot"
    } else if (distance < 540) {
        return "Warm"
    } else if (distance < 790) {
        return "Cold"
    } else if (distance < 1000) {
        return "Reeeeeally cold"
    } else {
        return "Freeeeeezing"
    }
}