import { Plus, Edit, Trash2 } from 'lucide-react';
import { subjects } from '../../data/mockData';

export function SubjectsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-2">Subjects</h2>
          <p className="text-gray-600">Manage course subjects and codes</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Subject
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <div key={subject.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-gray-900 mb-1">{subject.name}</h3>
                <p className="text-sm text-gray-600">Code: {subject.code}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                {subject.credits} Credits
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
