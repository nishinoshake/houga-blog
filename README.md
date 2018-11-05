# 邦画だってさ

[Contentful](https://www.contentful.com)と[Nuxt.js](https://ja.nuxtjs.org)で構築したブログです。  
ブログを作って満足してしまったので、記事はまだ全部（仮）です。  

https://blog.houga.cc

## 使い方
Contentfulのアクセストークンを環境変数に設定しないと動きませんが参考までに。

```
# インストール
yarn

# 開発
yarn dev

# 静的ファイル生成
yarn generate
```

## インフラ構成
Nuxt.jsで静的に生成したファイルをS3へホスティングして、手前にCloudFrontを置いています。  

## ご意見・ご要望
ブログに関するご意見・ご要望がありましたら、issueにあげていただくか、下記のメールまでご連絡をお願いいたします。

lawson.and.7.11@gmail.com
