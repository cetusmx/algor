import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyCard({ tag, title, excerpt, slug }) {
  return (
    <Link to={`/casos-de-uso/${slug}`} className="block group h-full">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-full flex flex-col hover:-translate-y-1 hover:border-orange-500/50 transition-all duration-300">
        <span className="text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full text-xs font-mono inline-block w-fit mb-4">
          {tag}
        </span>
        <h3 className="text-xl font-bold text-white mt-2">
          {title}
        </h3>
        <p className="text-slate-300 mt-3 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        <span className="text-orange-500 font-medium mt-6 block group-hover:translate-x-2 transition-transform">
          Ver caso completo →
        </span>
      </div>
    </Link>
  );
}
