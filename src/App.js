import React from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts/highstock';
import Line from './components/lineChart';
import Stock from './components/stockChart';
import ColumnBar from './components/columnBarChart';
import Donut from './components/pieChart';
import MyMap from './components/mapChart';

const App = () => (
  <div>
    <Line />
    <Stock />
    <ColumnBar />
    <Donut />
    <MyMap />
  </div>
);

export default App;