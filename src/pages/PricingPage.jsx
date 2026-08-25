import React from 'react';
import { Helmet } from 'react-helmet-async';
import Pricing from '../components/Pricing';
import GrowthEstimator from '../components/GrowthEstimator';
import WebsiteAuditTool from '../components/WebsiteAuditTool';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing &amp; Software Pricing | Kingsparrows</title>
        <meta name="description" content="Transparent pricing plans, interactive campaign growth calculators, and a free instant website SEO audit tool by KingSparrow." />
        <link rel="canonical" href="https://www.kingsparrows.in/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Digital Marketing &amp; Software Pricing | Kingsparrows" />
        <meta property="og:description" content="Transparent pricing plans, interactive campaign growth calculators, and a free instant website SEO audit tool by KingSparrow." />
        <meta property="og:url" content="https://www.kingsparrows.in/pricing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing &amp; Software Pricing | Kingsparrows" />
        <meta name="twitter:description" content="Transparent pricing plans, interactive campaign growth calculators, and a free instant website SEO audit tool by KingSparrow." />
      </Helmet>

      <div style={{ paddingTop: '60px' }}>
        <Pricing />
        <GrowthEstimator />
        <WebsiteAuditTool />
      </div>
    </>
  );
}
