import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact title',
  description: 'SEO description',
  keywords: ['Contact Page', 'Que Padre', 'my contact', '...'],
};

export default function ContactPage() {
  return <span className="text-7xl">Contact Page</span>;
}
