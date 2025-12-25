import {
  ArrowRight,
  Settings,
  Cpu,
  Search,
  Users,
  CheckCircle,
  BarChart3,
  GraduationCap,
} from 'lucide-react';

export function FlowVisualization() {
  const flowSteps = [
    {
      id: 1,
      title: 'Admin Control Panel',
      description: 'Create timetables, manage resources',
      icon: Settings,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'Timetable Engine',
      description: 'Process schedules and detect conflicts',
      icon: Cpu,
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      id: 3,
      title: 'Free Teacher Detection',
      description: 'Find available teachers for substitution',
      icon: Search,
      color: 'bg-teal-500',
      textColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      id: 4,
      title: 'Teacher Smart Portal',
      description: 'Confirm schedule & handle requests',
      icon: Users,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 5,
      title: 'CR Confirmation',
      description: 'Verify lecture conducted status',
      icon: CheckCircle,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      id: 6,
      title: 'Logs & Reports',
      description: 'Analytics and attendance tracking',
      icon: BarChart3,
      color: 'bg-red-500',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-gray-900 mb-2">System Flow</h2>
        <p className="text-gray-600">How the timetable management system works</p>
      </div>

      {/* Flow Diagram */}
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="space-y-6">
          {flowSteps.map((step, index) => (
            <div key={step.id}>
              {/* Step Card */}
              <div className="flex items-center gap-4">
                {/* Step Number */}
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-700">{step.id}</span>
                </div>

                {/* Step Content */}
                <div className="flex-1 p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${step.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <step.icon className={`w-6 h-6 ${step.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center my-2">
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Process Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Automation Logic */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Automation Logic</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-900 text-sm">Auto Substitution</p>
                <p className="text-xs text-gray-600">System finds free teachers when someone is absent</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-900 text-sm">Conflict Detection</p>
                <p className="text-xs text-gray-600">Prevents double-booking of teachers and rooms</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-900 text-sm">Real-time Notifications</p>
                <p className="text-xs text-gray-600">WhatsApp alerts to all stakeholders</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Status Tags */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-gray-900 mb-4">Status Indicators</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm text-gray-700">Auto-Assigned</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">System</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm text-gray-700">Waiting Approval</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">Pending</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm text-gray-700">Admin Intervention</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs">Required</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm text-gray-700">Confirmed</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Complete</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-white mb-4">Key System Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <h4 className="text-white mb-2">Smart Scheduling</h4>
            <p className="text-sm text-blue-100">AI-powered timetable generation with conflict prevention</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <h4 className="text-white mb-2">Real-time Tracking</h4>
            <p className="text-sm text-blue-100">Live monitoring of all lectures and attendance</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <h4 className="text-white mb-2">Instant Notifications</h4>
            <p className="text-sm text-blue-100">WhatsApp integration for immediate updates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
