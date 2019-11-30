# VsCode 设置多行注释快捷键
- 文件 -> 首选项 -> 键盘快捷方式 -> 输入comment即可
# JWT的使用以及原理
[参考文章](https://www.jianshu.com/p/ed17e00c4484)
- 用户注册登陆成功给用户生成一个token返回给客户端，等前端携带token调用API时我们直接解析token看能否解析出用户数据来决定用户是否有接口权限呢，NodeJS提供的一个npm包：jsonwebtoken就可以实现token的生成与反向解密出用户数据。
1. 引入jsonwebtoken包
2. 配置jsonwebtoken生成token所需的secret，secret为加密密钥，不能泄露给其他人使用。
3. secret通过jsonwebtoken.sign(info, secret, options)进行加密生成token。
4. 如何反向解析出用户数据，解析token使用方法：jsonwebtoken.verify(token,secret,callback)

# SyntaxError: Unexpected identifier错报及解决办法 Babel使Node支持ES6
[参考文章](https://segmentfault.com/a/1190000013445997)
- Babel 是一个 JavaScript 编译器，可将我们代码中的 ES6 语法转换为 ES5 的语法，使我们的代码能在不支持 ES6 语法的环境中正常运行。配合一些插件，我们甚至能直接使用 ES6 标准的一些新特性，而无需等待各大浏览器的实现，也无需担忧兼容性。
1. 装包 babel-cli 是 Babel 内置的一个 CLI，可通过命令行操作来编译文件 babel-node 文件名称运行
2. 装包 babel-preset-env 会根据我们配置的环境自动将该环境不支持的语法转换 ES5 的语法。
3. babel-polyfill（可选的依赖包） 可以为代码的运行环境补充缺少的 API。(参考文章)
4. 新建.babelrc文件 {"presets": ["env"]}

# git忽略某个目录或文件不上传
1. 新建一个.gitignore文件
2. 忽略规则 
node_modules/    //忽略这个node_modules/目录
angular.json    //忽略这个angular.json文件
log/*           //忽略log下的所有文件
css/*.css       //忽略css目录下的.css文件


