// 'use client';

import { Card } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Daily active users',
    stat: '3,450',
    change: '+12.1%',
    changeType: 'positive',
  },
  {
    name: 'Weekly sessions',
    stat: '1,342',
    change: '-9.8%',
    changeType: 'negative',
  },
  {
    name: 'Duration',
    stat: '5.2min',
    change: '+7.7%',
    changeType: 'positive',
  },
];

export const Kpicard = () => {
  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card 
            key={item.name} 
            className='rounded-md' 
            decorationColor="white"
          >
            <div className="flex items-center justify-between">
              <dt className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                {item.name}
              </dt>
              <span
                className={classNames(
                  item.changeType === 'positive'
                    ? 'bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20'
                    : 'bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20',
                  'inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset rounded-md',
                )}
              >
                {item.change}
              </span>
            </div>
            <dd className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {item.stat}
            </dd>
          </Card>
        ))}
      </dl>
    </>
  );
}