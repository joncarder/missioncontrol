import type { AgentStatus } from '../types';
import { User, CheckCircle2, Clock, Circle } from 'lucide-react';

interface AgentCardsProps {
  agents: AgentStatus[];
}

const statusConfig = {
  active: {
    icon: CheckCircle2,
    color: 'text-emerald-600 bg-emerald-50',
    label: 'Active',
  },
  busy: {
    icon: Clock,
    color: 'text-amber-600 bg-amber-50',
    label: 'Busy',
  },
  idle: {
    icon: Circle,
    color: 'text-stone-400 bg-stone-50',
    label: 'Idle',
  },
};

export function AgentCards({ agents }: AgentCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {agents.map((agent) => {
        const config = statusConfig[agent.status];
        const Icon = config.icon;

        return (
          <div
            key={agent.id}
            className="newspaper-card rounded-lg p-4 hover:shadow-newspaper-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-paper-dark flex items-center justify-center">
                  <User size={20} className="text-ink-light" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-ink">
                    {agent.name}
                  </h3>
                  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
                    <Icon size={12} />
                    {config.label}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <p className="text-xs text-ink-light uppercase tracking-wide mb-1">
                  Current Task
                </p>
                <p className="text-sm text-ink">
                  {agent.currentTask || (
                    <span className="text-stone-400 italic">No active task</span>
                  )}
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-ink-light">Completed Today</p>
                  <p className="text-lg font-semibold text-accent">
                    {agent.completedToday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
