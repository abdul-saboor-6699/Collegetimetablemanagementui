import { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Bell,
  LogOut,
  Power,
  UserCheck,
  MessageSquare,
  GraduationCap,
} from 'lucide-react';
import { todayLectures, teachers, subjects, classes, rooms, periods, substitutionRequests } from '../data/mockData';

interface TeacherPortalProps {
  onLogout: () => void;
}

export function TeacherPortal({ onLogout }: TeacherPortalProps) {
  const [availability, setAvailability] = useState<'free' | 'busy'>('free');
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  // Mock: Teacher ID would come from auth context
  const currentTeacherId = 'T004';
  const currentTeacher = teachers.find((t) => t.id === currentTeacherId);

  // Get teacher's lectures
  const myLectures = todayLectures.filter(
    (l) => l.teacherId === currentTeacherId || l.substituteTeacherId === currentTeacherId
  );

  // Get substitution requests for this teacher
  const mySubstitutionRequests = substitutionRequests.filter(
    (r) => r.substituteTeacherId === currentTeacherId && r.status === 'pending'
  );

  const getLectureDetails = (lecture: any) => {
    const subject = subjects.find((s) => s.id === lecture.subjectId);
    const classInfo = classes.find((c) => c.id === lecture.classId);
    const room = rooms.find((r) => r.id === lecture.roomId);
    const period = periods.find((p) => p.id === lecture.periodId);
    const isSubstitute = lecture.substituteTeacherId === currentTeacherId;
    
    return { subject, classInfo, room, period, isSubstitute };
  };

  const handleMarkAbsence = () => {
    alert('Absence marked. System will find substitute automatically.');
  };

  const handleLectureStart = (lectureId: string) => {
    alert(`Lecture ${lectureId} started`);
  };

  const handleLectureComplete = (lectureId: string) => {
    alert(`Lecture ${lectureId} marked as completed`);
  };

  const handleSubstitutionResponse = (requestId: string, action: 'accept' | 'decline') => {
    alert(`Substitution request ${requestId} ${action}ed`);
  };

  const upcomingLectures = myLectures.filter((l) => l.status === 'scheduled');
  const ongoingLectures = myLectures.filter((l) => l.status === 'ongoing');
  const completedLectures = myLectures.filter((l) => l.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Teacher Portal</h1>
                <p className="text-sm text-gray-600">{currentTeacher?.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Availability Toggle */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                <Power className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700">Status:</span>
                <button
                  onClick={() => setAvailability(availability === 'free' ? 'busy' : 'free')}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    availability === 'free'
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-red-100 text-red-700 hover:bg-red-200'
                  }`}
                >
                  {availability === 'free' ? 'Free' : 'Busy'}
                </button>
              </div>

              {/* Notification Bell */}
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Bell className="w-5 h-5 text-gray-700" />
                {mySubstitutionRequests.length > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                    {mySubstitutionRequests.length}
                  </span>
                )}
              </button>

              {/* Logout */}
              <button
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mark Absence Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Mark Absence</h3>
                  <p className="text-sm text-gray-600">System will find substitute</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleMarkAbsence}
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              I'm Absent Today
            </button>
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-teal-100">Today's Schedule</p>
                <h2 className="text-white mt-1">{myLectures.length} Lectures</h2>
              </div>
              <Calendar className="w-12 h-12 text-teal-200" />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-teal-400">
              <div>
                <p className="text-teal-100 text-sm">Completed</p>
                <p className="text-white mt-1">{completedLectures.length}</p>
              </div>
              <div>
                <p className="text-teal-100 text-sm">Ongoing</p>
                <p className="text-white mt-1">{ongoingLectures.length}</p>
              </div>
              <div>
                <p className="text-teal-100 text-sm">Upcoming</p>
                <p className="text-white mt-1">{upcomingLectures.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Substitution Requests */}
        {mySubstitutionRequests.length > 0 && (
          <div className="bg-white rounded-lg border border-orange-200 shadow-sm">
            <div className="p-4 bg-orange-50 border-b border-orange-200 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <h3 className="text-gray-900">Substitution Requests</h3>
              <span className="ml-auto px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                {mySubstitutionRequests.length} Pending
              </span>
            </div>
            <div className="p-4 space-y-4">
              {mySubstitutionRequests.map((request) => {
                const lecture = todayLectures.find((l) => l.id === request.lectureId);
                if (!lecture) return null;
                const details = getLectureDetails(lecture);
                return (
                  <div key={request.id} className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-gray-900">{details.subject?.name}</p>
                        <p className="text-sm text-gray-600">
                          {details.classInfo?.name} • {details.room?.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {details.period?.startTime} - {details.period?.endTime}
                        </p>
                      </div>
                      <span className="px-2 py-1 bg-orange-200 text-orange-700 rounded text-xs">
                        {request.reason}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleSubstitutionResponse(request.id, 'accept')}
                        className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Accept
                      </button>
                      <button
                        onClick={() => handleSubstitutionResponse(request.id, 'decline')}
                        className="flex-1 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Decline
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Today's Schedule */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-gray-900">Today's Schedule</h3>
            <p className="text-sm text-gray-600">Monday, December 24, 2024</p>
          </div>
          <div className="p-4 space-y-3">
            {myLectures.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No lectures scheduled for today</p>
            ) : (
              myLectures.map((lecture) => {
                const details = getLectureDetails(lecture);
                const isOngoing = lecture.status === 'ongoing';
                const isCompleted = lecture.status === 'completed';
                const isScheduled = lecture.status === 'scheduled';

                return (
                  <div
                    key={lecture.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      isOngoing
                        ? 'bg-green-50 border-green-300'
                        : isCompleted
                        ? 'bg-gray-50 border-gray-200'
                        : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <span className="text-gray-900">
                            {details.period?.startTime} - {details.period?.endTime}
                          </span>
                          {details.isSubstitute && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                              Substitute
                            </span>
                          )}
                        </div>
                        <h4 className="text-gray-900 mb-1">{details.subject?.name}</h4>
                        <p className="text-sm text-gray-600">
                          {details.classInfo?.name} • {details.room?.name}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          isOngoing
                            ? 'bg-green-600 text-white'
                            : isCompleted
                            ? 'bg-gray-600 text-white'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {isOngoing ? 'Ongoing' : isCompleted ? 'Completed' : 'Scheduled'}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    {isScheduled && (
                      <div className="flex gap-3 mt-3">
                        <button
                          onClick={() => handleLectureStart(lecture.id)}
                          className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Start Lecture
                        </button>
                      </div>
                    )}

                    {isOngoing && (
                      <div className="flex gap-3 mt-3">
                        <button
                          onClick={() => handleLectureComplete(lecture.id)}
                          className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <UserCheck className="w-4 h-4" />
                          Mark Complete
                        </button>
                      </div>
                    )}

                    {isCompleted && (
                      <div className="flex items-center gap-2 mt-3 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Lecture completed successfully</span>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* WhatsApp Notification Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-gray-900 mb-1">WhatsApp Notifications Enabled</p>
            <p className="text-sm text-gray-600">
              You'll receive instant notifications for substitution requests and schedule changes.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
