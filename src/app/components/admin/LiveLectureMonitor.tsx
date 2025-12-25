import { Activity, UserCheck, UserX, DoorClosed, Users, AlertCircle } from 'lucide-react';
import { todayLectures as lectures, teachers, subjects, classes, rooms, periods } from '../../data/mockData';

export function LiveLectureMonitor() {
  // Get current time period (mocked as Period 3)
  const currentPeriod = periods[2]; // Period 3
  
  const currentLectures = lectures.filter((l) => l.periodId === currentPeriod.id);
  
  const ongoingLectures = currentLectures.filter((l) => l.status === 'ongoing');
  const substitutedLectures = currentLectures.filter((l) => l.status === 'substituted');
  const cancelledLectures = currentLectures.filter((l) => l.status === 'cancelled');
  const scheduledLectures = currentLectures.filter((l) => l.status === 'scheduled');

  const stats = [
    {
      title: 'Ongoing Lectures',
      count: ongoingLectures.length,
      icon: Activity,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Teacher Absent',
      count: substitutedLectures.length,
      icon: UserX,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Empty Classes',
      count: cancelledLectures.length,
      icon: DoorClosed,
      color: 'bg-red-500',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Substituted',
      count: substitutedLectures.length,
      icon: Users,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
  ];

  const getLectureDetails = (lecture: any) => {
    const teacher = teachers.find((t) => t.id === lecture.teacherId);
    const subject = subjects.find((s) => s.id === lecture.subjectId);
    const classInfo = classes.find((c) => c.id === lecture.classId);
    const room = rooms.find((r) => r.id === lecture.roomId);
    const substituteTeacher = lecture.substituteTeacherId 
      ? teachers.find((t) => t.id === lecture.substituteTeacherId)
      : null;

    return { teacher, subject, classInfo, room, substituteTeacher };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 mb-1">Live Lecture Monitor</h2>
          <p className="text-gray-600">
            Current Period: {currentPeriod.name} ({currentPeriod.startTime} - {currentPeriod.endTime})
          </p>
        </div>
        <div className="flex items-center gap-2 text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm">Live</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <div className={`w-8 h-8 ${stat.color} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-sm">{stat.count}</span>
                </div>
              </div>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Ongoing Lectures */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-gray-900">Ongoing Lectures</h3>
        </div>
        <div className="p-4">
          {ongoingLectures.length > 0 ? (
            <div className="space-y-3">
              {ongoingLectures.map((lecture) => {
                const details = getLectureDetails(lecture);
                return (
                  <div key={lecture.id} className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-900">{details.subject?.name}</p>
                        <p className="text-sm text-gray-600">
                          {details.classInfo?.name} • {details.teacher?.name} • {details.room?.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {lecture.isConfirmedByCR && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          CR Confirmed
                        </span>
                      )}
                      <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                        In Progress
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No ongoing lectures</p>
          )}
        </div>
      </div>

      {/* Substituted Lectures */}
      {substitutedLectures.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-gray-900">Substituted Lectures</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {substitutedLectures.map((lecture) => {
                const details = getLectureDetails(lecture);
                return (
                  <div key={lecture.id} className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-900">{details.subject?.name}</p>
                          <p className="text-sm text-gray-600">{details.classInfo?.name} • {details.room?.name}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        lecture.substitutionStatus === 'auto-assigned'
                          ? 'bg-blue-100 text-blue-700'
                          : lecture.substitutionStatus === 'waiting-approval'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {lecture.substitutionStatus === 'auto-assigned' && 'Auto-Assigned'}
                        {lecture.substitutionStatus === 'waiting-approval' && 'Waiting Approval'}
                        {lecture.substitutionStatus === 'admin-intervention' && 'Admin Intervention'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <UserX className="w-4 h-4 text-red-500" />
                      <span className="text-gray-600">Original: {details.teacher?.name}</span>
                      <span className="text-gray-400">→</span>
                      <UserCheck className="w-4 h-4 text-green-500" />
                      <span className="text-gray-900">Substitute: {details.substituteTeacher?.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Scheduled Lectures */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-gray-900">Scheduled Lectures</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700">Class</th>
                <th className="px-4 py-3 text-left text-gray-700">Subject</th>
                <th className="px-4 py-3 text-left text-gray-700">Teacher</th>
                <th className="px-4 py-3 text-left text-gray-700">Room</th>
                <th className="px-4 py-3 text-left text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {scheduledLectures.map((lecture) => {
                const details = getLectureDetails(lecture);
                return (
                  <tr key={lecture.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-900">{details.classInfo?.name}</td>
                    <td className="px-4 py-3 text-gray-900">{details.subject?.name}</td>
                    <td className="px-4 py-3 text-gray-600">{details.teacher?.name}</td>
                    <td className="px-4 py-3 text-gray-600">{details.room?.name}</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Scheduled
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}