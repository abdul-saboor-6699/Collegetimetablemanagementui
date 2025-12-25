import { Plus, Edit, Trash2, Clock } from 'lucide-react';
import { periods } from '../../data/mockData';

export function PeriodsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-2">Periods</h2>
          <p className="text-gray-600">Manage class timings and schedules</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Period
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-gray-700">Period Name</th>
              <th className="px-6 py-3 text-left text-gray-700">Start Time</th>
              <th className="px-6 py-3 text-left text-gray-700">End Time</th>
              <th className="px-6 py-3 text-left text-gray-700">Duration</th>
              <th className="px-6 py-3 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {periods.map((period) => {
              const isLunch = period.id === 'BREAK';
              return (
                <tr key={period.id} className={`hover:bg-gray-50 ${isLunch ? 'bg-yellow-50' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Clock className={`w-5 h-5 ${isLunch ? 'text-yellow-600' : 'text-blue-600'}`} />
                      <span className="text-gray-900">{period.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{period.startTime}</td>
                  <td className="px-6 py-4 text-gray-600">{period.endTime}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {isLunch ? '60 min' : '50 min'}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}