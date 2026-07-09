import React from 'react';
import { Helmet } from 'react-helmet-async';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Custom React Applications & Marketing Case Studies</title>
        <meta name="description" content="View our portfolio of custom React websites, Electron desktop applications, WhatsApp bulk tools, and search engine optimization case studies." />
        <link rel="canonical" href="https://www.kingsparrows.in/portfolio" />
      </Helmet>

      <div style={{ paddingTop: '60px' }}>
        <Portfolio />
      </div>
    </>
  );
}
