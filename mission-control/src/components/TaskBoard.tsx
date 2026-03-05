import type { Prospect, ProspectStatus } from '../types';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface TaskBoardProps {
  prospects: Prospect[];
  onMoveProspect: (prospectId: string, newStatus: ProspectStatus) => void;
}

const columns: { id: ProspectStatus; label: string; color: string }[] = [
  { id: 'inbox', label: 'Inbox', color: 'border-l-4 border-stone-400' },
  { id: 'assigned', label: 'Assigned', color: 'border-l-4 border-blue-400' },
  { id: 'in_progress', label: 'In Progress', color: 'border-l-4 border-amber-400' },
  { id: 'review', label: 'Review', color: 'border-l-4 border-purple-400' },
  { id: 'done', label: 'Done', color: 'border-l-4 border-emerald-500' },
];

const statusOrder: ProspectStatus[] = ['inbox', 'assigned', 'in_progress', 'review', 'done'];

function getStatusIndex(status: ProspectStatus): number {
  return statusOrder.indexOf(status);
}

function canMoveLeft(status: ProspectStatus): boolean {
  return getStatusIndex(status) > 0;
}

function canMoveRight(status: ProspectStatus): boolean {
  return getStatusIndex(status) < statusOrder.length - 1;
}

function getPreviousStatus(status: ProspectStatus): ProspectStatus {
  const idx = getStatusIndex(status);
  return statusOrder[idx - 1] || status;
}

function getNextStatus(status: ProspectStatus): ProspectStatus {
  const idx = getStatusIndex(status);
  return statusOrder[idx + 1] || status;
}

export function TaskBoard({ prospects, onMoveProspect }: TaskBoardProps) {
  const getProspectsForColumn = (status: ProspectStatus) =>
    prospects.filter((p) => p.status === status);

  return (
    <div className="newspaper-card rounded-lg p-4">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
        <h2 className="font-serif text-lg font-semibold text-ink">Task Board</h2>
        <span className="text-xs text-ink-light font-sans">
          {prospects.length} prospects
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {columns.map((column) => {
          const columnProspects = getProspectsForColumn(column.id);
          return (
            <div key={column.id} className="flex flex-col min-w-[280px] sm:min-w-[300px] snap-start flex-shrink-0">
              <div className="flex items-center justify-between mb-2 px-1">
                <h3 className="font-serif text-sm font-medium text-ink">
                  {column.label}
                </h3>
                <span className="text-xs text-ink-light bg-stone-100 px-2 py-0.5 rounded-full">
                  {columnProspects.length}
                </span>
              </div>

              <div className="space-y-2 min-h-[100px]">
                {columnProspects.map((prospect) => (
                  <div
                    key={prospect.id}
                    className={`newspaper-card bg-white rounded-md p-3 ${column.color} group`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-8 h-8 rounded-full bg-paper-dark flex items-center justify-center text-xs font-semibold text-ink">
                        {prospect.avatar}
                      </div>
                      <button className="text-stone-300 hover:text-ink-light opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>

                    <h4 className="font-medium text-sm text-ink mb-1 truncate">
                      {prospect.name}
                    </h4>
                    <p className="text-xs text-ink-light truncate mb-2">
                      {prospect.website}
                    </p>

                    {prospect.last_contact && (
                      <p className="text-xs text-stone-400 mb-2">
                        Last: {prospect.last_contact}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                      <button
                        onClick={() =>
                          canMoveLeft(prospect.status) &&
                          onMoveProspect(prospect.id, getPreviousStatus(prospect.status))
                        }
                        disabled={!canMoveLeft(prospect.status)}
                        className={`p-1 rounded ${
                          canMoveLeft(prospect.status)
                            ? 'hover:bg-stone-100 text-ink-light'
                            : 'text-stone-200 cursor-not-allowed'
                        }`}
                      >
                        <ChevronLeft size={16} />
                      </button>

                      <span className="text-xs font-medium text-accent">
                        {prospect.commission_offered}
                      </span>

                      <button
                        onClick={() =>
                          canMoveRight(prospect.status) &&
                          onMoveProspect(prospect.id, getNextStatus(prospect.status))
                        }
                        disabled={!canMoveRight(prospect.status)}
                        className={`p-1 rounded ${
                          canMoveRight(prospect.status)
                            ? 'hover:bg-stone-100 text-ink-light'
                            : 'text-stone-200 cursor-not-allowed'
                        }`}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
