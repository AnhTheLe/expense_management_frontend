// SpendingChart.js

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Utils from 'general/utils/Utils';

const SpendingChart = (props) => {
  const { userExpenses } = props;
  // Example data: random spending amounts for 30 days
  const generateRandomData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000));
  };
  console.log(userExpenses);
  // const [chartData, setChartData] = useState(generateRandomData());
  const chartData = userExpenses?.lineItems?.map((item) => item.amount)
  const timeChart = userExpenses?.lineItems?.map((item) => Utils.formatDate(item.createdAt, "Ngày không hợp lệ", "DD/MM/YYYY"))

  // useEffect(() => {
  //   // You can fetch real data here from an API or other data source
  //   // For this example, we'll generate random data on each render
  //   setChartData(generateRandomData());
  // }, []);

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
