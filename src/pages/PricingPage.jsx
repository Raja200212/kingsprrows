import React from 'react';
import { Helmet } from 'react-helmet-async';
import Pricing from '../components/Pricing';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing Plans & Packages | SEO & Development Tiers</title>
        <meta name="description" content="Transparent pricing for digital marketing campaigns, Google Business Profile setups, bulk WhatsApp panels, React websites, and custom software." />
        <link rel="canonical" href="https://www.kingsparrows.in/pricing" />
      </Helmet>

      <div style={{ paddingTop: '60px' }}>
        <Pricing />
      </div>
    </>
  );
}
