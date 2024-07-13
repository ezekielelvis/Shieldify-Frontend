
export const Table = ({ children }) => {
  return (
    <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-300">{children}</table>
    </div>
  );
};

export const TableBody = ({ children }) => <tbody className="bg-white">{children}</tbody>;

export const TableCell = ({ children, className }) => (
  <td className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${className}`}>{children}</td>
);

export const TableHead = ({ children }) => (
  <thead className="bg-gray-50">
    <tr>{children}</tr>
  </thead>
);

export const TableHeaderCell = ({ children, className }) => (
  <th
    scope="col"
    className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${className}`}
  >
    {children}
  </th>
);

export const TableRow = ({ children }) => <tr>{children}</tr>;