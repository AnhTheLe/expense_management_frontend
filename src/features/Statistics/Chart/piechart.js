// PieChart.js

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = (props) => {
  const { listCategories } = props;
  const categories = listCategories?.categories?.map((item) => item.categoryName);
  const generateRandomData = () => {
    return listCategories?.categories?.map((item) =>
    item?.userExpensesList?.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0));
  };

  const [chartData, setChartData] = useState(generateRandomData());

  useEffect(() => {
    setChartData(generateRandomData());
  }, [listCategories]);

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
        name: 'Total amount',
        data: chartData?.map((amount, index) => ({ name: categories[index], y: amount })),
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
