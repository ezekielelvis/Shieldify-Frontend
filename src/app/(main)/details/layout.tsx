export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="p-4 sm:px-6 sm:pb-10 sm:pt-10 lg:px-10 lg:pt-7">
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Workspace
      </h1>
      <p className="pb-5 text-sm text-gray-900 sm:text-sm dark:text-gray-400">
        View all yor workspaces here
      </p>
      <div>{children}</div>
    </div>
  )
}
