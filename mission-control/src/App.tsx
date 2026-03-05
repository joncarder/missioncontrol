import { useState } from 'react';
import { ActivityFeed } from './components/ActivityFeed';
import { TaskBoard } from './components/TaskBoard';
import { AgentCards } from './components/AgentCards';
import { ProspectDetail } from './components/ProspectDetail';
import { initialProspects, initialActivities, agentStatuses } from './data';
import type { Prospect, ProspectStatus, Activity } from './types';
import { Newspaper, Plus, Bell, Search } from 'lucide-react';

function App() {
  const [prospects, setProspects] = useState<Prospect[]>(initialProspects);
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [selectedProspect, setSelectedProspect] = useState<Prospect | null>(null);

  const handleMoveProspect = (prospectId: string, newStatus: ProspectStatus) => {
    const prospect = prospects.find((p) => p.id === prospectId);
    if (!prospect) return;

    const oldStatus = prospect.status;

    setProspects((prev) =>
      prev.map((p) =>
        p.id === prospectId ? { ...p, status: newStatus } : p
      )
    );

    // Add activity for status change
    const newActivity: Activity = {
      id: Date.now().toString(),
      type: 'status_changed',
      prospectId,
      prospectName: prospect.name,
      message: `Moved from ${oldStatus.replace('_', ' ')} to ${newStatus.replace('_', ' ')}`,
      timestamp: new Date(),
    };

    setActivities((prev) => [newActivity, ...prev]);
  };

  const stats = {
    total: prospects.length,
    inbox: prospects.filter((p) => p.status === 'inbox').length,
    inProgress: prospects.filter((p) => p.status === 'in_progress').length,
    done: prospects.filter((p) => p.status === 'done').length,
  };

  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-ink rounded-md flex items-center justify-center">
                <Newspaper size={24} className="text-paper" />
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-ink">
                  Mission Control
                </h1>
                <p className="text-xs text-ink-light">My Lil Startup • Affiliate Recruitment</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-paper rounded-full border border-stone-200">
                <Search size={16} className="text-ink-light" />
                <input
                  type="text"
                  placeholder="Search prospects..."
                  className="bg-transparent text-sm text-ink placeholder:text-stone-400 outline-none w-48"
                />
              </div>

              <button className="p-2 hover:bg-paper rounded-full transition-colors relative">
                <Bell size={20} className="text-ink-light" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-ink text-paper rounded-md font-medium hover:bg-ink-light transition-colors">
                <Plus size={18} />
                <span className="hidden sm:inline">Add Prospect</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="bg-paper-dark border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-ink">{stats.total}</p>
              <p className="text-xs text-ink-light uppercase tracking-wide">Total Prospects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-ink">{stats.inbox}</p>
              <p className="text-xs text-ink-light uppercase tracking-wide">In Inbox</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-accent">{stats.inProgress}</p>
              <p className="text-xs text-ink-light uppercase tracking-wide">In Progress</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-serif font-bold text-success">{stats.done}</p>
              <p className="text-xs text-ink-light uppercase tracking-wide">Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Agent Cards */}
        <section className="mb-6">
          <h2 className="font-serif text-lg font-semibold text-ink mb-4">Agent Status</h2>
          <AgentCards agents={agentStatuses} />
        </section>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Task Board - takes up 2 columns */}
          <div className="lg:col-span-2">
            <TaskBoard prospects={prospects} onMoveProspect={handleMoveProspect} />
          </div>

          {/* Activity Feed - takes up 1 column */}
          <div className="lg:col-span-1">
            <ActivityFeed activities={activities} />
          </div>
        </div>

        {/* Program Info */}
        <section className="mt-6 newspaper-card rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-lg font-semibold text-ink mb-1">
                KiwiCo Affiliate Program
              </h2>
              <p className="text-sm text-ink-light">
                Targeting educational & parenting influencers • Commission tier:{' '}
                <span className="font-semibold text-accent">16% total CPA</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-ink-light">Network</p>
              <p className="font-semibold text-ink">Awin</p>
            </div>
          </div>
        </section>
      </main>

      {/* Prospect Detail Modal */}
      <ProspectDetail
        prospect={selectedProspect}
        onClose={() => setSelectedProspect(null)}
      />
    </div>
  );
}

export default App;
