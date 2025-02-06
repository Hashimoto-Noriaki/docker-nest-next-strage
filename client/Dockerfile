# Next.js アプリの Dockerfile（マルチステージビルドを使わない例）
FROM node:18-alpine

WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# ソースコードのコピー
COPY . .

# ビルド実行（本番用ファイルを生成）
RUN npm run build

EXPOSE 3000

# コンテナ起動時は本番サーバーを起動
CMD ["npm", "start"]
