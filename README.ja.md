# gas-vue-boilerplate

*Read this in other languages: [English](README.md), [日本語](README.ja.md).*

## Getting Started

```sh
git clone https://github.com/fossamagna/gas-vue-boilerplate.git my-awesome-project
cd my-awesome-project
yarn # 依存モジュールをインストール
yarn init-repo # gitリポジトリを初期化
yarn clasp login # claspでログイン
yarn clasp create --rootDir ./dist # Apps Scriptプロジェクトを作成
yarn build # サンプルプトジェクトをビルド
yarn push # ビルドされたスクリプトをpush
```

## テスト

### frontend

```sh
cd frontend
yarn test
```

### backend

Google Appsでのテストはスクリプトは `gas-test` で実行します。
Google Apps Scriptのテストには[gas-test](https://github.com/fossamagna/gas-test)を利用します。
gas-testはApps Scriptの関数をリモートで実行します。

以下のようにステップバイステップで、gas-testの実行方法について説明します。

1. テスト用のGoogle Apps Scriptプロジェクトを作成する。
   ```sh
   mv .clasp.json .clasp.app.json # Backup .clasp.json for application.
   yarn clasp create \
    --rootDir dist \
    --title my-awesome-project-test # Create GAS project for tests.
   mv .clasp.json .clasp.test.json
   mv .clasp.app.json .clasp.json
   ```
2. cd backend`.
3. `gas-test.json` ファイルを作成する。

   注: テストスクリプトで使用する `scopes` の値を `scopes` に追加してください。

   gas-test.json:
   ```json
   {
     "scriptId": "<YOUR_SCRIPT_ID_FOR_TEST>",
     "scopes": ["https://www.googleapis.com/auth/script.webapp.deploy"]
   }
   ```
4. ブラウザでGCPプロジェクトを開きます。
5. OAuthクライアントID（その他）を作成します。creds.jsonとしてダウンロードします。
6. ダウンロードしたファイルを使って `yarn gas-test auth creds.json` を実行します。
   このコマンドで生成したファイルを `gas-test-credentials.json` として保存します。
   注意: `gas-test-credentials.json` は非公開にしてください。
7. Apps Script APIを有効にします。
8. スクリプトが使用するAPIを有効にします。
9. appsscript.json に次のように記述します。必ずプッシュされていることを確認してください。
   ```json
   "executionApi": {
     "access": "MYSELF"
   },
   ```
10. `yarn test` でテストを実行する。

詳細は以下を参照してください: https://github.com/fossamagna/gas-test-cli#usage
