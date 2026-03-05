export type ProspectStatus = 'inbox' | 'assigned' | 'in_progress' | 'review' | 'done';

export interface Prospect {
  id: string;
  name: string;
  website: string;
  status: ProspectStatus;
  contact_email: string;
  last_contact: string | null;
  notes: string;
  commission_offered: string;
  avatar?: string;
}

export type ActivityType = 'email_sent' | 'response_received' | 'status_changed' | 'note_added' | 'call_made';

export interface Activity {
  id: string;
  type: ActivityType;
  prospectId: string;
  prospectName: string;
  message: string;
  timestamp: Date;
}

export interface AgentStatus {
  id: string;
  name: string;
  status: 'active' | 'idle' | 'busy';
  currentTask: string | null;
  completedToday: number;
}
