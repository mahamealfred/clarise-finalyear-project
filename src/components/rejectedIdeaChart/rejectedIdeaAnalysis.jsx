import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../constants/url";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../images/bdfLogo.jpg";

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
  const [pieData, setPieData] = useState([]);
  const getData = async () => {
    let rejectedUnder30 = 0;
    let rejectedUnder50 = 0;
    let rejectedUnder70 = 0;

    let approved = 0;
    try {
      const responce = await axios.get(url.businessIdea);
      console.log("status...", responce.data.data[0].status);
      for (const key in responce.data.data) {
        let status = responce.data.data[key].status;

        if (status === "rejected") {
          if (responce.data.data[key].ideaSrengthPersentage < 30) {
            rejectedUnder30 = rejectedUnder30 + 1;
          } else if (responce.data.data[key].ideaSrengthPersentage < 50) {
            rejectedUnder50 = rejectedUnder50 + 1;
          } else if (responce.data.data[key].ideaSrengthPersentage < 70) {
            rejectedUnder70 = rejectedUnder70 + 1;
          } else {
            // rejectedUnder99 = rejectedUnder99 + 1;
            console.log("regected");
          }
        }
        if (status === "approved") {
          approved = approved + 1;
        }
      }

      data = [
        { name: "Rejected Under 30%", value: rejectedUnder30 },
        { name: "Rejected Under 50%", value: rejectedUnder50 },
        { name: "Rejected Under 70%", value: rejectedUnder70 },
        { name: "Approved", value: approved },
      ];
      setPieData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const todaydate = new Date().toISOString().slice(0, 10);

  const generatePdf = () => {
    const doc = new jsPDF();

    doc.addImage(logo, "JPEG", 20, 20, 40, 40);
    doc.setFont("Helvertica", "bold");
    doc.text("Business Clarity Analysis System", 20, 20);
    doc.setFont("Helvertica", "normal");
    doc.text(`Date ${todaydate}`, 140, 70);
    doc.setFont("Helvertica", "bold");
    doc.text("Rejected Business Analysis", 80, 90);
    const tableColumn = [];
    const tableRows = [];
    const columnData = ["Business Ideas Analysis"];

    tableColumn.push(columnData);
    data.map((dt) => {
      const rowsData = [dt.name + ": " + dt.value];
      tableRows.push(rowsData);
    });
    doc.autoTable(tableColumn, tableRows, {
      startY: 100,
      theme: "grid",
      margin: 40,

      styles: {
        font: "courier",
        fontSize: 12,
        overflow: "linebreak",
        cellPadding: 4,
        halign: "center",
        fontWeight: "bold",
      },
      head: [tableColumn],
      body: [tableRows],
    });

    doc.save(`report_on_${todaydate}.pdf`);
  };

  useEffect(() => {
    async function fetchData() {
      await getData();
    }
    fetchData();
  }, []);
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
              <button
                onClick={generatePdf}
                className="btn "
                style={{ color: "white" }}
              >
                Generate Report
              </button>
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
