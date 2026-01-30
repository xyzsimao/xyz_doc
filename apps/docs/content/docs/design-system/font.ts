export const fontFamilies = [
  {code: 'font-sans', name: '无衬线字体', desc: '默认字体，易于阅读，通常用于正文'},
  {code: 'font-serif', name: '衬线字体', desc: '更美观，通常用于标题或装饰性文本'},
  {code: 'font-mono', name: '等宽字体', desc: '每个字符宽度一致，便于对齐，辨识度高，通常用于代码和编号等'},
];
export const fontSizes = [
  {code: 'text-root', name: '根节点字号', desc: '设置在 <code>&lt;html&gt;</code> 元素上的字号'},
  {code: 'text-sm', name: '小号文本'},
  {code: 'text-base', name: '基准字号文本', desc: '通常与页面默认字号一致'},
  {code: 'text-md', name: '中号文本'},
  {code: 'text-lg', name: '大号文本'},
  {code: 'text-xl', name: '超大号文本'},
  {code: 'text-2xl', name: '2x 超大号文本'},
  {code: 'text-3xl', name: '3x 超大号文本'},
  {code: 'text-4xl', name: '4x 超大号文本'},
];
export const fontWeights = [
  {code: 'font-thin', name: '超细文本'},
  {code: 'font-light', name: '细文本'},
  {code: 'font-normal', name: '正常粗细文本'},
  {code: 'font-medium', name: '中等粗细文本'},
  {code: 'font-bold', name: '加粗文本'},
  {code: 'font-black', name: '超粗文本'},
];
export const leadings = [
  {code: 'leading-tight', name: '紧密'},
  {code: 'leading-snug', name: '紧凑'},
  {code: 'leading-normal', name: '正常'},
  {code: 'leading-relaxed', name: '宽松'},
  {code: 'leading-loose', name: '松散'},
];
export const allLeadings = [
  {code: 'leading-3'},
  {code: 'leading-4'},
  {code: 'leading-5'},
  {code: 'leading-6'},
  {code: 'leading-7'},
  {code: 'leading-8'},
  {code: 'leading-9'},
  {code: 'leading-10'},
  {code: 'leading-none'},
  ...leadings,
];