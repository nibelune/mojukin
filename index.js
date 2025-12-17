import "dotenv/config";
import express from "express";
import router from "./app/router.js";

const PORT = process.env.PORT ?? 4000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
