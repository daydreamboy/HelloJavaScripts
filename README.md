# JavaScript学习手册

[TOC]

---



主要记录一些笔记，并不覆盖全部的JavaScript语法。



## 1、JavaScript版本

### （1）JavaScript和ECMAScript的关系

JavaScript是ECMAScript标准的实现

参考SO的这个[回答](https://stackoverflow.com/a/30113184)，如下

> I believe JavaScript is considered the Language which implements a standard called ECMAScript.

JavaScript可以简称JS，ECMAScript可以简称ES，目前主流ECMAScript标准有ES5和ES6。



### （2）ECMAScript版本

JavaScript版本，实际上是对应ECMAScript的版本。ECMAScript的版本[^25]，如下

| Version | Official Name                                                | Description                                                  |
| :------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 1       | ECMAScript 1 (1997)                                          | First Edition.                                               |
| 2       | ECMAScript 2 (1998)                                          | Editorial changes only.                                      |
| 3       | ECMAScript 3 (1999)                                          | Added Regular Expressions. <br/>Added try/catch.             |
| 4       | ECMAScript 4                                                 | Never released.                                              |
| 5       | ECMAScript 5 (2009)  [Read More: JS ES5](https://www.w3schools.com/js/js_es5.asp) | Added "strict mode". <br/>Added JSON support. <br/>Added String.trim(). <br/>Added Array.isArray().<br/> Added Array Iteration Methods. |
| 5.1     | ECMAScript 5.1 (2011)                                        | Editorial changes.                                           |
| 6       | ECMAScript 2015  [Read More: JS ES6](https://www.w3schools.com/js/js_es6.asp) | Added let and const. <br/>Added default parameter values.<br/> Added Array.find(). <br/>Added Array.findIndex(). |
| 7       | ECMAScript 2016                                              | Added exponential operator (**).<br/> Added Array.prototype.includes. |
| 8       | ECMAScript 2017                                              | Added string padding. <br/>Added new Object properties. <br/>Added Async functions. <br/>Added Shared Memory. |
| 9       | ECMAScript 2018                                              | Added rest / spread properties. <br/>Added Asynchronous iteration.<br/> Added Promise.finally(). <br/>Additions to RegExp. |



### （3）浏览器对ES5 (ECMAScript 5)支持情况[^25]

| Browser   | Version | From Date |
| :-------- | :------ | :-------- |
| Chrome    | 23      | Sep 2012  |
| Firefox   | 21      | Apr 2013  |
| IE        | 9*      | Mar 2011  |
| IE / Edge | 10      | Sep 2012  |
| Safari    | 6       | Jul 2012  |
| Opera     | 15      | Jul 2013  |

说明

> *Internet Explorer 9 does not support ECMAScript 5 "use strict".



### （4）浏览器对ES6 (ECMAScript 2015)支持情况[^25]

| Browser | Version | Date     |
| :------ | :------ | :------- |
| Chrome  | 51      | May 2016 |
| Firefox | 54      | Jun 2017 |
| Edge    | 14      | Aug 2016 |
| Safari  | 10      | Sep 2016 |
| Opera   | 38      | Jun 2016 |

说明

> Internet Explorer does not support ECMAScript 2015.



## 2、数据类型

JavaScript有9种数据类型（Data Types）[^3]，如下

* 6种基本类型(Primitive)

| 类型        | 含义         | 说明                                                         |
| ----------- | ------------ | ------------------------------------------------------------ |
| `undefined` | 未赋值       | 和`null`不一样，`undefined`表示没有赋值。typeof instance === 'undefined' |
| `boolean`   | 布尔值       | `boolean`类型的值只有两种：`true`和`false`。typeof instance === 'boolean' |
| `number`    | 整数或浮点数 | 除了整数或浮点数，还有特殊值也属于`number`类型：`Infinity`，`-Infinity` 和`NaN`。typeof instance === 'number' |
| `string`    | 字符串       | 字符串有三种引号方式：单引号（`'`），双引号（`"`），反引号（<code>`</code>）。typeof instance === 'string' |
| `bigint`    | 大整数       | typeof instance === 'bigint'                                 |
| `symbol`    | 符号         |                                                              |

* null类型

| 类型   | 含义 | 说明                                                         |
| ------ | ---- | ------------------------------------------------------------ |
| `null` | 空值 | JavaScript中null代表nothing, empty或者value unknown。<br/>值得注意的是，typeof instance === 'object'，而不是null |

* object类型

| 类型     | 含义 | 说明                                                   |
| -------- | ---- | ------------------------------------------------------ |
| `object` | 对象 | 对象类型是一种复杂的类型。typeof instance === 'object' |

* function类型

| 类型       | 含义 | 说明                                                         |
| ---------- | ---- | ------------------------------------------------------------ |
| `function` | 函数 | 函数类型，严格讲不是数据类型，但是很多类的类型是function。<br/>typeof instance === 'function' |



> 示例代码见**16_data_types_1.html**



关于`typeof`操作符

> 1. JavaScript内置有`typeof`操作符，可以用于判断某个变量的类型，返回值是字符串类型。
> 2. `typeof`操作符有两种使用方式：作为操作符使用，`typeof x`；作为函数使用，`typeof(x)`。
> 3. `typeof`操作符判断出来的类型并不和上面的类型是一一对应的。`typeof`操作符判断出来的类型字符串，除了上面7种数据类型，还有一种"function"字符串。并且`typeof(null)`是"object"，而不是"null"。

举个例子[^2]，如下

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"

typeof null // "object"

typeof alert // "function"
```



### （1）number类型

number类型的值支持算术操作符（`+`、`-`、`*`、`/`等）。

`number`类型有三种特殊值：`Infinity`，`-Infinity` 和`NaN`

* `Infinity`，代表数学上无穷大∞
* `NaN`，代表计算错误（Not a Number），而且数字和NaN一起运算还是NaN。

举个例子，如下

```javascript
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous
alert( "not a number" / 2 + 5 ); // NaN
```



### （2）string类型

string类型主要指字面常量字符串，例如'a'、"b"等。

#### a. string interpolation

ES6(ECMAScript 2015)[^16]引入了template literals语法，可以使用反引号来表示字符串literal，如下

```javascript
`hello world`
`hello!
 world!`
`hello ${who}`
tag`string text ${expression} string text`
```

同时支持`${variable}`用于string interpolation。这样方式比字符串拼接要方便很多，例如

```javascript
'hello ' + who
```



说明

> 1. ES6对应的是ECMAScript 2015，具体对照表见https://en.wikipedia.org/wiki/ECMAScript
> 2. tag\`string text ${expression} string text\`，是tagged template literal语法，参考"tagged template literal"这一节



#### b. tagged template literal

TODO



#### c. long string literal

有两种方法可以支持长字符串，如下

* 使用`+`拼接，如下

```javascript
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."
```

* 使用`\`来换行，如下

```javascript
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."
```





### （7）object类型

object类型包括**自定义类**和**标准内置类**（Standard built-in objects）[^7]。



标准内置类，按照分类如下

| Category                    | Objects                                                      |
| --------------------------- | ------------------------------------------------------------ |
| Value properties            | * Infinity<br/>* NaN<br/>* undefined<br/>* null<br/>* globalThis |
| Function properties         | * eval()<br/>* uneval()⚠️<br/>* isFinite()<br/>* isNaN()<br/>* parseFloat()<br/>* parseInt()<br/>* decodeURI()<br/>* decodeURIComponent()<br/>* encodeURI()<br/>* encodeURIComponent()<br/>* escape()👎<br/>* unescape()👎 |
| Fundamental objects         | * Object<br/>* Function<br/>* Boolean<br/>* Symbol<br/>* Error<br/>* EvalError<br/>* InternalError<br/>* RangeError<br/>* ReferenceError<br/>* SyntaxError<br/>* TypeError<br/>* URIError |
| Numbers and dates           | * Number<br/>* BigInt<br/>* Math<br/>* Date                  |
| Text processing             | * String<br/>* RegExp                                        |
| Indexed collections         | * Array<br/>* Int8Array<br/>* Uint8Array<br/>* Uint8ClampedArray<br/>* Int16Array<br/>* Int32Array<br/>* Uint32Array<br/>* Float32Array<br/>* Float64Array |
| Keyed collections           | * Map<br/>* Set<br/>* WeakMap<br/>* WeakSet                  |
| Structured data             | * ArrayBuffer<br/>* SharedArrayBuffer🧪<br/>* Atomics🧪<br/>* DataView<br/>* JSON |
| Control abstraction objects | * Promise<br/>* Generator<br/>* GeneratorFunction<br/>* AsyncFunction🧪 |
| Reflection                  | * Reflect<br/>* Proxy                                        |
| Internationalization        | * Intl<br/>* Intl.Collator<br/>* Intl.DateTimeFormat<br/>* Intl.ListFormat<br/>* Intl.NumberFormat<br/>* Intl.PluralRules<br/>* Intl.RelativeTimeFormat<br/>* Intl.Locale |
| WebAssembly                 | *                                                            |



#### a. Object

Object和object，是不同概念。object泛指非基本类型的都为object类型，而Object是object类型中的一种，Object是key-value的集合，类似Objective-C的NSDictionary类型。



#### b. JSON

JSON是object类型，它提供两个方法，如下

```javascript
JSON.parse(text[, reviver])
JSON.stringify(value[, replacer[, space]])
```



#### c. Array

Array是JavaScript内置类，属于object类型。



##### 遍历Array[^15]

（1）使用下标

```javascript
let myStringArray = ["Hello","World"];
let arrayLength = myStringArray.length;
for (let i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
}
```



（2）Array.prototype.forEach

```javascript
x = [{key: 1}, {key: 2}, {KEY: 3}];
x.forEach(function (item, index, array) {
    console.log(item, index);
    if (item.key != undefined) {
        console.log(item.key);
    }
});
```

forEach方法是ES5语法开始支持的。但是forEach方法不支持break。



（3）for-of方式

```javascript
let colors = ['red', 'green', 'blue'];
for (const color of colors){
    console.log(color);
}
```

for-of方式是ES6语法开始支持的



（4）不要使用for-in方式

for-in方式把数组注入的方法，也遍历出来。举个例子，如下

```javascript
Array.prototype.foo = "foo!";
let array = ['a', 'b', 'c'];
for (let i in array) {
    console.log(array[i]);
}
```

输出是：a b c foo!



##### Array相关函数

###### join

```javascript
let x;
x = ['1'];
console.log(x.join(',')); // 1
x = ['1', '2'];
console.log(x.join(',')); // 1,2
```

作用：将数组元素，根据分隔符进行拼接

函数签名：`arr.join([separator])`

参数说明：

* separator，是分隔符，字符串类型。可选，如果不填默认使用`，`



###### some

```javascript
let x;
let evenValue;

// Case 1
x = [1, 2, 3, 4, 5];
evenValue = undefined;
x.some(function (item) {
    if (item % 2 === 0) {
        evenValue = item;
        return true;
    }
    return false;
});

console.log('evenValue：' + evenValue); // 2

// Case 2
x = [1, 3, 5];
evenValue = undefined;
x.some(function (item) {
    if (item % 2 === 0) {
        evenValue = item;
        return true;
    }
    return false;
});

console.log('evenValue：' + evenValue); // undefined
```

作用：遍历数组元素，根据特定条件决定是否中止遍历

函数签名：`arr.some(callback(element[, index[, array]])[, thisArg])`

参数说明：

* callback，回调函数，有3个参数，后面2个参数是可选的
  * element，数组元素
  * index，数组元素下标
  * array，数组本身
  * 返回值，是bool。如果返回true，则终止当前的数组元素遍历
* thisArg，用于指定callback中的this对象。可选，如果不指定，callback中的this是undefined



###### reduce

作用：用于遍历数组的元素，做特定的reduce操作（比如数组求和，创建Object词典等）

函数签名：

```javascript
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
```

* callback：匿名回调函数，至少有2个参数：accumulator和currentValue，以及返回值
  * accumulator：如果提供initialValue参数，则accumulator初始化为initialValue，而且currentValue从下标0开始取值；如果没有提供initialValue参数，则accumulator初始化为arr[0]，而且currentValue从下标1开始取值
  * currentValue：遍历过程中，当前数组的元素
  * index（可选）：遍历过程中，当前数组的元素的下标
  * array（可选）：遍历的数组对象
  * 返回值：必须提供返回值，如果没有return语句，默认返回undefined

* initialValue（可选），如果提供该参数，遍历从下标0开始；如果不提供该参数，遍历从下标1开始，而accumulator初始值为arr[0]



举个例子，不提供initialValue，如下

```javascript
x = [1, 2, 3, 4];
x.reduce((accumulator, element, index) => {
    console.log(`element: ${element} at ${index}`);
    return accumulator;
});
// element: 2 at 1
// element: 3 at 2
// element: 4 at 3
```



举个例子，提供initialValue，如下

```javascript
x = [1, 2, 3, 4];
x.reduce((accumulator, element, index) => {
    console.log(`element: ${element} at ${index}`);
    return accumulator;
}, 0);
// element: 1 at 0
// element: 2 at 1
// element: 3 at 2
// element: 4 at 3
```



> 示例代码，见16_data_types_4_array.html





## 3、class语法[^1]

​           JavaScript（后简称JS），不使用`class`，采用`prototype`方式，也可以定义类的结构，如下

```javascript
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  alert(this.name);
}

let user = new User("John");
user.sayHi();
```

​           prototype相当于一个JS对象的类型，向User的prototype，定义sayHi变量（这里不需要声明，直接定义变量，而且值是匿名函数），等于向User类型注入sayHi函数。

​           如果使用class语法，会比使用prototype方式更加结构化一些，如下

```javascript
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi();
```

​       class里提供constructor方法用于初始化class对象，其他自定义的方法可以直接写在class中，不用注入到prototype中。



### （1）理解class和constructor作用

* class定义User，实际上User不是类，还是function类型，可见class是function的另一种形式。

```javascript
alert(typeof User); // function
```

* constructor，实际代表User类（或者函数User），和User类等价的。

```javascript
console.log(User === User.prototype.constructor); // true
```

* class中constructor没有的话，系统默认会提供一个空函数体的constructor，即`constructor() {}`



### （2）class和function的区别

* class定义的类（也可以称函数，后面为了区分，还是称为类），必须使用new关键字初始化，否则浏览器会报错。

```javascript
//User(); // Error: must use new for class User, e.g. new User()
```

* class中只能定义方法，不能定义变量（或者属性）。如果需要定义变量，只能通过prototype方式注入或者只读getter方式。如下

```javascript
class User {
    //var another_name; // Error: class not support
    constructor(name) {
        this.name = name;
    }

    // Note: readonly property `first_name `
    get first_name() {
        return "J";
    }
}

// Note: inject property `last_name` by prototype
User.prototype.last_name = "Lee";

let user = new User("John");
console.log("first_name: " + user.first_name);
console.log("last_name: " + user.last_name);

user.last_name = "Lea";
console.log("last_name: " + user.last_name);
```



### （3）class的定义可以作为表达式

class的定义可以作为函数的返回值，也可以直接赋值给变量，这个和function是保持一致的。

```javascript
// Note: class definition as return value
function makeClass(type) {
    if (type === 'hello') {
        return class {
            sayHi() {
                console.log("Hello!");
            }
        };
    }
}
let User = makeClass("hello");
new User().sayHi();

// Note: class definition as varibale value
let User2 = class MyClass {
    sayHi() {
        console.log(MyClass);
    }
}
new User2().sayHi();
//console.log(MyClass); // Error: can't access MyClass
```



### （4）getter/setter语法

class定义的类中，允许重写属性的getter和setter方法。例如

```javascript
class User {
    constructor(name) {
        this.name = name;
    }

    // Note: define a getter method
    get name() {
        return this._name;
    }

    // Note: define a setter method
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name);

user = new User("a");
```

这里的属性name，既有getter方法，又有setter方法，内部使用_name变量。



建议setter和getter需要同时定义

* 如果只定义getter方法，`this.name = name`会报错。
* 如果只定义setter方法，user.name将返回`undefined`，而且把name当成是user的属性而不是方法。

除了上面这种定义形式，还可以使用Object的defineProperties方法来注入setter和getter方法。如下

```javascript
class User {
    constructor(name) {
        this.name = name;
    }
}

Object.defineProperties(User.prototype,{
    name: {
        get() {
           return this._name;
        },
        set(value) {
           if (value.length < 4) {
               alert("Name `" + value + "` too short");
               return;
           }
           this._name = value;
        }
    }
});

let user = new User("John");
user = new User("a");
```



### （5）static语法

`static`关键字可以class中定义一个类方法，调用这个方法直接使用类名。

```javascript
// Note: define class method in class 
class User {
    static classMethod1() {
        console.log(this === User);
    }
}

User.classMethod2 = function() {
   console.log(this === User)
}

User.classMethod1(); // true
User.classMethod2(); // true
```

使用类方法的例子，如下

```javascript
// Note: define class method in class 
class User {
    static classMethod1() {
        console.log(this === User);
    }
}

User.classMethod2 = function() {
   console.log(this === User)
}

User.classMethod1(); // true
User.classMethod2(); // true

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    static createTodayArticle() {
        // Note: `this` is for class, not for object
        return new this("Today's digest", new Date());
    }
}

let articles = [
    new Article("Mind", new Date(2016, 1, 1)),
    new Article("Body", new Date(2016, 0, 1)),
    new Article("JavaScript", new Date(2016, 11, 1)),
    Article.createTodayArticle()
];
articles.sort(Article.compare);
console.log(articles);
```



### （6）let vs. var[^12]

let是es5语法引入的变量修饰符[^13]，推荐使用let，而不是var。



#### var存在某些捕获变量特殊规则

举个例子，如下

```javascript
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns '11'
```

这里g函数中a变量捕获f函数中a变量。



#### var变量不是block级别

举个例子，如下

```javascript
function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined'
```

即使x定义在if语句中，return语句依然能访问x变量



let修饰符解决上面var存在的问题，避免一些意外的错误



#### let是block级别的作用域

举个例子，如下

```javascript
function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}
```



#### let不允许重定义



var的例子

```javascript
function f(x) {
    var x;
    var x;

    if (true) {
        var x;
    }
}
```



let的例子

```javascript
let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope

function f(x) {
    let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    var x = 100; // error: can't have both declarations of 'x'
}
```



虽然函数内部let变量不能和函数形参重名，但是下面这个情况是例外

```javascript
function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns '0'
f(true, 0);  // returns '100'
```





## 4、module功能[^4]

​       JavaScript的module，即单个js文件，module封装特定class以及function的集合，可以通过**export**和**import**关键词，提供给其他js文件调用。但是html文件的`script`标签默认导入js文件，并不支持module功能。

​       html文件的`script`标签引入JavaScript的module，需要设置`script`的type为**module**，举个例子

```html
<script type="module" src="main.js"></script>
```

说明

> 如果不设置type为module，浏览器（Chrome、FireFox等）将把export、import等关键词报错。



### （1）使用export[^5]

​        **export**语句用于从module中导出function、object或者primitive value。**export**语句不能用于内嵌script。

有两种类型的export方式：**named export**（有名导出）和**default export**（默认导出）



| 类型               | 区分                                                         | 说明 |
| ------------------ | ------------------------------------------------------------ | ---- |
| **named export**   | import的符号名和export的符号名必须一致                       |      |
| **default export** | import的符号名可以任意名称，不一定和定义名字（变量名、函数名等）保持一致 |      |



#### a. named export（有名导出）

举个例子，如下

**19_named_export_module.js**

```javascript
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

var graph = {
  options: {
    color: "white",
    thickness: "2px"
  },
  draw: function() {
    console.log(`From graph draw function with color ${this.options.color}, thickness ${this.options.thickness}`);
  }
};

// Note: named export
export { cube, foo, graph };

```

说明

> 1. cube、foo和graph都是采用named exported的符号名。
> 2. named导出的符号名必须和变量、函数名一致，而且是已定义的。例如`export { cube2, foo, graph };`Chrome报错`Uncaught SyntaxError: Export 'cube2' is not defined in module`



**19_named_export_main.js**

```javascript
import { cube, foo, graph } from "./19_export_1_module1.js";

graph.options = {
  color: "blue",
  thickness: "3px"
};

graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

说明

> 1. import的符号名也必须和export的符号名一致。
> 2. 这里from "./19_export_1_module1.js"，而不是from "./19_export_1_module1"，是浏览器要求。



**19_named_export.html**

```html
<html>
  <head>
    <script type="module" src="./19_export_1_main.js"></script>
  </head>
</html>
```

说明

> 1. 前面也提到过，如果js文件是module，需要设置type为module



#### b. default export（默认导出）

如果仅想导出单个value或者function，则可以采用default export方式。

注意

> module要求必须有且仅有一个默认的export，即export default语句。



​        一般推荐把export和import放在js文件最前面，但是export和import一些变体写法，需要遵循变量作用域，因此不支持写在最前面。

举个例子，如下

```javascript
export default count;
export {ability};
let count = 10;
function ability() { return 'hello!'; }
```

浏览器将不识别count变量，可以换成下面的写法

```javascript
export default ability;
export {count};
let count = 10;
function ability() { return 'hello!'; }
```

或者

```javascript
export {count as default};
export {ability};
let count = 10;
function ability() { return 'hello!'; }
```



举个完整使用default符号的例子，如下

**20_default_export_module.js**

```javascript
export default function cube(x) {
  return x * x * x;
}
```

**20_default_export_main.js**

```javascript
import myCube from "./20_default_export_module.js";
console.log(myCube(3)); // 27
```

说明

> 1. 使用default export方式导出，import的符号名可以任意名称，不一定和定义名字（变量名、函数名等）保持一致。例如module中的函数是cube，而import语句可以取名为myCube。
> 2. `export default`不能和`var`、`let`或者`const`一起使用。



#### c. module重定向（Module Redirect）

当module A中导出module B中exported的符号，称之为**module重定向**。



举个例子，如下

**21_redirect_module_main.js**

```javascript
export {default} from './21_redirect_module_other_module.js';
export * from './21_redirect_module_other_module.js';
```



**21_redirect_module_other_module.js**

```javascript
export default function square(x) {
    return x * x;
}

export let ModuleName = 'Other_Module', ModuleFileName = '21_redirect_module_other_module.js';
```



**21_redirect_module.html**

```html
<html>
  <head>
    <script type="module" src="./21_redirect_module_main.js"></script>
    <script type="module">
      import square from "./21_redirect_module_main.js";
      import { ModuleName, ModuleFileName } from "./21_redirect_module_main.js";
      console.log(ModuleName);
      console.log(ModuleFileName);
      console.log(square(3));
    </script>
  </head>
</html>
```



#### d. export语法形式

```javascript
// 1. named export
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function FunctionName(){...}
export class ClassName {...}

// 2. default export
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

// 3. redirect module
export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
```



### （2）使用import[^6]

**import**语句用于绑定module导出的符号。

导入的module都是`strict mode`，不管是否显式声明它了

如果内嵌`script`标签需要使用import语句，必须设置`script`标签的`type="module"`。但是如果使用`import()`函数，则可以不用设置，



ES 6 module要求**import**语句使用完整module名字，包括文件后缀名。举个例子，如下

```javascript
import {count} from './modulename.js';
```



#### a. import导入分类

**import**语句有下面几种使用形式

##### 1. 导入整个module（Import an entire module's contents）

形式：`import * as aliasName from 'module.js';`

示例

```javascript
import * as utility from "./22_import_all_symbols_as_namespace_module.js";

console.log(utility.ModuleFileName);
console.log('3^2 = '+ utility.square(3));
console.log('pow(2,3) = ' + utility.pow(2,3));
```

完整例子，见**22_import_all_symbols_as_namespace.html**



注意：不能使用类似这样的语法，`import * from "<module>";`，一次性导入所有的export符号[^14]。目的在于，打包最终JS代码仅是使用到的export符号。





##### 2. 导入单个符号或多个符号（Import a single export or multiple exports from a module）

形式：

`import { namedExport } from 'module.js';`

`import { namedExport1, namedExport2, namedExport3,... } from 'module.js';`

示例

```javascript
import { ModuleFileName } from "./23_import_exported_symbols_module.js";
import { square, pow } from "./23_import_exported_symbols_module.js";

console.log(ModuleFileName);
console.log('3^2 = '+ square(3));
console.log('pow(2,3) = ' + pow(2,3));
```

完整例子，见**23_import_exported_symbols.html**



##### 3. 导入符号作为别名（Import an export with a more convenient alias）

形式：

`import { namedExport as aliasName } from 'module.js';`

`import { namedExport1 as aliasName1, namedExport2 as aliasName2, ... } from 'module.js';`

示例

```javascript
import { ModuleFileName as moduel_name } from "./24_import_symbols_as_alias_module.js";
import {
	square as s,
	pow as p
} from "./24_import_symbols_as_alias_module.js";

console.log(moduel_name);
console.log("3^2 = " + s(3));
console.log("pow(2,3) = " + p(2, 3));
```

完整例子，见**24_import_symbols_as_alias.html**



##### 4. 直接执行module（Import module without import symbols）

形式：`import 'module.js';`

示例

```javascript
import "./25_import_module_module.js";
```

说明

> 直接执行module方式，并不导入任何符号，仅执行该js文件。

完整例子，见**25_import_module.html**



##### 5. 导入default符号（Import defaults）

形式：`import defaultExport from 'module.js';`

也可以和其他形式组合使用，如

`import defaultExport, * as aliasName from 'module.js';`

`import defaultExport, {namedExport1, namedExport2, ...} from 'module.js';`

示例

```javascript
import myFunction from "./26_import_default_symbol_module.js";
myFunction();
```

完整例子，见**26_import_default_symbol.html**



##### 6. 动态导入（Dynamic Import）

形式：

`import('module.js').then((module) => { // Do something with the module. });`

`import('module.js').then((module) => { // Do something with the module. }).catch(err => { // Do something with the err });`



示例

```javascript
import("./27_dynamic_import_module.js").then((module) => {
  console.log(module.ModuleFileName);
  console.log('3^2 = '+ module.square(3));
  console.log('pow(2,3) = ' + module.pow(2,3));
}).catch(err => {
  console.log(err);
});;
```

完整例子，见**27_dynamic_import.html**



官方文档上说，动态导入还支持添加await关键词，例如

```javascript
let module = await import('/module.js');
```

但实际上Chrome报错。示例见见**27_dynamic_import.html**



#### b. import语法形式

```javascript
// 1. 导入默认符号
import defaultExport from "module-name";
// 2. 导入整个module
import * as name from "module-name";
// 3. 导入有名符号
import { namedExport } from "module-name";
// 4. 导入符号指定别名
import { namedExport as alias } from "module-name";
// 5. 导入多个符号
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { namedExport [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
// 6. 执行module代码
import "module-name";
// 7. 动态导入
var promise = import("module-name"); // This is a stage 3 proposal.
```



## 5、IIFE函数[^8]

​      IIFE(Immediately-invoked Function Expressions)指的是立即调用函数表达式，简单说，就是定义函数的同时调用这个函数。后面称这种函数为IIFE函数。

​     举个IIFE函数的例子，如下

```javascript
// 匿名函数
(function() {
  /* */
})();

// 匿名arrow函数
(() => {
  /* */
})();
```

除了上面的写法，还可以函数调用符`()`，放在里面，如下

```javascript
(function() {
  /* */
}())

// Note: Chrome console，执行下面代码，好像不支持
(() => {
  /* */
}())
```



也是是有名的IIFE函数，如下

```javascript
(function doSomething() {
  /* */
})()
```



一般可以在前面加上`;`，避免某些工具合并多个JS文件，导致出现问题，如下

```javascript
;(function() {
  /* */
})()
```



举个简单应用例子[^9]，如下

```html
<html>
  <head>
    <script type="module">
      ;(window.powers = function(i) {
        alert('test : ' + i);
      })(2);
    </script>
  </head>
  <body>
    <a href="#" onclick="powers(654)">Click</a>
  </body>
</html>
```

IIFE函数赋值到powers，powers函数和IIFE函数是等价的。页面加载时，定义IIFE函数并同时执行它。



## 6、内置函数

JavaScript的window提供一些方法，因此这些方法可以直接使用，不需要window.method()。



### （1）setTimeout

setTimeout方法是异步方法，但不是在其他线程，也是在JavaScript线程[^11]。

语法如下

```javascript
var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = scope.setTimeout(function[, delay]);
var timeoutID = scope.setTimeout(code[, delay]);
```

* 第一个参数是函数名，arg1、arg2是function的实参，function仅是函数名。举个例子，如下

```javascript
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2*1000, 'That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```

* 第一个参数是函数闭包。如下

```javascript
setTimeout(function() {
    console.log("second");
}, 0);
console.log("first"); // Note: "first" always appear before "second"
```



#### 解决setTimeout方法在loop中传参问题[^12]



举个例子，如下

```javascript
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
```

输出将是十次10。



使用IIFE方式，将loop的下标传给setTimeout的闭包函数，如下

```javascript
for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
}
```

输出将是0至9.



## 7、Error处理[^17]

Error实例的类型是`object`，Error实例可以配合throw语句使用。Error可以使用extend语句派生出子对象，通过这种方式，用户可以自定义错误。

举个例子，如下

```javascript
class MyError extends Error {
    constructor(message) {
        super();
        this.name = 'MyError';
        this.message = message;
    }
}
```

注意

> ES6语法才支持上面的自定义Error形式，ES5-需要定义MyError函数，同时修改它的prototype为Error。
>
> 示例代码，如下
>
> ```javascript
> function CustomError(foo, message, fileName, lineNumber) {
>   var instance = new Error(message, fileName, lineNumber);
>   instance.name = 'CustomError';
>   instance.foo = foo;
>   Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
>   if (Error.captureStackTrace) {
>     Error.captureStackTrace(instance, CustomError);
>   }
>   return instance;
> }
> 
> CustomError.prototype = Object.create(Error.prototype, {
>   constructor: {
>     value: Error,
>     enumerable: false,
>     writable: true,
>     configurable: true
>   }
> });
> 
> if (Object.setPrototypeOf){
>   Object.setPrototypeOf(CustomError, Error);
> } else {
>   CustomError.__proto__ = Error;
> }
> 
> try {
>   throw new CustomError('baz', 'bazMessage');
> } catch(e){
>   console.error(e.name); //CustomError
>   console.error(e.foo); //baz
>   console.error(e.message); //bazMessage
> }
> ```
>
> 



其他内置错误的构造函数[^23]，如下

| 函数名         | throw场景                             |
| -------------- | ------------------------------------- |
| EvalError      | eval函数中，可能throw                 |
| InternalError  | JS引擎执行出错，例如迭代次数超出限制  |
| RangeError     | 创建某个实例，超出它的值范围          |
| ReferenceError | 创建某个实例，引用出错                |
| SyntaxError    | 语法错误                              |
| TypeError      | 类型出错                              |
| URIError       | encodeURI或decodeURI函数中，可能throw |

在try-catch语句中通过instanceof语句来区分Error类型，如下

```javascript
try {
    throw new MyError('A MyError occurred');
}
catch (error) {
    if (error instanceof MyError) {
        LogTool.i(`This is my error: ${error.name}, ${error.message}, ${error.stack}`);
    }
    else {
        LogTool.i(`${error.name}: ${error.message}`);
    }
}
```



## 8、Strict Mode[^24]

​       ES5 (ECMAScript 5)引入JavaScript的strict mode，这个使得JavaScript的语法比默认的[sloppy mode](https://developer.mozilla.org/en-US/docs/Glossary/Sloppy_mode)更加严格。strict mode和sloppy mode完全不同，而且strict mode不是sloppy mode的子集。



标记strict mode，可以使用下面特定字符串

```javascript
'use strict';
"use strict";
```



strict mode和sloppy mode相比，有下面几点变化

* 更加严格语法检查(Converting mistakes into errors)



### （1）strict mode变化

#### a. 更加严格语法检查 (Converting mistakes into errors)

总结有6个方面，如下

```javascript
'use strict';

// 1. 不允许没有定义类型的全局变量
mistypeVariable = 17;

// 2. 赋值给不可写的全局对象，sloppy mode下执行不成功，但是也没有报错；strict mode下，会报错或抛出异常
// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError

// 3. 删除不可删除的属性，sloppy mode下执行不成功，但是也没有报错；strict mode下，会报错或抛出异常
// delete undeletable properties throw exception
delete Object.prototype; // throws a TypeError

// 4. sloppy mode下，允许函数参数重名，以最后的参数值为准；strict mode下，不允许函数参数重名
// strict mode requires that function parameter names be unique.
function sum(a, a, c) { // !!! syntax error
  'use strict';
  return a + a + c; // wrong if this code ran
}

// 5. ES5 (ECMAScript 5)的strict mode下不支持八进制字面常量，ES6 (ECMAScript 2015)开始支持以0o为前缀的八进制字面常量
// strict mode in ECMAScript 5 forbids octal syntax.
var a = 0644 === 420; // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
var b = "\045" === "%"; // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

// 6. ES6 (ECMAScript 2015)的strict mode禁止设置primitive值的属性
// strict mode in ECMAScript 2015 forbids setting properties on primitive values.
(function() {
	'use strict';

	false.true = '';         // TypeError
	(14).sailing = 'home';   // TypeError
	'with'.you = 'far away'; // TypeError
})();
```



Chrome的console中测试strict mode的特性，举个例子，如下

```shell
> function sum(a, a, c) {'use strict'; return a + a + c; }
Uncaught SyntaxError: Duplicate parameter name not allowed in this context
> function sum(a, a, c) {return a + a + c; }
<· undefined
> sum(1,2,3)
<· 7
```



注意：

下面这种case，本来是一个语法错误，但是因为ES 6 (ECMAScript 2015)实现的bug，允许这种写法

```javascript
'use strict';
var o = { p: 1, p: 2 }; // !!! syntax error
```

> This is no longer the case in ECMAScript 2015 ([bug 1041128](https://bugzilla.mozilla.org/show_bug.cgi?id=1041128)).



#### b. 简化变量使用 (Simplifying variable uses)

总结有3个方面，如下

```javascript
'use strict';

// 1. strict mode下，禁止with语句；sloppy mode下，允许with语句
var x = 17;
var obj = {x: 18};
with (obj) { // !!! syntax error
  x; // If this weren't strict mode, would this be var x, or would it instead be obj.x?
}

// 2. strict mode下，调用eval不会在当前环境中引入新的变量
// eval of strict mode code does not introduce new variables into the surrounding scope
var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);

// 3. strict mode下，不能删除变量
// strict mode forbids deleting plain names. delete name in strict mode is a syntax error
var x;
delete x; // !!! syntax error
eval('var y; delete y;'); // !!! syntax error
```



说明

> 1. with语句，主要用于简化block块中，访问属性的方式。举个例子，如下
>
> ```javascript
> var a, x, y;
> var r = 10;
> 
> with (Math) {
>   a = PI * r * r;
>   x = r * cos(PI);
>   y = r * sin(PI / 2);
> }
> ```
>
> 上面省去Math.PI、Math.cost和Math.sin的写法。但是with语句存在变量的歧义以及不利于编译器优化，所以不推荐使用。
>
> 2. 在strict mode下，调用eval，和执行eval的所在环境是否是strict mode没有关系，eval执行字符串是否在strict mode下，取决该字符串中是否指定了strict mode。举个例子，如下
>
> ```javascript
> function strict1(str) {
>   'use strict';
>   // Note: str总是在strict mode中执行
>   return eval(str); // str will be always treated as strict mode code
> }
> 
> function strict2(f, str) {
>   'use strict';
>   // Note: 和strict2的strict mode没有关系。如果str自身指定strict mode，则str在strict mode中执行，否则在sloppy mode中执行
>   return f(str); // str is strict if and only when itself contains 'use strict'
> }
> 
> function nonstrict(str) {
>   // Note: 如果str自身指定strict mode，则str在strict mode中执行，否则在sloppy mode中执行
>   return eval(str); // str is strict if and only if it invokes strict mode
> }
> 
> strict1("'Strict mode code!'");
> strict1("'use strict'; 'Strict mode code!'");
> strict2(eval, "'Non-strict code.'");
> strict2(eval, "'use strict'; 'Strict mode code!'");
> nonstrict("'Non-strict code.'");
> nonstrict("'use strict'; 'Strict mode code!'");
> ```
>
> 



#### c. 简化`eval`和`arguments`的使用 (Making `eval` and `arguments` simpler)

总结有3个方面，如下

```javascript
'use strict';

// 1. strict mode下，eval和arguments更像关键词，而不能当变量使用，下面每行代码，在strict mode下都会抛出异常
// Strict mode makes great strides toward treating eval and arguments as keywords
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function('arguments', "'use strict'; return 17;");

// 2. strict mode下，arguments[i]不再是函数参数的别名
function f(a) {
  'use strict';
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);

// Note: 修改参数变量a，其实也修改了arguments[0]，所以pair2[1]是42，而不是17
function f2(a) {
  a = 42;
  return [a, arguments[0]];
}
var pair2 = f2(17);
console.assert(pair2[0] === 42);
console.assert(pair2[1] === 42);

// 3. strict mode下，不再支持访问arguments.callee
var f = function() { return arguments.callee; };
f(); // throws a TypeError
```



说明

> 关于strict mode下，不再支持访问arguments.callee的原因，可以参考[官方文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)



#### d. 更加安全的JavaScript ("Securing" JavaScript)



```javascript
'use strict';

// 1. strict mode下，函数中的this不再是强制变成boxed的对象，而且也不能默认成为global object
// 特定的调用call、apply、bind等，this不会变成boxed的对象
function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);

// 2. strict mode下，函数的caller和arguments是不能访问的，因为它们是non-deletable properties which throw when set or retrieved
// If fun is in strict mode, both fun.caller and fun.arguments are non-deletable properties which throw when set or retrieved
function restricted() {
  'use strict';
  restricted.caller;    // throws a TypeError
  restricted.arguments; // throws a TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();

// 3. 

```



说明

> 在sloppy mode下，函数中的this，可以global object对象，或者boxed的对象。
>
> 举个在Chrome的console中的测试例子，如下
>
> ```javascript
> > function fun() { return this; }
> <· undefined
> > fun();
> <· Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
> > fun.call(2);
> <· Number {2}
> > fun.apply(null)
> <· Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
> > fun.call(undefined)
> <· Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
> > fun.bind(true)()
> <· Boolean {true}
> ```
>
> 





### （2）应用strict mode

应用strict mode和应用sloppy mode的代码可以混合，因此有几种方式使strict mode生效。

#### a. strict mode for script

应用strict mode到整个脚本中，可以在脚本执行最前面，加上`'use strict';`，举个例子，如下

```html
<html>
<head>
    <script>
        'use strict';
        v1 = "Hi! I'm a strict mode script!"; // ReferenceError: v1 is not defined
        console.log(`v1 : ${v1}`);
    </script>
    <script>
        v2 = "Hi! I'm a sloppy mode script!";
        console.log(`v2: ${v2}`);
    </script>
</head>
</html>
```

说明

> <script type="module">，就是strict mode应用到整个脚本



#### b. strict mode for function

可以将strict mode应用到单个函数体中，该函数体中定义的内部函数也是strict mode，但是该函数可以调用其他非strict mode函数。

举个例子，如下

```javascript
function test_strict_function() {
    // Function-level strict mode syntax
    'use strict';

    function nested() {
        let ret = 'And so am I!';
        return ret;
    }

    let ret = "Hi!  I'm a strict mode function!  ";

    // Note: Ok, call notStrict function
    test_notStrict_function();
    return ret + nested();
}

function test_notStrict_function() {
    ret = "I'm not strict.";
    return ret;
}
```



#### c. strict mode for module

ES6 (ECMAScript 2015)引入module概念，定义module文件时，默认就是strict mode。

举个例子，如下

```javascript
function strict() {
    // because this is a module, I'm strict by default
}
export default strict;
```





### （3）测试是否当前是strict mode[^27]

可以借助strict mode和sloppy mode之间的特性差异来判断是否是strict mode，例如在sloppy mode中，函数中的this是指向全局的对象，而在strict mode中，函数中的this是undefined。因此借助这个差异，实现如下代码。

```shell
$ echo '"use strict"; var isStrict = (function() { return !this; })(); console.log(isStrict);' | node
true
$ echo 'var isStrict = (function() { return !this; })(); console.log(isStrict);' | node
false
```

注意

> !undefined是true，而!global是false。

把上面代码变成一个工具函数，如下

```javascript
static isStrictMode = () => {
    return (function() { return !this; })();
};
```







## 9、JavaScript Tips

### （1）获取当前函数的名字[^18]

#### a. 使用arguments变量[^19]

arguments变量支持获取当前函数的相关信息

例如，获取当前函数的函数名。

```javascript
function foo() { 
  console.log(`${arguments.callee.name}`);
}
```

但是从ES 5+开始，不再支持arguments.callee方式[^21]

> **Warning:** The 5th edition of ECMAScript (ES5) forbids use of `arguments.callee()` in [strict mode](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode). Avoid using `arguments.callee()` by either giving function expressions a name or use a function declaration where a function must call itself.

因此在strict mode下面，浏览器会下面的错误

```
TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```



#### b. 使用Error实例

使用Error实例的stack属性，可以获取调用栈相关信息。

举个例子[^22]，如下

```javascript
class CallerTool {
    static currentFunctionName = () => {
        // gets the text between whitespace for second part of stacktrace
        return (new Error()).stack.match(/at (\S+)/g)[1].slice(3);
    }
}
```

> 示例代码，见caller_tool.js



### （2）Chrome console输出有颜色的日志

Chrome和Firefox(+31)支持console输出有颜色的日志[^20]，字符串增加前缀`%c`，log另外增加1个css样式参数。

举个例子，如下

```javascript
console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
```



> 示例代码，见log_tool.js



## 附录

### 1、辅助工具

- [JSFiddle](https://jsfiddle.net/)，在线JS编辑运行工具
- WebStorm，编写JavaScript、TypeScript的IDE



### 2、开发环境搭建

#### （1）安装http-server

```shell
$ npm install -g http-server
```



> -g，全局安装



#### （2）开启Web服务

在根目录开启http server，如下

```shell
$ http-server -c-1
```



#### （3）浏览器中访问html页面

html页面，示例如下

```html
<html>
  <head>
    <script type="module" src="library/string_tool.js"></script>
    <script type="module">
      import String_tool from "./string_tString_tool.js";
      var input = '测试时是地方哈是否if的hi个';
      var output;
      
      output = String_tool.truncateString(input, 8);
      console.log(output);

      output = String_tool.truncateString(input, 8, String_tool.TruncatingStyle.truncatingHead);
      console.log(output);

      output = String_tool.truncateString(input, 8, String_tool.TruncatingStyle.truncatingMiddle);
      console.log(output);
    </script>
  </head>
</html>
```



### 3、JavaScript常用库



#### （1）jquery.qrcode.js

[jquery.qrcode.js](http://jeromeetienne.github.com/jquery-qrcode)是JQuery的插件，可以生成二维码图片，举个例子[^10]

```html
<html>

<head>
  <script type="text/javascript" src="vendor/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="vendor/jquery.qrcode.min.js"></script>
  <script type="module">
    $(document).ready(function () {
      $('#test').qrcode({ width: 120, height: 120, text: "https://github.com/jeromeetienne/jquery-qrcode" });
    });
  </script>
</head>

<body>
  <div id="test"></div>
</body>

</html>
```



## References

[^1]: https://javascript.info/class
[^2]:https://javascript.info/types
[^3]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
[^4]:https://medium.com/@mattlag/es6-modules-getting-started-gotchas-2ad154f38e2e

[^5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[^6]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

[^7]:<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects>

[^8]:https://flaviocopes.com/javascript-iife/
[^9]:https://stackoverflow.com/questions/7498361/defining-and-calling-function-in-one-step

[^10]:https://stackoverflow.com/a/8611716

[^11]:https://stackoverflow.com/a/19626821
[^12]:https://www.typescriptlang.org/docs/handbook/variable-declarations.html
[^13]:https://www.typescriptlang.org/docs/handbook/basic-types.html#a-note-about-let

[^14]:https://stackoverflow.com/questions/34573779/es6-import-all-named-module-without-alias

[^15]:https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript

[^16]:[https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_%E2%80%93_ECMAScript_2015](https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_–_ECMAScript_2015)

[^17]:https://javascript.info/custom-errors
[^18]:https://stackoverflow.com/a/1013304
[^19]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

[^20]:https://stackoverflow.com/questions/7505623/colors-in-javascript-console
[^21]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
[^22]:https://stackoverflow.com/a/41621478

[^23]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[^24]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
[^25]:https://www.w3schools.com/js/js_versions.asp

[^26]:https://stackoverflow.com/questions/10480108/is-there-any-way-to-check-if-strict-mode-is-enforced









