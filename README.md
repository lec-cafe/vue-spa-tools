# vue-spa-tools

> Vue.js と周辺ツールを使用した環境セット群

## ブランチ構成

### ready

[vue-cli](https://github.com/vuejs/vue-cli) を利用して、
webpack-simple テンプレートからファイルを生成した段階

````
$ vue init webpack-simple myProject
$ npm install
$ npm i vue-router --save
````

### vue-loader

サンプルアプリケーション構成として3つのコンポーネントを追加した状態

https://github.com/lec-cafe/vue-spa-tools/compare/ready...vue-loader

### router

vue-router を用いたSPA構成を追加した状態

https://github.com/lec-cafe/vue-spa-tools/compare/vue-loader...router


## 使い方

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
