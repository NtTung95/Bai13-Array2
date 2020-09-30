const ROWS = 10;
const CELLS = 10;
let arr = [];
let turn = 1;

function drawBoard() {
    let html = ''
    for(let i = 0; i < ROWS; i++){
        arr[i] = [];
        html += '<tr>';
        for (let j = 0; j < CELLS; j++) {
            arr[i][j] = "*"
            html += '<td id="cell-' + i + '-' + j +'" onclick="play('+i+', '+j+')">';
            html += '</td>'
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function play(x, y) {
    if (turn === 1){
        arr[x][y] = 'X'
        document.getElementById("cell-" + x + '-' + y).innerHTML = 'X';
        turn = 2;
    } else  {
        document.getElementById("cell-" + x + '-' + y).innerHTML = 'O';
        turn = 1;
        arr[x][y] = 'O'
    }
    checkWinngang(x,y);
    checkWindoc(x,y);
    checkWincheo1(x, y);
    checkWincheo2(x, y)
}

function checkWinngang(x, y) {
    // check win ngang
    let count = 1;
    let i = 1;
    // check ngang ve ben trai
    while (y - i >= 0 && arr[x][y-i] === arr[x][y]) {
        count++;
        i++
    }
    // check ngang ve ben phai
    let j = 1
    while (y + j <= CELLS && arr[x][y+j] === arr[x][y]) {
        count++;
        j++;
    }

    if (isGameOver(count)) {
        alert("win");
    }

}

function  isGameOver(number) {
    return number === 5
}

function checkWindoc(x, y) {
    // check win doc
    let count = 1;
    let i = 1;
    // check doc len
    while (x - i >= 0 && arr[x-i][y] === arr[x][y]) {
        count++;
        i++
    }
    // check doc xuong
    let j = 1
    while (x + j <= ROWS && arr[x+j][y] === arr[x][y]) {
        count++;
        j++;
    }

    if (isGameOver(count)) {
        alert("win");
    }

}
function checkWincheo1(x, y) {
    // check win cheo
    let count = 1;
    let i = 1;
    let m = 1;
    // check cheo len
    while (x - i >= 0 && y + m <= CELLS && arr[x-i][y+m] === arr[x][y]) {
        count++;
        i++;
        m++;
    }
    // check cheo xuong
    let n = 1
    let j = 1
    while (x + j <= ROWS && y - n >= 0 && arr[x+j][y-n] === arr[x][y]) {
        count++;
        j++;
        n++;
    }

    if (isGameOver(count)) {
        alert("win");
    }

}

function checkWincheo2(x, y) {
    // check win cheo
    let count = 1;
    let i = 1;
    let m = 1;
    // check cheo len
    while (x - i >= 0 && y - m >= 0 && arr[x-i][y-m] === arr[x][y]) {
        count++;
        i++;
        m++;
    }
    // check cheo xuong
    let n = 1
    let j = 1
    while (x + j <= ROWS && y + n <= CELLS && arr[x+j][y+n] === arr[x][y]) {
        count++;
        j++;
        n++;
    }

    if (isGameOver(count)) {
        alert("win");
    }

}

function  isGameOver(number) {
    return number === 5
}



drawBoard();