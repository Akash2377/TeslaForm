import React from "react";
import Navbar from "../component/navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state);
  const [bookingData, setBookingData] = React.useState([]);
  React.useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  const deleteData = (id) => {
    fetch(`https://webtechproject-mock-api.herokuapp.com/tesla/${id}`, {
      method: "DELETE",
    });
  };
  React.useEffect(() => {
    fetch(`https://webtechproject-mock-api.herokuapp.com/tesla`)
      .then((res) => res.json())
      .then((res) => setBookingData(res))
      .catch((err) => console.log(err));
  }, [deleteData]);

  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>State </th>
            <th>Year of planning</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((bd, index) => (
            <tr key={index}>
              <td>{bd.userName}</td>
              <td>{bd.userAge}</td>
              <td>{bd.State}</td>
              <td>{bd.Year}</td>

              <td onClick={() => deleteData(bd.id)} style={tableStyle}>
                Delete
              </td>
              <td>
                <Link to={`/admin/${bd.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
const tableStyle = {
  cursor: "pointer",
  color: "red",
};
