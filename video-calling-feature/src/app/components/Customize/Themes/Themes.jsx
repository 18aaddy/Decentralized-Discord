import React, { Dispatch, SetStateAction, useState } from 'react';
import Section from '../Section/Section';
import cn from 'clsx';

const Themes = ({ isDark, setIsDark }) => {
  return (
    <Section title="Themes" className="mb-0">
      <div className="flex gap-4">
        <div className="cursor-pointer" onClick={() => setIsDark(true)}>
          <div
            className={cn(
              'bg-gradient-to-br from-slate-500 to-slate-700 h-10 w-10 rounded-full ',
              isDark ? 'border-4 border-purple-600' : '',
            )}
          />
          <div className="text-xs text-center text-slate-400 my-2">Dark</div>
        </div>
        <div className="cursor-pointer" onClick={() => setIsDark(false)}>
          <div
            className={cn(
              'bg-gradient-to-br from-slate-100 to-slate-400 h-10 w-10 rounded-full',
              !isDark ? 'border-4 border-purple-600' : '',
            )}
          />
          <div className="text-xs text-center text-slate-400 my-2">Light</div>
        </div>
      </div>
    </Section>
  );
};

export default Themes;
