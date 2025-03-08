import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing title',
  description: 'SEO description',
  keywords: ['pricing Page', '$$$$ Padre', 'my contact', '...'],
};

export default function PricingPage() {
  return <span className="text-7xl">Pricing Page</span>;
}
