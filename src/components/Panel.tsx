import React from 'react';
import { cn } from '../utils/cn';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({ title, children, className, ...props }) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col overflow-hidden glass-panel hud-glow rounded-md",
        className
      )}
      {...props}
    >
      {/* Corner decorations */}
      <span className="absolute top-0 left-0 w-[15px] h-[15px] border-t-[3px] border-l-[3px] border-[#48cae4] pointer-events-none z-10 opacity-80 shadow-[0_0_5px_#48cae4]"></span>
      <span className="absolute top-0 right-0 w-[15px] h-[15px] border-t-[3px] border-r-[3px] border-[#48cae4] pointer-events-none z-10 opacity-80 shadow-[0_0_5px_#48cae4]"></span>
      <span className="absolute bottom-0 left-0 w-[15px] h-[15px] border-b-[3px] border-l-[3px] border-[#48cae4] pointer-events-none z-10 opacity-80 shadow-[0_0_5px_#48cae4]"></span>
      <span className="absolute bottom-0 right-0 w-[15px] h-[15px] border-b-[3px] border-r-[3px] border-[#48cae4] pointer-events-none z-10 opacity-80 shadow-[0_0_5px_#48cae4]"></span>

      <div className="relative flex flex-col px-5 pt-4 pb-2">
        <div className="flex items-center">
          <span className="text-[#48cae4] mr-3 text-sm leading-none drop-shadow-[0_0_3px_#48cae4]">◈</span>
          <h2 
            className="font-bold uppercase tracking-[0.15em] text-sm text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          >
            {title}
          </h2>
        </div>
        {/* Gradient separator line */}
        <div 
          className="h-[2px] w-full mt-3 opacity-80"
          style={{
            background: 'linear-gradient(to right, #48cae4, transparent)',
            boxShadow: '0 0 5px #48cae4'
          }}
        ></div>
      </div>
      
      <div className="flex-1 p-5 pt-3 relative overflow-hidden">
        {children}
      </div>
    </div>
  );
};
