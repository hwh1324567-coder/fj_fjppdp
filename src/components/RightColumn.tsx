import React, { useState } from 'react';
import { Panel } from './Panel';
import { brandDetails, latestDynamics } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, AlertCircle, CheckCircle, Info, FileStack, X, Copyright, Hexagon } from 'lucide-react';
import { cn } from '../utils/cn';

interface RightColumnProps {
  activeCity: string | null;
  activeFilter: string;
}

export const RightColumn: React.FC<RightColumnProps> = ({ activeCity, activeFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<(typeof brandDetails)[0] | null>(null);

  const filteredBrands = brandDetails.filter(b => {
    const matchSearch = b.brand.includes(searchTerm) || b.company.includes(searchTerm);
    // Since we changed the type definition in mockData to industry type, 
    // and the filter in MiddleColumn is for generic regions or '全部', 
    // let's adjust this filter logically to show all if not matching explicitly.
    const matchType = activeFilter === '全部' || b.type === activeFilter || ['商标侵权', '著作权纠纷', '专利纠纷'].includes(activeFilter) === false; // If active filter doesn't map to new types, show all for now.
    const matchCity = !activeCity || b.city === activeCity;
    return matchSearch && matchCity;
  }).sort((a,b) => b.caseCount - a.caseCount);

  const getStatusIcon = (level: string) => {
    if (level === 'danger') return <AlertCircle size={14} className="text-[#e2c285] drop-shadow-[0_0_5px_#e2c285]" />;
    if (level === 'warning') return <Info size={14} className="text-[#e9c46a] drop-shadow-[0_0_5px_#e9c46a]" />;
    if (level === 'success') return <CheckCircle size={14} className="text-[#2ecc71] drop-shadow-[0_0_5px_#2ecc71]" />;
    return <Info size={14} className="text-[#48cae4] drop-shadow-[0_0_5px_#48cae4]" />;
  };

  return (
    <div className="w-[28%] flex flex-col gap-4 h-full relative">
      <AnimatePresence>
        {selectedBrand && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40"
          >
            <div className="bg-gradient-to-br from-[#0a192f] to-[#020c1b] border border-[#48cae4]/50 rounded-xl shadow-[0_0_30px_rgba(72,202,228,0.2)] w-full max-w-sm overflow-hidden flex flex-col">
              <div className="px-5 py-4 border-b border-[#48cae4]/20 flex justify-between items-center bg-[rgba(72,202,228,0.05)]">
                <h3 className="font-bold tracking-wider text-white text-lg flex items-center gap-2">
                  <FileStack size={18} className="text-[#48cae4]" />
                  {selectedBrand.brand} 案件档案
                </h3>
                <button onClick={() => setSelectedBrand(null)} className="text-gray-400 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-1">
                  <div className="text-xs text-gray-400">所属公司</div>
                  <div className="text-sm font-medium text-gray-200">{selectedBrand.company}</div>
                </div>

                <div className="space-y-4">
                  <div className="text-xs text-gray-400 border-b border-gray-800 pb-2">累计立案分类统计</div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-b from-[#e9c46a]/10 to-transparent border border-[#e9c46a]/20 p-3 rounded-lg flex flex-col items-center justify-center gap-1">
                      <Hexagon size={16} className="text-[#e9c46a]" />
                      <div className="text-[10px] text-gray-400">专利纠纷</div>
                      <div className="text-xl font-bold text-[#ffffff]">{selectedBrand.breakdown.patent}</div>
                    </div>
                    <div className="bg-gradient-to-b from-[#e2c285]/10 to-transparent border border-[#e2c285]/20 p-3 rounded-lg flex flex-col items-center justify-center gap-1">
                      <AlertCircle size={16} className="text-[#e2c285]" />
                      <div className="text-[10px] text-gray-400">商标侵权</div>
                      <div className="text-xl font-bold text-[#ffffff]">{selectedBrand.breakdown.trademark}</div>
                    </div>
                    <div className="bg-gradient-to-b from-[#48cae4]/10 to-transparent border border-[#48cae4]/20 p-3 rounded-lg flex flex-col items-center justify-center gap-1">
                      <Copyright size={16} className="text-[#48cae4]" />
                      <div className="text-[10px] text-gray-400">著作权纠纷</div>
                      <div className="text-xl font-bold text-[#ffffff]">{selectedBrand.breakdown.copyright}</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-[rgba(2,12,30,0.8)] to-[#020c1b] rounded-lg border border-gray-800/50">
                  <span className="text-sm text-gray-400">总涉案次数</span>
                  <span className="text-2xl font-bold text-[#48cae4] drop-shadow-[0_0_8px_rgba(72,202,228,0.5)]">{selectedBrand.caseCount}</span>
                </div>
              </div>
            </div>
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
                placeholder="搜索品牌或公司名..." 
                className="w-full bg-[rgba(72,202,228,0.05)] border-b border-[#48cae4]/30 px-8 py-1.5 text-sm text-white focus:outline-none focus:border-[#48cae4] focus:bg-[rgba(72,202,228,0.1)] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="grid grid-cols-12 gap-2 text-xs text-[#48cae4] bg-gradient-to-r from-[rgba(72,202,228,0.1)] to-transparent p-2 rounded-t font-bold tracking-wider">
              <div className="col-span-2">城市</div>
              <div className="col-span-3">品牌名</div>
              <div className="col-span-5">公司名</div>
              <div className="col-span-2 text-center">涉案次数</div>
            </div>
            <div className="flex-1 overflow-y-auto pr-1 space-y-1 mt-1 custom-scrollbar">
              {filteredBrands.map((item, i) => (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedBrand(item)}
                  className="grid grid-cols-12 gap-2 text-xs text-gray-300 bg-gradient-to-r from-[rgba(2,12,30,0.4)] to-transparent p-2 hover:from-[rgba(72,202,228,0.15)] hover:to-[rgba(72,202,228,0.05)] transition-colors items-center rounded-sm cursor-pointer border border-transparent hover:border-[#48cae4]/30"
                >
                  <div className="col-span-2 truncate" title={item.city}>{item.city}</div>
                  <div className="col-span-3 truncate font-medium text-white" title={item.brand}>{item.brand}</div>
                  <div className="col-span-5 truncate" title={item.company}>{item.company}</div>
                  <div className="col-span-2 text-center font-bold text-[#48cae4]">
                    {item.caseCount}
                  </div>
                </div>
              ))}
              {filteredBrands.length === 0 && (
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
