import {
  CrossCircle,
  Settings,
  Github,
  LayoutVertical,
  LayoutHorizontal,
} from '@/assets/icons';
import Checkbox from '@/components/ui/Checkbox';
import { RadioButtonGroup } from '@/components/ui';
import ThemeToggle from '@/components/ThemeToggle';
import { usePreference, FirstDayOfWeek } from '@/hooks/usePreference';
import clsxm from '@/libs/clsxm';
import { useState } from 'react';

const SettingPage = ({
  isOpen,
  onCancel,
}: {
  isOpen: boolean;
  onCancel: () => void;
}) => {
  const {
    preference: { firstDayOfWeek, showExtraDays, showDateContent, markWeekend },
    toggleShowExtraDays,
    setFirstDayOfWeekToMonday,
    setFirstDayOfWeekToSunday,
    toggleShowDateContent,
    toggleMarkWeekend,
  } = usePreference();

  const options = [
    { value: FirstDayOfWeek.Monday, label: '周一' },
    { value: FirstDayOfWeek.Sunday, label: '周日' },
  ];

  const handleOptionChange = (value: string | number) => {
    if (value === FirstDayOfWeek.Monday) {
      setFirstDayOfWeekToMonday();
    } else if (value === FirstDayOfWeek.Sunday) {
      setFirstDayOfWeekToSunday();
    }
  };

  return (
    <div
      className={clsxm(
        'flex flex-col absolute left-0 -top-3 overflow-hidden w-60 h-fit bg-white dark:bg-zinc-800 border border-zinc-400/20 dark:border-zinc-500/30 dark:text-zinc-200 transition-all duration-300 shadow-lg rounded-lg origin-bottom-right -translate-x-full -translate-y-full',
        isOpen
          ? 'opacity-100 scale-100 visible'
          : 'opacity-0 scale-95 invisible'
      )}
    >
      <div className='relative flex items-center justify-end px-2 py-2 text-center bg-slate-100 dark:bg-zinc-600'>
        <span className='absolute py-2 text-xs text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-sm'>
          设置
        </span>
        <CrossCircle
          className='text-gray-500 transition-all duration-200 cursor-pointer size-4 md:size-6 hover:text-gray-700 hover:rotate-90 dark:stroke-gray-400'
          onClick={onCancel}
        />
      </div>
      <div className='flex flex-col flex-1 gap-4 p-4 text-sm'>
        <div className='flex items-center justify-between'>
          <span>标记周末</span>
          <Checkbox checked={markWeekend} onChange={toggleMarkWeekend} />
        </div>
        <div className='flex items-center justify-between'>
          <span>显示非本月日期</span>
          <Checkbox checked={showExtraDays} onChange={toggleShowExtraDays} />
        </div>
        <div className='flex items-center justify-between'>
          <span>显示日期底部内容</span>
          <Checkbox
            checked={showDateContent}
            onChange={toggleShowDateContent}
          />
        </div>
        <div className='flex items-center justify-between'>
          <span>一周的开始</span>
          <RadioButtonGroup
            value={firstDayOfWeek}
            options={options}
            onChange={handleOptionChange}
          />
        </div>
      </div>
      <span className='py-2 text-xs text-center bg-slate-100 md:text-sm dark:bg-zinc-600'>
        v0.0.1
      </span>
    </div>
  );
};

const SettingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative'>
      <div
        className='flex items-center justify-center transition-all duration-200 border border-transparent rounded-lg cursor-pointer size-6 md:size-8 group hover:bg-white hover:border-slate-500 dark:hover:bg-zinc-600'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Settings className='size-4 md:size-6 dark:stroke-zinc-400' />
      </div>
      <SettingPage isOpen={isOpen} onCancel={() => setIsOpen(false)} />
    </div>
  );
};

const LayoutToggle = () => {
  const {
    preference: { desktopLayout },
    toggleDesktopLayout,
  } = usePreference();

  const Icon =
    desktopLayout === 'horizontal' ? LayoutVertical : LayoutHorizontal;

  return (
    <button
      className='relative items-center justify-center hidden transition-all duration-200 border border-transparent rounded-lg cursor-pointer md:flex size-6 md:size-8 group hover:bg-white hover:border-slate-500 dark:hover:bg-zinc-600'
      onClick={toggleDesktopLayout}
    >
      <Icon className='size-4 md:size-6 dark:stroke-zinc-400' />
    </button>
  );
};

export const Footer = () => {
  return (
    <div className='relative flex items-center justify-between h-8 md:h-10'>
      <div className='relative flex items-center h-full px-4 py-1 overflow-hidden text-sm rounded-full cursor-default group bg-slate-100 dark:bg-black/40 dark:text-zinc-200'>
        <span className='transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-0'>
          光阴荏苒，日月如梭
        </span>
        <span className='absolute transition-all duration-200 -translate-x-1/2 translate-y-full opacity-0 left-1/2 text-nowrap group-hover:translate-y-0 group-hover:opacity-100'>
          Copyright{' '}
          <a
            href='https://www.bingdou.com.cn'
            target='_blank'
            className='bg-gradient-to-r from-[#e68765] to-[#f0b7a3] bg-clip_text text_transparent font_bold font-bold text-transparent bg-clip-text'
          >
            BingDou
          </a>
        </span>
      </div>
      <div className='flex gap-4 px-4 py-1 rounded-full bg-slate-100 dark:bg-black/40'>
        <LayoutToggle />
        <ThemeToggle />
        <SettingButton />
      </div>
    </div>
  );
};
