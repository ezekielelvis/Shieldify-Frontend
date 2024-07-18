'use client';

import { RiAddFill, RiBarChartFill } from '@remixicon/react';
import { Card } from '@tremor/react';

export default function NoData () {
  return (
    <>
      <Card className="sm:mx-auto sm:max-w-lg">
        <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Total API requests
        </h3>
        <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          0
        </p>
        <div className="mt-4 flex h-52 items-center justify-center rounded-tremor-small border border-dashed border-tremor-border p-4 dark:border-dark-tremor-border">
          <div className="text-center">
            <RiBarChartFill
              className="mx-auto h-7 w-7 text-tremor-content-subtle dark:text-dark-tremor-content-subtle"
              aria-hidden={true}
            />
            <p className="mt-2 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              No data available
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Get started by connecting a database
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-1.5 whitespace-nowrap rounded-tremor-small bg-tremor-brand px-3 py-2 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              <RiAddFill className="-ml-1 size-5 shrink-0" aria-hidden={true} />
              Add database
            </button>
          </div>
        </div>
      </Card>
    </>
  );
}