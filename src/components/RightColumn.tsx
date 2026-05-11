import React, { useState } from 'react';
import { Panel } from './Panel';
import { brandDetails, latestDynamics } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertCircle, CheckCircle, Info, FileStack, X, Copyright, Hexagon, ChevronDown, ChevronRight, MapPin, Building2, Calendar, Filter, Clock, Hash, ShieldCheck, Globe } from 'lucide-react';
import { cn } from '../utils/cn';

interface RightColumnProps {
  activeCity: string | null;
  activeFilter: string;
}

export const RightColumn: React.FC<RightColumnProps> = ({ activeCity, activeFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<(typeof brandDetails)[0] | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  
  // Modal Filters
  const [modalTimeFilter, setModalTimeFilter] = useState('all');
  const [modalRegionFilter, setModalRegionFilter] = useState('all');

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => 
      prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
    );
  };

  const filteredBrands = brandDetails.filter(b => {
    const matchSearch = b.brand.includes(searchTerm) || b.company.includes(searchTerm) || b.parentGroup.includes(searchTerm);
    const matchType = activeFilter === '全部' || b.type === activeFilter || ['商标侵权', '著作权纠纷', '专利纠纷'].includes(activeFilter) === false;
    const matchCity = !activeCity || b.city === activeCity;
    return matchSearch && matchCity;
  }).sort((a,b) => b.caseCount - a.caseCount);

  // Grouping for tree: Parent Group -> Brands
  const groupedData = filteredBrands.reduce((acc, curr) => {
    if (!acc[curr.parentGroup]) acc[curr.parentGroup] = [];
    acc[curr.parentGroup].push(curr);
    return acc;
  }, {} as Record<string, typeof brandDetails>);

  const totalFilteredCount = filteredBrands.length;

  const getStatusIcon = (level: string) => {
    if (level === 'danger') return <AlertCircle size={14} className="text-[#e2c285] drop-shadow-[0_0_5px_#e2c285]" />;
    if (level === 'warning') return <Info size={14} className="text-[#e9c46a] drop-shadow-[0_0_5px_#e9c46a]" />;
    if (level === 'success') return <CheckCircle size={14} className="text-[#2ecc71] drop-shadow-[0_0_5px_#2ecc71]" />;
    return <Info size={14} className="text-[#48cae4] drop-shadow-[0_0_5px_#48cae4]" />;
  };

  // Filtered cases for modal
  const filteredCases = selectedBrand?.cases?.filter(c => {
    const matchTime = modalTimeFilter === 'all' || c.date.startsWith(modalTimeFilter);
    const matchRegion = modalRegionFilter === 'all' || c.address.includes(modalRegionFilter);
    return matchTime && matchRegion;
  }) || [];

  return (
    <div className="w-[28%] flex flex-col gap-4 h-full relative">
      <AnimatePresence>
        {selectedBrand && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/60"
            onClick={() => setSelectedBrand(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#020c1b] border border-[#48cae4]/40 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_20px_rgba(72,202,228,0.1)] w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-8 py-6 border-b border-[#48cae4]/20 flex justify-between items-center bg-gradient-to-r from-[rgba(72,202,228,0.1)] to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#48cae4]/10 flex items-center justify-center border border-[#48cae4]/20">
                    <FileStack size={28} className="text-[#48cae4]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      {selectedBrand.brand} <span className="text-sm font-normal text-gray-500 bg-gray-900 border border-gray-800 px-2 py-0.5 rounded ml-2">案件档案</span>
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{selectedBrand.company}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedBrand(null)} 
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/5 text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-hidden flex flex-col p-8 gap-8">
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-6">
                  <div className="bg-[#48cae4]/5 border border-[#48cae4]/10 rounded-xl p-5 flex flex-col gap-2 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#48cae4] opacity-50"></div>
                    <div className="text-xs text-gray-500 font-medium">累计立案总数</div>
                    <div className="text-3xl font-bold text-[#48cae4] font-mono">{selectedBrand.caseCount}</div>
                    <ShieldCheck size={20} className="absolute right-4 top-4 text-[#48cae4]/20 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-[#e9c46a]/5 border border-[#e9c46a]/10 rounded-xl p-5 flex flex-col gap-2 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#e9c46a] opacity-50"></div>
                    <div className="text-xs text-gray-500 font-medium">专利纠纷</div>
                    <div className="text-3xl font-bold text-[#e9c46a] font-mono">{selectedBrand.breakdown.patent}</div>
                    <Hexagon size={20} className="absolute right-4 top-4 text-[#e9c46a]/20 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-[#e2c285]/5 border border-[#e2c285]/10 rounded-xl p-5 flex flex-col gap-2 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#e2c285] opacity-50"></div>
                    <div className="text-xs text-gray-500 font-medium">商标侵权</div>
                    <div className="text-3xl font-bold text-[#e2c285] font-mono">{selectedBrand.breakdown.trademark}</div>
                    <AlertCircle size={20} className="absolute right-4 top-4 text-[#e2c285]/20 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="bg-[#48cae4]/5 border border-[#48cae4]/10 rounded-xl p-5 flex flex-col gap-2 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#48cae4] opacity-50"></div>
                    <div className="text-xs text-gray-500 font-medium">著作权纠纷</div>
                    <div className="text-3xl font-bold text-white font-mono">{selectedBrand.breakdown.copyright}</div>
                    <Copyright size={20} className="absolute right-4 top-4 text-white/10 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Filters & Case List Area */}
                <div className="flex-1 flex flex-col bg-black/30 rounded-2xl border border-gray-800/50 overflow-hidden">
                  <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/30">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-gray-500" />
                        <span className="text-xs text-gray-400">立案时间:</span>
                        <div className="relative group">
                          <select 
                            className="appearance-none bg-transparent text-xs text-[#48cae4] pr-6 focus:ring-0 cursor-pointer hover:text-white transition-colors"
                            value={modalTimeFilter}
                            onChange={(e) => setModalTimeFilter(e.target.value)}
                          >
                            <option value="all" className="bg-[#0a192f] text-gray-300">不限年份</option>
                            <option value="2026" className="bg-[#0a192f] text-gray-300">2026年</option>
                            <option value="2025" className="bg-[#0a192f] text-gray-300">2025年</option>
                            <option value="2024" className="bg-[#0a192f] text-gray-300">2024年</option>
                          </select>
                          <ChevronDown size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#48cae4] pointer-events-none group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe size={14} className="text-gray-500" />
                        <span className="text-xs text-gray-400">地域分布:</span>
                        <div className="relative group">
                          <select 
                            className="appearance-none bg-transparent text-xs text-[#48cae4] pr-6 focus:ring-0 cursor-pointer hover:text-white transition-colors"
                            value={modalRegionFilter}
                            onChange={(e) => setModalRegionFilter(e.target.value)}
                          >
                            <option value="all" className="bg-[#0a192f] text-gray-300">全省及跨区</option>
                            <option value="福州" className="bg-[#0a192f] text-gray-300">福州</option>
                            <option value="厦门" className="bg-[#0a192f] text-gray-300">厦门</option>
                            <option value="泉州" className="bg-[#0a192f] text-gray-300">泉州</option>
                            <option value="广东" className="bg-[#0a192f] text-gray-300">广东</option>
                            <option value="浙江" className="bg-[#0a192f] text-gray-300">浙江</option>
                          </select>
                          <ChevronDown size={10} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#48cae4] pointer-events-none group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      共筛选出 <span className="text-[#48cae4] font-bold">{filteredCases.length}</span> 条案件记录
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar">
                    <div className="overflow-x-auto min-w-full">
                      <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead className="sticky top-0 z-10">
                          <tr className="bg-gray-900 border-b border-gray-800">
                            <th className="py-4 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">案件编号</th>
                            <th className="py-4 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">案件名称</th>
                            <th className="py-4 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">案件领域</th>
                            <th className="py-4 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">发案地址</th>
                            <th className="py-4 px-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">立案时间</th>
                          </tr>
                        </thead>
                      <tbody className="divide-y divide-gray-800/30">
                        {filteredCases.map((c) => (
                          <tr key={c.id} className="hover:bg-[#48cae4]/5 transition-colors group">
                            <td className="py-4 px-6 text-xs text-gray-500 font-mono flex items-center gap-2">
                              <Hash size={12} className="text-gray-700" />
                              {c.id}
                            </td>
                            <td className="py-4 px-6">
                              <div className="text-sm font-medium text-gray-200 group-hover:text-[#48cae4] transition-colors">{c.name}</div>
                            </td>
                            <td className="py-4 px-6">
                              <span className={cn(
                                "px-2 py-1 rounded text-[10px] font-bold",
                                c.field === '专利纠纷' ? "bg-[#e9c46a]/10 text-[#e9c46a]" :
                                c.field === '商标侵权' ? "bg-[#e2c285]/10 text-[#e2c285]" :
                                "bg-[#48cae4]/10 text-[#48cae4]"
                              )}>
                                {c.field}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-xs text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin size={12} className="text-gray-600" />
                                {c.address}
                              </div>
                            </td>
                            <td className="py-4 px-6 text-xs text-gray-400">
                              <div className="flex items-center gap-1">
                                <Clock size={12} className="text-gray-600" />
                                {c.date}
                              </div>
                            </td>
                          </tr>
                        ))}
                        {filteredCases.length === 0 && (
                          <tr>
                            <td colSpan={5} className="py-20 text-center text-gray-600 text-sm italic">
                              未搜索到相关维权档案纪录
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-[1.5] min-h-0">
        <Panel title="涉案品牌详情列表" className="h-full flex flex-col">
          <div className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-[#48cae4]" />
              <input 
                type="text" 
                placeholder="搜索品牌或集团..." 
                className="w-full bg-[rgba(72,202,228,0.05)] border-b border-[#48cae4]/30 px-8 py-1.5 text-sm text-white focus:outline-none focus:border-[#48cae4] focus:bg-[rgba(72,202,228,0.1)] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="flex justify-between items-center text-[10px] text-[#48cae4] bg-gradient-to-r from-[rgba(72,202,228,0.1)] to-transparent px-3 py-1.5 rounded-t font-bold tracking-wider mb-1">
              <span>层级: 品牌集团 / 子品牌 / 系列</span>
              <span>共 {totalFilteredCount} 条结果</span>
            </div>
            
            <div className="flex-1 overflow-y-auto pr-1 space-y-1 custom-scrollbar">
              {Object.entries(groupedData).map(([group, brands]) => (
                <div key={group} className="space-y-1">
                  {/* Group Level */}
                  <div 
                    onClick={() => toggleGroup(group)}
                    className="flex items-center gap-2 p-2 bg-[#48cae4]/5 hover:bg-[#48cae4]/10 transition-colors cursor-pointer rounded-sm border border-[rgba(72,202,228,0.1)] group"
                  >
                    {expandedGroups.includes(group) ? <ChevronDown size={14} className="text-[#48cae4]" /> : <ChevronRight size={14} className="text-gray-500" />}
                    <Copyright size={14} className="text-[#48cae4] opacity-70" />
                    <span className="text-sm font-bold text-white/90">{group}</span>
                    <span className="ml-auto text-[10px] text-gray-500 bg-gray-900/50 px-1.5 py-0.5 rounded-full border border-gray-800">
                      {brands.length} 品牌
                    </span>
                  </div>

                  {/* Brands (Conditional) */}
                  {expandedGroups.includes(group) && (
                    <motion.div 
                      initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                      className="ml-3 space-y-1 border-l border-[#48cae4]/10 pl-2"
                    >
                      {brands.map((item) => (
                        <div 
                          key={item.id} 
                          onClick={() => setSelectedBrand(item)}
                          className="px-3 py-2 text-xs text-gray-400 bg-gradient-to-r from-[rgba(2,12,30,0.4)] to-transparent hover:from-[rgba(72,202,228,0.15)] hover:to-[rgba(72,202,228,0.05)] transition-all items-center rounded-sm cursor-pointer border border-transparent hover:border-[#48cae4]/30 group flex justify-between"
                        >
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-200 group-hover:text-[#48cae4] transition-colors">{item.brand}</span>
                            <div className="flex items-center gap-2 mt-1">
                              <MapPin size={8} className="text-gray-600" />
                              <span className="text-[10px] text-gray-600 truncate max-w-[120px]">{item.city} · {item.district}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-[#48cae4] font-mono font-bold leading-none">{item.caseCount}</span>
                            <span className="text-[9px] text-gray-600 mt-0.5">案件数</span>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {totalFilteredCount === 0 && (
                <div className="text-center text-gray-500 mt-8 text-sm">暂无匹配数据</div>
              )}
            </div>
          </div>
        </Panel>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex-1 min-h-0">
        <Panel title="最新案件动态" className="h-full flex flex-col">
          <div className="flex-1 overflow-hidden relative flex flex-col">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[rgba(2,12,30,0.9)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[rgba(2,12,30,0.9)] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex-1 overflow-hidden pt-2 pb-2 pr-2">
              <div className="animate-scroll-y space-y-3">
                {[...latestDynamics, ...latestDynamics].map((item, i) => (
                  <div key={`${item.id}-${i}`} className="flex gap-3 items-start p-3 rounded-lg bg-gradient-to-br from-[rgba(72,202,228,0.05)] to-transparent hover:from-[rgba(72,202,228,0.1)] hover:to-[rgba(72,202,228,0.02)] transition-colors shadow-[0_4px_10px_rgba(0,0,0,0.2)] relative overflow-hidden group">
                    <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-[#48cae4] to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
                    <div className="mt-0.5">{getStatusIcon(item.level)}</div>
                    <div className="flex-1">
                      <div className="text-xs text-[#48cae4]/70 mb-1 font-mono">{item.time}</div>
                      <div className="text-sm text-gray-200 leading-snug">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </motion.div>
    </div>
  );
};
