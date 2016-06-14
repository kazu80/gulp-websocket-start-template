## 概要 ##

gulp + webpack + browser-sync + sass + web socket 環境のスターターキット
webpack後にIDEのコード補完が効かなくなるためCSSはsass単体をコンパイルしそれを読みこませる

### インストール ###

```
$ npm install

$ cp node_modules/socket.io-client root/asset/js

$ cd app/src/node

$ npm install
```

### 使い方 ###

```
$ node app/src/node/app.js

$ gulp start

$ gulp build
```

### 留意点 ###

socket.io-clientをwebpackにのせる事が出来ていない(13.6.2016)