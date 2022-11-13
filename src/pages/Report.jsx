import React from "react";
import Navbar from "../component/navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state);
  const [bookingData, setBookingData] = React.useState([]);
  let countF = 0;
  let countS = 0;
  let countT = 0;
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;
  for (let i = 0; i < bookingData.length; i++) {
    if (bookingData[i].userAge >= 13 && bookingData[i].userAge <= 18) {
      countF++;
    } else if (bookingData[i].userAge > 18 && bookingData[i].userAge <= 25) {
      countS++;
    } else if (bookingData[i].userAge > 25) {
      countT++;
    }
    if (bookingData[i].Year == 2023) c1++;
    if (bookingData[i].Year == 2024) c2++;
    if (bookingData[i].Year == 2025) c3++;
    if (bookingData[i].Year == 2026) c4++;
    if (bookingData[i].Year == 2027) c5++;
  }
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
        <caption>Number of people registered According To Age</caption>
        <thead>
          <tr>
            <th>13-18</th>
            <th>18-25</th>
            <th>25+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{countF}</td>
            <td>{countS}</td>
            <td>{countT}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <caption>No of users planning for particular year</caption>
        <thead>
          <tr>
            <th>2023</th>
            <th>2024</th>
            <th>2025</th>
            <th>2026</th>
            <th>2027</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{c1}</td>
            <td>{c2}</td>
            <td>{c3}</td>
            <td>{c4}</td>
            <td>{c5}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Report;
