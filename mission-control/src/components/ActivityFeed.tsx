import type { Activity, ActivityType } from '../types';
import { Mail, MessageSquare, GitPullRequest, FileText, Phone } from 'lucide-react';

interface ActivityFeedProps {
  activities: Activity[];
}

const activityIcons: Record<ActivityType, typeof Mail> = {
  email_sent: Mail,
  response_received: MessageSquare,
  status_changed: GitPullRequest,
  note_added: FileText,
  call_made: Phone,
};

const activityColors: Record<ActivityType, string> = {
  email_sent: 'text-info',
  response_received: 'text-success',
  status_changed: 'text-accent',
  note_added: 'text-ink-light',
  call_made: 'text-warning',
};

const activityLabels: Record<ActivityType, string> = {
  email_sent: 'Email Sent',
  response_received: 'Response',
  status_changed: 'Status Update',
  note_added: 'Note Added',
  call_made: 'Call Made',
};

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="newspaper-card rounded-lg p-4 h-full">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
        <h2 className="font-serif text-lg font-semibold text-ink">Activity Feed</h2>
        <span className="text-xs text-ink-light font-sans">Live updates</span>
      </div>
      
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {activities.map((activity) => {
          const Icon = activityIcons[activity.type];
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 p-3 rounded-md hover:bg-paper-dark transition-colors"
            >
              <div className={`mt-0.5 ${activityColors[activity.type]}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium text-ink-light uppercase tracking-wide">
                    {activityLabels[activity.type]}
                  </span>
                  <span className="text-xs text-stone-400">•</span>
                  <span className="text-xs text-ink-light">
                    {formatTimeAgo(activity.timestamp)}
                  </span>
                </div>
                <p className="text-sm font-medium text-ink truncate">
                  {activity.prospectName}
                </p>
                <p className="text-sm text-ink-light mt-0.5 line-clamp-2">
                  {activity.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
