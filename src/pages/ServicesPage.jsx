import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services | SEO, SMM, Web Development in Dindigul</title>
        <meta name="description" content="Explore our digital marketing and custom software services. KingSparrow provides high-converting SEO, SMM, Local business profiles, and React web applications." />
        <link rel="canonical" href="https://www.kingsparrows.in/services" />
      </Helmet>

      <div style={{ paddingTop: '60px' }}>
        <Services />
      </div>
    </>
  );
}
