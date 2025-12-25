import { Plus, Edit, Trash2, Users } from 'lucide-react';
import { rooms } from '../../data/mockData';

export function RoomsManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-2">Rooms</h2>
          <p className="text-gray-600">Manage classrooms, labs, and venues</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Room
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-gray-900 mb-1">{room.name}</h3>
                <span className={`inline-block px-2 py-1 rounded text-xs ${
                  room.type === 'Classroom' ? 'bg-blue-100 text-blue-700' :
                  room.type === 'Laboratory' ? 'bg-purple-100 text-purple-700' :
                  'bg-teal-100 text-teal-700'
                }`}>
                  {room.type}
                </span>
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
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">Capacity: {room.capacity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}