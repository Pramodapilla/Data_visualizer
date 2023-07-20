import React, { useState } from "react";

function Index() {
  const [note, setNote] = useState(null);

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handlesubmit = async () => {
    if (note === null || !("Name" in note) || !("Gender" in note) || !("Company" in note) || !("Salary" in note)) {
      console.log("Enter correct values");
    } else {
      await fetch("http://127.0.0.1:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Failed to save data:", error);
        });
    }
  };
  return (
    <div>
      <div className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="card rounded-3 bg-white">
                  <div className="card-body p-4 p-md-5 bg-dark text-light">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Placements</h3>

                    <div className="px-md-2">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1q">
                          Name
                        </label>
                        <input type="text" id="form3Example1q" className="form-control" name="Name" onChange={onchange} required />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label className="form-label">Gender</label>
                          <select className="form-select" aria-label="Default select example" name="Gender" onChange={onchange} required>
                            <option value="">--select--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-4">
                          <label className="form-label">Company</label>
                          <select className="form-select" aria-label="Default select example" name="Company" onChange={onchange} required>
                            <option value="">--select--</option>
                            <option value="Microsoft">Microsoft</option>
                            <option value="Wipro">Wipro</option>
                            <option value="IBM">IBM</option>
                            <option value="Google">Google</option>
                            <option value="Accenture">Accenture</option>
                            <option value="oracle">oracle</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Salary expecting by you:</label>
                        <select className="form-select" aria-label="Default select example" name="Salary" onChange={onchange} required>
                          <option value="">--select--</option>
                          <option value="1l-2l">1l-3l</option>
                          <option value="3l-4l">3l-4l</option>
                          <option value="5l-6l">5l-6l</option>
                          <option value="7l-8l">7l-8l</option>
                          <option value="9l-10l">9l-10l</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-success btn-lg mb-1" onClick={handlesubmit}>
                        Click Here to Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
