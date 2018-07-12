const IPFS = require("ipfs-api");
const ipfs = IPFS("ipfs.infura.io", "5001", { protocol: "https" });
const fileName = "will_video.mp4";
const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, fileName);

const test = _path => {
  let content = fs.readFileSync(_path);
  content = new Buffer(content);
  ipfs.files.add(content, function(err, res) {
    console.log(err, res);
  });
};

test(filePath);
