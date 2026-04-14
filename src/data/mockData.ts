export const coreMetrics = {
  totalBrands: 50234,
  involvedBrands: 4256,
  totalCompanies: 38102,
  topCity: '泉州市',
  cases: {
    trademark: 1489,
    copyright: 1064,
    patent: 851,
  }
};

export const caseTypeDistribution = [
  { value: 1489, name: '商标侵权' },
  { value: 1064, name: '著作权纠纷' },
  { value: 851, name: '专利纠纷' },
  { value: 425, name: '地理标志' },
  { value: 427, name: '其他' }
];

export const cityData = [
  { city: '泉州市', brands: 18500, cases: 1800, yoy: 12.5 },
  { city: '福州市', brands: 16200, cases: 1650, yoy: 8.2 },
  { city: '厦门市', brands: 15800, cases: 1520, yoy: -3.4 },
  { city: '漳州市', brands: 14100, cases: 1380, yoy: 5.1 },
  { city: '莆田市', brands: 12800, cases: 1250, yoy: 15.6 },
  { city: '宁德市', brands: 11500, cases: 1100, yoy: 2.3 },
  { city: '南平市', brands: 9800, cases: 950, yoy: -1.2 },
  { city: '三明市', brands: 8500, cases: 820, yoy: 0.5 },
  { city: '龙岩市', brands: 7200, cases: 700, yoy: -0.8 }
];

export const trendData = {
  years: ['2022', '2023', '2024', '2025', '2026'],
  values: [2850, 3120, 3980, 5100, 5800],
  yoy: [14.2, 9.5, 27.5, 28.1, 13.7]
};

export const brandDetails = [
  { id: 1, city: '泉州市', district: '晋江市', brand: '安踏(ANTA)', company: '安踏体育用品集团', type: '商标侵权', status: '立案调查' },
  { id: 2, city: '泉州市', district: '南安市', brand: '九牧(JOMOO)', company: '九牧厨卫股份有限公司', type: '专利纠纷', status: '调解中' },
  { id: 3, city: '厦门市', district: '思明区', brand: '瑞幸咖啡', company: '瑞幸咖啡(中国)有限公司', type: '商标侵权', status: '已宣判' },
  { id: 4, city: '福州市', district: '仓山区', brand: '植护', company: '福建植护网络科技有限公司', type: '著作权纠纷', status: '立案调查' },
  { id: 5, city: '泉州市', district: '晋江市', brand: '361°', company: '三六一度(中国)有限公司', type: '商标侵权', status: '调解中' },
  { id: 6, city: '福州市', district: '马尾区', brand: 'AOC', company: '冠捷电子(福建)有限公司', type: '专利纠纷', status: '已宣判' },
  { id: 7, city: '泉州市', district: '晋江市', brand: '特步(XTEP)', company: '特步(中国)有限公司', type: '商标侵权', status: '立案调查' },
  { id: 8, city: '泉州市', district: '丰泽区', brand: '匹克(Peak)', company: '匹克体育用品有限公司', type: '专利纠纷', status: '调解中' },
  { id: 9, city: '厦门市', district: '湖里区', brand: '银鹭', company: '厦门银鹭食品集团', type: '商标侵权', status: '已宣判' },
  { id: 10, city: '莆田市', district: '城厢区', brand: '三棵树', company: '三棵树涂料股份有限公司', type: '专利纠纷', status: '立案调查' },
];

export const aiAnalysis = "基于全省知识产权大数据研判：当前【泉州市】为案件高发核心区，特别是晋江市鞋服产业带的【商标侵权】案件频发，占比达全省35%。【福州市】与【厦门市】在电子科技领域的【专利纠纷】呈现上升趋势（同比+15%）。预警提示：近期跨区域电商平台的商标侵权行为激增，建议加强线上线下的联合执法与品牌保护宣导。";

export const latestDynamics = [
  { id: 1, time: '10:23', content: '泉州晋江市新立案一起涉嫌伪造「安踏」商标案', level: 'danger' },
  { id: 2, time: '09:45', content: '福州仓山区「植护」包装外观著作权纠纷达成调解', level: 'success' },
  { id: 3, time: '08:30', content: '厦门思明区法院对某咖啡品牌商标侵权案进行宣判', level: 'normal' },
  { id: 4, time: '昨日', content: '漳州龙海区查处一批假冒地理标志农产品', level: 'warning' },
  { id: 5, time: '昨日', content: '宁德蕉城区新能源电池专利侵权案进入取证阶段', level: 'warning' },
  { id: 6, time: '前日', content: '莆田城厢区破获跨省制售假冒运动鞋服大案', level: 'danger' },
];
