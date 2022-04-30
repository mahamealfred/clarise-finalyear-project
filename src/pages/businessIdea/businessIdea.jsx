import React, { useState, useEffect } from "react";
import { postBusinessIdea } from "../../dataStore/user/action/businessIdea";
import { getBusinessCategory } from "../../dataStore/admin/action/businessCategory";
import { useDispatch, useSelector } from "react-redux";
import PopUpFeed from "../../components/popup/popup";
import axios from "axios";
const BusinessIdea = () => {
  const [i, setI] = useState(-1);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [bisinessDefinition, setBisinessDefinition] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [capital,setCapital]=useState("");

  const [condition, setCondition] = useState([
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
    {
      criterion: "",
    },
  ]);
  const handleSelectChange = (event) => {
    setBisinessDefinition(event.target.value);
    const dataIndex = singleBC.data.findIndex(function (post, index) {
      if (post._id == event.target.value) return true;
    });
    for (let i = 0; i <= dataIndex; i++) {
      setCondition([
        ...condition,
        {
          criterion: "",
        },
      ]);
    }
    setI(dataIndex);
    console.log(dataIndex);
  };
  const handleConditionCriteionChange = (index, event) => {
    const allData = [...condition];
    allData[index][event.target.name] = event.target.value;
    setCondition(allData);
    console.log(index);
  };

  const businessDef = useSelector((state) => state.GetBusinessCatreducer);

  const singleBC = useSelector((state) => state.GetSingleBusinessCatReducer);
  // const feedback = useSelector((state) => state.postBusinessIdeaReducer);
  const dispatch = useDispatch();
  const email = localStorage.getItem("email");
  const names = localStorage.getItem("name");
  const handleSubmit = (event) => {
    event.preventDefault();
console.log("capital",capital);
    dispatch(
      postBusinessIdea(
        name,
        owner,
        capital,
        bisinessDefinition,
        condition,
        description,
        email,
        names
      )
    );
  };
  const findIndex = (data) => {
    const newIndex = businessDef.data[i].conditions.findIndex(
      (dataIndex) => dataIndex.name === data.name
    );
    console.log("new id " + newIndex);
    return newIndex;
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const handleSubmission = async (event) => {
    event.preventDefault();
    setStatus("upload success");
    try {
      const response = await axios.post(
        "http://localhost:5000/BCA/bisinessIdea/upload",
        selectedFile
      );
    } catch (error) {
      console.log("not up loaded due to " + error);
    }
  };

  useEffect(() => {
    dispatch(getBusinessCategory());
  }, [i]);
  return (
    <>
      <div className="col-xl-8 center ">
        <div
          className="card cnter"
          // style={{ position: "relative", top: -80, left: 10 }}
        >
          <div className="card-header">
            <div className="row align-items-center">
              <div className="col-8 pl-lg-6">
                <h3 className="mb-0">Business Idea </h3>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h6 className="heading-small text-muted mb-4 pl-lg-6">
                Business information
              </h6>

              <div className="pl-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Your Business Idea
                      </label>
                      <input
                        style={{ borderColor: "blue" }}
                        type="text"
                        id="input-username"
                        className="form-control"
                        placeholder="Bisiness Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        Your Names
                      </label>
                      <input
                        style={{ borderColor: "blue" }}
                        type="text"
                        id="input-username"
                        className="form-control"
                        placeholder="Your  Names"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pl-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        for="input-username"
                      >
                        bisinessDefinition
                      </label>
                      <br />
                      <select
                        style={{ borderColor: "blue" }}
                        className="form-control"
                        id="active"
                        onChange={handleSelectChange}
                        value={bisinessDefinition}
                      >
                        {businessDef.data ? (
                          businessDef.data.map((data) => (
                            <option
                              value={data._id}
                              key={data.name}
                              className="seleteOption"
                            >
                              {data.name}
                            </option>
                          ))
                        ) : (
                          <option className="seleteOption">no data found</option>
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <h6 className="heading-small text-muted mb-4 pl-lg-6">
                Business Criterion information
              </h6>

              {i !== -1 ? (
                businessDef.data[i].conditions.map((data, index) => (
                  <div className="pl-lg-6" key={index + 1}>
                    <div className="row" key={index + 2}>
                      <div className="col-lg-6" key={index + 3}>
                        <div className="form-group">
                          <label
                            key={index + 4}
                            className="form-control-label"
                            for="input-username"
                          >
                            {data.name}
                          </label>
                          <input
                            key={index + 5}
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
                        </div>
                      </div>
                    </div>
                    <div className="row"></div>
                  </div>
                ))
              ) : (
                <div></div>
              )}
 <div className="pl-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label
                        className="form-control-label"
                        for="input-capital"
                      >
                        Your Capital
                      </label>
                      <input
                        style={{ borderColor: "blue" }}
                        type="text"
                        id="input-capital"
                        className="form-control"
                        placeholder="Your  Capital"
                        value={capital}
                        onChange={(e) => setCapital(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="heading-small text-muted mb-4 pl-lg-6">
                More Information About business Category
              </h6>
             

              <div>
                <input
                  type="file"
                  name="file"
                  className="btn bg-primary"
                  onChange={changeHandler}
                />
                {isSelected ? (
                  <div>
                    <p>Filename: {selectedFile.name}</p>
                  </div>
                ) : (
                  <p></p>
                )}
                <div>
                  <button
                    className="btn bg-success text-white"
                    onClick={handleSubmission}
                  >
                    upload
                  </button>
                  <span className="text-success" text-success>
                    {status}
                  </span>
                </div>
              </div>
              <div className="pl-lg-6">
                <div className="form-group">
                  <label className="form-control-label">Desctiption</label>
                  <textarea
                    style={{ borderColor: "blue" }}
                    rows="4"
                    className="form-control"
                    placeholder="A few words about business Category ..."
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>
              </div>
              <PopUpFeed
                title="business Idea"
                message="successfuly done!!!
                 we will contact you for more info throught email"
                status={"Done"}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default BusinessIdea;
