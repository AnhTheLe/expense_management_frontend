// SpendingChart.js

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const SpendingChart = () => {
  // Example data: random spending amounts for 30 days
  const generateRandomData = () => {
    return Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000));
  };

  const [chartData, setChartData] = useState(generateRandomData());

  useEffect(() => {
    // You can fetch real data here from an API or other data source
    // For this example, we'll generate random data on each render
    setChartData(generateRandomData());
  }, []);

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Spending Chart over Time',
    },
    xAxis: {
      categories: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
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
