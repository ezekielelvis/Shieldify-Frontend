'use client';

import { Button, Card, Dialog, DialogPanel, Divider, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, TextInput } from '@tremor/react';
import { useState } from 'react';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';

export default function Settings() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`transition-all duration-200 ${isModalOpen ? 'blur-sm' : ''}`}>
        <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Manage your personal details, workspace governance, and notifications.
        </p>
        <TabGroup className="mt-6" selectedIndex={selectedTab} onChange={(index) => setSelectedTab(index)}>
          <TabList>
            <Tab className="text-sm">Account details</Tab>
            <Tab className="text-sm">Workspaces</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="mt-8 space-y-8">
                <form action="#" method="POST">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Email</h4>
                    <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                      Update your email address associated with this workspace.
                    </p>
                    <div className="mt-6">
                      <label htmlFor="email" className="text-sm text-gray-800 font-medium dark:text-gray-200">
                        Update email address
                      </label>
                      <TextInput
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        className="w-full rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 sm:max-w-md"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-6 whitespace-nowrap rounded-md bg-blue-600 p-3 text-sm text-white font-medium shadow-sm hover:bg-blue-700"
                    >
                      Update email
                    </button>
                  </div>
                </form>
                <Divider className="border-t border-gray-300 dark:border-gray-600" />
                <form action="#" method="POST">
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Password</h4>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    Update your password associated with this workspace.
                  </p>
                  <div className="mt-6">
                    <label htmlFor="current-password" className="text-sm text-gray-800 font-medium dark:text-gray-200">
                      Current password
                    </label>
                    <TextInput
                      type="password"
                      id="current-password"
                      name="current-password"
                      placeholder=""
                      className="w-full rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 sm:max-w-md"
                    />
                  </div>
                  <div className="mt-4">
                    <label htmlFor="new-password" className="text-sm text-gray-800 font-medium dark:text-gray-200">
                      New password
                    </label>
                    <TextInput
                      type="password"
                      id="new-password"
                      name="new-password"
                      placeholder=""
                      className="w-full rounded-lg shadow-sm border border-gray-300 dark:border-gray-600 sm:max-w-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 whitespace-nowrap rounded-md bg-blue-600 p-3 text-sm text-white font-medium shadow-sm hover:bg-blue-700"
                  >
                    Update password
                  </button>
                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="mt-8 space-y-8">
                <Card className="border border-red-500 rounded-lg shadow-lg p-4">
                  <Text className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Leave Workspace</Text>
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-4">
                    <FiLogOut className="mr-2" />
                    <span>Are you sure you want to leave the workspace?</span>
                  </div>
                  <Button
                    color="red"
                    size="sm"
                    className="w-full rounded-lg"
                    onClick={() => {
                      // Handle leave workspace logic here
                      alert('Leave workspace functionality');
                    }}
                  >
                    Leave Workspace
                  </Button>
                </Card>
                <Card className="border border-red-500 shadow-lg p-4 rounded-lg">
                  <Text className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Delete Workspace</Text>
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-4">
                    <FiTrash2 className="mr-2" />
                    <span>Are you sure you want to delete the workspace? This action cannot be undone.</span>
                  </div>
                  <Button
                    color="red"
                    size="sm"
                    className="w-full rounded-lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Delete Workspace
                  </Button>
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <Dialog
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            static={true}
            className="z-[100]"
          >
            <DialogPanel className="sm:max-w-md rounded-lg bg-white p-4 mx-auto">
              <div className="absolute right-0 top-0 pr-3 pt-3">
                <button
                  type="button"
                  className="rounded-tremor-small p-2 text-tremor-content-subtle hover:bg-tremor-background-subtle hover:text-tremor-content dark:text-dark-tremor-content-subtle hover:dark:bg-dark-tremor-background-subtle hover:dark:text-tremor-content"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                >
                  <RiCloseLine
                    className="h-5 w-5 shrink-0"
                    aria-hidden={true}
                  />
                </button>
              </div>
              <form>
                <h4 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Delete Workspace</h4>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  All workspace data will be permanently deleted. There is no coming back after you press delete.
                </p>
                <label
                  htmlFor="delete-workspace"
                  className="mt-6 block text-xs font-medium text-gray-800 dark:text-gray-200"
                >
                  Confirm password
                </label>
                <TextInput
                  id="delete-workspace"
                  name="delete-workspace"
                  type="password"
                  placeholder="Password"
                  className="mt-2 w-full rounded-lg"
                />
                <button
                  type="submit"
                  className="mt-4 w-full whitespace-nowrap rounded-lg bg-red-500 px-4 py-2 text-center text-xs font-medium text-white shadow-lg hover:bg-red-600"
                >
                  Delete workspace permanently
                </button>
              </form>
            </DialogPanel>
          </Dialog>
        </div>
      )}
    </>
  );
}