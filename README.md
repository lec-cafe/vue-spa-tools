# vue-spa-tools

> Vue.js と周辺ツールを使用した環境セット群

## ブランチ構成

- ready: 初期構成
- router: vue-router を用いた構成



## テンプレートの用意の仕方

[vue-cli](https://github.com/vuejs/vue-cli)を導入し、

````
$ vue init webpack-simple myProject
````

デフォルトのテンプレートインストール後、下記を実行します。

``` bash
# install dependencies
$ npm install

# add vue-router
$ npm i vue-router --save
```

開発中は下記コマンドで、ホットリロードを試すことが出来ます。

``` bash
# serve with hot reload at localhost:8080
$ npm run dev
```

下記コマンドでJSファイルを出力出来ます。

``` bash
# build for production with minification
$ npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
