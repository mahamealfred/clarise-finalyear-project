import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../constants/url";
import Chart from "../../components/chart/Chart";

const Charts = () => {
  const [pieData, setPieData] = useState([]);
  const [lineDisplay, setLineDisplay] = useState([]);
  const getData = async () => {
    let approved = 0;
    let rejected = 0;
    let waiting = 0;
    let unfinished = 0;
    try {
      const responce = await axios.get(url.businessIdea);
      console.log(responce.data.data[0].status);
      for (const key in responce.data.data) {
        let status = responce.data.data[key].status;
        if (status === "approved") {
          approved = approved + 1;
        } else if (status === "rejected") {
          rejected = rejected + 1;
        } else if (status === "waiting") {
          waiting = waiting + 1;
        } else {
          unfinished = unfinished + 1;
        }
      }
      const data = [
        { name: "approved", value: approved },
        { name: "unfinished", value: unfinished },
        { name: "rejected", value: rejected },
      ];
      const lineData = [
        { name: "unfinished", "Active User": unfinished },
        { name: "approved", "Active User": approved },
        { name: "rejected", "Active User": rejected },
      ];
      setLineDisplay(lineData);
      setPieData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      <Chart
        data={lineDisplay}
        dataPie={pieData}
        title=" Transactions"
        grid
        dataKey="Active User"
      />
    </div>
  );
};
export default Charts;
