"use client";

import { Search } from 'lucide-react';
import EmptyState from './empty-state';

interface EmptySearchProps {
  searchQuery: string;
  onClear: () => void;
}

export default function EmptySearch({ searchQuery, onClear }: EmptySearchProps) {
  return (
    <EmptyState
      icon={Search}
      title="No Results Found"
      description={`We couldn't find any results for "${searchQuery}". Try different keywords or browse our popular destinations.`}
      action={{
        label: "Clear Search",
        onClick: onClear
      }}
    />
  );
}
