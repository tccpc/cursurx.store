// 网站配置文件 - 可自定义所有关键参数
const CONFIG = {
  // 品牌信息
  brand: {
    name: 'Cursor X',
    slogan: 'Unlimited Claude & GPT in Cursor. Tiny price, huge power.',
    description: 'Compared with Cursor Pro, our Cursor X provides unlimited Claude-4.5-thinking/Claude-4.5/GPT-5 series/Gemini-2.5 series models without rate limits or degraded quality.',
  },

  // 下载链接
  download: {
    windowsUrl: 'https://your-download-server.com/cursor-x-windows.exe',
    macosUrl: 'https://your-download-server.com/cursor-x-macos.dmg',
  },

  // 支付链接
  payment: {
    plan1Day: 'https://your-payment-gateway.com/buy/1day',
    plan7Day: 'https://your-payment-gateway.com/buy/7day',
    plan30Day: 'https://your-payment-gateway.com/buy/30day',
  },

  // 外部链接
  links: {
    models: '/models.html',
    terms: '/terms.html',
    privacy: '/privacy.html',
  },

  // 促销信息
  promotion: {
    enabled: true,
    text: '🎉 Limited-time Friends Together promotion! Purchase 2x 30-Day plans together and use code FRIENDS20 for 20% off.',
  },

  // 定价方案
  plans: [
    {
      id: '1day',
      name: '1-Day',
      quota: '5x Pro account quota',
      price: '$2',
      features: [
        'Get 5x Pro account quota',
        'Plugin integrated in Cursor',
        'Support seamless quota reset',
        'Single device'
      ],
      recommended: false,
    },
    {
      id: '7day',
      name: '7-Day',
      quota: '35x Pro account quota',
      price: '$7',
      features: [
        'Get 35x Pro account quota',
        'Plugin integrated in Cursor',
        'Support seamless quota reset',
        'Single device'
      ],
      recommended: false,
    },
    {
      id: '30day',
      name: '30-Day',
      quota: '150x Pro account quota',
      price: '$20',
      features: [
        'Get 150x Pro account quota',
        'Plugin integrated in Cursor',
        'Support seamless quota reset',
        'Single device'
      ],
      recommended: true,
    },
  ],

  // 特色功能
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

  // 优势说明
  benefits: [
    'Supports Claude-4.5 and GPT-5 series models, see details at Models page',
    'No rate limits, no model downgrades',
    'Get multiple or even hundred times Pro quota',
    'All plans support MAX models',
  ],

  // FAQ
  faq: [
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
};

