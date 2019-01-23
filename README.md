# JavaScript学习手册

[TOC]

---



主要记录一些笔记，并不覆盖全部的JavaScript语法。



## 1、JavaScript语法

### （1）数据类型

JavaScript有7种数据类型（Data Types）[^2]，如下

| 类型        | 含义         | 说明                                                         |
| ----------- | ------------ | ------------------------------------------------------------ |
| `number`    | 整数或浮点数 | 除了整数或浮点数，还有特殊值也属于`number`类型：`Infinity`，`-Infinity` 和`NaN` |
| `string`    | 字符串       | 字符串有三种引号方式：单引号（`'`），双引号（`"`），反引号（<code>`</code>） |
| `boolean`   | 布尔值       | `boolean`类型的值只有两种：`true`和`false`                   |
| `null`      | 空值         | JavaScript中null代表nothing, empty或者value unknown          |
| `undefined` | 未赋值       | 和`null`不一样，`undefined`表示没有赋值                      |
| `symbol`    | 符号         |                                                              |
| `object`    | 对象         | 对象类型是一种复杂的类型。除`object`之外的6个类型都是基本类型[^3]。 |

示例代码见**16_data_types_1.html**



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



#### a. number类型

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



#### b. string类型(TODO)









### （2）class语法[^1]

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



#### 理解class和constructor作用

* class定义User，实际上User不是类，还是function类型，可见class是function的另一种形式。

```javascript
alert(typeof User); // function
```

* constructor，实际代表User类（或者函数User），和User类等价的。

```javascript
console.log(User === User.prototype.constructor); // true
```

* class中constructor没有的话，系统默认会提供一个空函数体的constructor，即`constructor() {}`



#### class和function的区别

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



#### class的定义可以作为表达式

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



### （3）getter/setter语法

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



### （4）static语法

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



### （5）module功能[^4]

​       JavaScript的module，即单个js文件，module封装特定class以及function的集合，可以通过**export**和**import**关键词，提供给其他js文件调用。但是html文件的`script`标签默认导入js文件，并不支持module功能。

​       html文件的`script`标签引入JavaScript的module，需要设置`script`的type为**module**，举个例子

```html
<script src="main.js" type="module"></script>
```

说明

> 如果不设置type为module，浏览器（Chrome、FireFox等）将把export、import等关键词报错。



#### 使用export

​        **export**语句用于从module中导出function、object或者primitive value。**export**语句不能用于内嵌script。

有两种类型的export方式：**named export**（有名导出）和**default export**（默认导出）



* named export方式

```javascript
// exports a function declared earlier
export { myFunction }; 

// exports a constant
export const foo = Math.sqrt(2);
```

​        使用named导出方式，export的符号名和import的符号名必须一致。



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



* default export方式

```javascript
// Default exports (function)
export default function() {} 

// Default exports (class)
export default class {} 
```



如果仅想导出单个value或者function，则可以采用default export方式。



举个例子，如下

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

> 1. 使用default export方式导出，import的符号名可以任意名称，不一定保持一致。例如module中的函数是cube，而import语句可以取名为myCube。
> 2. `export default`不能和`var`、`let`或者`const`一起使用。





module要求必须有一个默认的export，即export default。

一般推荐把export和import放在js文件最前面，但是export和import一些变体写法，需要遵循变量作用域，因此不支持写在最前面。

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



#### 使用import

ES 6 module要求完整module名字，包括文件后缀名。举个例子，如下

```javascript
import {count} from './modulename.js';
```



#### module重定向（Module Redirect）





## 附录

### 1、辅助工具

- [JSFiddle](https://jsfiddle.net/)，在线JS编辑运行工具







## References

[^1]: https://javascript.info/class
[^2]:https://javascript.info/types
[^3]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
[^4]:https://medium.com/@mattlag/es6-modules-getting-started-gotchas-2ad154f38e2e

