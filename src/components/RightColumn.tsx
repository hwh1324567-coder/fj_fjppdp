import React, { useState } from 'react';
import { Panel } from './Panel';
import { brandDetails, latestDynamics } from '../data/mockData';
import { motion } from 'framer-motion';
import { Search, Sparkles, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { cn } from '../utils/cn';

interface RightColumnProps {
  activeCity: string | null;
  activeFilter: string;
}

export const RightColumn: React.FC<RightColumnProps> = ({ activeCity, activeFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBrands = brandDetails.filter(b => {
    const matchSearch = b.brand.includes(searchTerm) || b.company.includes(searchTerm);
    const matchType = activeFilter === '全部' || b.type === activeFilter;
    const matchCity = !activeCity || b.city === activeCity;
    return matchSearch && matchType && matchCity;
  });

  const getTypeColor = (type: string) => {
    if (type === '商标侵权') return 'text-[#e2c285] border-[#e2c285]/30 bg-[#e2c285]/10 drop-shadow-[0_0_2px_#e2c285]';
    if (type === '著作权纠纷') return 'text-[#48cae4] border-[#48cae4]/30 bg-[#48cae4]/10 drop-shadow-[0_0_2px_#48cae4]';
    if (type === '专利纠纷') return 'text-[#e9c46a] border-[#e9c46a]/30 bg-[#e9c46a]/10 drop-shadow-[0_0_2px_#e9c46a]';
    return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
  };

  const getStatusIcon = (level: string) => {
    if (level === 'danger') return <AlertCircle size={14} className="text-[#e2c285] drop-shadow-[0_0_5px_#e2c285]" />;
    if (level === 'warning') return <Info size={14} className="text-[#e9c46a] drop-shadow-[0_0_5px_#e9c46a]" />;
    if (level === 'success') return <CheckCircle size={14} className="text-[#2ecc71] drop-shadow-[0_0_5px_#2ecc71]" />;
    return <Info size={14} className="text-[#48cae4] drop-shadow-[0_0_5px_#48cae4]" />;
  };

  return (
    <div className="w-[28%] flex flex-col gap-4 h-full">
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-[1.5] min-h-0">
        <Panel title="涉案品牌详情列表" className="h-full flex flex-col">
          <div className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-[#48cae4]" />
              <input 
                type="text" 
                placeholder="搜索品牌或公司名..." 
                className="w-full bg-[rgba(2,8,20,0.6)] border border-[#48cae4]/50 rounded px-8 py-1.5 text-sm text-white focus:outline-none focus:border-[#48cae4] focus:shadow-[0_0_10px_rgba(72,202,228,0.3)] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="grid grid-cols-12 gap-2 text-xs text-[#48cae4] bg-[#48cae4]/10 p-2 rounded-t font-bold tracking-wider drop-shadow-[0_0_2px_#48cae4]">
              <div className="col-span-2">城市</div>
              <div className="col-span-3">品牌名</div>
              <div className="col-span-4">公司名</div>
              <div className="col-span-3">案件类型</div>
            </div>
            <div className="flex-1 overflow-y-auto pr-1 space-y-1 mt-1 custom-scrollbar">
              {filteredBrands.map((item, i) => (
                <div key={item.id} className="grid grid-cols-12 gap-2 text-xs text-gray-300 bg-[rgba(2,8,20,0.5)] p-2 border-b border-[#48cae4]/10 hover:bg-[#48cae4]/20 transition-colors items-center hover:shadow-[inset_0_0_10px_rgba(72,202,228,0.2)]">
                  <div className="col-span-2 truncate" title={item.city}>{item.city}</div>
                  <div className="col-span-3 truncate font-medium text-white drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]" title={item.brand}>{item.brand}</div>
                  <div className="col-span-4 truncate" title={item.company}>{item.company}</div>
                  <div className="col-span-3">
                    <span className={cn("px-1.5 py-0.5 rounded border text-[10px] whitespace-nowrap", getTypeColor(item.type))}>
                      {item.type}
                    </span>
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
          <div className="flex-1 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[rgba(2,8,20,0.8)] to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[rgba(2,8,20,0.8)] to-transparent z-10"></div>
            
            {/* Simple CSS animation for scrolling list */}
            <div className="animate-scroll space-y-3 pt-2">
              {[...latestDynamics, ...latestDynamics].map((item, i) => (
                <div key={`${item.id}-${i}`} className="flex gap-3 items-start p-2 rounded bg-[rgba(2,8,20,0.6)] border border-[#48cae4]/20 hover:border-[#48cae4]/50 transition-colors hover:shadow-[inset_0_0_10px_rgba(72,202,228,0.1)]">
                  <div className="mt-0.5">{getStatusIcon(item.level)}</div>
                  <div className="flex-1">
                    <div className="text-xs text-[#48cae4]/70 mb-1 font-mono">{item.time}</div>
                    <div className="text-sm text-gray-200 leading-snug">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </motion.div>
    </div>
  );
};
