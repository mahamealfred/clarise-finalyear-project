import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
const COLORS = ["#00C49F", "#0889d4", "#c90637"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Chart(props) {
  return (
    <>
      <div className="row">
        <div className="col-xl-8">
          <div
            className="card bg-default"
            style={{ position: "relative", top: -80, left: 10 }}
          >
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <ResponsiveContainer width="100%" aspect={8 / 3}>
                  <LineChart data={props.data}>
                    <XAxis dataKey="name" stroke="#fff" />
                    <Line
                      type="monotone"
                      dataKey={props.dataKey}
                      stroke="#fff"
                    />
                    <Tooltip />
                    {props.grid && (
                      <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
                    )}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div
            className="card bg-default"
            style={{ position: "relative", top: -80 }}
          >
            <ResponsiveContainer width="90%" aspect={5 / 5}>
              <PieChart width={700} height={250}>
                <Legend layout="vertical" verticalAlign="top" align="right" />
                <Pie
                  data={props.dataPie}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  // innerRadius={60}
                  outerRadius={100}
                  fill="#82ca9d"
                  label={renderCustomizedLabel}
                >
                  {props.dataPie ? (
                    props.dataPie.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))
                  ) : (
                    <></>
                  )}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
