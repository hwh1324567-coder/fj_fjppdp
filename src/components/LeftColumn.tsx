import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Panel } from './Panel';
import { coreMetrics, caseTypeDistribution, cityData } from '../data/mockData';
import { motion } from 'framer-motion';

interface LeftColumnProps {
  activeCity: string | null;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ activeCity }) => {
  const pieChartRef = useRef<HTMLDivElement>(null);
  const barChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pieChartRef.current) return;
    const chart = echarts.init(pieChartRef.current);
    
    const option = {
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(2, 8, 20, 0.9)',
        borderColor: '#00f0ff',
        textStyle: { color: '#fff' }
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        textStyle: { color: '#a0aec0' },
        itemWidth: 10,
        itemHeight: 10,
      },
      color: ['#e2c285', '#48cae4', '#e9c46a', '#9d4edd', '#2ecc71'],
      series: [
        {
          name: '案件类型',
          type: 'pie',
          radius: ['50%', '80%'],
          center: ['35%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 4,
            borderColor: '#020617',
            borderWidth: 2
          },
          label: { show: false },
          labelLine: { show: false },
          data: caseTypeDistribution
        }
      ]
    };
    chart.setOption(option);
    
    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, []);

  useEffect(() => {
    if (!barChartRef.current) return;
    const chart = echarts.init(barChartRef.current);
    
    // Sort data for horizontal bar chart (bottom to top)
    const sortedData = [...cityData].sort((a, b) => a.cases - b.cases);
    
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        backgroundColor: 'rgba(2, 8, 20, 0.9)',
        borderColor: '#48cae4',
        textStyle: { color: '#fff' }
      },
      legend: {
        top: 0,
        textStyle: { color: '#a0aec0' },
        itemWidth: 12,
        itemHeight: 12,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } },
        axisLabel: { color: '#a0aec0' }
      },
      yAxis: {
        type: 'category',
        data: sortedData.map(d => d.city),
        axisLabel: { 
          color: (value: string) => {
            if (activeCity && value === activeCity) return '#fff';
            return value === '泉州市' ? '#e2c285' : '#a0aec0';
          },
          fontWeight: (value: string) => value === '泉州市' || value === activeCity ? 'bold' : 'normal',
          fontSize: (value: string) => value === activeCity ? 14 : 12
        },
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
      },
      series: [
        {
          name: '品牌数',
          type: 'bar',
          data: sortedData.map(d => d.brands),
          itemStyle: {
            color: (params: any) => {
              if (activeCity && params.name === activeCity) {
                return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: '#fff' },
                  { offset: 1, color: 'rgba(255,255,255,0.1)' }
                ]);
              }
              return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: '#48cae4' },
                { offset: 1, color: 'rgba(72,202,228,0.1)' }
              ]);
            }
          }
        },
        {
          name: '案件数',
          type: 'bar',
          data: sortedData.map(d => d.cases),
          itemStyle: {
            color: (params: any) => {
              if (activeCity && params.name === activeCity) {
                return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: '#fff' },
                  { offset: 1, color: 'rgba(255,255,255,0.1)' }
                ]);
              }
              if (params.name === '泉州市') {
                return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 0, color: '#e2c285' },
                  { offset: 1, color: 'rgba(226,194,133,0.1)' }
                ]);
              }
              return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: '#e9c46a' },
                { offset: 1, color: 'rgba(233,196,106,0.1)' }
              ]);
            }
          }
        }
      ]
    };
    chart.setOption(option);
    
    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [activeCity]);

  return (
    <div className="w-[22%] flex flex-col gap-4 h-full">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex-[1.5] min-h-0">
        <Panel title="全省核心指标" className="h-full">
          <div className="flex flex-col h-full justify-between">
            <div className="grid grid-cols-2 gap-2">
              {/* 品牌总数 */}
              <div className="p-3 transition-colors duration-300 border border-[rgba(72,202,228,0.2)] rounded bg-[rgba(72,202,228,0.05)] hover:bg-[rgba(72,202,228,0.1)]">
                <div style={{ fontSize: '11px', color: 'rgba(150,200,255,0.7)', letterSpacing: '1px', textTransform: 'uppercase' }} className="mb-1">品牌总数</div>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 700, 
                  color: '#ffffff', 
                  textShadow: '0 0 10px rgba(72,202,228,0.5), 0 0 20px rgba(72,202,228,0.2)',
                  letterSpacing: '2px',
                  fontFamily: "'DIN Alternate', 'Arial Narrow', sans-serif"
                }}>{coreMetrics.totalBrands.toLocaleString()}</div>
              </div>

              {/* 涉案品牌数 */}
              <div className="p-3 transition-colors duration-300 border border-[rgba(226,194,133,0.2)] rounded relative overflow-hidden bg-[rgba(226,194,133,0.05)] hover:bg-[rgba(226,194,133,0.1)]">
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#e2c285]/20 rounded-full blur-xl"></div>
                <div style={{ fontSize: '11px', color: 'rgba(226,194,133,0.7)', letterSpacing: '1px', textTransform: 'uppercase' }} className="mb-1">涉案品牌数</div>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: 700, 
                  color: '#e2c285', 
                  textShadow: '0 0 10px rgba(226,194,133,0.5), 0 0 20px rgba(226,194,133,0.2)',
                  fontFamily: "'DIN Alternate', 'Arial Narrow', sans-serif"
                }}>{coreMetrics.involvedBrands.toLocaleString()}</div>
              </div>
              
              {/* 归属公司总数 */}
              <div className="p-3 transition-colors duration-300 border border-[rgba(72,202,228,0.2)] rounded bg-[rgba(72,202,228,0.05)] hover:bg-[rgba(72,202,228,0.1)]">
                <div style={{ fontSize: '11px', color: 'rgba(150,200,255,0.7)', letterSpacing: '1px', textTransform: 'uppercase' }} className="mb-1">归属公司总数</div>
                <div style={{ 
                  fontSize: '22px', 
                  fontWeight: 600, 
                  color: '#ffffff',
                  fontFamily: "'DIN Alternate', 'Arial Narrow', sans-serif"
                }}>{coreMetrics.totalCompanies.toLocaleString()}</div>
              </div>

              {/* Top品牌城市 */}
              <div className="p-3 transition-colors duration-300 border border-[rgba(233,196,106,0.2)] rounded bg-[rgba(233,196,106,0.05)] hover:bg-[rgba(233,196,106,0.1)]">
                <div style={{ fontSize: '11px', color: 'rgba(233,196,106,0.7)', letterSpacing: '1px', textTransform: 'uppercase' }} className="mb-1">Top品牌城市</div>
                <div style={{ 
                  fontSize: '22px', 
                  fontWeight: 600, 
                  color: '#e9c46a',
                  textShadow: '0 0 8px rgba(233,196,106,0.4)'
                }}>{coreMetrics.topCity}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[rgba(72,202,228,0.2)]">
              <div className="text-center p-2 transition-colors duration-300 border border-[rgba(226,194,133,0.2)] rounded bg-[rgba(226,194,133,0.05)] hover:bg-[rgba(226,194,133,0.1)]">
                <div className="text-[#e2c285] font-bold text-lg drop-shadow-[0_0_5px_rgba(226,194,133,0.4)]" style={{ fontFamily: "'DIN Alternate', 'Arial Narrow', sans-serif" }}>{coreMetrics.cases.trademark}</div>
                <div style={{ fontSize: '11px', color: 'rgba(226,194,133,0.7)', letterSpacing: '1px' }}>商标侵权</div>
              </div>
              <div className="text-center p-2 transition-colors duration-300 border border-[rgba(72,202,228,0.2)] rounded bg-[rgba(72,202,228,0.05)] hover:bg-[rgba(72,202,228,0.1)]">
                <div className="text-[#48cae4] font-bold text-lg drop-shadow-[0_0_5px_rgba(72,202,228,0.4)]" style={{ fontFamily: "'DIN Alternate', 'Arial Narrow', sans-serif" }}>{coreMetrics.cases.copyright}</div>
                <div style={{ fontSize: '11px', color: 'rgba(150,200,255,0.7)', letterSpacing: '1px' }}>著作权纠纷</div>
              </div>
              <div className="text-center p-2 transition-colors duration-300 border border-[rgba(233,196,106,0.2)] rounded bg-[rgba(233,196,106,0.05)] hover:bg-[rgba(233,196,106,0.1)]">
                <div className="text-[#e9c46a] font-bold text-lg drop-shadow-[0_0_5px_rgba(233,196,106,0.4)]" style={{ fontFamily: "'DIN Alternate', 'Arial Narrow', sans-serif" }}>{coreMetrics.cases.patent}</div>
                <div style={{ fontSize: '11px', color: 'rgba(233,196,106,0.7)', letterSpacing: '1px' }}>专利纠纷</div>
              </div>
            </div>
          </div>
        </Panel>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex-[0.9] min-h-0">
        <Panel title="案件类型分布" className="h-full">
          <div ref={pieChartRef} className="w-full h-full"></div>
        </Panel>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex-[1.1] min-h-0">
        <Panel title="九地市案件对比" className="h-full">
          <div ref={barChartRef} className="w-full h-full"></div>
        </Panel>
      </motion.div>
    </div>
  );
};
