## 概要
抽選機 ver.0.9.1
[こちら](https://shibaken28.github.io/roulette-for-festival/)で動作しています．

## 使い方
### 事前設定画面
- 「登録」ボタンで抽選対象者のリストである`.csv`ファイルを登録
- 抽選除外者(既に当選している人)がいる場合，「除外」ボタンで`.csv`ファイルを登録
  - webアプリを閉じたりリロードしたりしないのであれば，基本的にこの機能は使わない

### 抽選画面
- Enterキーでルーレットストップ
  - 5桁を1桁ずつストップするには数字キー「1,2,3,4,5」が使えます
  - 順番は任意．5桁の数字以外に適用するとバグります
- Rキーでルーレットスタート(Restart)
- Sキーで豪華抽選モードの切り替え(Special)
  - 豪華景品のときに，1桁ずつ確定させる演出と合わせて使ってください
- Dキーで抽選結果をCSV形式でダウンロード(Download)
- Escapeキーで設定画面に戻る

### 注意
- 画面の大きさはブラウザの拡大機能で調整してください
- GoogleChromeでの動作を想定しています
- リロードやページを離れると抽選データが消えます
- 当選者リストのダウンロードを活用してください

### 決まり，細かい動作
- 当選者は重複しない．
- 抽選除外者リストに登録されていて，抽選対象者リストに登録されていない場合は，無視される．
- `.csv`ファイルは区切り文字を`,`,`\n`,`\r`(文字コード`0a`,`0d`,`2c`)のいずれかとする．
- `.csv`ファイルの文字コードは`UTF-8`．
- 保存される当選者リストは改行`\n`区切り．
- webアプリから離れなければ，抽選対象者リストのファイルが異なっても，当選者リストは同じファイルに追記される形で保存される．
  - 例：`A.csv`を抽選対象リストとして登録し，`11111`と`22222`が当選した．その後，Escキーで設定画面に戻り，`B.csv`を抽選対象リストとして登録し，`1年1組`と`1年2組`が当選した．このときの当選者リスト(Dキーを押してダウンロードされるファイル)は`11111,22222,1年1組,1年2組`となる．

### 未定義動作やバグ
- 当選者の人数より抽選回数が上回ると未定義動作
- 抽選対象者リストに重複があった場合，未定義動作

### バージョン
#### ver.0.9.1
- 数字確定後に数字キーを押しても動作しないように

## 使用ライブラリ
- This project use [p5.js](https://p5js.org/) and p5.js SceneManager.

- [p5.js SceneManager](https://github.com/mveteanu/p5.SceneManager) by [mveteanu](https://github.com/mveteanu) is licensed underCC BY 2.0.



