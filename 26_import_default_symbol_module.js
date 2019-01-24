export function square(x) {
    return x * x;
}

export function pow(x, n) {

    var result = 1;
    for (var i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}

export let ModuleFileName = '26_import_default_symbol_module.js';

export default function() {
    console.log('hello world!');
}

console.log(`${ModuleFileName} called`);