import React from "react";

const pageData = [
  {
    name: "/demo/admin/index.html",
    views: "4,525",
    value: "$255",
    bounce: "42.55%",
  },
  {
    name: "/demo/admin/forms.html",
    views: "2,987",
    value: "$139",
    bounce: "43.52%",
  },
  {
    name: "/demo/admin/util.html",
    views: "2,844",
    value: "$124",
    bounce: "32.35%",
  },
  {
    name: "/demo/admin/validation.html",
    views: "1,220",
    value: "$55",
    bounce: "15.78%",
  },
  {
    name: "/demo/admin/modals.html",
    views: "505",
    value: "$3",
    bounce: "75.12%",
  },
];

const PageVisits = () => {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Page Visits</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3">Page name</th>
              <th className="px-4 py-3">Page Views</th>
              <th className="px-4 py-3">Page Value</th>
              <th className="px-4 py-3">Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {pageData.map((row, idx) => (
              <tr
                key={idx}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="px-4 py-3 font-medium">{row.name}</td>
                <td className="px-4 py-3">{row.views}</td>
                <td className="px-4 py-3">{row.value}</td>
                <td className="px-4 py-3">{row.bounce}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageVisits;
