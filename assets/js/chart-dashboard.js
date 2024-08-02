$(function () {
  "use strict";

  var options = {
    series: [
      {
        name: ">120",
        data: [94, 55, 57, 56, 61],
      },
      {
        name: "60 - 120",
        data: [76, 85, 101, 98, 87],
      },
      {
        name: "0 - 60",
        data: [35, 41, 36, 26, 45],
      },
    ],
    chart: {
      foreColor: "#9a9797",
      type: "bar",
      height: 320,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "18%",
        //endingShape: 'rounded'
      },
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      offsetX: -20,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    colors: ["#0095FF", "#8DD0FF", "#CAE8F8"],
    xaxis: {
      categories: ["ATMI", "BCA", "BNI", "BRI", "CIMB"],
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: true,
      borderColor: "#ededed",
      strokeDashArray: 4,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 310,
          },
          plotOptions: {
            bar: {
              columnWidth: "30%",
            },
          },
        },
      },
    ],
  };
  var chart = new ApexCharts(
    document.querySelector("#monitoringFlmProblem"),
    options
  );
  chart.render();

  var options = {
    series: [
      {
        name: "Pending",
        data: [94, 55, 57, 56, 61],
      },
      {
        name: "Progress",
        data: [76, 85, 101, 98, 87],
      },
    ],
    chart: {
      foreColor: "#9a9797",
      type: "bar",
      height: 320,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "18%",
        //endingShape: 'rounded'
      },
    },
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
      offsetX: -20,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    colors: ["#e62e2e", "#0095FF"],
    xaxis: {
      categories: ["ATMI", "BCA", "BNI", "BRI", "CIMB"],
    },
    fill: {
      opacity: 1,
    },
    grid: {
      show: true,
      borderColor: "#ededed",
      strokeDashArray: 4,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 310,
          },
          plotOptions: {
            bar: {
              columnWidth: "30%",
            },
          },
        },
      },
    ],
  };
  var chart = new ApexCharts(
    document.querySelector("#monitoringFlmOverticket"),
    options
  );
  chart.render();
});

var options = {
  series: [
    {
      name: "On Time",
      data: [33, 44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Late",
      data: [38, 35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    foreColor: "#9ba7b2",
    type: "bar",
    height: 280,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "25%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "right",
  },
  stroke: {
    show: true,
    width: 2,
    //curve: 'smooth'
    // colors: ['transparent']
  },
  colors: ["#0dcaf0", "#e5e7e8"],
  xaxis: {
    categories: [
      "Rio",
      "Nuzul",
      "Nur",
      "Sansan",
      "John",
      "Jojo",
      "Harry",
      "Julian",
      "Reza",
      "Nurul",
    ],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "" + val;
      },
    },
  },
};
var chart = new ApexCharts(
  document.querySelector("#chartInputPerformance"),
  options
);
chart.render();

var optionsLine = {
  chart: {
    foreColor: "#9ba7b2",
    height: 360,
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      top: 3,
      left: 2,
      blur: 4,
      opacity: 0.1,
    },
  },
  stroke: {
    curve: "smooth",
    width: 5,
  },
  colors: ["#0dcaf0", "#e5e7e8"],
  series: [
    {
      name: "This Year",
      data: [12, 15, 56, 20, 33, 27, 12, 32, 23, 26, 43, 33],
    },
    {
      name: "Last Year",
      data: [30, 33, 21, 42, 19, 32, 24, 30, 33, 21, 33, 45],
    },
  ],
  markers: {
    size: 4,
    strokeWidth: 0,
    hover: {
      size: 7,
    },
  },
  grid: {
    show: true,
    padding: {
      bottom: 0,
    },
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  xaxis: {
    tooltip: {
      enabled: false,
    },
  },
};
var chartLine = new ApexCharts(
  document.querySelector("#chartYeartoYearOntime"),
  optionsLine
);
chartLine.render();

// ------------ mesin active ----------------

var actualValue = 557;
var maxValue = 1000;
var percentageValue = (actualValue / maxValue) * 100;

var options = {
  chart: {
    height: 210,
    type: "radialBar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "78%",
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          color: "rgba(7, 39, 215, 0.25)",
          opacity: 0.65,
        },
      },
      track: {
        background: "#f0e6ff",
        margin: 0,
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          color: "rgba(7, 39, 215, 0.85)",
          opacity: 0.65,
        },
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -25,
          show: true,
          color: "#6c757d",
          fontSize: "14px",
        },
        value: {
          formatter: function (val) {
            return actualValue; // Display the actual value
          },
          color: "#000",
          fontSize: "28px",
          show: true,
          offsetY: 10,
        },
      },
      max: 1000, // Set the max value for the radial bar
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#0095FF"],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  colors: ["#0095FF"],
  series: [percentageValue], // Use the percentage value
  stroke: {
    lineCap: "round",
  },
  labels: ["Active"],
};

var chart = new ApexCharts(document.querySelector("#mesinActive"), options);
chart.render();

// ------------ end mesin active ----------------

// ------------ mesin active ----------------

var actualValue = 246;
var maxValue = 1000;
var percentageValue = (actualValue / maxValue) * 100;

var options = {
  chart: {
    height: 210,
    type: "radialBar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "78%",
        position: "front",
        dropShadow: {
          enabled: false,
          top: 3,
          left: 0,
          blur: 4,
          color: "rgba(7, 39, 215, 0.25)",
          opacity: 0.65,
        },
      },
      track: {
        background: "#f0e6ff",
        margin: 0,
        dropShadow: {
          enabled: false,
          top: -3,
          left: 0,
          blur: 4,
          color: "rgba(7, 39, 215, 0.85)",
          opacity: 0.65,
        },
      },
      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -25,
          show: true,
          color: "#6c757d",
          fontSize: "14px",
        },
        value: {
          formatter: function (val) {
            return actualValue; // Display the actual value
          },
          color: "#000",
          fontSize: "28px",
          show: true,
          offsetY: 10,
        },
      },
      max: 1000, // Set the max value for the radial bar
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#344986"],
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  colors: ["#344986"],
  series: [percentageValue], // Use the percentage value
  stroke: {
    lineCap: "round",
  },
  labels: ["Non Active"],
};

var chart = new ApexCharts(document.querySelector("#mesinNonActive"), options);
chart.render();

// ------------ end mesin active ----------------

// ------------ Total By Bank Mesin -------------
var options = {
  series: [
    {
      name: "Active",
      data: [33, 44, 55, 57, 56],
    },
    {
      name: "Non-Active",
      data: [38, 35, 41, 36, 26],
    },
  ],
  chart: {
    foreColor: "#9ba7b2",
    type: "bar",
    height: 280,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "25%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "right",
  },
  stroke: {
    show: true,
    width: 2,
    //curve: 'smooth'
    // colors: ['transparent']
  },
  colors: ["#0dcaf0", "#344986"],
  xaxis: {
    categories: ["ATMI", "BCA", "BNI", "BRI", "CIMB"],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "" + val;
      },
    },
  },
};
var chart = new ApexCharts(
  document.querySelector("#totalByBankMesin"),
  options
);
chart.render();

// ---------------- end total by bank mesin -----------------

// ----------------- Chart By Branch All --------------------
var options = {
  series: [45, 31, 26, 7, 5],
  chart: {
    foreColor: "#9ba7b2",
    height: 150,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val;
    },
  },
  colors: ["#1C1C1C", "#95A4FC", "#A8C5DA", "#A1E3CB", "#B1E3FF"],
  labels: ["Region 1", "Region 2", "Region 3", "Region 4", "Region 5"],
  tooltip: {
    y: {
      formatter: function (value) {
        return value + "%"; // Menambahkan tanda % di belakang nilai
      },
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 320,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
var chart = new ApexCharts(
  document.querySelector("#chartByBranchAll"),
  options
);
chart.render();

// ----------------- End Chart By Branch All --------------------

// ----------------- Chart By Machine --------------------
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    foreColor: "#9ba7b2",
    height: 150,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
    formatter: function (val) {
      return val;
    },
  },
  colors: ["#1C1C1C", "#95A4FC", "#A8C5DA", "#A1E3CB", "#B1E3FF"],
  labels: ["ATM", "CRM", "NTN", "CDM", "CDR"],
  tooltip: {
    y: {
      formatter: function (value) {
        return value + "%"; // Menambahkan tanda % di belakang nilai
      },
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          height: 320,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
var chart = new ApexCharts(document.querySelector("#chartByMachine"), options);
chart.render();

// ----------------- End Chart By Machine --------------------

// ------------ User Fetch Outstanding Cencon -------------
var options = {
  series: [
    {
      name: "Active",
      data: [33, 44, 55, 57, 56, 43, 24, 53, 44],
    },
    {
      name: "Non-Active",
      data: [38, 35, 41, 36, 26, 32, 23, 43, 32],
    },
  ],
  chart: {
    foreColor: "#9ba7b2",
    type: "bar",
    height: 280,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "25%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "right",
  },
  stroke: {
    show: true,
    width: 2,
    //curve: 'smooth'
    // colors: ['transparent']
  },
  colors: ["#0dcaf0", "#e5e7e8"],
  xaxis: {
    categories: [
      "Rio",
      "Nuzul",
      "Nur",
      "Sansan",
      "John",
      "Jojo",
      "Salsa",
      "Roni",
      "Kezia",
    ],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "" + val;
      },
    },
  },
};
var chart = new ApexCharts(
  document.querySelector("#userFetchOutstandingCencon"),
  options
);
chart.render();

// ---------------- end User Fetch Outstanding Cencon -----------------
