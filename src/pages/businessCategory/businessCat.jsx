import React, { useState } from "react";
import { postBusinessCategory } from "../../dataStore/admin/action/businessCategory";
import { useDispatch, useSelector } from "react-redux";
import PopUpFeed from "../../components/popup/popup";

const BusinessCat = () => {
  const [name, setName] = useState("");
  const [capital,setCapital]=useState("");
  const [categotyType, setCategotyType] = useState([
    {
      id: "",
      name: "",
    },
  ]);
  const [condition, setCondition] = useState([
    {
      criterion: "",
      name: "",
    },
  ]);
  const handleAddClick = (event) => {
    event.preventDefault();
    setCategotyType([
      ...categotyType,
      {
        id: "",
        name: "",
      },
    ]);
    console.log(categotyType);
  };

  const handleRemoveClick = (index) => {
    const allData = [...categotyType];
    allData.splice(index, 1);
    setCategotyType(allData);
    console.log(index);
  };

  const handleAddCondition = (event) => {
    event.preventDefault();
    setCondition([
      ...condition,
      {
        criterion: "",
        name: "",
      },
    ]);
    console.log(condition);
  };
  const handleRemoveCondition = (index) => {
    const allData = [...condition];
    allData.splice(index, 1);
    setCondition(allData);
    console.log(index);
  };

  const handleChange = (index, event) => {
    const allData = [...categotyType];
    allData[index][event.target.name] = event.target.value;
    setCategotyType(allData);
  };
  const handleConditionNameChange = (index, event) => {
    const allData = [...condition];
    allData[index][event.target.name] = event.target.value;
    setCondition(allData);
  };
  const handleConditionCriteionChange = (index, event) => {
    const allData = [...condition];
    allData[index][event.target.name] = event.target.value;
    setCondition(allData);
  };
  const feedback = useSelector((state) => state.PostBusinessCatReducer);
  const dispatch = useDispatch();
  const HandleSubmit = (event) => {
    event.preventDefault();
    // console.log(categotyType, condition);
    dispatch(postBusinessCategory(name,capital, categotyType, condition));
  };
  // useEffect(() => {}, []);
  return (
    <>
      <div className="col-xl-8 center ">
        <div
          className="card cnter"
          style={{ position: "relative", top: -80, left: 10 }}
        >
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-8 pl-lg-6">
                <h3 className="mb-0">Business Category </h3>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={HandleSubmit}>
              <h6 className="heading-small text-muted mb-4 pl-lg-6">
                Business information
              </h6>

              <div className="pl-lg-6">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="form-group has-warning">
                      <label
                        className="form-control-label "
                        for="input-username"
                      >
                        Category Name
                      </label>
                      <input
                        style={{ borderColor: "blue" }}
                        type="text"
                        id="input-username"
                        className="form-control "
                        placeholder="Category Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {categotyType.map((data, index) => (
                <div className="pl-lg-6">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="form-group">
                        <label
                          className="form-control-label"
                          for="input-username"
                        >
                          Category Type
                        </label>
                        <input
                          style={{ borderColor: "blue" }}
                          type="text"
                          name="name"
                          id="input-username"
                          className="form-control"
                          placeholder="Category Type"
                          value={categotyType.name}
                          onChange={(event) => handleChange(index, event)}
                        />
                      </div>
                    </div>
                    <h3
                      style={{ height: "35px", position: "relative", top: 35 }}
                      className="btn btn-success"
                      onClick={handleAddClick}
                      // className="btn btn btn-primary"
                    >
                      +
                    </h3>
                    <h3
                      style={{ height: "35px", position: "relative", top: 35 }}
                      onClick={() => handleRemoveClick(index)}
                      className="btn btn-danger"
                    >
                      -
                    </h3>
                  </div>
                  <div className="row"></div>
                </div>
              ))}

              <h6 className="heading-small text-muted mb-4 pl-lg-6">
                Business criterion information
              </h6>
              <div className="pl-lg-6">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="form-group has-warning">
                      <label
                        className="form-control-label "
                        for="input-username"
                      >
                        Category criterion
                      </label>
                      <input
                        style={{ borderColor: "blue" }}
                        type="text"
                        id="input-username"
                        className="form-control "
                        placeholder="Enter Capital"
                        value={capital}
                        onChange={(e) => setCapital(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {condition.map((data, index) => (
                <div className="pl-lg-6">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="form-group">
                        <label
                          className="form-control-label"
                          for="input-username"
                        >
                          Category criterion
                        </label>
                        <input
                          style={{ borderColor: "blue" }}
                          type="text"
                          name="criterion"
                          id="input-username"
                          className="form-control"
                          placeholder="Category criterion"
                          value={condition.criterion}
                          onChange={(event) =>
                            handleConditionCriteionChange(index, event)
                          }
                        />
                        <br />
                        <label
                          className="form-control-label "
                          for="input-username"
                        >
                          Category description
                        </label>
                        <input
                          style={{ borderColor: "blue" }}
                          type="text"
                          id="input-username"
                          name="name"
                          className="form-control"
                          placeholder="Category condition"
                          value={condition.name}
                          onChange={(event) =>
                            handleConditionNameChange(index, event)
                          }
                        />
                      </div>
                    </div>
                    <button
                      style={{ height: "35px", position: "relative", top: 35 }}
                      onClick={handleAddCondition}
                      className="btn btn btn-primary"
                    >
                      +
                    </button>
                    <h3
                      style={{ height: "35px", position: "relative", top: 35 }}
                      onClick={() => handleRemoveCondition(index)}
                      className="btn btn-danger"
                    >
                      -
                    </h3>
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
              ))}

              <h6 className="heading-small text-muted mb-4 pl-lg-6">
                More Information About business Category
              </h6>
              <div className="pl-lg-6">
                <div className="form-group">
                  <label className="form-control-label">Desctiption</label>
                  <textarea
                    style={{ borderColor: "blue" }}
                    rows="4"
                    className="form-control"
                    placeholder="A few words about business Category ..."
                  ></textarea>
                </div>
              </div>
              <div className="pl-lg-6">
                <PopUpFeed
                  title="businessCategory"
                  message={feedback.message}
                  status={feedback.status}
                />
                {/* <button  className="btn btn-success ">
                  submit
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusinessCat;
