export const semanticColors = [
    {id: 'primary', tailwind: 'blue', name: '主要', meaning: '品牌、主题、可交互、正常'},
    {id: 'secondary', tailwind: 'sky', name: '次要', meaning: '品牌、主题、次级、常态的'},
    {id: 'success', tailwind: 'green', name: '成功', meaning: '完成、积极'},
    {id: 'warning', tailwind: 'amber', name: '关注', meaning: '提示、重点'},
    {id: 'danger', tailwind: 'red', name: '警告', meaning: '提示、异常、警醒'},
    {id: 'important', tailwind: 'pink', name: '重要', meaning: '优先'},
    {id: 'special', tailwind: 'purple', name: '特殊', meaning: '触动、激情'},
    {id: 'gray', tailwind: 'slate', name: '灰色', meaning: '中立、背景、边界'},
];
export const semanticLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
export const uiColors = [
  {
    code: 'canvas',
    name: '画布颜色',
    meaning:
      '通常用于页面背景、组件背景等，在浅色主题中为白色，在深色主题中为深黑色。',
  },
  {
    code: 'inverse',
    name: '画布反色',
    meaning:
      '通常用于界面突出部分的背景或文字颜色，例如工具提示背景等，在浅色主题中为黑色，在深色主题中为白色。',
  },
  {
    code: 'surface-light',
    name: '轻量的控件背景',
    meaning: '轻量的控件的背景颜色',
  },
  {
    code: 'surface',
    name: '控件背景',
    meaning:
      '用于控件的背景颜色，例如按钮背景、可交互面板背景等，在浅色主题中为浅灰色，在深色主题中为深黑色。',
  },
  {
    code: 'surface-strong',
    name: '加重的控件背景',
    meaning: '加重的控件的背景颜色',
  },
  {
    code: 'fore',
    name: '文本颜色',
    meaning: '默认的文本颜色，在浅色主题中为深黑色，在深色主题中为浅灰色。',
  },
  {
    code: 'focus',
    name: '焦点颜色',
    meaning: '可聚焦控件的焦点状态指示颜色，例如按钮获得焦点的轮廓颜色。',
  },
  {
    code: 'link',
    name: '链接颜色',
    meaning: '链接的颜色，例如超链接、按钮链接等，通常与主题色保持一致。',
  },
  {
    code: 'link-hover',
    name: '链接悬停颜色',
    meaning: '链接的在鼠标悬停状态时的颜色',
  },
  {
    code: 'link-visited',
    name: '链接访问后的颜色',
    meaning: '链接的在点击访问后的颜色',
  },
  {
    code: 'placeholder',
    name: '占位文本颜色',
    meaning: '通常用于输入框的占位文本颜色',
  },
  { code: 'border', name: '边框颜色', meaning: '控件的边框颜色' },
  {
    code: 'border-strong',
    name: '加重的边框颜色',
    meaning: '加重的控件的边框颜色',
  },
  {
    code: 'border-light',
    name: '轻量的边框颜色',
    meaning: '轻量的控件的边框颜色',
  },
]
export const specialColors = [
  {
    code: 'white',
    name: '白色',
    meaning: '永远为纯白色 <code>#FFFFFF</code>，不会受主题影响',
  },
  {
    code: 'black',
    name: '黑色',
    meaning: '永远为纯黑色 <code>#000000</code>，不会受主题影响',
  },
  {
    code: 'transparent',
    name: '透明色',
    meaning: 'Alpha 通道永远为 <code>0</code>，不会受主题影响',
  },
  {
    code: 'inherit',
    name: '继承色',
    meaning:
      '继承父元素同属性的颜色值，由 CSS color 属性值 <code>inherit</code> 提供。',
  },
  {
    code: 'current',
    name: '当前色',
    meaning:
      '继承父元素文本颜色属性的值，由 CSS color 属性值 <code>currentColor</code> 提供。',
  },
]

