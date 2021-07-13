# 山口県公認 新型コロナウイルス感染症対策サイト
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[](
![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)
)

[![山口県公認 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/42875682/80171665-ea3d0180-8625-11ea-8727-c47dbcb0ea73.png)](https://yamaguchi.stopcovid19.jp/)

## Slackワークスペースへの参加

このサイトを運営・改善していくためのSlackワークスペースを解説しています。  
山口県公認 新型コロナウイルス感染症対策サイトの開発に興味がある方は、[こちらから登録](https://join.slack.com/t/covid19-yamaguchi/shared_invite/zt-dpiqhr12-LgiU8gAKZ_02Alkc5BoV8w)してご参加ください。

## ブランチについて

基本的に、`development`と`master`の2つのブランチをベースとして運用を行います。

- `development`

開発用ブランチです。  
このブランチにPRを発行し、動作確認を行ってください。

- `master`

本番用ブランチです。  
`development`ブランチで動作確認が終わったもののみをマージしていきます。

## ブランチの運用について

ブランチの運用については以下のように定めます。

- 機能追加やエンハンス系について
`feature/{issueNumber}-{branchName}` Ex) `feature/52-add_new_cards`

- 緊急のバグ修正等（issueを作る場合）
`hotfix/{issueNumber}-{branchName}` Ex) `hotfix/55-fix_nuxt_build_error`

- 緊急のバグ修正等（issueを作らない場合）
`hotfix/{branchName}` Ex) `hotfix/fix_nuxt_build_error`

## 貢献の仕方

上記を遵守いただいた上で、issueを作成していただき `development`へPRを発行してください。

※ `development`以外へのPRは禁止です。



## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://yamaguchi.stopcovid19.jp/ が更新されます。

~~`staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-yamaguchi.netlify.com/ が更新されます。~~

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-yamaguchi.netlify.com/ が更新されます。

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://nsd24technology@gmail.com"><img src="https://avatars.githubusercontent.com/u/42875682?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yoshikatsu</b></sub></a><br /><a href="#projectManagement-nishidayoshikatsu" title="Project Management">📆</a> <a href="https://github.com/nishidayoshikatsu/covid19-yamaguchi/pulls?q=is%3Apr+reviewed-by%3Anishidayoshikatsu" title="Reviewed Pull Requests">👀</a> <a href="#question-nishidayoshikatsu" title="Answering Questions">💬</a> <a href="#maintenance-nishidayoshikatsu" title="Maintenance">🚧</a> <a href="https://github.com/nishidayoshikatsu/covid19-yamaguchi/commits?author=nishidayoshikatsu" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/paichi81"><img src="https://avatars.githubusercontent.com/u/4400857?v=4?s=100" width="100px;" alt=""/><br /><sub><b>paichi81</b></sub></a><br /><a href="https://github.com/nishidayoshikatsu/covid19-yamaguchi/commits?author=paichi81" title="Code">💻</a> <a href="https://github.com/nishidayoshikatsu/covid19-yamaguchi/issues?q=author%3Apaichi81" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://onwtr.work"><img src="https://avatars.githubusercontent.com/u/44804976?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wataru Ono</b></sub></a><br /><a href="https://github.com/nishidayoshikatsu/covid19-yamaguchi/commits?author=watagit" title="Code">💻</a> <a href="https://github.com/nishidayoshikatsu/covid19-yamaguchi/issues?q=author%3Awatagit" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!