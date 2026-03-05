import type { Prospect } from '../types';
import { X, Mail, Globe, Calendar, FileText, Percent } from 'lucide-react';

interface ProspectDetailProps {
  prospect: Prospect | null;
  onClose: () => void;
}

export function ProspectDetail({ prospect, onClose }: ProspectDetailProps) {
  if (!prospect) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="newspaper-card bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-paper-dark flex items-center justify-center text-lg font-semibold text-ink">
              {prospect.avatar}
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-ink">
                {prospect.name}
              </h2>
              <a
                href={`https://${prospect.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center gap-1"
              >
                <Globe size={14} />
                {prospect.website}
              </a>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X size={20} className="text-ink-light" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 p-3 bg-paper rounded-md">
              <Mail size={18} className="text-ink-light" />
              <div>
                <p className="text-xs text-ink-light">Contact</p>
                <p className="text-sm text-ink truncate">{prospect.contact_email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-3 bg-paper rounded-md">
              <Percent size={18} className="text-ink-light" />
              <div>
                <p className="text-xs text-ink-light">Commission</p>
                <p className="text-sm text-ink">{prospect.commission_offered}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 bg-paper rounded-md">
            <Calendar size={18} className="text-ink-light" />
            <div>
              <p className="text-xs text-ink-light">Last Contact</p>
              <p className="text-sm text-ink">
                {prospect.last_contact || (
                  <span className="text-stone-400 italic">No contact yet</span>
                )}
              </p>
            </div>
          </div>

          <div className="p-3 bg-paper rounded-md">
            <div className="flex items-center gap-2 mb-2">
              <FileText size={18} className="text-ink-light" />
              <p className="text-xs text-ink-light">Notes</p>
            </div>
            <p className="text-sm text-ink">{prospect.notes}</p>
          </div>

          <div className="flex gap-2 pt-2">
            <button className="flex-1 px-4 py-2 bg-ink text-paper rounded-md font-medium hover:bg-ink-light transition-colors">
              Send Email
            </button>
            <button className="flex-1 px-4 py-2 border border-stone-300 rounded-md font-medium text-ink hover:bg-paper transition-colors">
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
