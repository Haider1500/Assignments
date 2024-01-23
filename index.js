import express from "express";
import router from "./routes/todo";

const app = express();
const port = 3000;

app.use("/allTodos", router);

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
