
let message = ['T','O','I',' ','Y','E','U'];
let count = 0;
function changeText() {
    document.getElementById('content').value = '';
    for (let j =0; j <= count; j++) {
        document.getElementById('content').value += message[j];
    }
    count++;
    if (count > message.length) {
        count = 0;
        document.getElementById('content').value = '';
    }
}