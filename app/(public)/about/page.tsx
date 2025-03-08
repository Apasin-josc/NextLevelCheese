import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO title',
  description: 'SEO description',
  keywords: ['About Page', 'Que Padre', 'Information', '...'],
};

export default function AboutPage() {
  return <span className="text-7xl">About Page </span>;
}
