import { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  LogOut,
  GraduationCap,
  MessageSquare,
  User,
} from 'lucide-react';
import { todayLectures, teachers, subjects, classes, rooms, periods } from '../data/mockData';

interface CRInterfaceProps {
  onLogout: () => void;
}

export function CRInterface({ onLogout }: CRInterfaceProps) {
  // Mock: Class ID would come from auth context
  const classId = 'C001';
  const classInfo = classes.find((c) => c.id === classId);

  // Get lectures for this class
  const classLectures = todayLectures.filter((l) => l.classId === classId);

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

  const handleLectureConducted = (lectureId: string) => {
    alert(`Lecture ${lectureId} marked as conducted. WhatsApp notification sent to admin.`);
  };

  const handleLectureNotConducted = (lectureId: string) => {
    alert(`Lecture ${lectureId} marked as not conducted. Admin will be notified immediately.`);
  };

  const ongoingLectures = classLectures.filter((l) => l.status === 'ongoing');
  const upcomingLectures = classLectures.filter((l) => l.status === 'scheduled');
  const completedLectures = classLectures.filter((l) => l.status === 'completed');
  const pendingConfirmation = classLectures.filter((l) => !l.crConfirmed && l.status !== 'scheduled');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Class Representative</h1>
                <p className="text-sm text-gray-600">{classInfo?.name}</p>
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white mb-2">Welcome, Class Representative!</h2>
              <p className="text-purple-100">Monday, December 24, 2024</p>
            </div>
            <Calendar className="w-12 h-12 text-purple-200" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-purple-400">
            <div>
              <p className="text-purple-100 text-sm">Total</p>
              <p className="text-white mt-1">{classLectures.length}</p>
            </div>
            <div>
              <p className="text-purple-100 text-sm">Ongoing</p>
              <p className="text-white mt-1">{ongoingLectures.length}</p>
            </div>
            <div>
              <p className="text-purple-100 text-sm">Pending</p>
              <p className="text-white mt-1">{pendingConfirmation.length}</p>
            </div>
          </div>
        </div>

        {/* Pending Confirmation Alert */}
        {pendingConfirmation.length > 0 && (
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-900 mb-1">Action Required</p>
              <p className="text-sm text-gray-600">
                {pendingConfirmation.length} lecture(s) pending your confirmation
              </p>
            </div>
          </div>
        )}

        {/* Today's Timetable */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-gray-900">Today's Timetable</h3>
            <p className="text-sm text-gray-600">Confirm lecture status</p>
          </div>
          <div className="p-4 space-y-4">
            {classLectures.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No lectures scheduled for today</p>
            ) : (
              classLectures.map((lecture) => {
                const details = getLectureDetails(lecture);
                const isOngoing = lecture.status === 'ongoing';
                const isCompleted = lecture.status === 'completed';
                const isScheduled = lecture.status === 'scheduled';
                const isSubstituted = lecture.status === 'substituted';
                const needsConfirmation = !lecture.crConfirmed && !isScheduled;

                return (
                  <div
                    key={lecture.id}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      needsConfirmation
                        ? 'bg-yellow-50 border-yellow-300 shadow-md'
                        : isOngoing
                        ? 'bg-green-50 border-green-200'
                        : isCompleted && lecture.crConfirmed
                        ? 'bg-gray-50 border-gray-200'
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    {/* Time Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-900">
                          {details.period?.startTime} - {details.period?.endTime}
                        </span>
                        {needsConfirmation && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs animate-pulse">
                            Confirm Now
                          </span>
                        )}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          isOngoing
                            ? 'bg-green-600 text-white'
                            : isCompleted
                            ? 'bg-gray-600 text-white'
                            : isSubstituted
                            ? 'bg-yellow-600 text-white'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {isOngoing
                          ? 'Ongoing'
                          : isCompleted
                          ? 'Completed'
                          : isSubstituted
                          ? 'Substituted'
                          : 'Scheduled'}
                      </span>
                    </div>

                    {/* Lecture Details */}
                    <div className="mb-3">
                      <h4 className="text-gray-900 mb-2">{details.subject?.name}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                        <User className="w-3 h-3" />
                        {isSubstituted && details.substituteTeacher ? (
                          <span>
                            {details.substituteTeacher.name}
                            <span className="text-yellow-600 ml-2">(Substitute)</span>
                          </span>
                        ) : (
                          <span>{details.teacher?.name}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">Room: {details.room?.name}</p>
                    </div>

                    {/* Status Indicator */}
                    {lecture.crConfirmed && (
                      <div className="flex items-center gap-2 text-green-600 mb-3">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm">Confirmed by you</span>
                      </div>
                    )}

                    {/* Substitution Notice */}
                    {isSubstituted && (
                      <div className="mb-3 p-3 bg-yellow-100 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-gray-700">
                          <AlertCircle className="w-4 h-4 inline mr-1" />
                          Original teacher: <span className="text-gray-900">{details.teacher?.name}</span> is
                          absent.
                        </p>
                      </div>
                    )}

                    {/* Confirmation Buttons */}
                    {needsConfirmation && (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-700 mb-2">Did this lecture take place?</p>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => handleLectureConducted(lecture.id)}
                            className="py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                          >
                            <CheckCircle className="w-5 h-5" />
                            Conducted
                          </button>
                          <button
                            onClick={() => handleLectureNotConducted(lecture.id)}
                            className="py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                          >
                            <XCircle className="w-5 h-5" />
                            Not Conducted
                          </button>
                        </div>
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
            <p className="text-gray-900 mb-1">WhatsApp Notifications Active</p>
            <p className="text-sm text-gray-600">
              All confirmations are automatically sent to admin and teachers via WhatsApp.
            </p>
          </div>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="text-gray-900 mb-3">Your Responsibilities</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Confirm whether each lecture was conducted or not</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Report immediately if a teacher doesn't show up</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Verify substitute teacher arrangements</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
