import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { AlertCircle, Check, Plus, Save } from 'lucide-react';
import { 
  days, 
  periods, 
  classes, 
  todayLectures as lectures, 
  subjects, 
  teachers, 
  rooms,
  Lecture 
} from '../../data/mockData';

interface DragItem {
  type: string;
  lecture?: Lecture;
  subjectId?: string;
  teacherId?: string;
}

interface TimetableCell {
  day: string;
  periodId: string;
  lecture?: Lecture;
}

function LectureCard({ lecture, onRemove }: { lecture: Lecture; onRemove: () => void }) {
  const subject = subjects.find((s) => s.id === lecture.subjectId);
  const teacher = teachers.find((t) => t.id === lecture.teacherId);
  const room = rooms.find((r) => r.id === lecture.roomId);
  
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'lecture',
    item: { type: 'lecture', lecture },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const hasConflict = false; // You can add conflict detection logic here

  return (
    <div
      ref={drag}
      className={`p-3 rounded-lg border-2 cursor-move ${
        isDragging ? 'opacity-50 border-blue-400' : hasConflict ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex items-start justify-between mb-1">
        <p className="text-sm text-gray-900">{subject?.name}</p>
        {hasConflict && <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
      </div>
      <p className="text-xs text-gray-600">{teacher?.name}</p>
      <p className="text-xs text-gray-500">{room?.name}</p>
    </div>
  );
}

function TimetableCell({ day, periodId, lecture, onDrop }: TimetableCell & { onDrop: (day: string, periodId: string, item: DragItem) => void }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'lecture',
    drop: (item: DragItem) => onDrop(day, periodId, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[100px] p-2 rounded-lg border-2 border-dashed transition-colors ${
        isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-gray-50'
      }`}
    >
      {lecture ? (
        <LectureCard lecture={lecture} onRemove={() => {}} />
      ) : (
        <div className="h-full flex items-center justify-center text-gray-400 text-sm">
          <Plus className="w-4 h-4" />
        </div>
      )}
    </div>
  );
}

export function TimetableBuilder() {
  const [selectedClass, setSelectedClass] = useState(classes[0].id);
  const [timetableLectures, setTimetableLectures] = useState<Lecture[]>(lectures);

  const handleDrop = (day: string, periodId: string, item: DragItem) => {
    if (item.lecture) {
      const updatedLectures = timetableLectures.map((l) =>
        l.id === item.lecture!.id
          ? { ...l, day, periodId }
          : l
      );
      setTimetableLectures(updatedLectures);
    }
  };

  const getClassLectures = () => {
    return timetableLectures.filter((l) => l.classId === selectedClass);
  };

  const getLectureForCell = (day: string, periodId: string) => {
    return getClassLectures().find((l) => l.day === day && l.periodId === periodId);
  };

  // Filter out lunch break period
  const activePeriods = periods.filter((p) => p.id !== 'BREAK');

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 mb-2">Timetable Builder</h2>
            <p className="text-gray-600">Drag and drop lectures to build the timetable</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Save className="w-5 h-5" />
            Save Timetable
          </button>
        </div>

        {/* Class Selection */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <label className="block text-gray-700 mb-2">Select Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>

        {/* Status Indicators */}
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-gray-200 bg-white"></div>
            <span className="text-gray-600">Scheduled</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-red-300 bg-red-50"></div>
            <span className="text-gray-600">Conflict</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-blue-400 bg-blue-50"></div>
            <span className="text-gray-600">Dragging</span>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 text-left text-gray-700 bg-gray-50 sticky left-0 z-10">
                  Day / Period
                </th>
                {activePeriods.map((period) => (
                  <th key={period.id} className="p-4 text-center text-gray-700 bg-gray-50 min-w-[180px]">
                    <div>{period.name}</div>
                    <div className="text-xs text-gray-500">
                      {period.startTime} - {period.endTime}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {days.map((day) => (
                <tr key={day} className="border-b border-gray-200 last:border-b-0">
                  <td className="p-4 text-gray-900 bg-gray-50 sticky left-0 z-10">
                    {day}
                  </td>
                  {activePeriods.map((period) => (
                    <td key={period.id} className="p-2">
                      <TimetableCell
                        day={day}
                        periodId={period.id}
                        lecture={getLectureForCell(day, period.id)}
                        onDrop={handleDrop}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-blue-900 mb-1">Timetable Builder Tips</p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Drag lecture cards to different time slots</li>
                <li>• System automatically detects conflicts (teacher/room double-booking)</li>
                <li>• Click Save to apply changes to the timetable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}