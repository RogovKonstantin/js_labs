function progressBar(n) {
    if (n % 10 !== 0|| n > 100 || n < 0 ) {
        throw new Error('Wrong input');
    }
    let percentage = n + '%';
    let filled = '';
    for (let i = 0; i < n / 10; i++) {
        filled += '%';
    }
    let empty = '';
    for (let i = 0; i < 10 - n / 10; i++) {
        empty += '.';
    }
    let bar = '[' + filled + empty + ']';

    if (n < 100) {
        console.log(percentage, bar);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(bar);
    }
}


progressBar(30);
progressBar(50);
progressBar(100);


