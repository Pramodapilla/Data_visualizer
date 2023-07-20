import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

function Visul() {
  //     const [name, setName] = useState("");
  const [gender, setGender] = useState({
    data: [],
    options: {
      title: "Gender",
      pieHole: 0.6,
      // is3D: true,
      pieSliceTextStyle: {
        color: "black",
      },
    },
  });
  const [company, setCompany] = useState({
    data: [],
    options: {
      title: "Company",
      pieHole: 0.3,
      // is3D: true,
      pieSliceTextStyle: {
        color: "black",
      },
    },
  });
  const [salary, setSalary] = useState({
    data: [],
    options: {
      title: "Salary",
      // hAxis: {
      //   title: 'Population',
      //   minValue: 0,
      // },
      // vAxis: {
      //   title: 'City',
      // },
      chartArea: { width: "50%" },
    },
  });
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/Visualize`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          setGender((prevAge) => {
            prevAge.data = data["Gender"];
            return { ...prevAge };
          });
          setCompany((prevAge) => {
            prevAge.data = data["Company"];
            return { ...prevAge };
          });
          setSalary((prevAge) => {
            prevAge.data = data["Salary"];
            return { ...prevAge };
          });
        console.log(gender);
        })
        .catch((err) => {
          console.log(err.message);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="container m-3">
        <h1 className="mt-2 mb-4 text-center">Visualization</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">Gender</div>
              <div className="card-body">
                <Chart chartType="PieChart" data={gender.data} options={gender.options} width="100%" height="500px" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">Company</div>
              <div className="card-body">
                <Chart chartType="PieChart" data={company.data} options={company.options} width="100%" height="500px" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">Salary</div>
              <div className="card-body">
                <Chart chartType="ColumnChart" data={salary.data} options={salary.options} width="100%" height="500px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visul;
