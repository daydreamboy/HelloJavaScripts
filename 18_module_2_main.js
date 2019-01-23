// @see https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc
import * as counter from './18_module_2_counter';

console.log(counter.count); // 1
counter.increment();
console.log(counter.count); // 2