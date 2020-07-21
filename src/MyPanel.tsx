import React, { useEffect, useState, useRef } from 'react';
import { PanelProps } from '@grafana/data';
import { MyPanelOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
// import { useTheme } from '@grafana/ui';

import * as d3 from 'd3';
import { Select } from '@grafana/ui';

export interface SelectableValue<T = any> {
  label?: string;
  value?: T;
  imgUrl?: string;
  description?: string;
  [key: string]: any;
}

interface MyPropsType {
  date?: Date;
  volume?: number;
}

interface Props extends PanelProps<MyPanelOptions> {}

export const MyPanel: React.FC<Props> = ({ data, width, height }) => {
  // const theme = useTheme();
  // console.log(theme.palette.blue77);

  const [timeseries, setTimeseries] = useState([] as any);
  const [measure, setMeasure] = useState([] as any);
  const styles = getStyles();
  console.log(styles);
  const d3Container = useRef(null);

  const [selectVal, setSelectVal] = useState<number>(60000);
  const [fieldKeys, setFieldKeys] = useState<Array<SelectableValue<number>>>();

  useEffect(() => {
    // 1 days equales 86,400 seconds on Epoch time(UNIX)
    // 1 hours equals 3,600 seconds
    // 10 munites equals 600 seconds
    setFieldKeys([
      {
        label: '1 minute',
        description: 'Forcast 1 minutes',
        value: 60000,
      },
      {
        label: '10 minutes',
        description: 'Forcast 10 minutes',
        value: 600000,
      },
      {
        label: '60 minutes',
        description: 'Forcast 60 minutes',
        value: 3600000,
      },
    ]);
  }, []); // only call this initially, one time.

  useEffect(() => {
    // console.log('selectVal : ', selectVal);
    // console.log('timeseries?.length: ', timeseries?.length);

    if (d3Container.current && timeseries?.length > 0) {
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

      let forcastTime = timeseries.map(() => {
        // let dyDate = new Date(unix);
        // let plusTime = dyDate.valueOf() + 600000; // 1분 플러스
        let benchmark = timeseries[timeseries.length - 1]; // 최종 마지막 시간

        // let dyBenchdyDate = benchmark - dyDate.getTime();
        // // let plusTime = benchmark + dyBenchdyDate + 60000;
        // let plusTime = benchmark + dyBenchdyDate + fieldKeys?.find(el => el.value === selectVal)?.value;
        let plusTime = benchmark + fieldKeys?.find(el => el.value === selectVal)?.value;
        return {
          myDate: plusTime,
        };
      });

      const indexMeasure = measure.map((elem: any, i: any) => [i, elem]);
      const forecastResult = forcastTime.map((elem: { myDate: Date }, i: number) => {
        const { myDate } = elem;
        return {
          // date: new Date(elem),
          date: new Date(myDate),
          volume: predict(indexMeasure, indexMeasure.length - 1 + i),
        };
      });

      const attachedForecastResult = forecastResult.concat({
        date: new Date(timeseries[timeseries.length - 1]),
        volume: measure[measure.length - 1],
      });

      // 화면 지우기
      // const svg = d3.select('svg');
      // svg.selectAll('svg > *').remove();
      // d3.selectAll('svg > g > *').remove();
      // d3.selectAll('svg > *').remove();    // 이것으로 화면 전체 grafana 의 svg 로 그려진 이미지 삭제함

      const chart = d3.select('#mychart');
      chart.select('svg > *').remove(); // 현재 선택된 캔버스에서의 svg 만 제거
      const margin = { top: 20, right: 5, bottom: 10, left: 5 };
      const widthIn = width - margin.left - margin.right;
      const heightIn = height - margin.top - margin.bottom;
      const innerChart = chart.append('g').attr('transform', `translate(${margin.left} ${margin.top})`);

      const x = d3.scaleTime().rangeRound([0, widthIn]);
      const y = d3.scaleLinear().rangeRound([heightIn, 0]);

      const line = d3
        .line<MyPropsType>()
        // .x(d => x(d?.date!))
        // .y(d => y(d?.volume!));
        .x(d => x(d?.date as Date))
        .y(d => y(d?.volume as number));
      // const line = d3
      //   .line<MyPropsType>()
      //   .x(d => {
      //       console.log(d.date?.valueOf());
      //       return x(d.date?.valueOf() as number);
      //   })
      // .y(d => {
      //     console.log(d.volume?.valueOf());
      //     return y(d.volume?.valueOf() as number);
      //   });

      x.domain([
        // 디버그 방법
        // d3.min<MyPropsType>(currentHistory, (dtm: MyPropsType,idx: any,arr: any) => { console.log("d3.min: ", dtm); return null; }),
        d3.min<MyPropsType>(currentHistory, ({ date }) => {
          return date as any;
        }) as any,
        // d3.max<MyPropsType>(attachedForecastResult, (dtm: MyPropsType) => dtm.date?.toISOString()) as any,
        d3.max<MyPropsType>(attachedForecastResult, (dtm: MyPropsType) => dtm.date! as any),
      ]);
      y.domain([
        d3.min<MyPropsType>(currentHistory, ({ volume }) => volume as any) as any,
        d3.max<MyPropsType>(currentHistory, (dtm: MyPropsType) => dtm.volume as any) as any,
      ]);

      // x 측 그려줌
      innerChart
        .append('g')
        .attr('transform', `translate(0 ${heightIn})`)
        .call(d3.axisBottom(x));

      // y측 그려줌
      innerChart
        .append('g')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill', '#fff')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Target Value');

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
  }, [width, height, selectVal]);

  const onInput = (val: any) => {
    console.log('target value index : ', val);
    setSelectVal(val);

    setTimeseries(data.series[0]?.fields[0].values.toArray());
    setMeasure(data.series[0]?.fields[1].values.toArray());
  };

  console.log('width : ', width);
  console.log('height : ', height);

  // const clazz = css`
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex-direction: column;
  //   background-color: yellow;
  //   text-align: left;
  // `;

  return (
    <div
      // className={clazz}
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <h3>{'Select time interval what you want'}</h3>
      <Select
        // value={fieldKeys}
        // options={myOptions}
        options={fieldKeys}
        placeholder="Select time interval to forcast" // Select How much time you want to forcast
        onChange={item => onInput(item.value)}
      />
      <svg
        id="mychart"
        width={width}
        height={height - 57}
        viewBox={`-${1} -${1} ${width} ${height + 10}`}
        ref={d3Container}
      >
        <g fill={'red'}></g>
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
