// const IPFS = require("ipfs-api");
// const ipfs = IPFS("ipfs.infura.io", "5001", { protocol: "https" });
// //const fileAddress = "template.json";
// const ipfsAddress = "QmTv6iJ3Mac12JCB43e6cUGaRJL6X3DqFz85iThA2Wo74G";
// const fs = require("fs"),
//   path = require("path");
// //   filePath = path.join(__dirname, fileName);

// const uploader = _path => {
//   let content = fs.readFileSync(_path);
//   let result = "";
//   content = new Buffer(content);
//   ipfs.files.add(content, function(err, res) {
//     console.log(err, res);
//     //return res[0].path;
//     result = res[0].path;
//   });
//   return result;
// };

// const getter = _query => {
//   let result = "";
//   ipfs.files.get(_query, (err, _file) => {
//     //console.log(_file[0].content.toString("utf8"));
//     result = _file[0].content.toString("utf8");
//   });
//   return result;
// };

// export { ipfsAddress, uploader, getter };
