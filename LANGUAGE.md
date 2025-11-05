# 多語言使用指南

Cursor X 網站支援中英文切換功能。

## 🌍 已支援語言

- **英文 (EN)** - English
- **繁體中文 (繁中)** - Traditional Chinese

## 🎯 如何切換語言

### 用戶端
在網站右上角找到語言切換按鈕：
- 點擊 **EN** 切換為英文
- 點擊 **繁中** 切換為繁體中文

語言選擇會自動保存到瀏覽器，下次訪問時會記住您的語言偏好。

## 📝 如何添加或修改翻譯

所有翻譯內容都在 `i18n.js` 文件中。

### 修改現有翻譯

編輯 `i18n.js`，找到對應的語言和鍵值：

```javascript
const TRANSLATIONS = {
  en: {
    hero: {
      title: 'Your English Title',  // ← 修改這裡
    }
  },
  zh: {
    hero: {
      title: '您的中文標題',  // ← 修改這裡
    }
  }
};
```

### 添加新翻譯鍵

1. 在 `i18n.js` 中添加新的鍵值對：

```javascript
const TRANSLATIONS = {
  en: {
    // ... 現有內容
    newSection: {
      title: 'New Section Title',
      description: 'New description',
    }
  },
  zh: {
    // ... 現有內容
    newSection: {
      title: '新區塊標題',
      description: '新描述',
    }
  }
};
```

2. 在 HTML 或 JavaScript 中使用翻譯：

```javascript
// 在 JavaScript 中
const title = t('newSection.title');

// 在渲染函數中
element.textContent = t('newSection.description');
```

## 🔧 添加新語言

### 步驟 1: 添加翻譯

在 `i18n.js` 中添加新語言：

```javascript
const TRANSLATIONS = {
  en: { /* ... */ },
  zh: { /* ... */ },
  ja: {  // ← 添加日語
    nav: {
      pricing: '料金',
      features: '機能',
      // ...
    },
    // 複製英文或中文的結構，翻譯所有內容
  }
};
```

### 步驟 2: 添加語言按鈕

在 `index.html` 中添加新的語言按鈕：

```html
<div class="language-switch">
    <button class="lang-btn" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="zh">繁中</button>
    <button class="lang-btn" data-lang="ja">日本語</button>
</div>
```

### 步驟 3: 測試

打開網站，點擊新的語言按鈕，確保所有內容都正確翻譯。

## 📋 翻譯結構

`i18n.js` 中的翻譯按以下結構組織：

```javascript
{
  nav: {},              // 導航欄
  hero: {},             // 主標題區域
  promotion: {},        // 促銷橫幅
  benefits: {},         // 特色優勢
  whyChoose: {},        // 為什麼選擇我們
  pricing: {},          // 定價方案
  downloadSection: {},  // 下載區域
  faqSection: {},       // 常見問題
  footer: {},           // 頁腳
}
```

## 🎨 最佳實踐

### 1. 保持鍵值一致
確保所有語言都有相同的鍵結構：

```javascript
// ✅ 好的做法
en: { hero: { title: '...', description: '...' } }
zh: { hero: { title: '...', description: '...' } }

// ❌ 壞的做法
en: { hero: { title: '...', description: '...' } }
zh: { hero: { heading: '...', text: '...' } }  // 鍵名不一致
```

### 2. 使用有意義的鍵名
```javascript
// ✅ 好的做法
t('pricing.buyButton')

// ❌ 壞的做法
t('btn1')
```

### 3. 避免硬編碼文本
```javascript
// ✅ 好的做法
element.textContent = t('hero.title');

// ❌ 壞的做法
element.textContent = 'Cursor X';
```

### 4. 保持翻譯同步
添加新功能時，確保同時更新所有語言的翻譯。

## 🔍 翻譯函數 API

### `t(key)`
獲取當前語言的翻譯文本。

```javascript
// 基本使用
t('nav.pricing')  // → 'Pricing' (en) or '價格方案' (zh)

// 嵌套鍵
t('hero.title')

// 數組
t('benefits.list')[0]
```

### `getCurrentLanguage()`
獲取當前語言代碼。

```javascript
const lang = getCurrentLanguage();  // → 'en' or 'zh'
```

### `setCurrentLanguage(lang)`
設置當前語言（並保存到本地存儲）。

```javascript
setCurrentLanguage('zh');  // 切換為中文
```

## 🐛 常見問題

### Q: 切換語言後某些文本沒有改變
A: 檢查該文本是否使用了 `t()` 函數，確保在 `renderPage()` 中更新了該元素。

### Q: 新添加的翻譯沒有顯示
A: 確保在 `i18n.js` 的所有語言版本中都添加了相同的鍵。

### Q: 如何設置默認語言？
A: 修改 `i18n.js` 中的 `getCurrentLanguage()` 函數：

```javascript
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'zh';  // 默認中文
}
```

### Q: 能否根據瀏覽器語言自動選擇？
A: 可以。修改 `i18n.js`：

```javascript
function getCurrentLanguage() {
  if (!localStorage.getItem('language')) {
    // 自動檢測瀏覽器語言
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    return 'en';
  }
  return localStorage.getItem('language');
}
```

## 📞 需要幫助？

如有任何關於多語言的問題，請查看：
- `i18n.js` - 翻譯定義
- `script.js` - 語言切換邏輯
- `index.html` - 語言按鈕配置

---

**提示：** 所有翻譯修改都只需要編輯 `i18n.js` 文件，無需修改其他代碼！

