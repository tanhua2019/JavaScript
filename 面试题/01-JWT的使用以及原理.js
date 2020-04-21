// node不支持ES6 可在.babelrc文件配置好后运行 babel-node 文件名称运行 
// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken')

const secret = 'Love'

let user = {
  name: '王鹤鹏',
  age: 21
}
const token = jwt.sign(user, secret);

console.log(token);

jwt.verify(token, 'Love', (err, suc) => {
  if (err) return
  console.log(suc);
})
