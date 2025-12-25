// Real Academic Data from GCT Bhakkar (CIT – Second Shift)

export type UserRole = 'admin' | 'teacher' | 'cr' | 'student';

// Real Teachers from GCT Bhakkar
export const teachers = [
  { id: 'T001', name: 'Nasrullah Jamil', subject: 'Electronics', email: 'nasrullah.jamil@gctbhakkar.edu' },
  { id: 'T002', name: 'Joun Abbas', subject: 'English', email: 'joun.abbas@gctbhakkar.edu' },
  { id: 'T003', name: 'Rao M. Haziq', subject: 'Computer Science', email: 'rao.haziq@gctbhakkar.edu' },
  { id: 'T004', name: 'Tanveer Saqib', subject: 'Electronics', email: 'tanveer.saqib@gctbhakkar.edu' },
  { id: 'T005', name: 'Khurram Shahzad', subject: 'Mathematics', email: 'khurram.shahzad@gctbhakkar.edu' },
  { id: 'T006', name: 'Ijaz Ahmad', subject: 'Computer Science', email: 'ijaz.ahmad@gctbhakkar.edu' },
  { id: 'T007', name: 'Umair Khalil', subject: 'Career Counseling', email: 'umair.khalil@gctbhakkar.edu' },
  { id: 'T008', name: 'Zohaib Hassan', subject: 'Chemistry', email: 'zohaib.hassan@gctbhakkar.edu' },
  { id: 'T009', name: 'Shah Hussain', subject: 'Physics', email: 'shah.hussain@gctbhakkar.edu' },
  { id: 'T010', name: 'Mohib Mahdi', subject: 'Technology & Tools', email: 'mohib.mahdi@gctbhakkar.edu' },
  { id: 'T011', name: 'Inayat Ali Khan', subject: 'General Studies', email: 'inayat.khan@gctbhakkar.edu' },
  { id: 'T012', name: 'Muhammad Ismail', subject: 'Computer Science', email: 'm.ismail@gctbhakkar.edu' },
  { id: 'T013', name: 'Mahmood-ul-Hasan', subject: 'Computer Science', email: 'mahmood.hasan@gctbhakkar.edu' },
  { id: 'T014', name: 'Imran Kafi', subject: 'Management', email: 'imran.kafi@gctbhakkar.edu' },
  { id: 'T015', name: 'Muhammad Zeshan', subject: 'Computer Science', email: 'm.zeshan@gctbhakkar.edu' },
];

// Real Classes - CIT Department (Second Shift)
export const classes = [
  { id: 'C001', name: '1st Year CIT', section: 'Second Shift', year: 1, department: 'CIT', strength: 45 },
  { id: 'C002', name: '2nd Year CIT', section: 'Second Shift', year: 2, department: 'CIT', strength: 40 },
  { id: 'C003', name: '3rd Year CIT', section: 'Second Shift', year: 3, department: 'CIT', strength: 38 },
];

// Real Subjects from GCT Bhakkar Timetable
export const subjects = [
  // 1st Year Subjects
  { id: 'S001', name: 'Computer Applications', code: 'CIT-124', department: 'CIT', credits: 3, type: 'theory-practical' },
  { id: 'S002', name: 'English', code: 'Eng-112', department: 'General', credits: 3, type: 'theory' },
  { id: 'S003', name: 'Programming Fundamentals', code: 'CIT-114', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S004', name: 'Applied Mathematics', code: 'Math-123', department: 'Mathematics', credits: 3, type: 'theory' },
  { id: 'S005', name: 'Computer Hardware', code: 'CIT-103', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S006', name: 'Chemistry', code: 'CH-132', department: 'Science', credits: 3, type: 'theory-practical' },
  { id: 'S007', name: 'Physics', code: 'Phy-132', department: 'Science', credits: 3, type: 'theory-practical' },
  { id: 'S008', name: 'Technology & Tools', code: 'TTO-111', department: 'CIT', credits: 2, type: 'theory' },
  { id: 'S009', name: 'Computer Programming', code: 'CIT-101', department: 'CIT', credits: 3, type: 'theory' },
  { id: 'S010', name: 'IT Applications', code: 'CIT-141', department: 'CIT', credits: 2, type: 'practical' },
  { id: 'S011', name: 'General Studies', code: 'Gen-111', department: 'General', credits: 2, type: 'theory' },
  
  // 2nd Year Subjects
  { id: 'S012', name: 'Database Systems', code: 'CIT-204', department: 'CIT', credits: 4, type: 'practical' },
  { id: 'S013', name: 'Electronics', code: 'CIT-273', department: 'CIT', credits: 3, type: 'theory-practical' },
  { id: 'S014', name: 'Web Development', code: 'CIT-293', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S015', name: 'Technology & Tools II', code: 'TTO-211', department: 'CIT', credits: 2, type: 'theory' },
  { id: 'S016', name: 'Data Structures', code: 'CIT-283', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S017', name: 'Applied Mathematics II', code: 'Math-223', department: 'Mathematics', credits: 3, type: 'theory' },
  { id: 'S018', name: 'Management', code: 'MGM-211', department: 'Management', credits: 2, type: 'theory' },
  { id: 'S019', name: 'General Studies II', code: 'Gen-211', department: 'General', credits: 2, type: 'theory' },
  { id: 'S020', name: 'Software Engineering', code: 'CIT-203', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S021', name: 'Networking Basics', code: 'CIT-222', department: 'CIT', credits: 4, type: 'theory-practical' },
  
  // 3rd Year Subjects
  { id: 'S022', name: 'Advanced Programming', code: 'CIT-344', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S023', name: 'Professional English', code: 'Eng-311', department: 'General', credits: 2, type: 'theory' },
  { id: 'S024', name: 'Network Administration', code: 'CIT-303', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S025', name: 'System Analysis & Design', code: 'CIT-352', department: 'CIT', credits: 3, type: 'theory-practical' },
  { id: 'S026', name: 'Operating Systems', code: 'CIT-324', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S027', name: 'Mobile Application Development', code: 'CIT-333', department: 'CIT', credits: 4, type: 'theory-practical' },
  { id: 'S028', name: 'Management', code: 'MGT-331', department: 'Management', credits: 2, type: 'theory' },
  { id: 'S029', name: 'E-Commerce', code: 'CIT-362', department: 'CIT', credits: 3, type: 'practical' },
  { id: 'S030', name: 'General Studies III', code: 'Gen-311', department: 'General', credits: 2, type: 'theory' },
  { id: 'S031', name: 'Career Counseling', code: 'Career Counseling', department: 'General', credits: 0, type: 'theory' },
];

// Real Rooms/Labs from GCT Bhakkar
export const rooms = [
  { id: 'R001', name: 'Computer Lab-1', building: 'CIT Block', capacity: 30, type: 'Laboratory' },
  { id: 'R002', name: 'Computer Lab-2', building: 'CIT Block', capacity: 30, type: 'Laboratory' },
  { id: 'R003', name: 'Computer Lab-3', building: 'CIT Block', capacity: 30, type: 'Laboratory' },
  { id: 'R004', name: 'Electronics Lab', building: 'Engineering Block', capacity: 25, type: 'Laboratory' },
  { id: 'R005', name: 'Basic Lab-ET', building: 'Engineering Block', capacity: 25, type: 'Laboratory' },
  { id: 'R006', name: 'Physics Lab', building: 'Science Block', capacity: 25, type: 'Laboratory' },
  { id: 'R007', name: 'Chemistry Lab', building: 'Science Block', capacity: 25, type: 'Laboratory' },
  { id: 'R008', name: 'Room-2', building: 'Main Block', capacity: 40, type: 'Classroom' },
  { id: 'R009', name: 'Room-4', building: 'Main Block', capacity: 40, type: 'Classroom' },
  { id: 'R010', name: 'Room-5', building: 'Main Block', capacity: 40, type: 'Classroom' },
];

// Real Time Slots (Second Shift: 12:10 PM - 6:00 PM)
export const periods = [
  { id: 'P1', name: 'Period 1', startTime: '12:10', endTime: '12:50', isBreak: false },
  { id: 'P2', name: 'Period 2', startTime: '12:50', endTime: '01:30', isBreak: false },
  { id: 'P3', name: 'Period 3', startTime: '01:30', endTime: '02:10', isBreak: false },
  { id: 'BREAK', name: 'Break', startTime: '02:10', endTime: '02:40', isBreak: true },
  { id: 'P4', name: 'Period 4', startTime: '02:40', endTime: '03:20', isBreak: false },
  { id: 'P5', name: 'Period 5', startTime: '03:20', endTime: '04:00', isBreak: false },
  { id: 'P6', name: 'Period 6', startTime: '04:00', endTime: '04:40', isBreak: false },
  { id: 'P7', name: 'Period 7', startTime: '04:40', endTime: '05:20', isBreak: false },
  { id: 'P8', name: 'Period 8', startTime: '05:20', endTime: '06:00', isBreak: false },
];

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export interface Lecture {
  id: string;
  day: string;
  periodId: string;
  classId: string;
  subjectId: string;
  teacherId: string;
  roomId: string;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled' | 'substituted';
  substituteTeacherId?: string;
  substitutionStatus?: 'auto' | 'manual' | 'pending';
  crConfirmed?: boolean;
  teacherConfirmed?: boolean;
  lectureType: 'theory' | 'practical' | 'theory-practical';
}

// Students data
export const students = [
  { id: 'ST001', name: 'Ahmed Ali', classId: 'C001', rollNo: 'CIT-1-001', email: 'ahmed.ali@student.gctbhakkar.edu' },
  { id: 'ST002', name: 'Fatima Khan', classId: 'C001', rollNo: 'CIT-1-002', email: 'fatima.khan@student.gctbhakkar.edu' },
  { id: 'ST003', name: 'Hassan Raza', classId: 'C002', rollNo: 'CIT-2-001', email: 'hassan.raza@student.gctbhakkar.edu' },
  { id: 'ST004', name: 'Ayesha Malik', classId: 'C002', rollNo: 'CIT-2-002', email: 'ayesha.malik@student.gctbhakkar.edu' },
  { id: 'ST005', name: 'Usman Tariq', classId: 'C003', rollNo: 'CIT-3-001', email: 'usman.tariq@student.gctbhakkar.edu' },
  { id: 'ST006', name: 'Zainab Ahmed', classId: 'C003', rollNo: 'CIT-3-002', email: 'zainab.ahmed@student.gctbhakkar.edu' },
];

// Complete Weekly Timetable for all CIT Classes - GCT Bhakkar (Real Data)
export const weeklyTimetable: Lecture[] = [
  // ========== MONDAY - 1st YEAR CIT ==========
  {
    id: 'L1M1',
    day: 'Monday',
    periodId: 'P1',
    classId: 'C001',
    subjectId: 'S001', // CIT-124 (T)
    teacherId: 'T001', // Nasrullah Jamil
    roomId: 'R004', // Electronics Lab
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1M2',
    day: 'Monday',
    periodId: 'P2',
    classId: 'C001',
    subjectId: 'S002', // Eng-112
    teacherId: 'T002', // Joun Abbas
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1M3',
    day: 'Monday',
    periodId: 'P3',
    classId: 'C001',
    subjectId: 'S003', // CIT-114 (T)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1M4',
    day: 'Monday',
    periodId: 'P4',
    classId: 'C001',
    subjectId: 'S001', // CIT-124 (P)
    teacherId: 'T004', // Tanveer Saqib
    roomId: 'R004', // Electronics Lab
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1M5',
    day: 'Monday',
    periodId: 'P5',
    classId: 'C001',
    subjectId: 'S004', // Math-123
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1M6',
    day: 'Monday',
    periodId: 'P6',
    classId: 'C001',
    subjectId: 'S005', // CIT-103 (T,P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory-practical',
  },

  // ========== TUESDAY - 1st YEAR CIT ==========
  {
    id: 'L1T1',
    day: 'Tuesday',
    periodId: 'P1',
    classId: 'C001',
    subjectId: 'S001', // CIT-124 (T)
    teacherId: 'T001', // Nasrullah Jamil
    roomId: 'R004', // Electronics Lab
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1T2',
    day: 'Tuesday',
    periodId: 'P2',
    classId: 'C001',
    subjectId: 'S002', // Eng-112
    teacherId: 'T002', // Joun Abbas
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1T3',
    day: 'Tuesday',
    periodId: 'P3',
    classId: 'C001',
    subjectId: 'S003', // CIT-114 (T)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1T4',
    day: 'Tuesday',
    periodId: 'P4',
    classId: 'C001',
    subjectId: 'S001', // CIT-124 (P)
    teacherId: 'T004', // Tanveer Saqib
    roomId: 'R004', // Electronics Lab
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1T5',
    day: 'Tuesday',
    periodId: 'P5',
    classId: 'C001',
    subjectId: 'S004', // Math-123
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1T6',
    day: 'Tuesday',
    periodId: 'P6',
    classId: 'C001',
    subjectId: 'S031', // Career Counseling
    teacherId: 'T007', // Umair Khalil
    roomId: 'R008', // Room-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1T7',
    day: 'Tuesday',
    periodId: 'P7',
    classId: 'C001',
    subjectId: 'S005', // CIT-103 (P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== WEDNESDAY - 1st YEAR CIT ==========
  {
    id: 'L1W1',
    day: 'Wednesday',
    periodId: 'P1',
    classId: 'C001',
    subjectId: 'S006', // CH-132 (T,P)
    teacherId: 'T008', // Zohaib Hassan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L1W2',
    day: 'Wednesday',
    periodId: 'P2',
    classId: 'C001',
    subjectId: 'S003', // CIT-114 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1W3',
    day: 'Wednesday',
    periodId: 'P4',
    classId: 'C001',
    subjectId: 'S007', // Phy-132 (T,P)
    teacherId: 'T009', // Shah Hussain
    roomId: 'R006', // Physics Lab
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L1W4',
    day: 'Wednesday',
    periodId: 'P5',
    classId: 'C001',
    subjectId: 'S004', // Math-123
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1W5',
    day: 'Wednesday',
    periodId: 'P6',
    classId: 'C001',
    subjectId: 'S005', // CIT-103 (T,P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory-practical',
  },

  // ========== THURSDAY - 1st YEAR CIT ==========
  {
    id: 'L1Th1',
    day: 'Thursday',
    periodId: 'P1',
    classId: 'C001',
    subjectId: 'S006', // CH-132 (T,P)
    teacherId: 'T008', // Zohaib Hassan
    roomId: 'R007', // Chemistry Lab
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L1Th2',
    day: 'Thursday',
    periodId: 'P2',
    classId: 'C001',
    subjectId: 'S003', // CIT-114 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1Th3',
    day: 'Thursday',
    periodId: 'P4',
    classId: 'C001',
    subjectId: 'S001', // CIT-124 (P)
    teacherId: 'T004', // Tanveer Saqib
    roomId: 'R004', // Electronics Lab
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1Th4',
    day: 'Thursday',
    periodId: 'P5',
    classId: 'C001',
    subjectId: 'S004', // Math-123
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1Th5',
    day: 'Thursday',
    periodId: 'P6',
    classId: 'C001',
    subjectId: 'S005', // CIT-103 (P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== FRIDAY - 1st YEAR CIT ==========
  {
    id: 'L1F1',
    day: 'Friday',
    periodId: 'P1',
    classId: 'C001',
    subjectId: 'S003', // CIT-114 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1F2',
    day: 'Friday',
    periodId: 'P2',
    classId: 'C001',
    subjectId: 'S008', // TTO-111
    teacherId: 'T010', // Mohib Mahdi
    roomId: 'R010', // Room-5
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1F3',
    day: 'Friday',
    periodId: 'P4',
    classId: 'C001',
    subjectId: 'S004', // Math-123
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R010', // Room-5
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1F4',
    day: 'Friday',
    periodId: 'P5',
    classId: 'C001',
    subjectId: 'S002', // Eng-112
    teacherId: 'T002', // Joun Abbas
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1F5',
    day: 'Friday',
    periodId: 'P6',
    classId: 'C001',
    subjectId: 'S009', // CIT-101 (T)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1F6',
    day: 'Friday',
    periodId: 'P7',
    classId: 'C001',
    subjectId: 'S010', // CIT-141 (P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== SATURDAY - 1st YEAR CIT ==========
  {
    id: 'L1S1',
    day: 'Saturday',
    periodId: 'P1',
    classId: 'C001',
    subjectId: 'S003', // CIT-114 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1S2',
    day: 'Saturday',
    periodId: 'P2',
    classId: 'C001',
    subjectId: 'S002', // Eng-112
    teacherId: 'T002', // Joun Abbas
    roomId: 'R010', // Room-5
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1S3',
    day: 'Saturday',
    periodId: 'P4',
    classId: 'C001',
    subjectId: 'S007', // Phy-132 (P)
    teacherId: 'T009', // Shah Hussain
    roomId: 'R006', // Physics Lab
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L1S4',
    day: 'Saturday',
    periodId: 'P5',
    classId: 'C001',
    subjectId: 'S011', // Gen-111
    teacherId: 'T011', // Inayat Ali Khan
    roomId: 'R010', // Room-5
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L1S5',
    day: 'Saturday',
    periodId: 'P6',
    classId: 'C001',
    subjectId: 'S010', // CIT-141 (P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== MONDAY - 2nd YEAR CIT ==========
  {
    id: 'L2M1',
    day: 'Monday',
    periodId: 'P1',
    classId: 'C002',
    subjectId: 'S012', // CIT-204 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2M2',
    day: 'Monday',
    periodId: 'P2',
    classId: 'C002',
    subjectId: 'S013', // CIT-273 (P)
    teacherId: 'T012', // M. Ismail
    roomId: 'R005', // Basic Lab-ET
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2M3',
    day: 'Monday',
    periodId: 'P4',
    classId: 'C002',
    subjectId: 'S014', // CIT-293 (T)
    teacherId: 'T013', // Mahmood Hasan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L2M4',
    day: 'Monday',
    periodId: 'P5',
    classId: 'C002',
    subjectId: 'S015', // TTO-211
    teacherId: 'T010', // Mohib Mahdi
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L2M5',
    day: 'Monday',
    periodId: 'P6',
    classId: 'C002',
    subjectId: 'S016', // CIT-283 (T)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L2M6',
    day: 'Monday',
    periodId: 'P7',
    classId: 'C002',
    subjectId: 'S017', // Math-223
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },

  // ========== TUESDAY - 2nd YEAR CIT ==========
  {
    id: 'L2T1',
    day: 'Tuesday',
    periodId: 'P1',
    classId: 'C002',
    subjectId: 'S012', // CIT-204 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2T2',
    day: 'Tuesday',
    periodId: 'P2',
    classId: 'C002',
    subjectId: 'S018', // MGM-211
    teacherId: 'T014', // Imran Kafi
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L2T3',
    day: 'Tuesday',
    periodId: 'P4',
    classId: 'C002',
    subjectId: 'S013', // CIT-273 (T,P)
    teacherId: 'T012', // M. Ismail
    roomId: 'R005', // Basic Lab-ET
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L2T4',
    day: 'Tuesday',
    periodId: 'P5',
    classId: 'C002',
    subjectId: 'S019', // Gen-211
    teacherId: 'T011', // Inayat Ali Khan
    roomId: 'R010', // Room-5
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L2T5',
    day: 'Tuesday',
    periodId: 'P6',
    classId: 'C002',
    subjectId: 'S017', // Math-223
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },

  // ========== WEDNESDAY - 2nd YEAR CIT ==========
  {
    id: 'L2W1',
    day: 'Wednesday',
    periodId: 'P1',
    classId: 'C002',
    subjectId: 'S012', // CIT-204 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2W2',
    day: 'Wednesday',
    periodId: 'P2',
    classId: 'C002',
    subjectId: 'S020', // CIT-203 (T)
    teacherId: 'T015', // M. Zeshan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L2W3',
    day: 'Wednesday',
    periodId: 'P4',
    classId: 'C002',
    subjectId: 'S013', // CIT-273 (T,P)
    teacherId: 'T012', // M. Ismail
    roomId: 'R005', // Basic Lab-ET
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L2W4',
    day: 'Wednesday',
    periodId: 'P5',
    classId: 'C002',
    subjectId: 'S016', // CIT-283 (T)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L2W5',
    day: 'Wednesday',
    periodId: 'P6',
    classId: 'C002',
    subjectId: 'S017', // Math-223
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },

  // ========== THURSDAY - 2nd YEAR CIT ==========
  {
    id: 'L2Th1',
    day: 'Thursday',
    periodId: 'P1',
    classId: 'C002',
    subjectId: 'S012', // CIT-204 (P)
    teacherId: 'T003', // Rao M. Haziq
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2Th2',
    day: 'Thursday',
    periodId: 'P2',
    classId: 'C002',
    subjectId: 'S014', // CIT-293 (P)
    teacherId: 'T013', // Mahmood Hasan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2Th3',
    day: 'Thursday',
    periodId: 'P4',
    classId: 'C002',
    subjectId: 'S016', // CIT-283 (P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2Th4',
    day: 'Thursday',
    periodId: 'P5',
    classId: 'C002',
    subjectId: 'S017', // Math-223
    teacherId: 'T005', // Khurram Shahzad
    roomId: 'R009', // Room-4
    status: 'scheduled',
    lectureType: 'theory',
  },

  // ========== FRIDAY - 2nd YEAR CIT ==========
  {
    id: 'L2F1',
    day: 'Friday',
    periodId: 'P1',
    classId: 'C002',
    subjectId: 'S021', // CIT-222 (P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2F2',
    day: 'Friday',
    periodId: 'P2',
    classId: 'C002',
    subjectId: 'S014', // CIT-293 (P)
    teacherId: 'T013', // Mahmood Hasan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2F3',
    day: 'Friday',
    periodId: 'P4',
    classId: 'C002',
    subjectId: 'S020', // CIT-203 (T,P)
    teacherId: 'T015', // Muhammad Zeshan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L2F4',
    day: 'Friday',
    periodId: 'P5',
    classId: 'C002',
    subjectId: 'S031', // Career Counseling
    teacherId: 'T007', // Umair Khalil
    roomId: 'R008', // Room-2
    status: 'scheduled',
    lectureType: 'theory',
  },

  // ========== SATURDAY - 2nd YEAR CIT ==========
  {
    id: 'L2S1',
    day: 'Saturday',
    periodId: 'P1',
    classId: 'C002',
    subjectId: 'S014', // CIT-293 (P)
    teacherId: 'T013', // Mahmood-ul-Hasan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L2S2',
    day: 'Saturday',
    periodId: 'P4',
    classId: 'C002',
    subjectId: 'S021', // CIT-222 (T,P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R001', // Computer Lab-1
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L2S3',
    day: 'Saturday',
    periodId: 'P5',
    classId: 'C002',
    subjectId: 'S020', // CIT-203 (P)
    teacherId: 'T015', // Muhammad Zeshan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== MONDAY - 3rd YEAR CIT ==========
  {
    id: 'L3M1',
    day: 'Monday',
    periodId: 'P1',
    classId: 'C003',
    subjectId: 'S022', // CIT-344 (P)
    teacherId: 'T013', // Mahmood-ul-Hasan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3M2',
    day: 'Monday',
    periodId: 'P2',
    classId: 'C003',
    subjectId: 'S023', // Eng-311
    teacherId: 'T002', // Joun Abbas
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L3M3',
    day: 'Monday',
    periodId: 'P4',
    classId: 'C003',
    subjectId: 'S024', // CIT-303 (P)
    teacherId: 'T015', // Muhammad Zeshan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3M4',
    day: 'Monday',
    periodId: 'P5',
    classId: 'C003',
    subjectId: 'S025', // CIT-352 (T,P)
    teacherId: 'T012', // Muhammad Ismail
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'theory-practical',
  },

  // ========== TUESDAY - 3rd YEAR CIT ==========
  {
    id: 'L3T1',
    day: 'Tuesday',
    periodId: 'P1',
    classId: 'C003',
    subjectId: 'S022', // CIT-344 (T)
    teacherId: 'T013', // Mahmood-ul-Hasan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L3T2',
    day: 'Tuesday',
    periodId: 'P2',
    classId: 'C003',
    subjectId: 'S026', // CIT-324 (P)
    teacherId: 'T015', // M. Zeshan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3T3',
    day: 'Tuesday',
    periodId: 'P4',
    classId: 'C003',
    subjectId: 'S027', // CIT-333 (P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3T4',
    day: 'Tuesday',
    periodId: 'P5',
    classId: 'C003',
    subjectId: 'S024', // CIT-303 (P)
    teacherId: 'T015', // Muhammad Zeshan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== WEDNESDAY - 3rd YEAR CIT ==========
  {
    id: 'L3W1',
    day: 'Wednesday',
    periodId: 'P1',
    classId: 'C003',
    subjectId: 'S026', // CIT-324 (P)
    teacherId: 'T015', // Muhammad Zeshan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3W2',
    day: 'Wednesday',
    periodId: 'P2',
    classId: 'C003',
    subjectId: 'S028', // MGT-331
    teacherId: 'T014', // Imran Kafi
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L3W3',
    day: 'Wednesday',
    periodId: 'P4',
    classId: 'C003',
    subjectId: 'S027', // CIT-333 (T,P)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'theory-practical',
  },
  {
    id: 'L3W4',
    day: 'Wednesday',
    periodId: 'P5',
    classId: 'C003',
    subjectId: 'S022', // CIT-344 (P)
    teacherId: 'T013', // Mahmood-ul-Hasan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== THURSDAY - 3rd YEAR CIT ==========
  {
    id: 'L3Th1',
    day: 'Thursday',
    periodId: 'P1',
    classId: 'C003',
    subjectId: 'S024', // CIT-303 (P)
    teacherId: 'T015', // Muhammad Zeshan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3Th2',
    day: 'Thursday',
    periodId: 'P2',
    classId: 'C003',
    subjectId: 'S024', // CIT-303 (T)
    teacherId: 'T015', // M. Zeshan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L3Th3',
    day: 'Thursday',
    periodId: 'P4',
    classId: 'C003',
    subjectId: 'S029', // CIT-362 (P)
    teacherId: 'T013', // Mahmood-ul-Hasan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3Th4',
    day: 'Thursday',
    periodId: 'P5',
    classId: 'C003',
    subjectId: 'S025', // CIT-352 (P)
    teacherId: 'T012', // Muhammad Ismail
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== FRIDAY - 3rd YEAR CIT ==========
  {
    id: 'L3F1',
    day: 'Friday',
    periodId: 'P1',
    classId: 'C003',
    subjectId: 'S029', // CIT-362 (P)
    teacherId: 'T013', // Mahmood-ul-Hasan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3F2',
    day: 'Friday',
    periodId: 'P2',
    classId: 'C003',
    subjectId: 'S026', // CIT-324 (T)
    teacherId: 'T015', // M. Zeshan
    roomId: 'R002', // Computer Lab-2
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L3F3',
    day: 'Friday',
    periodId: 'P4',
    classId: 'C003',
    subjectId: 'S027', // CIT-333 (T)
    teacherId: 'T006', // Ijaz Ahmad
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L3F4',
    day: 'Friday',
    periodId: 'P5',
    classId: 'C003',
    subjectId: 'S022', // CIT-344 (P)
    teacherId: 'T013', // Mahmood-ul-Hasan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },

  // ========== SATURDAY - 3rd YEAR CIT ==========
  {
    id: 'L3S1',
    day: 'Saturday',
    periodId: 'P1',
    classId: 'C003',
    subjectId: 'S026', // CIT-324 (P)
    teacherId: 'T015', // Muhammad Zeshan
    roomId: 'R003', // Computer Lab-3
    status: 'scheduled',
    lectureType: 'practical',
  },
  {
    id: 'L3S2',
    day: 'Saturday',
    periodId: 'P4',
    classId: 'C003',
    subjectId: 'S030', // Gen-311
    teacherId: 'T011', // Inayat Ali Khan
    roomId: 'R010', // Room-5
    status: 'scheduled',
    lectureType: 'theory',
  },
  {
    id: 'L3S3',
    day: 'Saturday',
    periodId: 'P5',
    classId: 'C003',
    subjectId: 'S031', // Career Counseling
    teacherId: 'T007', // Umair Khalil
    roomId: 'R008', // Room-2
    status: 'scheduled',
    lectureType: 'theory',
  },
];

// Today's lectures (Monday) with various statuses for demo
export const todayLectures: Lecture[] = weeklyTimetable
  .filter((l) => l.day === 'Monday')
  .map((lecture, index) => {
    // Set different statuses for demonstration
    if (index === 0) return { ...lecture, status: 'completed' as const, crConfirmed: true, teacherConfirmed: true };
    if (index === 1) return { ...lecture, status: 'ongoing' as const, crConfirmed: false, teacherConfirmed: true };
    if (index === 3) return { ...lecture, status: 'substituted' as const, substituteTeacherId: 'T006', substitutionStatus: 'auto' as const };
    if (index === 7) return { ...lecture, status: 'cancelled' as const };
    return lecture;
  });

export const substitutionRequests = [
  {
    id: 'SR001',
    lectureId: todayLectures.find((l) => l.status === 'substituted')?.id || 'L2M3',
    originalTeacherId: 'T013',
    substituteTeacherId: 'T006',
    status: 'pending' as const,
    requestedAt: new Date().toISOString(),
    reason: 'Original teacher marked absent',
  },
];

// Analytics data
export const analyticsData = {
  totalClasses: 3,
  totalTeachers: 15,
  totalSubjects: 31,
  todayLectures: todayLectures.length,
  ongoingLectures: todayLectures.filter((l) => l.status === 'ongoing').length,
  completedLectures: todayLectures.filter((l) => l.status === 'completed').length,
  absences: 2,
  substitutions: todayLectures.filter((l) => l.status === 'substituted').length,
  weeklySubstitutions: [
    { day: 'Mon', count: 1 },
    { day: 'Tue', count: 0 },
    { day: 'Wed', count: 1 },
    { day: 'Thu', count: 0 },
    { day: 'Fri', count: 2 },
    { day: 'Sat', count: 0 },
  ],
  teacherWorkload: [
    { name: 'Ijaz Ahmad', lectures: weeklyTimetable.filter((l) => l.teacherId === 'T006').length },
    { name: 'Rao M. Haziq', lectures: weeklyTimetable.filter((l) => l.teacherId === 'T003').length },
    { name: 'M. Zeshan', lectures: weeklyTimetable.filter((l) => l.teacherId === 'T015').length },
    { name: 'Mahmood Hasan', lectures: weeklyTimetable.filter((l) => l.teacherId === 'T013').length },
    { name: 'Khurram Shahzad', lectures: weeklyTimetable.filter((l) => l.teacherId === 'T005').length },
  ],
  absenceTrends: [
    { month: 'Aug', count: 2 },
    { month: 'Sep', count: 4 },
    { month: 'Oct', count: 3 },
    { month: 'Nov', count: 5 },
    { month: 'Dec', count: 2 },
  ],
};

// Notifications data
export const notifications = [
  {
    id: 'N001',
    type: 'warning',
    title: 'Teacher Absent',
    message: 'Mahmood-ul-Hasan marked absent for Period 4. Substitute assigned automatically.',
    timestamp: new Date(Date.now() - 10 * 60000).toISOString(),
    isRead: false,
  },
  {
    id: 'N002',
    type: 'success',
    title: 'Substitution Confirmed',
    message: 'Ijaz Ahmad accepted substitution for 2nd Year CIT, Period 4.',
    timestamp: new Date(Date.now() - 25 * 60000).toISOString(),
    isRead: false,
  },
  {
    id: 'N003',
    type: 'info',
    title: 'Lecture Confirmed',
    message: 'CR confirmed lecture completion for 1st Year CIT, Period 1.',
    timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    isRead: true,
  },
  {
    id: 'N004',
    type: 'error',
    title: 'No Substitute Found',
    message: 'Unable to find substitute for 3rd Year CIT, Period 6. Admin intervention required.',
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    isRead: true,
  },
];
