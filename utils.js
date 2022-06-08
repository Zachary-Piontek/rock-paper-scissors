export function getRandomItem(array) {
    const random = Math.floor(Math.random() * array.length);
    const item = array[random];
    return item;
}

export function score(userThrew, computerThrew) {
    if (userThrew === 'rock' && computerThrew === 'paper') {
        return -1;
    }
    else if (userThrew === 'rock' && computerThrew === 'scissors') {
        return 1;
    }
    else if (userThrew === 'paper' && computerThrew === 'rock') {
        return 1;
    }
    else if (userThrew === 'paper' && computerThrew === 'scissors') {
        return -1;
    }
    else if (userThrew === 'scissors' && computerThrew === 'rock') {
        return -1;
    }
    else if (userThrew === 'scissors' && computerThrew === 'paper') {
        return 1;
    }
    else (userThrew === computerThrew); {
        return 0;
    }
}