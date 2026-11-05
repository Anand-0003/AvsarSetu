import { Opportunity, UserProfile, FamilyMember, ApplicationTrackerItem, NotificationItem, SavedSearch } from "../types";

export const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: "pmrf-2025",
    slug: "pm-research-fellowship-pmrf-2025",
    title: "Prime Minister's Research Fellowship (PMRF) 2025",
    organization: "Ministry of Education, Govt. of India",
    category: "scholarship",
    categoryLabel: "Scholarships & Grants",
    shortDescription: "Premier national doctoral fellowship for meritorious students in IITs, IISc, IISERs and central universities with direct financial grant support.",
    fullDescription: "The Prime Minister's Research Fellowship (PMRF) scheme is designed for improving the quality of research in higher educational institutions in the country. With attractive fellowship rates and contingency grants, it seeks to attract the best talent into research.",
    benefits: "₹70,000 – ₹80,000 / month + ₹2 Lakhs annual research contingency grant",
    locationScope: "All India",
    state: "Central",
    deadline: "18 Nov 2025",
    isClosingSoon: true,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://www.pmrf.in",
    applicationUrl: "https://www.pmrf.in/apply",
    educationLevel: ["Postgraduate", "B.Tech Final Year", "Integrated M.Tech"],
    gender: "All",
    minAge: 21,
    maxAge: 32,
    tags: ["Doctoral", "STEM", "High Fellowship", "Central Govt"],
    documentsRequired: [
      "Academic Transcripts & Degree Certificates",
      "Valid GATE Scorecard or CGPA > 8.0 certificate",
      "Research Proposal (Max 1000 words)",
      "Two Recommendation Letters from Faculty",
      "Category Certificate (if applicable)"
    ],
    selectionProcess: "National screening by nodal IIT followed by domain expert panel interview."
  },
  {
    id: "nats-2025",
    slug: "national-apprenticeship-training-scheme-nats",
    title: "National Apprenticeship Training Scheme (NATS 2.0)",
    organization: "Board of Practical Training / Ministry of Education",
    category: "internship",
    categoryLabel: "Internships & Apprenticeships",
    shortDescription: "One-year paid industrial apprenticeship training program for engineering, diploma, and general stream graduates with direct DBT stipend.",
    fullDescription: "NATS provides practical, skill-oriented training to young graduates and diploma holders in leading government and private industrial establishments across India, bridging classroom knowledge with real-world industry demands.",
    benefits: "₹9,000 – ₹12,000 / month Direct Benefit Transfer (DBT) + Govt Certificate",
    locationScope: "All India",
    deadline: "30 Nov 2025",
    isClosingSoon: false,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://nats.education.gov.in",
    applicationUrl: "https://nats.education.gov.in/student_register.php",
    educationLevel: ["Graduate", "Diploma", "B.E / B.Tech", "B.Sc / B.Com"],
    gender: "All",
    minAge: 18,
    maxAge: 28,
    tags: ["Apprenticeship", "DBT", "On-job Training", "Industrial Skills"],
    documentsRequired: [
      "Provisional Degree or Diploma Certificate",
      "Aadhaar Card",
      "Bank Account details linked to Aadhaar for DBT",
      "Passport size photograph"
    ],
    selectionProcess: "Establishment shortlist based on marks followed by certificate verification."
  },
  {
    id: "isro-sc-2025",
    slug: "isro-scientist-engineer-sc-recruitment",
    title: "ISRO Scientist / Engineer 'SC' Gazetted Recruitment",
    organization: "ISRO — Department of Space",
    category: "govt_job",
    categoryLabel: "Government Jobs",
    shortDescription: "Level 10 Gazetted officer positions for engineering graduates across Aerospace, Electronics, Mechanical, and Computer Science streams.",
    fullDescription: "Indian Space Research Organisation (ISRO) invites applications for Scientist/Engineer 'SC' positions in Level 10 of Pay Matrix with opportunities to work on national space exploration missions.",
    benefits: "Level 10 Pay Matrix (₹56,100 – ₹1,77,500) + HRA, Medical, DA",
    locationScope: "All India",
    deadline: "28 Oct 2025",
    isClosingSoon: true,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://www.isro.gov.in/Careers.html",
    applicationUrl: "https://apps.isac.gov.in",
    educationLevel: ["B.E / B.Tech", "M.E / M.Tech"],
    gender: "All",
    minAge: 18,
    maxAge: 30,
    tags: ["Govt Jobs", "Level 10", "Space Research", "Engineering"],
    documentsRequired: [
      "B.Tech Degree Certificate with minimum 65% or 6.84 CGPA",
      "GATE Scorecard (if applicable)",
      "Date of Birth Proof (Class 10 Certificate)",
      "Caste / Reservation Certificate"
    ],
    selectionProcess: "Computer Based Test (CBT) followed by Technical Interview."
  },
  {
    id: "pmkvy-4",
    slug: "pradhan-mantri-kaushal-vikas-yojana-pmkvy-4",
    title: "PM Kaushal Vikas Yojana (PMKVY 4.0) Skill Tracks",
    organization: "Ministry of Skill Development & Entrepreneurship (MSDE)",
    category: "course",
    categoryLabel: "Free Courses & Skill Programs",
    shortDescription: "Free industry 4.0 aligned vocational courses, AI fundamentals, green energy technician certification, and digital craftsmanship.",
    fullDescription: "PMKVY 4.0 focuses on on-demand industry skills including Artificial Intelligence, drone technology, robotics, mechatronics, 3D printing, and soft skills with recognized national skill certification.",
    benefits: "100% Free Training + Skill India Certification + Job Placement Support",
    locationScope: "All India",
    deadline: "Rolling 2025",
    isClosingSoon: false,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://www.pmkvyofficial.org",
    applicationUrl: "https://www.skillindiadigital.gov.in",
    educationLevel: ["10th Pass", "12th Pass", "ITI", "Graduate"],
    gender: "All",
    minAge: 15,
    maxAge: 45,
    tags: ["Free Course", "Govt Certificate", "Industry 4.0", "AI & Robotics"],
    documentsRequired: [
      "Aadhaar Card",
      "Highest Qualification Marksheet",
      "Bank Account details"
    ],
    selectionProcess: "Direct enrollment through Skill India Digital portal at nearest PMKK centre."
  },
  {
    id: "rajasthan-anuprati",
    slug: "mukhyamantri-anuprati-coaching-yojana-rajasthan",
    title: "Mukhyamantri Anuprati Coaching Yojana (Rajasthan)",
    organization: "Social Justice & Empowerment Dept, Govt. of Rajasthan",
    category: "scheme",
    categoryLabel: "Government Schemes",
    shortDescription: "Free professional competitive coaching (UPSC, RPSC, JEE, NEET, CA, CLAT) for meritorious students of economically weaker sections in Rajasthan.",
    fullDescription: "Under this flagship Rajasthan state scheme, meritorious students from SC, ST, OBC, MBC, EWS and minority communities whose family income is under ₹8 Lakh/annum receive free coaching at reputed institutes with boarding allowance.",
    benefits: "100% Free Coaching at Premier Institutes + ₹40,000/year living allowance",
    locationScope: "State",
    state: "Rajasthan",
    deadline: "15 Dec 2025",
    isClosingSoon: false,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://sje.rajasthan.gov.in",
    applicationUrl: "https://sso.rajasthan.gov.in",
    educationLevel: ["12th Pass", "Undergraduate", "Graduate"],
    gender: "All",
    incomeLimit: 800000,
    minAge: 16,
    maxAge: 35,
    tags: ["Rajasthan", "Coaching Subsidy", "State Scheme", "DBT"],
    documentsRequired: [
      "Rajasthan Domicile / Jan Aadhaar Card",
      "Caste Certificate",
      "Income Certificate (under ₹8 Lakh)",
      "10th & 12th Marksheets"
    ],
    selectionProcess: "Merit list prepared on the basis of 10th and 12th board examination percentages."
  },
  {
    id: "google-generation-women",
    slug: "google-generation-scholarship-women-in-tech",
    title: "Google Generation Scholarship (Asia Pacific)",
    organization: "Google India CSR Foundation",
    category: "scholarship",
    categoryLabel: "Scholarships & Grants",
    shortDescription: "Targeted scholarship and mentorship grant for undergraduate women enrolled in Computer Science and allied technology fields.",
    fullDescription: "The Generation Google Scholarship for women in computer science will be awarded based on each applicant's commitment to diversity, equity, and inclusion, demonstrated leadership, and academic performance.",
    benefits: "USD $2,500 (approx. ₹2,10,000) Direct Tuition Grant + Google Mentorship",
    locationScope: "All India",
    deadline: "12 Dec 2025",
    isClosingSoon: false,
    verificationStatus: "Source Confirmed",
    officialSourceUrl: "https://buildyourfuture.withgoogle.com/scholarships",
    applicationUrl: "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship-apac",
    educationLevel: ["Undergraduate 1st/2nd Year"],
    gender: "Female",
    tags: ["Women in Tech", "Computer Science", "Private Grant", "Mentorship"],
    documentsRequired: [
      "Resume / CV highlighting tech projects and leadership",
      "Current academic transcripts",
      "Responses to two short essay questions",
      "College enrollment verification"
    ],
    selectionProcess: "Essay review and academic evaluation followed by online virtual interview."
  },
  {
    id: "up-scholarship-postmatric",
    slug: "uttar-pradesh-post-matric-scholarship-scheme",
    title: "UP Post-Matric Scholarship & Fee Reimbursement",
    organization: "Social Welfare Department, Govt. of Uttar Pradesh",
    category: "scholarship",
    categoryLabel: "Scholarships & Grants",
    shortDescription: "Complete tuition fee reimbursement and maintenance stipend for General, SC, ST, OBC students enrolled in UG/PG courses in UP.",
    fullDescription: "Provides financial assistance to students belonging to scheduled castes, scheduled tribes, other backward classes, and economically general categories studying in colleges and universities in Uttar Pradesh.",
    benefits: "Full Tuition Fee Reimbursement + Up to ₹13,500 annual allowance",
    locationScope: "State",
    state: "Uttar Pradesh",
    deadline: "10 Jan 2026",
    isClosingSoon: false,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://scholarship.up.gov.in",
    applicationUrl: "https://scholarship.up.gov.in/RegistrationNew.aspx",
    educationLevel: ["Undergraduate", "Postgraduate", "Diploma", "B.Ed"],
    gender: "All",
    incomeLimit: 250000,
    tags: ["Uttar Pradesh", "Fee Reimbursement", "State Scholarship", "Direct DBT"],
    documentsRequired: [
      "Income Certificate (under ₹2.5 Lakh for SC/ST, ₹2 Lakh for OBC/Gen)",
      "UP Domicile Certificate",
      "College Allotment / Fee Receipt",
      "Bank Passbook linked to Aadhaar"
    ],
    selectionProcess: "District Social Welfare Officer verification and direct PFMS transfer."
  },
  {
    id: "tcs-smart-hiring",
    slug: "tcs-smart-hiring-entry-tech-roles",
    title: "TCS Smart Hiring 2025 (BCA, B.Sc, B.Voc)",
    organization: "Tata Consultancy Services (TCS)",
    category: "private_job",
    categoryLabel: "Private Jobs & Careers",
    shortDescription: "Campus recruitment drive for non-engineering tech graduates into full-time Software Developer, Cloud & Support roles across India.",
    fullDescription: "TCS Smart Hiring is an exclusive hiring program for graduates of BCA, B.Sc (Math, Stats, Physics, Chemistry, Computer Science, IT) and B.Voc courses for pan-India delivery centres.",
    benefits: "₹3.2 Lakhs – ₹4.5 Lakhs CTC + TCS Ignite Higher Education Sponsorship",
    locationScope: "All India",
    deadline: "25 Nov 2025",
    isClosingSoon: false,
    verificationStatus: "Source Confirmed",
    officialSourceUrl: "https://www.tcs.com/careers/india",
    applicationUrl: "https://nextstep.tcs.com",
    educationLevel: ["BCA", "B.Sc", "B.Voc"],
    gender: "All",
    minAge: 19,
    maxAge: 25,
    tags: ["IT Careers", "Fresher Job", "Private Sector", "Software"],
    documentsRequired: [
      "10th, 12th and Graduation Marksheets (min 50% throughout)",
      "Government Photo ID (Aadhaar / PAN)",
      "Updated Resume"
    ],
    selectionProcess: "National Qualifier Test (NQT) followed by Technical & HR Interview."
  },
  {
    id: "swayam-free-ai-nptel",
    slug: "swayam-nptel-foundations-of-ai-data-science",
    title: "IIT Madras: Foundations of AI & Data Science (SWAYAM)",
    organization: "NPTEL & Ministry of Education, Govt. of India",
    category: "course",
    categoryLabel: "Free Courses & Skill Programs",
    shortDescription: "12-week online college-credit certified course taught by IIT Madras faculty with optional government recognized certification.",
    fullDescription: "Covers Python programming, linear algebra, machine learning, deep neural networks, and prompt engineering with hands-on computational assignments.",
    benefits: "100% Free Learning & Video Lectures + Optional IIT Proctored Certificate (₹1,000 fee waiver for EWS)",
    locationScope: "All India",
    deadline: "31 Dec 2025",
    isClosingSoon: false,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://swayam.gov.in",
    applicationUrl: "https://onlinecourses.nptel.ac.in",
    educationLevel: ["Undergraduate", "Postgraduate", "Working Professional"],
    gender: "All",
    tags: ["Free Course", "IIT Madras", "AI & ML", "SWAYAM Credit"],
    documentsRequired: ["Student College ID or Professional Photo ID"],
    selectionProcess: "Direct open enrollment on SWAYAM portal."
  },
  {
    id: "pm-kisan-samman-nidhi",
    slug: "pm-kisan-samman-nidhi-scheme",
    title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    organization: "Ministry of Agriculture & Farmers Welfare",
    category: "scheme",
    categoryLabel: "Government Schemes",
    shortDescription: "Direct income support of ₹6,000 per year in three equal installments to all landholding farmer families across India.",
    fullDescription: "A central sector scheme providing income support to farmer families to supplement their financial needs for procuring various inputs related to agriculture and domestic requirements.",
    benefits: "₹6,000 annually credited directly via DBT to bank accounts in 3 cycles",
    locationScope: "All India",
    deadline: "Ongoing / Continuous",
    isClosingSoon: false,
    verificationStatus: "Official Source Verified",
    officialSourceUrl: "https://pmkisan.gov.in",
    applicationUrl: "https://pmkisan.gov.in/RegistrationFormNew.aspx",
    educationLevel: ["Any"],
    gender: "All",
    tags: ["Agriculture", "Direct Benefit Transfer", "Central Govt", "Welfare"],
    documentsRequired: [
      "Land Ownership Document (Khasra / Khatauni)",
      "Aadhaar Card",
      "Bank Account linked with Aadhaar"
    ],
    selectionProcess: "State revenue department verification and automatic e-KYC approval."
  }
];

export const MOCK_USER: UserProfile = {
  id: "user-rahul-sharma",
  name: "Rahul Sharma",
  email: "rahul.sharma@example.in",
  phone: "+91 98765 43210",
  dateOfBirth: "2003-08-14",
  age: 22,
  gender: "Male",
  state: "Rajasthan",
  district: "Jaipur",
  preferredLanguage: "Hindi / English",
  educationLevel: "Undergraduate",
  course: "BCA (Bachelor of Computer Applications)",
  stream: "Computer Science",
  percentage: 78.4,
  cgpa: 8.2,
  passingYear: 2025,
  employmentStatus: "Student / Job Seeker",
  annualIncome: 240000,
  casteCategory: "OBC (Non-Creamy Layer)",
  skills: ["Python", "JavaScript", "React", "SQL", "Web Development"],
  preferredCategories: ["scholarship", "internship", "govt_job", "course"]
};

export const MOCK_FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "fam-self",
    name: "Rahul Sharma",
    relationship: "Self",
    age: 22,
    educationLevel: "Undergraduate (BCA)",
    employmentStatus: "Student",
    state: "Rajasthan",
    district: "Jaipur",
    annualIncome: 0,
    savedCount: 5,
    applicationsCount: 3
  },
  {
    id: "fam-father",
    name: "Ramesh Sharma",
    relationship: "Father",
    age: 52,
    educationLevel: "12th Pass",
    employmentStatus: "Self-Employed / Agriculture",
    state: "Rajasthan",
    district: "Jaipur",
    annualIncome: 240000,
    savedCount: 2,
    applicationsCount: 1
  },
  {
    id: "fam-mother",
    name: "Sunita Sharma",
    relationship: "Mother",
    age: 48,
    educationLevel: "10th Pass",
    employmentStatus: "Homemaker",
    state: "Rajasthan",
    district: "Jaipur",
    annualIncome: 0,
    savedCount: 3,
    applicationsCount: 1
  },
  {
    id: "fam-sister",
    name: "Pooja Sharma",
    relationship: "Sister",
    age: 19,
    educationLevel: "Undergraduate 1st Year (B.Sc)",
    employmentStatus: "Student",
    state: "Rajasthan",
    district: "Jaipur",
    annualIncome: 0,
    savedCount: 4,
    applicationsCount: 2
  }
];

export const MOCK_APPLICATIONS: ApplicationTrackerItem[] = [
  {
    id: "app-1",
    opportunityId: "pmrf-2025",
    opportunityTitle: "PM Research Fellowship (PMRF) 2025",
    organization: "Ministry of Education",
    category: "scholarship",
    deadline: "18 Nov 2025",
    status: "Preparing Documents",
    appliedDate: undefined,
    notes: "Gathered recommendation letters from Prof. Verma. Preparing statement of purpose."
  },
  {
    id: "app-2",
    opportunityId: "nats-2025",
    opportunityTitle: "National Apprenticeship Training Scheme (NATS)",
    organization: "Board of Practical Training",
    category: "internship",
    deadline: "30 Nov 2025",
    status: "Applied",
    appliedDate: "02 Nov 2025",
    notes: "Submitted enrollment form on NATS portal. Enrollment ID: NATS-2025-RJ-8841."
  },
  {
    id: "app-3",
    opportunityId: "rajasthan-anuprati",
    opportunityTitle: "Mukhyamantri Anuprati Coaching Yojana",
    organization: "Govt. of Rajasthan",
    category: "scheme",
    deadline: "15 Dec 2025",
    status: "Eligibility Checked",
    appliedDate: undefined,
    notes: "Need Jan-Aadhaar verification update before final form submission."
  }
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "notif-1",
    title: "Deadline Approaching: PMRF 2025",
    message: "The application window for Prime Minister's Research Fellowship closes in 13 days on 18 Nov 2025.",
    date: "Today, 09:15 AM",
    isRead: false,
    category: "deadline",
    link: "/opportunities/pm-research-fellowship-pmrf-2025"
  },
  {
    id: "notif-2",
    title: "New Matching Scheme in Rajasthan",
    message: "Mukhyamantri Anuprati Coaching Yojana matches your profile for BCA/Competitive preparation.",
    date: "Yesterday",
    isRead: false,
    category: "scheme",
    link: "/opportunities/mukhyamantri-anuprati-coaching-yojana-rajasthan"
  },
  {
    id: "notif-3",
    title: "NATS Application Submitted",
    message: "Your application tracker has recorded your NATS apprenticeship registration successfully.",
    date: "02 Nov 2025",
    isRead: true,
    category: "system",
    link: "/dashboard/applications"
  }
];

export const MOCK_SAVED_SEARCHES: SavedSearch[] = [
  {
    id: "search-1",
    title: "Rajasthan Tech Scholarships",
    query: "scholarship",
    state: "Rajasthan",
    category: "scholarship",
    dateSaved: "28 Oct 2025",
    matchingCount: 14
  },
  {
    id: "search-2",
    title: "Central Govt Fresher Openings",
    query: "graduate",
    state: "Central",
    category: "govt_job",
    dateSaved: "30 Oct 2025",
    matchingCount: 28
  }
];

export const MOCK_ADMIN_STATS = {
  totalUsers: "1,42,850",
  activeOpportunities: "9,480",
  verifiedCount: "8,920",
  pendingVerification: "318",
  expiredListings: "1,240",
  reportedIssues: "42",
  stateCoverage: "28 States + 8 UTs",
  categoriesBreakdown: [
    { name: "Govt Schemes", count: 2430, color: "#0F3832" },
    { name: "Scholarships", count: 1850, color: "#115E59" },
    { name: "Govt Jobs", count: 3120, color: "#D97706" },
    { name: "Private Jobs", count: 1240, color: "#475569" },
    { name: "Internships", count: 890, color: "#2563EB" },
    { name: "Free Courses", count: 650, color: "#059669" }
  ]
};

export const MOCK_CATEGORIES = [
  { id: "schemes", name: "Government Schemes", count: 2430, icon: "assured_workload", desc: "Central & State welfare subsidies, direct DBT cash transfers and citizen aid." },
  { id: "scholarships", name: "Scholarships & Grants", count: 1850, icon: "school", desc: "Merit-cum-means assistance, higher research grants, and international fellowships." },
  { id: "govt_jobs", name: "Government Jobs", count: 3120, icon: "badge", desc: "UPSC, SSC, Railways, State PSC, Defence, Banking and PSU notifications." },
  { id: "private_jobs", name: "Private Careers & Tech", count: 1240, icon: "work", desc: "Verified corporate openings, tech developer drives and early-career roles." },
  { id: "internships", name: "Internships & Apprenticeships", count: 890, icon: "assignment_ind", desc: "Paid industrial apprenticeships under NATS, AICTE and research labs." },
  { id: "courses", name: "Free Courses & Certifications", count: 650, icon: "auto_stories", desc: "SWAYAM, NPTEL, Skill India and certified industry 4.0 learning tracks." }
];

export const INDIAN_STATES = [
  "All India (Central)",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi NCT",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

