# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

プログラミングスクール生徒名簿管理システム - 生徒情報の登録、編集、削除、検索を行うWebアプリケーション。日本語インターフェースで、純粋なHTML/CSS/JavaScriptで実装。

## アーキテクチャ

### データフロー
1. **データ構造**: 生徒データは`students`配列にオブジェクトとして格納
   ```javascript
   { name: "名前", furigana: "ふりがな", birthdate: "YYYY-MM-DD", gender: "男|女", specialty: "専門分野" }
   ```

2. **レンダリング**: `renderTable()`が中心的な表示関数
   - 検索文字列（`searchTerm`）とフィルター（`currentFilter`）を適用
   - 年齢は生年月日から動的計算

3. **モーダル操作**: 追加・編集は共通のモーダルを使用
   - `openModal(student)`で開く（引数なしで新規、ありで編集）
   - フォーム送信で`students`配列を更新

### 重要な関数の関係
- `renderTable()` ← 全ての変更操作後に呼び出される
- `updateStats()` ← `renderTable()`から呼び出され統計を更新
- `calculateAge()` ← 表示時に各生徒の年齢を計算

## 開発コマンド

### ローカル実行
```bash
# ブラウザで直接開く（ビルド不要）
# メインページまたは取扱説明書ページを開く
open [index.html | manual.html]  # Mac
start [index.html | manual.html] # Windows
```

### データエクスポート
```javascript
// ブラウザコンソールで実行（script.jsで定義される関数）
downloadCSV()  // CSV形式で生徒データをダウンロード
```

## コード変更時の注意点

### 新機能追加時
- `renderTable()`を必ず呼び出してUIを更新
- 日本語UIのため、メッセージは日本語で記述
- モーダルフォームの`required`属性を維持

### スタイル変更時
- グラデーション配色はstyle.cssで定義
- レスポンシブブレークポイントはメディアクエリで管理

### データ操作時
- 削除は`confirm()`で確認を取る
- 年齢計算は常に`calculateAge()`を使用
- 検索は名前、ふりがな、得意分野で部分一致

## 現在の制限事項

- **データ永続化なし**: ページリロードでデータが失われる（LocalStorage未実装）
- **バックエンドなし**: 完全にクライアントサイドのみ
- **テストなし**: 自動テストフレームワーク未導入