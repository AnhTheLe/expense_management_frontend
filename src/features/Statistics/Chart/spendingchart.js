// SpendingChart.js

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Utils from 'general/utils/Utils';

const SpendingChart = (props) => {
  const { userExpenses } = props;

  console.log(userExpenses);
  // const [chartData, setChartData] = useState(generateRandomData());
  const groupedExpensesByDate = {};

  userExpenses?.lineItems?.forEach((item) => {
    const createdAt = Utils.formatDate(item.createdAt, "Ngày không hợp lệ", "DD/MM/YYYY");

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

  // Chuyển đối tượng thành mảng để sử dụng trong chart
  const chartData = Object.values(groupedExpensesByDate).map((group) => group.totalAmount);
  const timeChart = Object.values(groupedExpensesByDate).map((group) => group.date);


  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Spending Chart over Time',
    },
    xAxis: {
      categories: timeChart,
    },
    yAxis: {
      title: {
        text: 'Amount',
      },
    },
    series: [
      {
        name: 'Spending',
        data: chartData,
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
