import React from "react";
import "./chart.scss";

import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Total: 500,
  },
  {
    name: "February",
    Total: 700,
  },
  {
    name: "March",
    Total: 450,
  },
  {
    name: "April",
    Total: 900,
  },
  {
    name: "May",
    Total: 750,
  },
  {
    name: "June",
    Total: 800,
  },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="charts">
      <div className="title"> {title}</div>
      <div style={{ paddingLeft: "30px", width: "100%" }}>
        <ResponsiveContainer width="95%" aspect={aspect}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="gray" />

            <CartesianGrid strokeDasharray="3 3" stroke="lavender" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
