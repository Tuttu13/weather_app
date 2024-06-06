# 天気を表示する小さいアプリの実装

## 使用した技術
このプロジェクトで使用した主な技術は以下の通りです。
- **Docker**
- **React** (バージョン 18.3.1)
- **TypeScript**

## 天気API
以下のAPIを使用して天気情報を取得しています。
- [OpenWeatherMap Current Weather Data](https://openweathermap.org/current)

## 環境変数の設定
言語設定やAPIキーを変更する場合は、`react-ts-app/.env.local`ファイルを基に`react-ts-app/.env` ファイルを作成してください。
以下は、デフォルトの環境変数設定です。
```env
# エンドポイント
REACT_APP_OW_API_URL=https://api.openweathermap.org/data/2.5/weather
# 言語設定
REACT_APP_OW_API_LANG=ja
# API KEY
REACT_APP_OW_API_KEY=f04bc3ac6a635c4ceaaaa69b591e252d
``` 
※REACT_APP_OW_API_KEYは自身のAPIキーに置き換えてください。APIキーはOpenWeatherMapの公式サイトから取得できます。  
※以下の公式ホームページに各言語の値が記載されています  
```https://openweathermap.org/current```
※記載されているAPIキーは、2024/06/06 19:00をもちましてセキュリティの都合上削除します。

## アプリ ビルド手順
以下は、ビルド手順になります
1. 以下のコマンドを実行して、リモートリポジトリをクローンしてください  
    ```bash
    git clone YOUR_REPOSITORY_URL
    ```
    ※XXXに、リモートリポジトリのURLを設定してください  
2. 以下のコマンドを`WEATHER_APP/`ディレクトリで実行して、アプリをビルドしてください  
    ```bash
    docker compose build
    ```
3. 以下のコマンドをreact-ts-app/直下で実行して、パッケージをインストールしてください  
    ```bash
    npm install --force
    ```
    ※パッケージ(@testing-library/react-hooks, ts-jest)が依存関係にあるため、強制インストールします。
4. 以下のコマンドを`WEATHER_APP/`ディレクトリで実行して、コンテナを起動してください  
    ```bash
    docker compose up -d
    ```
    ※Reactアプリの起動には少々時間がかかります。起動後、ブラウザでhttp://localhost:3000にアクセスしてください。

5. 以下のコマンドはコンテナを終了する際に使用します。
    ```bash
    docker compose up -d
    ```
    ※コンテナが正しく起動しない場合は、終了して再度起動してください。

## アプリ 操作方法

1. 初期表示は都市選択が未設定のため、テーブルヘッダーのみが表示されています  
1. 都市選択項目から任意の都市を選択して、天気情報を取得してください

# ディレクトリ構成
以下は、ディレクトリ構成になります
```
├── WEATHER_APP/
│   └── react-ts-app/
│       ├── node_modules
│       ├── public
│       ├── src/
│       │   ├── test/
│       │   │   ├── api/
│       │   │   │   └── weatherAPI.test.ts
│       │   │   ├── components/
│       │   │   │   ├── CitySelect.test.tsx
│       │   │   │   └── WeatherTable.test.tsx
│       │   │   ├── integration/
│       │   │   │   └── CitySelectionAndWeatherDisplay.test.tsx
│       │   │   └── utils/
│       │   │       └── weatherFunctions.test.ts
│       │   ├── weather/
│       │   │   ├── api/
│       │   │   │   └── weatherAPI.ts    ：データ処理
│       │   │   ├── components/
│       │   │   │   ├── CitySelect.tsx   ：セレクト部分
│       │   │   │   └── WeatherTable.tsx ：テーブル部分
│       │   │   ├── utils/
│       │   │   │   └── weatherFunctions.ts
│       │   │   ├── cities.ts ：主要都市定義ファイル
│       │   │   └── types.ts  ：型定義ファイル
│       │   ├── App.css
│       │   ├── App.test.tsx
│       │   ├── App.tsx
│       │   ├── index.css
│       │   └── index.tsx
│       ├── .env.local ：環境変数設定ファイル
│       ├── .gitignore
│       ├── jest.config.js
│       ├── package-lock.json
│       ├── package.json
│       ├── README.md
│       └── tsconfig.json
├── .prettierrc ：フォーマット設定ファイル
├── docker-compose.yaml
├── Dockerfile
└── README.md

```
