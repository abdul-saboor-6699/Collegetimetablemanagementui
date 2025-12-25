import { useState } from 'react';
import { Edit, Save, X, Check } from 'lucide-react';
import { teachers, classes, subjects, todayLectures as lectures, periods } from '../../data/mockData';

export function ManualOverride() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState<string | null>(null);
  const [selectedTeacher, setSelectedTeacher] = useState<string>('');

  // Get lectures that need intervention
  const interventionNeeded = lectures.filter(
    (l) => l.substitutionStatus === 'admin-intervention' || l.status === 'cancelled'
  );

  const handleAssign = () => {
    // Handle manual assignment logic here
    setIsEditing(false);
    setSelectedLecture(null);
    setSelectedTeacher('');
  };

  const getLectureDetails = (lectureId: string) => {
    const lecture = lectures.find((l) => l.id === lectureId);
    if (!lecture) return null;

    const teacher = teachers.find((t) => t.id === lecture.teacherId);
    const subject = subjects.find((s) => s.id === lecture.subjectId);
    const classInfo = classes.find((c) => c.id === lecture.classId);
    const period = periods.find((p) => p.id === lecture.periodId);

    return { lecture, teacher, subject, classInfo, period };
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-gray-900">Manual Override Panel</h3>
          <p className="text-sm text-gray-600 mt-1">Manually assign substitute teachers</p>
        </div>
        {interventionNeeded.length > 0 && (
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
            {interventionNeeded.length} Intervention{interventionNeeded.length !== 1 ? 's' : ''} Needed
          </span>
        )}
      </div>

      <div className="p-4">
        {interventionNeeded.length > 0 ? (
          <div className="space-y-4">
            {interventionNeeded.map((lecture) => {
              const details = getLectureDetails(lecture.id);
              if (!details) return null;

              const isSelected = selectedLecture === lecture.id;

              return (
                <div key={lecture.id} className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-gray-900 mb-1">{details.subject?.name}</p>
                      <p className="text-sm text-gray-600">
                        {details.classInfo?.name} • {details.period?.name} ({details.period?.startTime} - {details.period?.endTime})
                      </p>
                      <p className="text-sm text-red-600 mt-1">
                        Original Teacher: {details.teacher?.name} (Absent)
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsEditing(true);
                        setSelectedLecture(lecture.id);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <Edit className="w-4 h-4" />
                      Assign
                    </button>
                  </div>

                  {isSelected && isEditing && (
                    <div className="mt-4 pt-4 border-t border-red-200 space-y-3">
                      <div>
                        <label className="block text-gray-700 text-sm mb-2">
                          Select Substitute Teacher
                        </label>
                        <select
                          value={selectedTeacher}
                          onChange={(e) => setSelectedTeacher(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select a teacher...</option>
                          {teachers
                            .filter((t) => t.id !== lecture.teacherId)
                            .map((t) => (
                              <option key={t.id} value={t.id}>
                                {t.name} - {t.subject}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={handleAssign}
                          disabled={!selectedTeacher}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                        >
                          <Check className="w-4 h-4" />
                          Confirm Assignment
                        </button>
                        <button
                          onClick={() => {
                            setIsEditing(false);
                            setSelectedLecture(null);
                            setSelectedTeacher('');
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          <X className="w-4 h-4" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-900 mb-1">All Clear!</p>
            <p className="text-gray-600 text-sm">No manual interventions needed at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
}