import type { Prospect, Activity, AgentStatus } from './types';

export const initialProspects: Prospect[] = [
  {
    id: '1',
    name: 'Hip2Save',
    website: 'hip2save.com',
    status: 'inbox',
    contact_email: 'partnerships@hip2save.com',
    last_contact: null,
    notes: 'Popular deal site with strong mom audience. 16% commission tier available.',
    commission_offered: '16%',
    avatar: 'H2',
  },
  {
    id: '2',
    name: 'Homeschool.com',
    website: 'homeschool.com',
    status: 'assigned',
    contact_email: 'advertise@homeschool.com',
    last_contact: '2026-03-01',
    notes: 'Leading homeschool resource. High engagement with educational products.',
    commission_offered: '16%',
    avatar: 'HC',
  },
  {
    id: '3',
    name: 'Homeschool Giveaways',
    website: 'homeschoolgiveaways.com',
    status: 'in_progress',
    contact_email: 'team@homeschoolgiveaways.com',
    last_contact: '2026-03-02',
    notes: 'Email newsletter with 200k+ subscribers. Interested in KiwiCo partnership.',
    commission_offered: '16%',
    avatar: 'HG',
  },
  {
    id: '4',
    name: 'What Mommy Does',
    website: 'whatmommydoes.com',
    status: 'inbox',
    contact_email: 'laura@whatmommydoes.com',
    last_contact: null,
    notes: 'Mom blogger with strong Pinterest presence. Good fit for craft kits.',
    commission_offered: '16%',
    avatar: 'WM',
  },
  {
    id: '5',
    name: 'Scary Mommy',
    website: 'scarymommy.com',
    status: 'review',
    contact_email: 'partnerships@scarymommy.com',
    last_contact: '2026-02-28',
    notes: 'Major parenting publisher. Large audience, longer sales cycle.',
    commission_offered: '16%',
    avatar: 'SM',
  },
  {
    id: '6',
    name: 'CafeMom',
    website: 'cafemom.com',
    status: 'done',
    contact_email: 'sales@cafemom.com',
    last_contact: '2026-02-25',
    notes: 'Partnership confirmed! Campaign launching next month.',
    commission_offered: '16%',
    avatar: 'CM',
  },
];

export const initialActivities: Activity[] = [
  {
    id: '1',
    type: 'email_sent',
    prospectId: '3',
    prospectName: 'Homeschool Giveaways',
    message: 'Sent partnership proposal with 16% commission details',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 min ago
  },
  {
    id: '2',
    type: 'response_received',
    prospectId: '3',
    prospectName: 'Homeschool Giveaways',
    message: 'Received positive response - interested in moving forward',
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 min ago
  },
  {
    id: '3',
    type: 'status_changed',
    prospectId: '5',
    prospectName: 'Scary Mommy',
    message: 'Moved to Review - awaiting contract feedback',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: '4',
    type: 'note_added',
    prospectId: '6',
    prospectName: 'CafeMom',
    message: 'Added launch date: April 1st campaign start',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
  },
  {
    id: '5',
    type: 'email_sent',
    prospectId: '1',
    prospectName: 'Hip2Save',
    message: 'Initial outreach with affiliate opportunity',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
  },
];

export const agentStatuses: AgentStatus[] = [
  {
    id: '1',
    name: 'Sarah (You)',
    status: 'active',
    currentTask: 'Reviewing Scary Mommy contract',
    completedToday: 3,
  },
  {
    id: '2',
    name: 'Outreach Agent',
    status: 'busy',
    currentTask: 'Following up with Hip2Save',
    completedToday: 5,
  },
  {
    id: '3',
    name: 'Research Agent',
    status: 'idle',
    currentTask: null,
    completedToday: 2,
  },
];
