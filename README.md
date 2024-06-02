# 天気を表示する小さいアプリの実装

## 使用した技術
以下の3点は、使用した技術になります。
- docker
- React(18.3.1)
- TypeScript

## 天気API
以下は、今回使用した天気APIになります。  
```OpenWeatherMap Current weather data```  

## アプリ ビルド手順
以下は、ビルド手順になります。 　

1. 以下のコマンドを実行して、アプリをビルドしてください  
```docker compose build```  
1. 以下のコマンドを実行して、コンテナを起動してください  
```docker compose up -d ```  

※以下のコマンドは、コンテナを終了するコマンドになります。  
```docker compose down```  

## 環境変数の設定
以下は、環境変数の設定ファイルになります。  
```
# API URL
REACT_APP_OW_API_URL=https://api.openweathermap.org/data/2.5/weather
# 言語設定
REACT_APP_OW_API_LANG=ja
# API KEY
REACT_APP_OW_API_KEY=f04bc3ac6a635c4ceaaaa69b591e252d
``` 
※言語設定を変える場合、API KEYを変える場合は、```react-ts-app/.env```の設定変更を行ってください  
※以下の公式ホームページに各言語の値が記載されています。  
```https://openweathermap.org/current```

# ディレクトリ構成
```
├── WEATHER_APP/
│   └── react-ts-app/
│       ├── node_modules
│       ├── public
│       ├── src/
│       │   ├── test/
│       │   │   ├── api
│       │   │   └── components
│       │   └── weather/
│       │       ├── api/
│       │       │   └── weatherAPI.ts    ：データ処理
│       │       ├── components/
│       │       │   ├── CitySelect.tsx   ：セレクト部分
│       │       │   └── WeatherTable.tsx ：テーブル部分
│       │       ├── utiles/
│       │       │   └── weatherFunctions.ts
│       │       ├── cities.ts ：主要都市定義ファイル
│       │       └── types.ts  ：型定義ファイル
│       ├── App.css
│       ├── App.test.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── index.tsx
├── .prettierrc ：フォーマット設定ファイル
├── docker-compose.yaml
├── Dockerfile
└── README.md
```

## 備考
テスト実施時に出力される以下のwarningは、こちらの情報によると```https://github.com/facebook/react/issues/28915```React 18.3のバグ  
``` TEXT
Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.```