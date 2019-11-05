import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';

import { colors } from 'assets/styles';

function Charts(props) {
  const { data, type, title, xCategories, yTitle, color } = props;

  const options = {
    chart: {
      type: type,
    },
    title: {
      text: title,
      style: {
        color: colors.darkGray,
        fontSize: '16px',
        fontWeight: 600,
      },
    },

    xAxis: {
      categories: xCategories,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: yTitle,
      },
    },

    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: '',
        color: color ? color : colors.primary,
        data,
        showInLegend: false,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

Charts.defaultProps = {
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  type: 'column',
  xCategories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
};

Charts.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  yTitle: PropTypes.string.isRequired,
  color: PropTypes.string,
  xCategories: PropTypes.array,
};

export default Charts;
