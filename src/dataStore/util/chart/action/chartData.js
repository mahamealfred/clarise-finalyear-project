import axios from "axios";
import { url } from "../../../../constants/url";
export const GET_IDEA_STATUS_VALUES = "GET_IDEA_STATUS_VALUES";

// export const statusValues = () => {
//   let data = [];
//   return async (dispatch) => {
//     try {
//       const responce = await axios.get(`${url.businessIdea}`);
//       for(let i = 1 ;i <= 12; i++){

//           for(const key in responce){
//             let mouth = new Date(responce.data[key].createdAt).getMonth() +1;

//           }

//       }
//     } catch (error) {
//       console.log(error);
//     }
//     dispatch({ type: GET_IDEA_STATUS_VALUES });
//   };
// };
export const StatusNames = () => {
  let approved = 0;
  let rejected = 0;
  let waiting = 0;
  let unfinished = 0;
  return async (dispatch) => {
    try {
      const responce = await axios.get(`${url.businessIdea}`);
      for (const key in responce) {
        let status = responce.data[key].status;
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
    } catch (error) {
      console.log(error);
    }
    const data = [
      { name: "accepted", value: approved },
      { name: "rejected", value: rejected },
      { name: "waiting", value: waiting },
      { name: "unfinished", value: unfinished },
    ];

    dispatch({ type: GET_IDEA_STATUS_VALUES, payload: data });
  };
};
