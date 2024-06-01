# 天気を表示する小さいアプリの実装

## 使用した技術
以下の3点は、使用した技術になります。
- docker
- React
- TypeScript

## 天気API
以下は、今回使用した天気APIになります。  
```OpenWeatherMap```  

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