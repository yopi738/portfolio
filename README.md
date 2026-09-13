# Web Design Portfolio — 更新ガイド

HTML / CSS / JavaScriptだけで動く静的サイトです。外部ライブラリや外部フォントの読み込みはありません。

## ファイル

- `dist/index.html`：全8セクション、文章、作品カードと公開リンク、SEO・OGP設定
- `dist/assets/style.css`：色・余白・文字・レスポンシブ・アニメーション
- `dist/assets/main.js`：相談先URL設定、メニュー、スクロール表示
- `dist/assets/hero.webp`：AI生成のラウンジイメージ。実店舗の写真ではありません
- `dist/assets/profile.png`：ユーザー提供のプロフィールイラスト
- `dist/assets/favicon.svg`：ブラウザタブ用アイコン
- `.openai/hosting.json`：Sitesの識別情報と公開ディレクトリ設定

`dist/index.html`をブラウザで開くと表示できます。サーバーへ配置する場合は`dist`の中身をアップロードします。

## 構成と考え方

Hero → About → Service → Works → Strength → Workflow → FAQ → Final CTA。
チャコール、アイボリー、控えめなシャンパンゴールドを使い、明朝体の見出しと広い余白で落ち着きと温かさを表現。実績数・経験年数・成果は創作していません。Worksには制作済みの自主制作サイト4件を掲載しています。各作品のGitHub Pagesへ直接移動できます。

## 公開前に変更する箇所

1. 表示名・ブランド名：`index.html`のWEB DESIGN、Webサイト制作者、title、OGP、フッター。
2. 本人のプロフィール画像：下記の手順。
3. クラウドワークスURL：下記の手順。未設定の間は準備中メッセージを表示します。
4. Works：実際の作品ができたら、サムネイル、制作目的、設計のポイント、使用技術を実物と一致させて更新。
5. 公開先を変えた場合：`index.html`のcanonicalとog:urlを最終URLへ変更。

料金表・問い合わせフォームはありません。WordPressは設計の相談として記載し、実装経験を主張していません。

## プロフィール画像

`dist/assets/profile.png`に提供された「よぴエド」の画像を配置しています。画像全体を表示し、PCでは128px、スマートフォンでは104pxの角丸枠に収めています。差し替える場合は同ファイルを更新してください。

## クラウドワークスURL

`dist/assets/main.js`の次の設定を書き換えます。

```js
const CROWDWORKS_PROFILE_URL = 'https://crowdworks.jp/public/employees/実際のID';
```

https://crowdworks.jp/から始まるURLを設定すると相談ボタンが有効になり、別タブで開きます。`index.html`の`id="crowdworks-link"`のhrefも同じURLに変更すると、JavaScriptが無効な環境でも移動できます。

## Worksのリンク設定・追加

4作品のリンクは`dist/index.html`のWorksセクションに直接設定しています。各リンクは新しいタブで開き、`rel="noopener noreferrer"`を指定しています。

サムネイルは`dist/assets/works/`にあります。LUMÉA、NEXORA、NORD & DAYは各公開サイトのヒーロー画像を使用し、FlowPilot AIは管理画面をもとにしたSVGプレビューです。

作品を差し替える際は、カード内の画像・代替テキスト・作品名・カテゴリ・説明・リンクを更新してください。

実案件以外には必ずConcept WorkまたはSample Workを表示してください。

## OGP・アクセシビリティ

タイトル・説明・URL・言語・OGP・favicon設定済みです。OGP画像は未設定（共有用画像は別途用意した際に絶対URLで追加）。スキップリンク、見出し階層、キーボード操作、開閉状態、動きを減らす設定に対応しています。

確認用のSitesは本人限定です。クラウドワークスの発注者に見せる前に、URL・本人情報・作品を更新し、適切な公開先で一般公開してください。
