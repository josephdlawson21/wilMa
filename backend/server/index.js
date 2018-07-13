const IPFS = require("ipfs-api");
const ipfs = IPFS("ipfs.infura.io", "5001", { protocol: "https" });
const fileName = "sound.mp3";
const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, fileName);

const uploader = _path => {
  let content = fs.readFileSync(_path);
  content = new Buffer(content);
  ipfs.files.add(content, function(err, res) {
    console.log(err, res);
    return res[0].path;
    // getter(res[0].path);
  });
};

const getter = _query => {
  ipfs.files.get(_query, function(err, _file) {
    console.log(_file[0].content.toString("utf8"));
  });
};

uploader(filePath);
