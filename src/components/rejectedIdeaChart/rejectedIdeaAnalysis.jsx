import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import ReactToExcel from "react-html-table-to-excel";
import { data } from "../../pages/analytics/rejectedIdeasAnalysis";
const COLORS = ["#c40065", "#b000c4", "#c49600", "#00c47f", "#17c400"];

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

export default function RejectedIdeaChart(props) {
  const todaysDate = () => {
    const time = new Date(Date.now());
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDay();
    const date = `${year}-${month}-${day}`;
    return date;
  };
  return (
    <>
      <div className="row">
        <div className="col-xl-7">
          <div
            className="card bg-default shadow"
            style={{ position: "relative", top: -80, left: 10 }}
          >
            <div className="card-header bg-transparent border-0">
              <h3 className="text-white mb-0">Rejected Ideas Analysis</h3>
            </div>
            <div className="table-responsive">
              <ReactToExcel
                className="btn"
                table="dayly-report"
                filename={`report on ${todaysDate()}`}
                buttonText="EXPORT"
              />
              <table
                className="table align-items-center table-dark table-flush"
                id="dayly-report"
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="sort" data-sort="name">
                      Idea Strength Rate (%)
                    </th>

                    <th scope="col" className="sort" data-sort="status">
                      Total in Values
                    </th>

                    {/* <th scope="col" className="sort" data-sort="completion">
                      Role
                    </th>
                    <th scope="col" className="sort" data-sort="completion">
                      Address
                    </th> */}
                  </tr>
                </thead>
                <tbody className="list">
                  {data.length != 0 ? (
                    data.map((tbData) => (
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <div className="media-body">
                              <span className="name mb-0 text-sm">
                                {tbData.name}
                              </span>
                            </div>
                          </div>
                        </th>

                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning"></i>
                            <span className="status">{tbData.value}</span>
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-xl-5">
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
