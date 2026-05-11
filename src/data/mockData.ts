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
  { 
    city: '泉州市', brands: 18500, cases: 1800, yoy: 12.5,
    categories: [
      { name: '鞋服纺织', details: { patent: 120, trademark: 350, copyright: 80 } },
      { name: '厨卫家居', details: { patent: 85, trademark: 150, copyright: 45 } },
      { name: '食品饮料', details: { patent: 20, trademark: 190, copyright: 30 } },
      { name: '电子电器', details: { patent: 40, trademark: 80, copyright: 15 } },
      { name: '信息技术', details: { patent: 10, trademark: 30, copyright: 120 } },
      { name: '医药健康', details: { patent: 15, trademark: 50, copyright: 5 } },
      { name: '其他', details: { patent: 50, trademark: 180, copyright: 165 } }
    ]
  },
  { 
    city: '福州市', brands: 16200, cases: 1650, yoy: 8.2,
    categories: [
      { name: '鞋服纺织', details: { patent: 40, trademark: 160, copyright: 50 } },
      { name: '厨卫家居', details: { patent: 30, trademark: 90, copyright: 25 } },
      { name: '食品饮料', details: { patent: 15, trademark: 210, copyright: 40 } },
      { name: '电子电器', details: { patent: 180, trademark: 120, copyright: 150 } },
      { name: '信息技术', details: { patent: 210, trademark: 90, copyright: 320 } },
      { name: '医药健康', details: { patent: 60, trademark: 110, copyright: 20 } },
      { name: '其他', details: { patent: 70, trademark: 110, copyright: 150 } }
    ]
  },
  { 
    city: '厦门市', brands: 15800, cases: 1520, yoy: -3.4,
    categories: [
      { name: '鞋服纺织', details: { patent: 25, trademark: 80, copyright: 40 } },
      { name: '厨卫家居', details: { patent: 45, trademark: 70, copyright: 30 } },
      { name: '食品饮料', details: { patent: 10, trademark: 140, copyright: 50 } },
      { name: '电子电器', details: { patent: 220, trademark: 150, copyright: 180 } },
      { name: '信息技术', details: { patent: 190, trademark: 80, copyright: 250 } },
      { name: '医药健康', details: { patent: 100, trademark: 60, copyright: 30 } },
      { name: '其他', details: { patent: 50, trademark: 130, copyright: 80 } }
    ]
  },
  { 
    city: '漳州市', brands: 14100, cases: 1380, yoy: 5.1,
    categories: [
      { name: '鞋服纺织', details: { patent: 15, trademark: 110, copyright: 20 } },
      { name: '厨卫家居', details: { patent: 60, trademark: 180, copyright: 60 } },
      { name: '食品饮料', details: { patent: 40, trademark: 310, copyright: 90 } },
      { name: '电子电器', details: { patent: 80, trademark: 60, copyright: 40 } },
      { name: '信息技术', details: { patent: 20, trademark: 30, copyright: 70 } },
      { name: '医药健康', details: { patent: 35, trademark: 90, copyright: 15 } },
      { name: '其他', details: { patent: 120, trademark: 280, copyright: 240 } }
    ]
  },
  { 
    city: '莆田市', brands: 12800, cases: 1250, yoy: 15.6,
    categories: [
      { name: '鞋服纺织', details: { patent: 30, trademark: 420, copyright: 80 } },
      { name: '厨卫家居', details: { patent: 20, trademark: 70, copyright: 15 } },
      { name: '食品饮料', details: { patent: 10, trademark: 80, copyright: 20 } },
      { name: '电子电器', details: { patent: 40, trademark: 50, copyright: 30 } },
      { name: '信息技术', details: { patent: 15, trademark: 20, copyright: 60 } },
      { name: '医药健康', details: { patent: 110, trademark: 140, copyright: 50 } },
      { name: '其他', details: { patent: 80, trademark: 230, copyright: 110 } }
    ]
  },
  { 
    city: '宁德市', brands: 11500, cases: 1100, yoy: 2.3,
    categories: [
      { name: '鞋服纺织', details: { patent: 10, trademark: 60, copyright: 15 } },
      { name: '厨卫家居', details: { patent: 25, trademark: 80, copyright: 20 } },
      { name: '食品饮料', details: { patent: 10, trademark: 150, copyright: 30 } },
      { name: '电子电器', details: { patent: 280, trademark: 90, copyright: 60 } },
      { name: '信息技术', details: { patent: 30, trademark: 40, copyright: 80 } },
      { name: '医药健康', details: { patent: 15, trademark: 50, copyright: 10 } },
      { name: '其他', details: { patent: 120, trademark: 210, copyright: 150 } }
    ]
  },
  { 
    city: '南平市', brands: 9800, cases: 950, yoy: -1.2,
    categories: [
      { name: '鞋服纺织', details: { patent: 15, trademark: 80, copyright: 20 } },
      { name: '厨卫家居', details: { patent: 40, trademark: 160, copyright: 90 } },
      { name: '食品饮料', details: { patent: 20, trademark: 210, copyright: 50 } },
      { name: '电子电器', details: { patent: 35, trademark: 60, copyright: 25 } },
      { name: '信息技术', details: { patent: 10, trademark: 20, copyright: 45 } },
      { name: '医药健康', details: { patent: 25, trademark: 70, copyright: 15 } },
      { name: '其他', details: { patent: 60, trademark: 180, copyright: 140 } }
    ]
  },
  { 
    city: '三明市', brands: 8500, cases: 820, yoy: 0.5,
    categories: [
      { name: '鞋服纺织', details: { patent: 10, trademark: 50, copyright: 25 } },
      { name: '厨卫家居', details: { patent: 30, trademark: 90, copyright: 40 } },
      { name: '食品饮料', details: { patent: 15, trademark: 180, copyright: 50 } },
      { name: '电子电器', details: { patent: 45, trademark: 70, copyright: 30 } },
      { name: '信息技术', details: { patent: 15, trademark: 25, copyright: 50 } },
      { name: '医药健康', details: { patent: 70, trademark: 120, copyright: 40 } },
      { name: '其他', details: { patent: 55, trademark: 160, copyright: 130 } }
    ]
  },
  { 
    city: '龙岩市', brands: 7200, cases: 700, yoy: -0.8,
    categories: [
      { name: '鞋服纺织', details: { patent: 15, trademark: 60, copyright: 20 } },
      { name: '厨卫家居', details: { patent: 25, trademark: 80, copyright: 35 } },
      { name: '食品饮料', details: { patent: 20, trademark: 140, copyright: 40 } },
      { name: '电子电器', details: { patent: 110, trademark: 90, copyright: 50 } },
      { name: '信息技术', details: { patent: 20, trademark: 30, copyright: 60 } },
      { name: '医药健康', details: { patent: 30, trademark: 50, copyright: 15 } },
      { name: '其他', details: { patent: 40, trademark: 130, copyright: 80 } }
    ]
  }
];

export const trendData = {
  year: {
    labels: ['2022', '2023', '2024', '2025', '2026'],
    values: [2850, 3120, 3980, 5100, 5800],
    yoy: [14.2, 9.5, 27.5, 28.1, 13.7]
  },
  month: {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    values: [420, 380, 450, 510, 490, 550, 600, 580, 620, 650, 680, 720],
    yoy: [8.5, 7.2, 12.1, 15.4, 11.2, 18.5, 20.1, 16.8, 19.4, 22.1, 23.5, 25.0]
  },
  week: {
    labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    values: [85, 92, 78, 105, 98, 45, 38],
    yoy: [5.2, 6.8, 3.1, 10.4, 8.2, -2.1, -4.5]
  }
};

export const brandDetails = [
  { id: 1, city: '泉州市', district: '晋江市', brand: '安踏(主品牌)', parentGroup: '安踏集团', company: '安踏体育用品集团', caseCount: 45, breakdown: { patent: 5, trademark: 35, copyright: 5 }, status: '立案调查', type: '鞋服纺织', cases: [
    { id: 'C001', name: '假冒「安踏」商标运动鞋生产销售案', field: '商标侵权', address: '福建省泉州市晋江市陈埭镇', date: '2026-04-15' },
    { id: 'C002', name: '某网店非法使用「安踏」品牌宣传图纠纷', field: '著作权纠纷', address: '福建省厦门市思明区软件园', date: '2026-03-20' },
    { id: 'C003', name: '运动鞋减震结构专利侵权纠纷', field: '专利纠纷', address: '江苏省苏州市工业园区', date: '2025-12-10' },
    { id: 'C014', name: '安踏奥运系列非法盗图侵权案', field: '著作权纠纷', address: '福建省福州市马尾区', date: '2026-04-30' },
    { id: 'C015', name: '陈某私自生产安踏Logo标识底版案', field: '商标侵权', address: '福建省泉州市丰泽区', date: '2026-05-02' },
    { id: 'C016', name: '某电商平台百家店群侵及安踏商标权案', field: '商标侵权', address: '浙江省杭州市余杭区', date: '2026-01-12' },
    { id: 'C017', name: '安踏「氢科技」鞋底技术专利维权案', field: '专利纠纷', address: '广东省东莞市厚街镇', date: '2025-09-22' },
    { id: 'C018', name: '安踏体育联名款限量球鞋被恶意抢注商标案', field: '商标侵权', address: '北京市朝阳区', date: '2026-02-28' },
    { id: 'C019', name: '假冒安踏轻便跑鞋地下仓库查封案', field: '商标侵权', address: '福建省莆田市涵江区', date: '2026-05-05' },
    { id: 'C020', name: '安踏品牌形象宣传片非法剪辑传播纠纷', field: '著作权纠纷', address: '上海市静安区', date: '2025-11-18' },
    { id: 'C021', name: '安踏C202系列专业竞速鞋外观侵权公示', field: '专利纠纷', address: '福建省厦门市湖里区', date: '2026-03-10' },
    { id: 'C022', name: '安踏「霸道」系列商标被近似模仿案', field: '商标侵权', address: '山东省青岛市即墨区', date: '2026-04-01' },
    { id: 'C023', name: '安踏KT系列篮球鞋签名权属争议', field: '著作权纠纷', address: '海外维权/美国加州', date: '2025-07-15' },
    { id: 'C024', name: '安踏儿童（Anta Kids）品牌图形侵权案', field: '商标侵权', address: '福建省福州市鼓楼区', date: '2026-02-20' },
    { id: 'C025', name: '安踏氮科技中底工艺专利分许可争议', field: '专利纠纷', address: '江苏省南京市江宁区', date: '2025-08-05' },
    { id: 'C026', name: '某制鞋厂非法贴牌安踏Logo出口案', field: '商标侵权', address: '广东省深圳市盐田港', date: '2026-05-07' },
    { id: 'C027', name: '安踏「灵龙」系列新春限定包装设计纠纷', field: '著作权纠纷', address: '福建省泉州市石狮市', date: '2026-01-25' },
    { id: 'C028', name: '安踏运动科学实验室数据泄露专利权属案', field: '专利纠纷', address: '福建省泉州市晋江市', date: '2025-12-30' },
    { id: 'C029', name: '线上直播间销售高仿安踏运动服装案', field: '商标侵权', address: '直播电商基地/杭州', date: '2026-04-18' },
    { id: 'C030', name: '安踏品牌口号「Keep Moving」被恶意篡改案', field: '商标侵权', address: '天津市武清区', date: '2025-10-12' },
  ] },
  { id: 11, city: '泉州市', district: '晋江市', brand: 'Fila (斐乐)', parentGroup: '安踏集团', company: '安踏体育用品集团', caseCount: 12, breakdown: { patent: 1, trademark: 8, copyright: 3 }, status: '调解中', type: '鞋服纺织', cases: [
    { id: 'C011', name: '线上商城销售假冒斐乐运动衫案', field: '商标侵权', address: '广东省广州市白云区', date: '2026-02-18' }
  ] },
  { id: 12, city: '厦门市', district: '思明区', brand: 'Descente (迪桑特)', parentGroup: '安踏集团', company: '安踏体育用品集团', caseCount: 8, breakdown: { patent: 2, trademark: 5, copyright: 1 }, status: '已宣判', type: '鞋服纺织', cases: [
    { id: 'C021', name: '迪桑特户外服标牌伪造案', field: '商标侵权', address: '浙江省温州市鹿城区', date: '2025-11-05' }
  ] },
  
  { id: 2, city: '泉州市', district: '南安市', brand: '九牧核心系列', parentGroup: '九牧集团', company: '九牧厨卫股份有限公司', caseCount: 32, breakdown: { patent: 25, trademark: 5, copyright: 2 }, status: '调解中', type: '厨卫家居', cases: [
    { id: 'C031', name: '智能马桶冲水系统专利侵权案', field: '专利纠纷', address: '福建省泉州市南安市仑苍镇', date: '2026-04-20' },
    { id: 'C032', name: '假冒「九牧」品牌卫浴五金入场查扣案', field: '商标侵权', address: '四川省成都市金牛区', date: '2026-01-15' },
    { id: 'C033', name: '九牧五金花洒外观专利行政投诉案', field: '专利纠纷', address: '浙江省台州市玉环市', date: '2026-03-12' },
    { id: 'C034', name: 'JOMOO商标被拼写变体模仿侵权案', field: '商标侵权', address: '广东省中山市古镇', date: '2026-02-05' },
    { id: 'C035', name: '九牧感应水龙头核心算法专利维权', field: '专利纠纷', address: '福建省福州市马尾科技园', date: '2025-11-28' },
    { id: 'C036', name: '某酒店工程使用假冒九牧角阀案', field: '商标侵权', address: '陕西省西安市雁塔区', date: '2026-04-30' },
    { id: 'C037', name: '九牧「黑金系列」宣传海报著作权侵权案', field: '著作权纠纷', address: '湖南省长沙市天心区', date: '2026-03-18' },
    { id: 'C038', name: '九牧防电墙技术实用新型专利无效审查', field: '专利纠纷', address: '国家知识产权局复审委', date: '2025-09-10' },
    { id: 'C039', name: '电商平台搜索关键词违法关联九牧案', field: '商标侵权', address: '北京市大兴区', date: '2026-01-22' },
    { id: 'C040', name: '九牧云控制系统软件代码复制证据保全案', field: '著作权纠纷', address: '福建省厦门市湖里区', date: '2025-10-05' },
  ] },
  { id: 13, city: '泉州市', district: '南安市', brand: '小牧优选', parentGroup: '九牧集团', company: '九牧厨卫股份有限公司', caseCount: 7, breakdown: { patent: 3, trademark: 3, copyright: 1 }, status: '立案调查', type: '厨卫家居', cases: [
    { id: 'C041', name: '洗手盆外观设计侵权投诉', field: '专利纠纷', address: '广东省佛山市顺德区', date: '2026-03-25' }
  ] },
  
  { id: 3, city: '厦门市', district: '思明区', brand: '瑞幸标准店', parentGroup: '瑞幸咖啡', company: '瑞幸咖啡(中国)有限公司', caseCount: 28, breakdown: { patent: 0, trademark: 25, copyright: 3 }, status: '已宣判', type: '食品饮料', cases: [
    { id: 'C051', name: '某奶茶店冒用「瑞幸咖啡」店面装潢纠纷', field: '商标侵权', address: '福建省福州市鼓楼区', date: '2026-04-05' },
    { id: 'C052', name: 'Luckin Coffee 注册商标异议案', field: '商标侵权', address: '北京市海淀区知识产权局', date: '2025-08-12' }
  ] },
  { id: 14, city: '厦门市', district: '湖里区', brand: '瑞幸精选(Luckin Selected)', parentGroup: '瑞幸咖啡', company: '瑞幸咖啡(中国)有限公司', caseCount: 5, breakdown: { patent: 0, trademark: 4, copyright: 1 }, status: '立案调查', type: '食品饮料', cases: [
    { id: 'C061', name: '瑞幸精选品牌Logo被抢注维权案', field: '商标侵权', address: '上海市浦东新区', date: '2026-02-10' }
  ] },
  
  { id: 4, city: '福州市', district: '仓山区', brand: '植护纸巾', parentGroup: '植护', company: '福建植护网络科技有限公司', caseCount: 22, breakdown: { patent: 2, trademark: 8, copyright: 12 }, status: '立案调查', type: '其他', cases: [
    { id: 'C071', name: '植护抽纸包装袋著作权纠纷案', field: '著作权纠纷', address: '福建省福州市仓山区', date: '2026-04-12' }
  ] },
  { id: 5, city: '泉州市', district: '晋江市', brand: '361°经典款', parentGroup: '361度', company: '三六一度(中国)有限公司', caseCount: 19, breakdown: { patent: 4, trademark: 12, copyright: 3 }, status: '调解中', type: '鞋服纺织', cases: [
    { id: 'C081', name: '涉嫌侵犯361度知名商品特有包装案', field: '专利纠纷', address: '辽宁省沈阳市和平区', date: '2026-05-01' }
  ] },
  { id: 6, city: '福州市', district: '马尾区', brand: 'AOC 显示器', parentGroup: '冠捷科技', company: '冠捷电子(福建)有限公司', caseCount: 15, breakdown: { patent: 12, trademark: 2, copyright: 1 }, status: '已宣判', type: '电子电器', cases: [
    { id: 'C091', name: '多功能护眼显示模组实用新型专利侵权纠纷', field: '专利纠纷', address: '福建省福州市马尾区', date: '2026-01-20' }
  ] },
  { id: 7, city: '泉州市', district: '晋江市', brand: '特步系列', parentGroup: '特步集团', company: '特步(中国)有限公司', caseCount: 14, breakdown: { patent: 2, trademark: 10, copyright: 2 }, status: '立案调查', type: '鞋服纺织', cases: [
    { id: 'C101', name: '假冒「特步」注册商标及非法制造商标标识案', field: '商标侵权', address: '江西省上饶市广信区', date: '2026-03-30' }
  ] },
  { id: 8, city: '泉州市', district: '丰泽区', brand: '匹克篮球', parentGroup: '匹克集团', company: '匹克体育用品有限公司', caseCount: 11, breakdown: { patent: 6, trademark: 4, copyright: 1 }, status: '调解中', type: '鞋服纺织', cases: [
    { id: 'C111', name: '匹克态极缓震技术专利权属纠纷', field: '专利纠纷', address: '地方法院民事庭', date: '2025-10-15' }
  ] },
  { id: 9, city: '厦门市', district: '湖里区', brand: '银鹭八宝粥', parentGroup: '银鹭食品', company: '厦门银鹭食品集团', caseCount: 8, breakdown: { patent: 0, trademark: 7, copyright: 1 }, status: '已宣判', type: '食品饮料', cases: [
    { id: 'C121', name: '银鹭品牌罐装视觉包装著作权案', field: '著作权纠纷', address: '湖北省武汉市江汉区', date: '2026-02-05' }
  ] },
  { id: 10, city: '莆田市', district: '城厢区', brand: '三棵树涂料', parentGroup: '三棵树', company: '三棵树涂料股份有限公司', caseCount: 6, breakdown: { patent: 4, trademark: 1, copyright: 1 }, status: '立案调查', type: '医药健康', cases: [
    { id: 'C131', name: '净味漆生产工艺专利维权案', field: '专利纠纷', address: '福建省莆田市城厢区', date: '2026-04-28' }
  ] },
];

export const aiAnalysis = "基于全省知识产权大数据研判：当前【泉州市】为案件高发核心区，特别是晋江市鞋服产业带的【商标侵权】案件频发，占比达全省35%。【福州市】与【厦门市】在电子科技领域的【专利纠纷】呈现上升趋势（同比+15%）。预警提示：近期跨区域电商平台的商标侵权行为激增，建议加强线上线下的联合执法与品牌保护宣导。";

export const latestDynamics = [
  { id: 1, time: '10:23', content: '泉州晋江市新立案一起涉嫌伪造「安踏」商标案', level: 'danger' },
  { id: 2, time: '09:45', content: '福州仓山区「植护」包装外观著作权纠纷达成调解', level: 'success' },
  { id: 3, time: '08:30', content: '厦门思明区法院对某咖啡品牌商标侵权案进行宣判', level: 'normal' },
  { id: 4, time: '昨日', content: '漳州龙海区查处一批假冒地理标志农产品', level: 'warning' },
  { id: 5, time: '昨日', content: '宁德蕉城区新能源电池专利侵权案进入取证阶段', level: 'warning' },
  { id: 6, time: '前日', content: '莆田城厢区破获跨省制售假冒运动鞋服大案', level: 'danger' },
  { id: 7, time: '前日', content: '南平建阳区查获一批侵权建盏，涉案金额超百万', level: 'danger' },
  { id: 8, time: '04-12', content: '龙岩新罗区查处一起假冒知名机械品牌配件案', level: 'warning' },
  { id: 9, time: '04-11', content: '三明沙县区小吃同业公会发起商标维权专项行动', level: 'normal' },
  { id: 10, time: '04-10', content: '厦门湖里区「银鹭」商标侵权案二审维持原判', level: 'success' },
  { id: 11, time: '04-09', content: '福州马尾区某电子企业专利无效宣告请求被驳回', level: 'success' },
  { id: 12, time: '04-08', content: '泉州南安市「九牧」卫浴外观设计侵权案开庭审理', level: 'warning' },
];
