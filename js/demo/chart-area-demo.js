// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "Moisture",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 5,
          max: 100
      },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        scaleLabel: {
          display: true,
          labelString: 'Moisture'
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});


// Area Chart Example
var ctx = document.getElementById("myTempChart");
var myLineChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "Degree Celsius",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        },
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 5,
          max: 100
      },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        scaleLabel: {
          display: true,
          labelString: 'Degree Celsius'
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});


// Area Chart Example
var ctx = document.getElementById("myNChart");
var myLineChart3 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "mg / kg",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        },
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 5,
          max: 100
      },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        scaleLabel: {
          display: true,
          labelString: 'mg / kg'
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});




// Area Chart Example
var ctx = document.getElementById("myPChart");
var myLineChart4 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "mg / kg",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        },
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 5,
          max: 100
      },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        scaleLabel: {
          display: true,
          labelString: 'mg / kg'
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});




// Area Chart Example
var ctx = document.getElementById("myKChart");
var myLineChart5 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "mg / kg",
      lineTension: 0.3,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        },
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          steps: 10,
          stepValue: 5,
          max: 100
      },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        scaleLabel: {
          display: true,
          labelString: 'mg / kg'
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}


//function to update
Mvalues = []
setInterval(() => {
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
 
  let time = h + ":" + m;

  Mvalues.push({value : Math.floor(Math.random() * (100 - 80) + 80),
                time : time})
}, 10000)
// Pull last 4 items every 1 second (1 Hz)
setInterval(() => {
 // splice last 4 items, add them to the chart's data
  Mvalues.splice(Mvalues.length - 4, 4)
    .forEach((value, index) => {
     myLineChart.data.labels.push(value.time)
     myLineChart.data.datasets[0].data.push(value.value)
     console.log(value)
   })
 // finally, command the chart to update once!
 
 myLineChart.update()
}, 10000)



//function to update
Tvalues = []
setInterval(() => {
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
 
  let time = h + ":" + m;

  Tvalues.push({value : Math.floor(Math.random() * (100 - 80) + 80),
                time : time})
}, 10000)
// Pull last 4 items every 1 second (1 Hz)
setInterval(() => {
 // splice last 4 items, add them to the chart's data
  Tvalues.splice(Tvalues.length - 4, 4)
    .forEach((value, index) => {
     myLineChart2.data.labels.push(value.time)
     myLineChart2.data.datasets[0].data.push(value.value)
     console.log(value)
   })
 // finally, command the chart to update once!
 
 myLineChart2.update()
}, 10000)

//function to update
Nvalues = []
setInterval(() => {
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
 
  let time = h + ":" + m;

  Nvalues.push({value : Math.floor(Math.random() * (100 - 80) + 80),
                time : time})
}, 10000)
// Pull last 4 items every 1 second (1 Hz)
setInterval(() => {
 // splice last 4 items, add them to the chart's data
  Nvalues.splice(Nvalues.length - 4, 4)
    .forEach((value, index) => {
     myLineChart3.data.labels.push(value.time)
     myLineChart3.data.datasets[0].data.push(value.value)
     console.log(value)
   })
 // finally, command the chart to update once!
 
 myLineChart3.update()
}, 10000)


//function to update
Pvalues = []
setInterval(() => {
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
 
  let time = h + ":" + m;

  Pvalues.push({value : Math.floor(Math.random() * (100 - 80) + 80),
                time : time})
}, 10000)
// Pull last 4 items every 1 second (1 Hz)
setInterval(() => {
 // splice last 4 items, add them to the chart's data
  Pvalues.splice(Pvalues.length - 4, 4)
    .forEach((value, index) => {
     myLineChart4.data.labels.push(value.time)
     myLineChart4.data.datasets[0].data.push(value.value)
     console.log(value)
   })
 // finally, command the chart to update once!
 
 myLineChart4.update()
}, 10000)

//function to update
Kvalues = []
setInterval(() => {
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
 
  let time = h + ":" + m;

  Kvalues.push({value : Math.floor(Math.random() * (100 - 80) + 80),
                time : time})
}, 10000)
// Pull last 4 items every 1 second (1 Hz)
setInterval(() => {
 // splice last 4 items, add them to the chart's data
  Kvalues.splice(Kvalues.length - 4, 4)
    .forEach((value, index) => {
     myLineChart5.data.labels.push(value.time)
     myLineChart5.data.datasets[0].data.push(value.value)
     console.log(value)
   })
 // finally, command the chart to update once!
 
 myLineChart5.update()
}, 10000)