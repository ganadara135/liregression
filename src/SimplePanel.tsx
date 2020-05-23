import React, { useEffect, useState, useRef } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';

import * as d3 from 'd3';

interface MyPropsType {
  date?: Date;
  volume?: number;
}

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme();
  const [timeseries, setTimeseries] = useState([] as any);
  const [measure, setMeasure] = useState([] as any);
  const styles = getStyles();
  const d3Container = useRef(null);

  // console.log('props: ', props);
  // data  안에 시간간격 및 모든 데이터 다 있음

  useEffect(() => {
    if (d3Container.current && data.series[0]?.fields[0].values.length > 0) {
      console.log('data field[0].name: ', data.series[0]?.fields[0].name);
      console.log('data field[1].name: ', data.series[0]?.fields[1].name);
      console.log('data field[0].values.length: ', data.series[0]?.fields[0].values.length);
      console.log('data field[1].values.length: ', data.series[0]?.fields[1].values.length);
      console.log('data field[0].values: ', data.series[0]?.fields[0].values);
      // const arr = data.series[0]?.fields[0].values;
      // console.log('arr : ', arr);
      // // console.log('arr.get(0) : ', arr.get(0));
      // if (arr.length === 0) {
      //   console.log('arr.length === 0');
      //   return;
      // }
      const arr = data.series[0];
      console.log('arr : ', arr);

      setTimeseries(data.series[0]?.fields[0].values.toArray());
      setMeasure(data.series[0]?.fields[1].values.toArray());

      // const history = arr.fields. .map((d: any) => {
      const history = timeseries.map((unix: any) => {
        return {
          date: unix,
        };
      });

      const currentHistory = measure.map((mea: any, index: number) => {
        return {
          date: new Date(history[index].date),
          volume: mea,
        };
      });

      // console.log(timeseries, measure);
      let forcastTime = timeseries.map((unix: any) => {
        let dyDate = new Date(unix);
        // let plusTime = dyDate.valueOf() + 600000; // 1분 플러스
        // console.log('getTime(): ', dyDate.getTime());
        let benchmark = timeseries[timeseries.length - 1];
        let dyBenchdyDate = benchmark - dyDate.getTime();
        // console.log('차이값: ', dyBenchdyDate);
        let plusTime = benchmark + dyBenchdyDate + 600000;
        return {
          myDate: plusTime,
        };
      });
      console.log('fotcastTime: ', forcastTime);
      const indexMeasure = measure.map((elem: any, i: any) => [i, elem]);
      console.log('indexMeasure: ', indexMeasure);
      const forecastResult = forcastTime.map((elem: { myDate: Date }, i: number) => {
        // console.log(elem.valueOf());
        const { myDate } = elem;
        return {
          // date: new Date(elem),
          date: new Date(myDate),
          volume: predict(indexMeasure, indexMeasure.length - 1 + i),
        };
      });

      // console.log('result : ', forecastResult.volume);
      const attachedForecastResult = forecastResult.concat({
        date: new Date(timeseries[timeseries.length - 1]),
        volume: measure[measure.length - 1],
      });
      console.log('currenHistory: ', currentHistory);
      console.log('attachedForecastResult: ', attachedForecastResult);

      // 화면 지우기
      // const svg = d3.select('svg');
      // svg.selectAll('svg > *').remove();
      d3.selectAll('svg > g > *').remove();

      const chart = d3.select('#chart');
      const margin = { top: 20, right: 20, bottom: 30, left: 70 };
      const widthIn = width - margin.left - margin.right;
      const heightIn = height - margin.top - margin.bottom;
      const innerChart = chart.append('g').attr('transform', `translate(${margin.left} ${margin.top})`);

      const x = d3.scaleTime().rangeRound([0, widthIn]);
      const y = d3.scaleLinear().rangeRound([heightIn, 0]);

      const line = d3
        .line<MyPropsType>()
        .x(d => x(d.date as Date))
        .y(d => y(d.volume as number));

      x.domain([
        d3.min<MyPropsType>(currentHistory, d => d.date),
        d3.max<MyPropsType>(attachedForecastResult, d => d.date),
      ]);
      y.domain([0, d3.max<MyPropsType>(currentHistory, d => d.volume)]);

      innerChart
        .append('g')
        .attr('transform', `translate(0 ${heightIn})`)
        .call(d3.axisBottom(x));

      innerChart
        .append('g')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill', '#fff')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('측정 전력');

      innerChart
        .append('path')
        .datum(currentHistory)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 4.5)
        .attr('d', line);

      innerChart
        .append('path')
        .datum(attachedForecastResult)
        .attr('fill', 'none')
        .attr('stroke', 'tomato')
        .attr('stroke-dasharray', '10,7')
        .attr('stroke-width', 5.5)
        .attr('d', line);
    }
  }, [width, height, data]);
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {/* <div className={styles.textBox}>
        {options.showSeriesCount && (
          <div
            className={css`
              font-size: ${theme.typography.size[options.seriesCountSize]};
            `}
          >
            Number of series: {data.series.length}
          </div>
        )}
        <div>Text option value: {options.text}</div>
      </div> */}
      <svg id="chart" width={width} height={height} viewBox={`-${1} -${1} ${width} ${height}`} ref={d3Container}>
        <g></g>
      </svg>
    </div>
  );
};

const predict = (data: any[], newX: number) => {
  const round = (n: number) => Math.round(n);
  // const round = (n: number) => Math.round(n * 1000) / 1000;
  const sum = data.reduce(
    (acc, pair) => {
      const x = pair[0];
      const y = pair[1];

      if (y !== null) {
        acc.x += x;
        acc.y += y;
        acc.squareX += x * x;
        acc.product += x * y;
        acc.len += 1;
      }

      return acc;
    },
    { x: 0, y: 0, squareX: 0, product: 0, len: 0 }
  );

  const rise = sum.len * sum.product - sum.x * sum.y;
  const run = sum.len * sum.squareX - sum.x * sum.x;
  const gradient = run === 0 ? 0 : round(rise / run);
  const intercept = round(sum.y / sum.len - (gradient * sum.x) / sum.len);

  return round(gradient * newX + intercept);
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
