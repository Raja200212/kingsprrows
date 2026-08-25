import React from 'react';
import { Helmet } from 'react-helmet-async';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Kingsparrows Portfolio | Digital Marketing &amp; Software Projects</title>
        <meta name="description" content="View our portfolio of custom React websites, Electron desktop applications, WhatsApp bulk tools, and search engine optimization case studies." />
        <link rel="canonical" href="https://www.kingsparrows.in/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kingsparrows Portfolio | Digital Marketing &amp; Software Projects" />
        <meta property="og:description" content="View our portfolio of custom React websites, Electron desktop applications, WhatsApp bulk tools, and search engine optimization case studies." />
        <meta property="og:url" content="https://www.kingsparrows.in/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kingsparrows Portfolio | Digital Marketing &amp; Software Projects" />
        <meta name="twitter:description" content="View our portfolio of custom React websites, Electron desktop applications, WhatsApp bulk tools, and search engine optimization case studies." />
      </Helmet>

      <div style={{ paddingTop: '60px' }}>
        <Portfolio />
      </div>
    </>
  );
}
