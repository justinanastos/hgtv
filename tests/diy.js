var submit = require("../utils/submit");
var email = process.env.EMAIL || "justin.anastos@gmail.com";
var url = "http://www.diynetwork.com/hgtv-dream-home";

module.exports = submit(url, "hgtv", email);
