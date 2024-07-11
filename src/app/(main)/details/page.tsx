'use client';

import { Text } from '@tremor/react';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const workspaces = [
  {
    workspace: 'sales_by_day',
    owner: 'John Doe',
    status: 'live',
    costs: '$3,509.00',
    region: 'US-West 1',
    capacity: '99%',
    lastEdited: '23/09/2023 13:00',
  },
  {
    workspace: 'marketing_campaign',
    owner: 'Jane Smith',
    status: 'live',
    costs: '$5,720.00',
    region: 'US-East 2',
    capacity: '80%',
    lastEdited: '22/09/2023 10:45',
  },
  {
    workspace: 'sales_campaign',
    owner: 'Jane Smith',
    status: 'live',
    costs: '$5,720.00',
    region: 'US-East 2',
    capacity: '80%',
    lastEdited: '22/09/2023 10:45',
  },
  {
    workspace: 'development_env',
    owner: 'Mike Johnson',
    status: 'live',
    costs: '$4,200.00',
    region: 'EU-West 1',
    capacity: '60%',
    lastEdited: '21/09/2023 14:30',
  },
  {
    workspace: 'new_workspace_1',
    owner: 'Alice Brown',
    status: 'live',
    costs: '$2,100.00',
    region: 'US-West 2',
    capacity: '75%',
    lastEdited: '24/09/2023 09:15',
  },
  {
    workspace: 'test_environment',
    owner: 'David Clark',
    status: 'inactive',
    costs: '$800.00',
    region: 'EU-Central 1',
    capacity: '40%',
    lastEdited: '25/09/2023 16:20',
  },
  {
    workspace: 'analytics_dashboard',
    owner: 'Sarah Wilson',
    status: 'live',
    costs: '$6,500.00',
    region: 'US-West 1',
    capacity: '90%',
    lastEdited: '26/09/2023 11:30',
  },
  {
    workspace: 'research_project',
    owner: 'Michael Adams',
    status: 'live',
    costs: '$3,900.00',
    region: 'US-East 1',
    capacity: '70%',
    lastEdited: '27/09/2023 08:45',
  },
  {
    workspace: 'training_environment',
    owner: 'Laura White',
    status: 'live',
    costs: '$2,500.00',
    region: 'EU-North 1',
    capacity: '55%',
    lastEdited: '28/09/2023 12:15',
  },
];

export default function Example() {
  const getInitials = (name) => {
    return name
      .split('_')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-700';
      case 'inactive':
        return 'bg-yellow-100 text-yellow-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      default:
        return '';
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <Text className="text-xl font-bold">Workspaces</Text>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {workspaces.map((workspace) => (
          <Link key={workspace.workspace} href={`/overview/${workspace.workspace}`}>
            <div
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex items-center w-full"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-md mr-4">
                <Text className="font-bold text-lg">{getInitials(workspace.workspace)}</Text>
              </div>
              <div className="flex-grow">
                <Text className="font-bold text-md dark:text-white">{workspace.workspace}</Text>
                <Text className="text-md text-gray-600 dark:text-gray-400">{workspace.owner}</Text>
              </div>
              <div className="text-center">
                <Text className="text-md text-gray-600 dark:text-gray-400">{workspace.lastEdited}</Text>
                <div className={classNames('p-1 rounded-md text-sm font-medium', getStatusStyles(workspace.status))}>
                  {workspace.status}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}