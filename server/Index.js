const connectToMongo = require("./Db");
const express = require("express");
const cors = require("cors");
const Placement = require("./models/Note");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post("/add", async (req, res) => {
  const placement = await Placement.create(req.body);
  res.send({ msg: "Upload Successfully" });
});
app.get("/fetchall", async (req, res) => {
  const placement = await Placement.find();
  res.send(placement);
});

app.get("/Visualize", async (req, res) => {
  const result_G = await Placement.aggregate([{ $group: { _id: "$Gender", count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);
  // Format the result
  const formattedResult_G = [["Gender", "Gender_count"]];
  result_G.forEach(({ _id, count }) => {
    formattedResult_G.push([String(_id), count]);
  });
  //company
  const result_C = await Placement.aggregate([{ $group: { _id: "$Company", count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);
  // Format the result
  const formattedResult_C = [["Company", "Company_count"]];
  result_C.forEach(({ _id, count }) => {
    formattedResult_C.push([String(_id), count]);
  });

  const result_S = await Placement.aggregate([{ $group: { _id: "$Salary", count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);
  // Format the result
  const formattedResult_S = [["Salary", "Salary_count"]];
  result_S.forEach(({ _id, count }) => {
    formattedResult_S.push([String(_id), count]);
  });

  res.send({Gender:formattedResult_G,Company:formattedResult_C,Salary:formattedResult_S});
});

// app.get("/Company", async (req, res) => {
//   const result = await Placement.aggregate([
//     { $group: { _id: '$Company', count: { $sum: 1 } } },
//     { $sort: { _id: 1 } }
//   ]);
//   // Format the result
//   const formattedResult = [['Company', 'Company_count']];
//   result.forEach(({ _id, count }) => {
//     formattedResult.push([String(_id), count]);
//   });
//   res.send(formattedResult);
// });

// app.get("/Salary", async (req, res) => {
//   const result = await Placement.aggregate([
//     { $group: { _id: '$Salary', count: { $sum: 1 } } },
//     { $sort: { _id: 1 } }
//   ]);
//   // Format the result
//   const formattedResult = [['Salary', 'Salary_count']];
//   result.forEach(({ _id, count }) => {
//     formattedResult.push([String(_id), count]);
//   });
//   res.send(formattedResult);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
