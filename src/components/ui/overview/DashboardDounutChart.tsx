import { Card, DonutChart } from '@tremor/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Travel',
    amount: 6730,
    share: '32.1%',
    color: 'bg-cyan-500',
  },
  {
    name: 'IT & equipment',
    amount: 4120,
    share: '19.6%',
    color: 'bg-blue-500',
  },
  {
    name: 'Training & development',
    amount: 3920,
    share: '18.6%',
    color: 'bg-blue-500',
  },
  {
    name: 'Office supplies',
    amount: 3210,
    share: '15.3%',
    color: 'bg-violet-500',
  },
  {
    name: 'Communication',
    amount: 3010,
    share: '14.3%',
    color: 'bg-fuchsia-500',
  },
];

const currencyFormatter = (number) => {
  return '$' + Intl.NumberFormat('us').format(number).toString();
};

export function DonutChartCard() {
  return (
    <Card className="sm:mx-auto sm:max-w-lg">
      <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Total expenses by category
      </h3>
      <DonutChart
        className="mt-8"
        data={data}
        category="amount"
        index="name"
        valueFormatter={currencyFormatter}
        showTooltip={true}
        colors={['cyan', 'blue', 'blue', 'violet', 'fuchsia']}
      />
      <p className="mt-8 flex items-center justify-between text-tremor-label text-tremor-content dark:text-dark-tremor-content">
        <span>Category</span>
        <span>Amount / Share</span>
      </p>
      {data.map((item) => (
        <div key={item.name} className="flex justify-between mt-2">
          <span>{item.name}</span>
          <span>{currencyFormatter(item.amount)} / {item.share}</span>
        </div>
      ))}
    </Card>
  );
}