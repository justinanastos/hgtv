var submit = require("../utils/submit");
var email = process.env.EMAIL || "justin.anastos@gmail.com";
var url = "http://www.hgtv.com/design/hgtv-dream-home/sweepstakes";

module.exports = submit(url, "hgtv", email);
