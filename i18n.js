// 多语言翻译配置
const TRANSLATIONS = {
  en: {
    // 导航栏
    nav: {
      pricing: 'Pricing',
      features: 'Features',
      models: 'Models',
      faq: 'FAQ',
    },
    
    // Hero 区域
    hero: {
      title: 'Unlimited Claude & GPT in Cursor. Tiny price, huge power.',
      description: 'Compared with Cursor Pro, our Cursor X provides unlimited Claude-4.5-thinking/Claude-4.5/GPT-5 series/Gemini-2.5 series models without rate limits or degraded quality.',
      viewPricing: 'View Pricing',
      download: 'Download',
    },
    
    // 促销横幅
    promotion: {
      text: '🎉 Limited-time Friends Together promotion! Purchase 2x 30-Day plans together and use code FRIENDS20 for 20% off.',
    },
    
    // 特色优势
    benefits: {
      title: 'Featured Benefits',
      list: [
        'Supports Claude-4.5 and GPT-5 series models, see details at Models page',
        'No rate limits, no model downgrades',
        'Get multiple or even hundred times Pro quota',
        'All plans support MAX models',
      ],
    },
    
    // Why choose us
    whyChoose: {
      title: 'Why choose us?',
      features: [
        {
          title: 'Support most Cursor models',
          description: 'Including Claude Sonnet 4.5, GPT-5 Series, and more advanced models.',
        },
        {
          title: 'Multiple times Pro quota',
          description: 'Get multiple or even hundred times Pro quota for far more capability.',
        },
        {
          title: 'MAX ready',
          description: 'Monthly and quarterly plans include MAX model support.',
        },
      ],
    },
    
    // 定价
    pricing: {
      title: 'Choose your plan',
      recommended: 'Recommended',
      buyButton: 'Buy',
      plans: [
        {
          name: '1-Day',
          quota: '5x Pro account quota',
          price: '$2',
          features: [
            'Get 5x Pro account quota',
            'Plugin integrated in Cursor',
            'Support seamless quota reset',
            'Single device',
          ],
        },
        {
          name: '7-Day',
          quota: '35x Pro account quota',
          price: '$7',
          features: [
            'Get 35x Pro account quota',
            'Plugin integrated in Cursor',
            'Support seamless quota reset',
            'Single device',
          ],
        },
        {
          name: '30-Day',
          quota: '150x Pro account quota',
          price: '$20',
          features: [
            'Get 150x Pro account quota',
            'Plugin integrated in Cursor',
            'Support seamless quota reset',
            'Single device',
          ],
        },
      ],
    },
    
    // 下载区域
    downloadSection: {
      title: 'Get Started',
      subtitle: 'Download and install the plugin to start using unlimited Claude & GPT models in Cursor.',
      windows: 'Windows',
      macos: 'macOS',
      info: 'Compatible with Windows 10+ and macOS 11.0+ • Universal installer',
      button: 'Download Plugin',
      buttonFor: 'Download for',
    },
    
    // FAQ
    faqSection: {
      title: 'Frequently Asked Questions',
      questions: [
        {
          question: 'Is this a replacement for Cursor Pro?',
          answer: 'It offers unlimited Claude-4.5-thinking/Claude-4.5/GPT-5 series/Gemini-2.5 series models at a lower price, with optional MAX support on monthly/quarterly plans.',
        },
        {
          question: 'How many devices can I use?',
          answer: 'All plans support single device usage.',
        },
        {
          question: 'How does the credit system work?',
          answer: "To prevent quota abuse and malicious usage, we use a credit system where each refresh deducts credits. However, we've calculated that if you're not using it maliciously, your credits won't be exhausted before your subscription expires.",
        },
        {
          question: 'Which models are supported?',
          answer: 'We support 60+ AI models including Claude Sonnet 4.5, GPT-5 series, Gemini 2.5 series, Grok series, and many more. For the complete and up-to-date list of all supported and unsupported models, please visit our Models page.',
        },
      ],
    },
    
    // 页脚
    footer: {
      copyright: 'All rights reserved.',
      termsOfService: 'Terms of Service',
    },
  },
  
  zh: {
    // 导航栏
    nav: {
      pricing: '價格方案',
      features: '功能特色',
      models: '模型支援',
      faq: '常見問題',
    },
    
    // Hero 区域
    hero: {
      title: '在 Cursor 中無限使用 Claude & GPT。超低價格，強大功能。',
      description: '相比 Cursor Pro，我們的 Cursor X 提供無限制的 Claude-4.5-thinking/Claude-4.5/GPT-5 系列/Gemini-2.5 系列模型，無速率限制，無降級。',
      viewPricing: '查看價格',
      download: '立即下載',
    },
    
    // 促销横幅
    promotion: {
      text: '🎉 限時好友同行優惠！同時購買 2 個 30 天方案，使用代碼 FRIENDS20 即享 8 折優惠。',
    },
    
    // 特色优势
    benefits: {
      title: '特色優勢',
      list: [
        '支援 Claude-4.5 和 GPT-5 系列模型，詳見模型頁面',
        '無速率限制，無模型降級',
        '獲得數倍甚至數百倍的 Pro 配額',
        '所有方案均支援 MAX 模型',
      ],
    },
    
    // Why choose us
    whyChoose: {
      title: '為什麼選擇我們？',
      features: [
        {
          title: '支援多數 Cursor 模型',
          description: '包括 Claude Sonnet 4.5、GPT-5 系列等更多先進模型。',
        },
        {
          title: '數倍 Pro 配額',
          description: '獲得數倍甚至數百倍的 Pro 帳戶配額，擁有更強大的能力。',
        },
        {
          title: 'MAX 模型就緒',
          description: '月度和季度方案包含 MAX 模型支援。',
        },
      ],
    },
    
    // 定价
    pricing: {
      title: '選擇您的方案',
      recommended: '推薦',
      buyButton: '立即購買',
      plans: [
        {
          name: '1 天方案',
          quota: '5 倍 Pro 帳戶配額',
          price: '$2',
          features: [
            '獲得 5 倍 Pro 帳戶配額',
            '整合在 Cursor 中的插件',
            '支援無縫配額重置',
            '單一裝置',
          ],
        },
        {
          name: '7 天方案',
          quota: '35 倍 Pro 帳戶配額',
          price: '$7',
          features: [
            '獲得 35 倍 Pro 帳戶配額',
            '整合在 Cursor 中的插件',
            '支援無縫配額重置',
            '單一裝置',
          ],
        },
        {
          name: '30 天方案',
          quota: '150 倍 Pro 帳戶配額',
          price: '$20',
          features: [
            '獲得 150 倍 Pro 帳戶配額',
            '整合在 Cursor 中的插件',
            '支援無縫配額重置',
            '單一裝置',
          ],
        },
      ],
    },
    
    // 下载区域
    downloadSection: {
      title: '立即開始',
      subtitle: '下載並安裝插件，開始在 Cursor 中使用無限制的 Claude & GPT 模型。',
      windows: 'Windows',
      macos: 'macOS',
      info: '相容於 Windows 10+ 和 macOS 11.0+ • 通用安裝程式',
      button: '下載插件',
      buttonFor: '下載適用於',
    },
    
    // FAQ
    faqSection: {
      title: '常見問題',
      questions: [
        {
          question: '這是 Cursor Pro 的替代品嗎？',
          answer: '我們以更低的價格提供無限制的 Claude-4.5-thinking/Claude-4.5/GPT-5 系列/Gemini-2.5 系列模型，月度/季度方案可選 MAX 支援。',
        },
        {
          question: '可以在多少裝置上使用？',
          answer: '所有方案均支援單一裝置使用。',
        },
        {
          question: '積分系統如何運作？',
          answer: '為了防止配額濫用和惡意使用，我們使用積分系統，每次刷新都會扣除積分。不過我們已經計算過，如果您不是惡意使用，您的積分在訂閱到期前不會耗盡。',
        },
        {
          question: '支援哪些模型？',
          answer: '我們支援 60 多種 AI 模型，包括 Claude Sonnet 4.5、GPT-5 系列、Gemini 2.5 系列、Grok 系列等。如需完整和最新的支援和不支援模型列表，請訪問我們的模型頁面。',
        },
      ],
    },
    
    // 页脚
    footer: {
      copyright: '版權所有。',
      termsOfService: '服務條款',
    },
  },
};

// 获取当前语言
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'en';
}

// 设置当前语言
function setCurrentLanguage(lang) {
  localStorage.setItem('language', lang);
}

// 获取翻译文本
function t(key) {
  const lang = getCurrentLanguage();
  const keys = key.split('.');
  let value = TRANSLATIONS[lang];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key; // 如果找不到翻译，返回 key
    }
  }
  
  return value;
}

