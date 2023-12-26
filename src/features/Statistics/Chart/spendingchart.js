// SpendingChart.js

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Utils from 'general/utils/Utils';

const SpendingChart = (props) => {
  const { userExpenses } = props;
  // const [chartData, setChartData] = useState(generateRandomData());
  var groupedExpensesByDate = [];

  userExpenses?.lineItems?.forEach((item) => {
    const createdAt = Utils.formatDate(item.expenseDate, "Ngày không hợp lệ", "DD/MM/YYYY");

    // Nếu ngày này chưa có trong đối tượng groupedExpensesByDate, tạo mới
    if (!groupedExpensesByDate[createdAt]) {
      groupedExpensesByDate[createdAt] = {
        date: createdAt,
        totalAmount: 0
      };
    }

    // Cộng dồn amount vào tổng của ngày tương ứng
    groupedExpensesByDate[createdAt].totalAmount += item.amount;
  });
  // const sortedChartData = Object.values(groupedExpensesByDate).sort((a, b) => new Date(a.date) - new Date(b.date));

  groupedExpensesByDate.sort(function (a, b) {
    var newData1 = a.replace(/(\d+[/])(\d+[/])/, '$2$1');
    var data1 = new Date(newData1);
    var newData2 = b.replace(/(\d+[/])(\d+[/])/, '$2$1');
    var data2 = new Date(newData2);
    return data1 - data2
  });
  console.log(groupedExpensesByDate);
  // Chuyển đối tượng thành mảng để sử dụng trong chart
  let timeChart = Object.values(groupedExpensesByDate).map((group) => group.date);
  let chartData = Object.values(groupedExpensesByDate).map((group) => group.totalAmount);
  let dataGroup = [];
  for (let index = 0; index < timeChart.length; index++) {
    let a = { time: timeChart[index], num: chartData[index] }
    dataGroup.push(a);
  }

  dataGroup.sort(function (a, b) {
    var newData1 = a.time.replace(/(\d+[/])(\d+[/])/, '$2$1');
    var data1 = new Date(newData1);
    var newData2 = b.time.replace(/(\d+[/])(\d+[/])/, '$2$1');
    var data2 = new Date(newData2);
    return data1 - data2
  });
  console.log(dataGroup);

  let timeChart1 = Object.values(dataGroup).map((group) => group.time);
  let chartData1 = Object.values(dataGroup).map((group) => group.num);



  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Expense',
    },
    xAxis: {
      categories: timeChart1,
    },
    yAxis: {
      title: {
        text: 'VND',
      },
    },
    series: [
      {
        name: 'money',
        data: chartData1,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );

};

export default SpendingChart;
