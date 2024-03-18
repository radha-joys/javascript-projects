const makeLine= (size) => {
    let hashLine = '';
    for(let i = 0; i < size; i++){
        hashLine += '#'
    }
    return hashLine
}

const makeSquare = (size) => {
    return makeRectangle(size, size)
}

const makeRectangle = (width, height) => {
    let hashRectangle = '';
    for(let i = 0; i < height; i++){
        hashRectangle += makeLine(width) + '\n';
    }
    return hashRectangle.slice(0, -1);
}

const makeDownwardStairs = (height) => {
    let hashTriangle = '';
    for(let i = 1; i <= height ; i++){
        hashTriangle += makeLine(i) + '\n';
    }
    return hashTriangle.slice(0, -1);
}

const makeSpaceLine = (numSpaces, numChars) => {
    let spaces = (numOfSpaces) => {
        let spaces = '';
        for(let i = 0; i < numOfSpaces; i++){
            spaces += ' ';
        }
        return spaces;
    }
    let hashSpaceLine = spaces(numSpaces) + makeLine(numChars) + spaces(numSpaces);
    return hashSpaceLine;
}

const makeIsoscelesTriangle = (height) => {
    let hashIsosceles = '';
    for(let i = 0; i <  height ; i++){
        hashIsosceles += makeSpaceLine(height - i -1, 2*i+1) + '\n';
    }
    return hashIsosceles;
}

const makeDiamond = (height) => {
    let hashIsosceles = makeIsoscelesTriangle(height).trimEnd() + makeIsoscelesTriangle(height).split(' ').reverse().join(' ');
    console.log(makeIsoscelesTriangle(height).split(' ').reverse())
    return hashIsosceles;
}

//console.log(makeSquare(2));
//console.log(makeRectangle(5, 3));
//console.log(makeDownwardStairs(7));
console.log(makeDiamond(5));