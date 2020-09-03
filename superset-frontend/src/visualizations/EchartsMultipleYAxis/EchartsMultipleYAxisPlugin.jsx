import React from 'react';
import { reactify } from '@superset-ui/chart';
import d3 from 'd3';
import PropTypes from 'prop-types';
import { extent as d3Extent } from 'd3-array';
import echarts from 'echarts';
import { CategoricalColorNamespace } from '@superset-ui/color';
import { getNumberFormatter, NumberFormats } from '@superset-ui/number-format';
import { defaultOptions } from './options';

const propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
const defaultProps = {
  className: '',
  width: 800,
};

const { getColor, getScale } = CategoricalColorNamespace;

function EchartsMultipleYAxisPlugin(elem, props) {
  const {
    width, height,
    data, colorScheme,
  } = props;

  elem.style.width = width;
  elem.style.height = height;
  const echart = echarts.init(elem);

  let colors = CategoricalColorNamespace.getScale(colorScheme).colors;
  defaultOptions.color = colors;

  const legend = [];
  const xAxisData = [];
  let xAxisDataFlag = true;
  let yAxisMaxs = [];

  defaultOptions.yAxis.forEach((y, index) => {
    const sd = data[index];
    const title = sd.key;

    y.name = sd.key;
    y.axisLabel.formatter = `{value}`;
    y.axisLine.lineStyle.color = colors[index];

    const seriesD = [];
    defaultOptions.series[index].data = [];
    sd.values.forEach((value) => {
      xAxisDataFlag && xAxisData.push(value.x);
      defaultOptions.series[index].data.push((value.y).toFixed(2));
    })
    defaultOptions.series[index].name = y.name
    const yAxisMax = Math.max.apply(null, defaultOptions.series[index].data);
    y.max = Math.ceil(yAxisMax) + 5;
    yAxisMaxs.push(yAxisMax);
    xAxisDataFlag = false;
    defaultOptions.legend.data.push(y.name);
  });

  defaultOptions.xAxis[0].data = xAxisData;
  echart.setOption(defaultOptions);
}

EchartsMultipleYAxisPlugin.propTypes = propTypes;
EchartsMultipleYAxisPlugin.defaultProps = defaultProps;

export default reactify(EchartsMultipleYAxisPlugin);