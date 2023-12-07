// PieChart.js

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
  // Example data: 5 spending categories
  const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

  // Example data: random spending amounts for each category
  const generateRandomData = () => {
    return categories.map(() => Math.floor(Math.random() * 1000));
  };

  const [chartData, setChartData] = useState(generateRandomData());

  useEffect(() => {
    // You can fetch real data here from an API or other data source
    // For this example, we'll generate random data on each render
    setChartData(generateRandomData());
  }, []);

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Spending Pie Chart',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Spending',
        data: chartData.map((amount, index) => ({ name: categories[index], y: amount })),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
