import React from 'react';
import { Helmet } from 'react-helmet-async';
import Pricing from '../components/Pricing';
import GrowthEstimator from '../components/GrowthEstimator';
import WebsiteAuditTool from '../components/WebsiteAuditTool';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing Plans, Estimators & Audits | KingSparrow</title>
        <meta name="description" content="Transparent pricing plans, interactive campaign growth calculators, and a free instant website SEO audit tool by KingSparrow." />
        <link rel="canonical" href="https://www.kingsparrows.in/pricing" />
      </Helmet>

      <div style={{ paddingTop: '60px' }}>
        <Pricing />
        <GrowthEstimator />
        <WebsiteAuditTool />
      </div>
    </>
  );
}
