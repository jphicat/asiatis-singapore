import React from 'react';
import { FileText } from 'lucide-react';

interface ServiceContentProps {
  heading: string;
  items: Record<string, string>;
}

export function ServiceContent({ heading, items }: ServiceContentProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(items).map(([key, value]) => (
            <div key={key} className="flex items-start p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <FileText className="w-6 h-6 text-violet-600 shrink-0 mt-1 mr-4" />
              <p className="text-slate-700 font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
