var input = '10 7';
var ipArray = input.split(/[\s]+/).map(Number);
console.log(ipArray);
function gcd(m,n) {
    a = Math.max(m,n);
    b = Math.min(m,n);
    console.log(a + '-' + b);
    if(b == 0) {
        return a;
    } else {
        return gcd(b,a%b);
    }
}

console.log('GCD : ' + gcd(ipArray[0], ipArray[1]));
