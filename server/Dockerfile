# Nest.js アプリの Dockerfile（マルチステージビルドを使わない例）
FROM node:16-alpine

WORKDIR /app

# 依存関係のインストール
COPY package*.json ./
RUN npm install

# ソースコードのコピー
COPY . .

# ビルド実行（TypeScript → JavaScript に変換）
RUN npm run build

EXPOSE 3001

# コンテナ起動時はビルド済みの成果物でサーバーを起動
CMD ["node", "dist/main.js"]
