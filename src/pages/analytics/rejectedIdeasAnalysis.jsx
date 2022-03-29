import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../constants/url";
import RejectedIdeaChart from "../../components/rejectedIdeaChart/rejectedIdeaAnalysis";
export let data = [];
export const RejectedIdeaAnalysis = () => {
  const [pieData, setPieData] = useState([]);
  const getData = async () => {
    let rejectedUnder30 = 0;
    let rejectedUnder50 = 0;
    let rejectedUnder70 = 0;

    let approved = 0;
    try {
      const responce = await axios.get(url.businessIdea);
      console.log('status...',responce.data.data[0].status);
      for (const key in responce.data.data) {
        let status = responce.data.data[key].status;

        if (status === "rejected") {
          if (responce.data.data[key].ideaSrengthPersentage < 30) {
            rejectedUnder30 = rejectedUnder30 + 1;
          } else if (responce.data.data[key].ideaSrengthPersentage < 50) {
            rejectedUnder50 = rejectedUnder50 + 1;
          } else if (responce.data.data[key].ideaSrengthPersentage < 70) {
            rejectedUnder70 = rejectedUnder70 + 1;
          } 
          else {
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
  useEffect(() => {
    async function fetchData(){
await getData();
    }
    fetchData();
  }, []);
  return (
    <div className="home">
      <RejectedIdeaChart
        dataPie={pieData}
        title=" Transactions"
        grid
        dataKey="Active User"
      />
    </div>
  );
};
