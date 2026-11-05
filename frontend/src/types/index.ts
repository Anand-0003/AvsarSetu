export type OpportunityType = 
  | 'scheme'
  | 'scholarship'
  | 'govt_job'
  | 'private_job'
  | 'internship'
  | 'course'
  | 'grant';

export type VerificationStatus = 
  | 'Official Source Verified'
  | 'Source Confirmed'
  | 'Under Review'
  | 'Unverified'
  | 'Expired'
  | 'Withdrawn';

export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  organization: string;
  category: OpportunityType;
  categoryLabel: string;
  shortDescription: string;
  fullDescription?: string;
  benefits: string;
  locationScope: 'All India' | 'State' | 'District' | 'Remote';
  state?: string;
  district?: string;
  deadline: string;
  isClosingSoon?: boolean;
  verificationStatus: VerificationStatus;
  officialSourceUrl: string;
  applicationUrl: string;
  educationLevel: string[];
  gender?: 'All' | 'Female' | 'Transgender' | 'Male';
  incomeLimit?: number; // annual family income in INR
  minAge?: number;
  maxAge?: number;
  tags: string[];
  documentsRequired: string[];
  selectionProcess?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  age: number;
  gender: string;
  state: string;
  district: string;
  preferredLanguage: string;
  educationLevel: string;
  course: string;
  stream: string;
  percentage: number;
  cgpa?: number;
  passingYear: number;
  employmentStatus: string;
  annualIncome: number;
  casteCategory: string;
  skills: string[];
  preferredCategories: OpportunityType[];
}

export interface FamilyMember {
  id: string;
  name: string;
  relationship: 'Self' | 'Father' | 'Mother' | 'Brother' | 'Sister' | 'Spouse' | 'Child';
  age: number;
  educationLevel: string;
  employmentStatus: string;
  state: string;
  district: string;
  annualIncome: number;
  savedCount: number;
  applicationsCount: number;
}

export interface ApplicationTrackerItem {
  id: string;
  opportunityId: string;
  opportunityTitle: string;
  organization: string;
  category: OpportunityType;
  deadline: string;
  status: 'Interested' | 'Eligibility Checked' | 'Preparing Documents' | 'Ready to Apply' | 'Applied' | 'Under Review' | 'Approved' | 'Rejected';
  appliedDate?: string;
  notes: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  category: 'scheme' | 'scholarship' | 'job' | 'deadline' | 'system';
  link?: string;
}

export interface SavedSearch {
  id: string;
  title: string;
  query: string;
  category?: string;
  state?: string;
  dateSaved: string;
  matchingCount: number;
}

