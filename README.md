# スタバカニア

For English, check here: [Starbuccaneer](#Starbuccaneer).

[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/starbuccaneer)

スターバックスジャパンの Wi-Fi に接続と再接続することを自動化するツールです。

スターバックスジャパンの Wi-Fi はよく切断されますか。再接続は何度でも可能ですが、ログイン画面が出てこなかったり、時間がかかったり、そういう問題がよくあります。Starbuccaneer は接続状態を検出し、切断されている場合に自動的に (Puppeteer を利用して headless browser でログイン画面を操作して) 再接続することができます。

## ローカル環境でのセットアップ方法

1. このリポジトリをクローンします：
    ```bash
    git clone https://github.com/your-repo/starbuccaneer.git
    cd starbuccaneer
    ```

2. Node.js のバージョンを 22 に設定します（例: [nvm](https://github.com/nvm-sh/nvm) を使用）：
    ```bash
    nvm install
    nvm use
    ```

3. 必要な依存関係をインストールします：
    ```bash
    npm install
    ```

4. プロジェクトをビルドする
    ```bash
    npm run build

    > starbuccaneer@0.1.0 build
    > tsc
    ```

5. プログラムを実行します：
    ```bash
    npm start

    > starbuccaneer@0.1.0 start
    > node dist/starbuccaneer.js

    2024-11-06 11:11:52: Started...
    2024-11-06 11:11:52: Checking connectivity...
    2024-11-06 11:11:53: Connection to health check server was refused.
    2024-11-06 11:11:53: Attempting connection...
    2024-11-06 11:12:03: Already logged in.
    ```

プログラムは 10 秒ごとにインターネット接続を確認し、切断されている場合は自動的に再ログインを試みます。

---

# Starbuccaneer

Automate logging into Starbucks Japan Wi-Fi using Puppeteer and Node.js.

Does Starbucks Japan Wi-Fi frequently disconnect for you? While reconnecting is always possible, issues like the login screen not appearing or delays in reconnecting can often occur. Starbuccaneer detects the connection status and, if disconnected, automatically reconnects by using Puppeteer to operate the login screen in a headless browser.

## How to set up in a local environment

The `npx` installation and global usage (`npm i -g`) are currently broken. To use the tool, follow these steps to set it up locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/starbuccaneer.git
    cd starbuccaneer
    ```

2. Set Node.js to version 22 (e.g., using [nvm](https://github.com/nvm-sh/nvm)):
    ```bash
    nvm install
    nvm use
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Build the project
    ```bash
    npm run build

    > starbuccaneer@0.1.0 build
    > tsc
    ```

4. Start the program:
    ```bash
    npm start

    > starbuccaneer@0.1.0 start
    > node dist/starbuccaneer.js

    2024-11-06 11:11:52: Started...
    2024-11-06 11:11:52: Checking connectivity...
    2024-11-06 11:11:53: Connection to health check server was refused.
    2024-11-06 11:11:53: Attempting connection...
    2024-11-06 11:12:03: Already logged in.
    ```

The program will monitor your internet connectivity every 10 seconds. If disconnected, it will automatically log you back into Starbucks Wi-Fi
