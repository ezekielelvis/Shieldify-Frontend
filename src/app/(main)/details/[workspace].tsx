// 'use client';
import { Card, LineChart, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text } from '@tremor/react';
import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    name: 'Unique visitors',
    stat: '10,450',
    change: '-12.5%',
    changeType: 'negative',
  },
  {
    name: 'Bounce rate',
    stat: '56.1%',
    change: '+1.8%',
    changeType: 'positive',
  },
  {
    name: 'Visit duration',
    stat: '5.2min',
    change: '+19.7%',
    changeType: 'positive',
  },
];

const workspaceData = [
  {
    date: 'Aug 01',
    'ETF Shares Vital': 2100.2,
    'Vitainvest Core': 4434.1,
    'iShares Tech Growth': 7943.2,
  },
  {
    date: 'Aug 02',
    'ETF Shares Vital': 2943.0,
    'Vitainvest Core': 4954.1,
    'iShares Tech Growth': 8954.1,
  },
  // ... (additional data)
];

const summary = [
  {
    name: 'ETF Shares Vital',
    value: '$21,349.36',
    invested: '$19,698.65',
    cashflow: '$14,033.74',
    gain: '+$11,012.39',
    realized: '+$177.48',
    dividends: '+$490.97',
    bgColor: 'bg-blue-500',
    changeType: 'positive',
  },
  {
    name: 'Vitainvest Core',
    value: '$25,943.43',
    invested: '$23,698.65',
    cashflow: '$11,033.74',
    gain: '+$3,012.39',
    realized: '+$565.41',
    dividends: '+$290.97',
    bgColor: 'bg-violet-500',
    changeType: 'positive',
  },
  {
    name: 'iShares Tech Growth',
    value: '$9,443.46',
    invested: '$14,698.65',
    cashflow: '$2,033.74',
    gain: '-$5,012.39',
    realized: '-$634.42',
    dividends: '-$990.97',
    bgColor: 'bg-fuchsia-500',
    changeType: 'negative',
  },
];

const valueFormatter = (number) => `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function WorkspaceDetail() {
  const router = useRouter();
  const { workspace } = router.query;

  return (

      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <Text className="text-lg font-bold">Workspace: {workspace}</Text>
            <Text className="text-sm text-gray-600">Workspace Details</Text>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Card key={item.name}>
              <p className="text-tremor-default font-medium text-tremor-content dark:text-dark-tremor-content">
                {item.name}
              </p>
              <div className="mt-2 flex items-baseline space-x-2.5">
                <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {item.stat}
                </p>
                <span
                  className={classNames(
                    item.changeType === 'positive'
                      ? 'text-emerald-700 dark:text-emerald-500'
                      : 'text-red-700 dark:text-red-500',
                    'text-tremor-default font-medium',
                  )}
                >
                  {item.change}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <LineChart
          data={workspaceData}
          index="date"
          categories={[
            'ETF Shares Vital',
            'Vitainvest Core',
            'iShares Tech Growth',
          ]}
          colors={['blue', 'violet', 'fuchsia']}
          valueFormatter={valueFormatter}
          yAxisWidth={55}
          className="mt-6 hidden h-96 sm:block"
        />

        <Table className="mt-8">
          <TableHead>
            <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
              <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Name
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Value
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Invested
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Cashflow
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Gain
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Realized
              </TableHeaderCell>
              <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
                Dividends
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {summary.map((item) => (
              <TableRow key={item.name}>
                <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  <div className="flex space-x-3">
                    <span
                      className={classNames(item.bgColor, 'w-1 shrink-0 rounded')}
                      aria-hidden={true}
                    />
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{item.value}</TableCell>
                <TableCell className="text-right">{item.invested}</TableCell>
                <TableCell className="text-right">{item.cashflow}</TableCell>
                <TableCell className="text-right">
                  <span
                    className={classNames(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                    )}
                  >
                    {item.gain}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={classNames(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                    )}
                  >
                    {item.realized}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span
                    className={classNames(
                      item.changeType === 'positive'
                        ? 'text-emerald-700 dark:text-emerald-500'
                        : 'text-red-700 dark:text-red-500',
                    )}
                  >
                    {item.dividends}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

  );
}