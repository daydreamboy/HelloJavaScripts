# Chart.js

[TOC]

## 1、关于Chart.js

Chart.js[^1]是处理图表显示的js库，支持npm、CDN，以及React、Vue等使用方式。

支持的图表类型有

* Area Chart
* Bar Chart
* Bubble Chart
* Doughnut and Pie Charts
* Line Chart
* Mixed Chart Types
* Polar Area Chart
* Radar Chart
* Scatter Chart



### (1) HelloWorld示例

这里以CDN方式作为示例[^2]，如下

```html
<head>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const config = {
      type: 'line',
      data: data,
      options: {}
    };
  </script>
</head>

<body>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</body>

<script>
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
</script>
```

渲染的图表如下

<img src="images/01_hello_world.png" style="zoom:50%;" />

说明

> 1. Chart.js使用canvas标签渲染图表
> 2. 图表中图例，例如MyFirst dataset，是可点击的



### (2) 安装Chart.js

Chart.js支持下面几种安装方式



#### a. npm安装包

```shell
$ npm install chart.js
```



#### b. 引用CDN地址

有2个CDN源分别是

* CDNJS。在https://cdnjs.com/libraries/Chart.js这个页面，获取特定版本的js库。例如

```
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js
```



*  jsDelivr。在https://www.jsdelivr.com/package/npm/chart.js?path=dist这个页面，获取特定版本的js库。例如

```
https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js
```



#### c. 使用Github上的源码引入

这里暂不介绍。



### (3) 集成Chart.js

集成Chart.js，即如何将这个库，引入到代码中。不同的开发环境，引入方式不一样。

官方文档[^3]给了下面几种集成方式，如下



#### a. Script Tag

```html
<script src="path/to/chartjs/dist/chart.js"></script>
<script>
    const myChart = new Chart(ctx, {...});
</script>
```



#### b. Common JS

```javascript
const Chart = require('chart.js');
const myChart = new Chart(ctx, {...});
```



#### c. Bunnlers (Webpack, Rollup, etc.)

这里不介绍参考官方文档[^3]



### (4) 通用使用步骤

官方文档[^4]介绍了一个通用使用步骤，可以支持ES6 modules、plain JavaScript以及module loaders。

主要下面几个步骤

* 引入Chart.js。在集成Chart.js一节已经介绍。
* 确定canvas标签
* 初始化Chart对象



这里以plain JavaScript为例，示例代码，如下

```html
<head>
  <!-- Step 1: Import the Chart.js library -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
</head>

<body>
  <div>
    <!-- Step 2: Place the canvas tag -->
    <canvas id="myChart"></canvas>
  </div>
</body>

<script>
  // Step 3: Create the Chart object
  const ctx = document.getElementById('myChart');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
```



这里Chart初始化函数，有2个参数

* ctx，即canvas对象
* map对象，里面有type、data和options参考
  * type，决定图表的类型
  * data，渲染图表需要的数据
  * options，一些额外的配置参数



## 2、通用能力

### (1) Accessibility

canvas标签不是所有浏览器都支持，因此需要处理不支持canvas标签的情况。

官方文档[^5]推荐下面2种方式处理降级



#### a. 设置aria-label和role属性

```html
<canvas id="goodCanvas1" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>
```



#### b. 设置内嵌的文本

```html
<canvas id="okCanvas2" width="400" height="100">
    <p>Hello Fallback World</p>
</canvas>
```



### (2) Color

Chart.js支持颜色以字符串形式，内容是十六进制、RGB或者HSL。如果不设置颜色，Chart.js有默认的全局颜色。

可以参考下面表格

| Name              | Type    | Default              | Description       |
| ----------------- | ------- | -------------------- | ----------------- |
| `backgroundColor` | `Color` | `rgba(0, 0, 0, 0.1)` | Background color. |
| `borderColor`     | `Color` | `rgba(0, 0, 0, 0.1)` | Border color.     |
| `color`           | `Color` | `#666`               | Font color.       |

也可以支持pattern和gradient颜色，参考官方文档[^6]



### (3) Data structures

在上面提到，初始化Chart对象时，有一个data参数，它用于输入渲染图表的数据。

data参数包含2个参数，如下

* datasets参数，用于图表的数据
* labels参数，用于图表的index轴（默认是x轴）上索引







## 2、Line Charts



## 3、Bar Charts









## References

[^1]:https://www.chartjs.org/docs/latest/
[^2]:https://www.chartjs.org/docs/latest/getting-started/
[^3]:https://www.chartjs.org/docs/latest/getting-started/integration.html
[^4]:https://www.chartjs.org/docs/latest/getting-started/usage.html
[^5]:https://www.chartjs.org/docs/latest/general/accessibility.html
[^6]:https://www.chartjs.org/docs/latest/general/colors.html



