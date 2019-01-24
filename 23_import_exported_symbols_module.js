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

export let ModuleFileName = '23_import_exported_symbols_module.js';

export default function() {}

console.log(`${ModuleFileName} called`);