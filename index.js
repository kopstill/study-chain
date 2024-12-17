// const moment = require("moment");
import moment from "moment";

const app = document.getElementById("app");
app.innerText = moment().format("YY-MM-DD HH:mm:ss");
