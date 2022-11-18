// Ejericio 1
function lu(x, n, d) {
    let suma = 0;
    for (let i = 0; i <= n; i++) {
      suma += x ** i / maxi(i);
    }
    return Number(suma.toFixed(d));
}

// Factorial
function maxi(n) {
if (n === 0 || n === 1) return 1; // Condicion de parada
return n * maxi(n - 1);
}

// Ejericio 2. Calcula el valor de n para e**1
function nico(x, d) {
let e = Number(Math.exp(x).toFixed(d))
let result = 0;
let n = 0
while(result !== e){
    result = lu(x, n, d);
    if(result === e) break
    n++
}
return n
}

nico(1, 9);