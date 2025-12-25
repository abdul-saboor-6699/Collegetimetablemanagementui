import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { analyticsData } from '../../data/mockData';

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-2">Reports & Analytics</h2>
          <p className="text-gray-600">Track substitutions, workload, and trends</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4" />
            Export Excel
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Total Substitutions</p>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl text-gray-900 mb-1">15</p>
          <p className="text-sm text-green-600">+12% from last week</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Avg Response Time</p>
            <TrendingDown className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl text-gray-900 mb-1">2.3 min</p>
          <p className="text-sm text-green-600">-15% improvement</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">Empty Classes</p>
            <Minus className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-3xl text-gray-900 mb-1">0</p>
          <p className="text-sm text-gray-600">No change</p>
        </div>
      </div>

      {/* Daily Substitution Report */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Daily Substitution Report</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={analyticsData.weeklySubstitutions}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="count" fill="#3b82f6" name="Substitutions" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Teacher Workload Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Teacher Workload Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={analyticsData.teacherWorkload} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" stroke="#6b7280" />
            <YAxis dataKey="name" type="category" stroke="#6b7280" width={120} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="lectures" fill="#14b8a6" name="Lectures/Week" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Absence Trends Graph */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-gray-900 mb-4">Absence Trends (Last 5 Months)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={analyticsData.absenceTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#f59e0b"
              strokeWidth={3}
              name="Teacher Absences"
              dot={{ fill: '#f59e0b', r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Empty Lecture Statistics */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">Empty Lecture Statistics</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-gray-700">Class</th>
                <th className="px-6 py-3 text-left text-gray-700">Period</th>
                <th className="px-6 py-3 text-left text-gray-700">Subject</th>
                <th className="px-6 py-3 text-left text-gray-700">Reason</th>
                <th className="px-6 py-3 text-left text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Dec 20, 2024</td>
                <td className="px-6 py-4 text-gray-900">CS-A</td>
                <td className="px-6 py-4 text-gray-600">Period 4</td>
                <td className="px-6 py-4 text-gray-600">Database Systems</td>
                <td className="px-6 py-4 text-gray-600">No substitute found</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                    Cancelled
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-900">Dec 18, 2024</td>
                <td className="px-6 py-4 text-gray-900">IT-A</td>
                <td className="px-6 py-4 text-gray-600">Period 2</td>
                <td className="px-6 py-4 text-gray-600">Web Development</td>
                <td className="px-6 py-4 text-gray-600">Late notification</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Resolved
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}