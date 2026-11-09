# 聚旅宿｜台灣高球自由行官網

這是 React 19、TypeScript、Vite 與 Tailwind CSS 的單頁靜態網站。正式部署只需發布 `dist/public`，不需要資料庫、登入系統、後端伺服器或 Zeabur 的檔案重建 Dockerfile。網站不提供線上付款，也不顯示價格；現有客製化詢問流程維持不變。

## 標準目錄

```text
client/
  index.html                # SEO、Google 驗證與分享設定
  public/                   # sitemap.xml、robots.txt
  src/
    App.tsx                 # 路由
    main.tsx
    index.css
    pages/
    components/
    contexts/
    hooks/
    lib/content.ts          # 三語內容與圖片網址
config/site.json             # 公開網址清單
scripts/
  generate-sitemap.mjs
  verify-build.mjs
shared/
patches/wouter@3.7.1.patch
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
vite.static.config.ts       # 對外平台使用的純靜態建置設定
vite.config.ts              # Manus 開發預覽相容設定
netlify.toml
vercel.json
```

`server/` 只保留原開發平台的可選靜態檔案伺服器。`pnpm build` 不會編譯或執行它，正式靜態託管不需要它。

## 本地安裝與檢查

使用 Node.js 22（至少 22.12）與 pnpm 10.18.1，在包含 `package.json` 的專案根目錄執行：

```bash
pnpm install --frozen-lockfile
pnpm run dev:static
```

正式建置與檢查：

```bash
pnpm run check
pnpm run build
pnpm run verify:build
pnpm run preview
```

`pnpm build` 會先自動產生 sitemap 和 robots，再輸出 HTML、CSS 與 JavaScript 至 `dist/public`。不得把 `client/src` 當作發布目錄，也不要把檔案攤平上傳到根目錄。

原 Manus 工作流程使用 `pnpm dev`；若要在該環境用 Node 相容伺服器，另執行 `pnpm build:manus` 和 `pnpm start`。這不是 Cloudflare Pages、Netlify 或 Vercel 的必要步驟。

## Cloudflare Pages

建立 **Pages** 專案並選擇 Git 整合，連接 `gathertravel8-art/Taiwan-travel-golf-`。不要誤選要求 Workers 指令的流程。

- 正式分支：`main`。
- 根目錄：倉庫根目錄，留空；不要填 `client`。
- 建置命令：`pnpm run build`。
- 輸出目錄：`dist/public`，不是 Vite 預設的 `dist`。
- Node.js：22；若設定介面需要環境變數，可設 `NODE_VERSION=22` 和 `PNPM_VERSION=10.18.1`。

若希望每次部署同時執行型別與 SEO 產物檢查，可將 Cloudflare 建置命令設為 `pnpm run check && pnpm run build && pnpm run verify:build`。此流程直接使用 Pages 原生 Git 整合，不需要新增 GitHub Actions 工作流程權限。

此網站沒有後端功能，不需要部署用 API Key 或其他必要機密。Git 整合設定完成後，Pages 才會在 GitHub 更新時自動部署。[1] [2]

## Netlify 與 Vercel

兩者皆從 GitHub 匯入同一倉庫。Netlify 讀取 `netlify.toml`，Vercel 讀取 `vercel.json`；檔案已指定純靜態建置命令、輸出目錄與 SPA 路由相容設定。[3] [4] 首次匯入後仍需在平台完成 GitHub 權限與正式分支設定。

## SEO 與新增頁面

正式網址保持 `https://gtsgolf-tw.com/`。Google Search Console 驗證 meta、canonical、Open Graph 與 Twitter 圖片均位於 `client/index.html`。

公開路由清單放在 `config/site.json`。目前只有首頁，因此 sitemap 只有一個 URL；三語切換、首頁區塊 `#anchor` 及 `/404` 都不是獨立可索引頁面。未來新增真正的公開頁面時，先在 `App.tsx` 建立路由，再將網址加入清單並重新建置。若使用 `lastmod`，請填實際內容更新日期，不要在每次建置時自動改成當天。

圖片沿用目前 HTTPS CDN 網址，不依賴 Zeabur 主機。不要把 API Key、`.env`、`node_modules`、內部紀錄或建置暫存提交到 GitHub。

## 遷移狀態與正式網域

此倉庫使用完整階層的原始碼。原本扁平化上傳版本備份於 `backup/pre-cloudflare-20261109` 分支，更新以一般 Git 提交保留歷史。是否已完成正式遷移，應以 Cloudflare Pages 的成功部署紀錄，以及正式網域的 HTTPS 回應為準；僅推送 GitHub 不代表 DNS 已切換。

更新既有倉庫時，應保留 Git 歷史，先備份原分支，再把已核對的扁平化重複檔案移回正確路徑。不要用網頁逐一上傳而再度攤平。完成新平台部署並驗證臨時網址後，才在該平台綁定 `gtsgolf-tw.com` 並按平台指示變更 DNS。維持原網域與路徑，可保留既有 Search Console 資源；收錄與排名仍由 Google 決定。

先前在對話中提供過的 Zeabur API Key，請在 Zeabur 後台撤銷或輪替；本整理包不包含該金鑰。

## References

[1]: https://developers.cloudflare.com/pages/configuration/build-configuration/ "Cloudflare Pages build configuration"
[2]: https://developers.cloudflare.com/pages/configuration/git-integration/ "Cloudflare Pages Git integration"
[3]: https://docs.netlify.com/build/configure-builds/file-based-configuration/ "Netlify file-based configuration"
[4]: https://vercel.com/docs/frameworks/frontend/vite "Vite on Vercel"
