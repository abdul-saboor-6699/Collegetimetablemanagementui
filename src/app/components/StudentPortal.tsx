import { useState } from 'react';
import {
  Calendar,
  Clock,
  BookOpen,
  MapPin,
  User,
  LogOut,
  GraduationCap,
  AlertCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronRight,
  FlaskConical,
  Coffee,
} from 'lucide-react';
import {
  weeklyTimetable,
  teachers,
  subjects,
  classes,
  rooms,
  periods,
  days,
  students,
} from '../data/mockData';

interface StudentPortalProps {
  onLogout: () => void;
}

export function StudentPortal({ onLogout }: StudentPortalProps) {
  // Mock: Student ID would come from auth context
  const studentId = 'ST001';
  const student = students.find((s) => s.id === studentId);
  const classId = student?.classId || 'C001';
  const classInfo = classes.find((c) => c.id === classId);

  const [selectedDay, setSelectedDay] = useState('Monday');

  // Get timetable for the student's class
  const classTimetable = weeklyTimetable.filter((l) => l.classId === classId);

  const getLectureDetails = (lecture: any) => {
    const subject = subjects.find((s) => s.id === lecture.subjectId);
    const teacher = teachers.find((t) => t.id === lecture.teacherId);
    const substituteTeacher = lecture.substituteTeacherId
      ? teachers.find((t) => t.id === lecture.substituteTeacherId)
      : null;
    const room = rooms.find((r) => r.id === lecture.roomId);
    const period = periods.find((p) => p.id === lecture.periodId);

    return { subject, teacher, substituteTeacher, room, period };
  };

  // Get today's lectures
  const todayLectures = classTimetable.filter((l) => l.day === 'Monday');

  // Get selected day lectures
  const selectedDayLectures = classTimetable
    .filter((l) => l.day === selectedDay)
    .sort((a, b) => {
      const periodA = periods.find((p) => p.id === a.periodId);
      const periodB = periods.find((p) => p.id === b.periodId);
      return (periodA?.startTime || '').localeCompare(periodB?.startTime || '');
    });

  // Include all periods including break for the selected day
  const allPeriodsForDay = periods.map((period) => {
    const lecture = selectedDayLectures.find((l) => l.periodId === period.id);
    return { period, lecture };
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
            <CheckCircle className="w-3 h-3" />
            Completed
          </div>
        );
      case 'ongoing':
        return (
          <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
            <Clock className="w-3 h-3" />
            Ongoing
          </div>
        );
      case 'cancelled':
        return (
          <div className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs">
            <XCircle className="w-3 h-3" />
            Cancelled
          </div>
        );
      case 'substituted':
        return (
          <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs">
            <AlertTriangle className="w-3 h-3" />
            Substituted
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
            <Calendar className="w-3 h-3" />
            Scheduled
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Student Portal</h1>
                <p className="text-sm text-gray-600">{student?.name} • {student?.rollNo}</p>
              </div>
            </div>

            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white mb-2">Your Timetable</h2>
              <p className="text-blue-100">{classInfo?.name}</p>
              <p className="text-blue-100 text-sm mt-1">Monday, December 24, 2024</p>
            </div>
            <Calendar className="w-12 h-12 text-blue-200" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-blue-400">
            <div>
              <p className="text-blue-100 text-sm">Today's Classes</p>
              <p className="text-white mt-1">{todayLectures.length}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">This Week</p>
              <p className="text-white mt-1">{classTimetable.length}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Total Subjects</p>
              <p className="text-white mt-1">
                {new Set(classTimetable.map((l) => l.subjectId)).size}
              </p>
            </div>
          </div>
        </div>

        {/* Day Selector */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-gray-900 mb-4">Select Day</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedDay === day
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="text-center">
                  <p className="text-sm">{day}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {classTimetable.filter((l) => l.day === day).length} lectures
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-900">Timetable - {selectedDay}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {selectedDayLectures.length} lectures scheduled
                </p>
              </div>
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {allPeriodsForDay.map(({ period, lecture }) => {
                // Break period - disabled and styled differently
                if (period.isBreak) {
                  return (
                    <div
                      key={period.id}
                      className="p-4 rounded-lg bg-amber-50 border-2 border-amber-200 opacity-75"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <Coffee className="w-5 h-5 text-amber-600" />
                          </div>
                          <div>
                            <h4 className="text-gray-900">{period.name}</h4>
                            <p className="text-sm text-gray-600">30 minutes</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Clock className="w-4 h-4" />
                            <span>{period.startTime} - {period.endTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Free period - no lecture scheduled
                if (!lecture) {
                  return (
                    <div
                      key={period.id}
                      className="p-4 rounded-lg bg-gray-50 border-2 border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-gray-500">Free Period</h4>
                          <p className="text-sm text-gray-400">{period.name}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{period.startTime} - {period.endTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Regular lecture
                const { subject, teacher, substituteTeacher, room, period: lecturePeriod } =
                  getLectureDetails(lecture);

                // Determine if it's a lab/practical
                const isLab = lecture.lectureType === 'practical' || 
                             lecture.lectureType === 'theory-practical' ||
                             room?.type === 'Laboratory';

                return (
                  <div
                    key={lecture.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isLab
                        ? 'bg-purple-50 border-purple-300 hover:border-purple-400'
                        : 'bg-blue-50 border-blue-300 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            isLab ? 'bg-purple-200' : 'bg-blue-200'
                          }`}>
                            {isLab ? (
                              <FlaskConical className={`w-5 h-5 ${isLab ? 'text-purple-700' : 'text-blue-700'}`} />
                            ) : (
                              <BookOpen className={`w-5 h-5 ${isLab ? 'text-purple-700' : 'text-blue-700'}`} />
                            )}
                          </div>
                          <div>
                            <h4 className="text-gray-900">{subject?.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <p className="text-sm text-gray-600">{subject?.code}</p>
                              {lecture.lectureType === 'theory-practical' && (
                                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">
                                  Theory + Practical
                                </span>
                              )}
                              {lecture.lectureType === 'practical' && (
                                <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">
                                  Practical
                                </span>
                              )}
                              {lecture.lectureType === 'theory' && (
                                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                                  Theory
                                </span>
                              )}
                            </div>
                          </div>
                          {getStatusBadge(lecture.status)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4" />
                          <span>{period.startTime} - {period.endTime}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{period.name}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-gray-700">
                        <User className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm">
                            {lecture.status === 'substituted' && substituteTeacher
                              ? substituteTeacher.name
                              : teacher?.name}
                          </p>
                          {lecture.status === 'substituted' && (
                            <p className="text-xs text-orange-600">
                              (Substitute for {teacher?.name})
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <div>
                          <p className="text-sm">{room?.name}</p>
                          <p className="text-xs text-gray-500">{room?.building}</p>
                        </div>
                      </div>
                    </div>

                    {lecture.status === 'cancelled' && (
                      <div className="mt-3 p-2 bg-red-50 rounded-lg flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                        <p className="text-sm text-red-700">
                          This lecture has been cancelled. Check with your CR for more details.
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Weekly Overview */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-gray-900">Weekly Overview</h3>
            <p className="text-gray-600 text-sm mt-1">Quick view of all your subjects</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from(new Set(classTimetable.map((l) => l.subjectId))).map((subjectId) => {
                const subject = subjects.find((s) => s.id === subjectId);
                const subjectLectures = classTimetable.filter((l) => l.subjectId === subjectId);
                const primaryTeacher = teachers.find(
                  (t) => t.id === subjectLectures[0]?.teacherId
                );

                return (
                  <div
                    key={subjectId}
                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-gray-900">{subject?.name}</h4>
                        <p className="text-sm text-gray-600">{subject?.code}</p>
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Credits</span>
                        <span className="text-gray-900">{subject?.credits}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Weekly Lectures</span>
                        <span className="text-gray-900">{subjectLectures.length}</span>
                      </div>
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-xs text-gray-500 mb-1">Instructor</p>
                        <p className="text-sm text-gray-900">{primaryTeacher?.name}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        {todayLectures.some((l) => l.status === 'cancelled' || l.status === 'substituted') && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-orange-900 mb-2">Important Updates</h4>
                <ul className="space-y-2">
                  {todayLectures
                    .filter((l) => l.status === 'cancelled' || l.status === 'substituted')
                    .map((lecture) => {
                      const { subject, teacher, substituteTeacher } = getLectureDetails(lecture);
                      return (
                        <li key={lecture.id} className="text-sm text-orange-800 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-0.5" />
                          <span>
                            {lecture.status === 'cancelled'
                              ? `${subject?.name} has been cancelled`
                              : `${subject?.name} will be taken by ${substituteTeacher?.name} (substitute for ${teacher?.name})`}
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}