const IPFS = require("ipfs-api");
const ipfs = IPFS("ipfs.infura.io", "5001", { protocol: "https" });

const ipfsAddress = "QmTv6iJ3Mac12JCB43e6cUGaRJL6X3DqFz85iThA2Wo74G";

const uploader = _path => {
  let content = fs.readFileSync(_path);
  let result = "";
  content = new Buffer(content);
  ipfs.files.add(content, function(err, res) {
    console.log(err, res);
    //return res[0].path;
    result = res[0].path;
  });
  return result;
};

const getter = _query => {
  let result = "";
  ipfs.files.get(_query, (err, _file) => {
    //console.log(_file[0].content.toString("utf8"));
    result = _file[0].content.toString("utf8");
  });
  return result;
};

export { ipfs, ipfsAddress };

{
userId: "jsmith01",
name: "John Smith",
age: 62,
benefitions: [
  { name: "Tim Smith", relationship: "son" },
  { name: "Kim Smith", relationship: "daughter" }
],
digital: [
  {
    service: "facebook",
    id: "jsmith1",
    password: "jsmith123"
  },
  {
    service: "instagram",
    id: "jsmith1",
    password: "jsmith123"
  },
  {
    service: "bank",
    id: "021000021",
    password: "011401533"
  },
  {
    service: "btc",
    id: "1LXirtTfe9XCx4k15HELCQktXVZERabivT",
    password: "5KV4eiiuHA45znPJWi85jL4p6riHKMySY9281NUDgk1NE2JY7bj"
  }
],
distribution: ["QmXNb7S2e2wKuQPekWFmhM4Kahs2ievofE3W13xZcMcCox"],
memory: [
  {
    type: "photo",
    address: "QmRJQU2uU6rAxhKeCNZpPn5JoZ5rcroHWpGYuBgtj8oR37"
  },
  {
    type: "video",
    address: "QmQwZvjYr33CTgZcprzbT3frf33UyX2tzHDak22XpzJbhT"
  },
  {
    type: "sound",
    address: "QmUPxDVCA5pUoKxxKqfCH1kAWk4Lkx45RfTM91jLFLBZqr"
  }
]
}
