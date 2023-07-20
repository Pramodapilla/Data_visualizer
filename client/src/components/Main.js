import React from "react";

function Main() {
  return (
    <div>
      <div className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="card rounded-3 bg-white">
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Home</h3>

                    <div className="px-md-2">
                      <div className=" mb-4">
                        <a href="/form" class="btn btn-primary">
                        Placements Form
                        </a>
                      </div>

                      <div className=" mb-4">
                        <a href="/output" class="btn btn-primary">
                          All Data
                        </a>
                      </div>

                      <div className="mb-4">
                      <a href="/graph" class="btn btn-primary">
                          Visualization
                        </a>
                      </div>
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

export default Main;
