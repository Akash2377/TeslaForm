import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const EditPage = () => {
  const [userData, setUserData] = React.useState({
    userName: "",
    userAge: 0,
    State: "Maharashtra",
    Year: 2023,
  });
  const { userName, userAge, State, Year } = userData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const { id } = useParams();
  const StoreData = (e) => {
    e.preventDefault();
    fetch(`https://webtechproject-mock-api.herokuapp.com/tesla/${id}`, {
      method: "PATCH",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    alert("Data Updated Successfully");
  };
  return (
    <>
      <Link to="/admin" style={linkCSS}>
        Home
      </Link>
      <form>
        <h1 style={{ textAlign: "center" }}>Edit Registration Details</h1>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  style={inputField}
                />
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                <input
                  type="number"
                  name="userAge"
                  value={userAge}
                  onChange={handleChange}
                  placeholder="Enter your Age"
                  style={inputField}
                />
              </td>
            </tr>
            <tr>
              <td>State</td>
              <td>
                <select
                  name="State"
                  onChange={handleChange}
                  style={selectField}
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Goa">Goa</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Year of planning</td>
              <td>
                <select name="Year" onChange={handleChange} style={selectField}>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <input
          type="submit"
          onClick={StoreData}
          style={submitBTN}
          value="Update"
        />
      </form>
    </>
  );
};

export default EditPage;
const submitBTN = {
  backgroundColor: "crimson",
  padding: "10px 30px",
  fontSize: "20px",
  borderRadius: "10px",
  border: "none",
  color: "white",
  marginLeft: "600px",
  marginTop: "50px",
  cursor: "pointer",
};
const linkCSS = {
  textDecoration: "none",
  color: "black",
  fontSize: "20px",
  fontWeight: "500",
  fontFamily: "Arial",
};
const inputField = {
  width: "90%",
  padding: "5px",
  border: "none",
  outline: "none",
};
const selectField = {
  width: "90%",
  outline: "none",
  border: "none",
};
