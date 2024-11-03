import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const series = [
  {
    name: 'Series 1',
    data: [
      { category: '12.06', value: 9 },
      { category: '18.06', value: 31 },
      { category: '01.07', value: 50 },
      { category: '13.07', value: 69 },
      { category: '14.07', value: 20 },
      { category: '20.07', value: 38 },
      { category: '24.07', value: 62 },
    ],
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/p/sandbox/line-chart-width-multi-series-yyrhrj';

  render() {
    return (
      <ResponsiveContainer width='50%' height='80%'>
        <LineChart width={300} height={300}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='category'
            type='category'
            allowDuplicatedCategory={false}
          />
          <YAxis
            dataKey='value'
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip />
          <Legend />
          {series.map((s) => (
            <Line dataKey='value' data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
