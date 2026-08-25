import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { seoPagesList } from '../src/data/seoPagesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}

const baseTemplate = fs.readFileSync(templatePath, 'utf8');

// Define static routes with custom titles, descriptions, and canonicals
const staticRoutes = [
  {
    path: 'about',
    title: 'About Kingsparrows | Digital Marketing & Software Journey',
    description: 'Discover the story, mission, vision, core values, and technical expertise of KingSparrow, a leading digital marketing and custom software agency.',
    canonical: 'https://www.kingsparrows.in/about',
    h1: 'About KingSparrow Digital Marketing & Software Agency'
  },
  {
    path: 'services',
    title: 'Digital Marketing & Software Services | Kingsparrows',
    description: 'KingSparrow offers digital marketing & software services including Web Development, Mobile Apps, SEO, Google & Meta Ads, and CRM Development.',
    canonical: 'https://www.kingsparrows.in/services',
    h1: 'Digital Marketing & Custom Software Development Services'
  },
  {
    path: 'pricing',
    title: 'Digital Marketing & Software Pricing | Kingsparrows',
    description: 'Transparent pricing plans, interactive campaign growth calculators, and a free instant website SEO audit tool by KingSparrow.',
    canonical: 'https://www.kingsparrows.in/pricing',
    h1: 'Transparent Pricing Plans & Growth Calculators'
  },
  {
    path: 'portfolio',
    title: 'Kingsparrows Portfolio | Digital Marketing & Software Projects',
    description: 'View our portfolio of custom React websites, Electron desktop applications, WhatsApp bulk tools, and search engine optimization case studies.',
    canonical: 'https://www.kingsparrows.in/portfolio',
    h1: 'Our Client Work, Software Apps & Digital Marketing Campaigns'
  },
  {
    path: 'contact',
    title: 'Contact Kingsparrows | Digital Marketing & Tech Consultations',
    description: 'Reach out to KingSparrow for high-performance SEO audit services, React software consultations, and local marketing support in Dindigul, Tamil Nadu.',
    canonical: 'https://www.kingsparrows.in/contact',
    h1: 'Contact KingSparrow - Get In Touch Today'
  },
  {
    path: 'blog',
    title: 'Digital Marketing & Web Development Insights | Kingsparrows Blog',
    description: 'Read digital marketing insights, search engine tips, and React development updates from our Dindigul marketing agency experts.',
    canonical: 'https://www.kingsparrows.in/blog',
    h1: 'KingSparrow Official Tech & Digital Marketing Blog'
  },
  {
    path: 'seo-services',
    title: 'Top SEO Agency in Dindigul | Search Engine Optimization',
    description: 'Dominate Google rankings with high-intent SEO campaigns in Dindigul, Tamil Nadu. Learn what SEO is, how long it takes, and verify our optimization approach.',
    canonical: 'https://www.kingsparrows.in/seo-services',
    h1: 'Search Engine Optimization (SEO) Services in Dindigul'
  },
  {
    path: 'social-media-marketing',
    title: 'Social Media Marketing Agency | Facebook & Instagram Ads',
    description: 'Engage your target audience on Facebook, Instagram, LinkedIn, and Twitter. Learn what SMM is and how our creative copywriting scales communities.',
    canonical: 'https://www.kingsparrows.in/social-media-marketing',
    h1: 'Social Media Marketing & Paid Ads Agency'
  },
  {
    path: 'google-business-profile',
    title: 'Google Business Profile Optimization | Local SEO Dindigul',
    description: 'Dominate local maps. Learn how we configure Google Business Profile listings in Dindigul to secure top ranks for local customers.',
    canonical: 'https://www.kingsparrows.in/google-business-profile',
    h1: 'Google Business Profile Optimization & Local Maps SEO'
  },
  {
    path: 'web-development',
    title: 'Custom Web & App Development Company in Dindigul',
    description: 'Get premium custom web applications and desktop tools. Learn why React is our core framework and verify our custom code architecture.',
    canonical: 'https://www.kingsparrows.in/web-development',
    h1: 'Custom React Web Development & Application Engineering'
  },
  {
    path: 'whatsapp-marketing',
    title: 'WhatsApp Marketing Software & Bulk Panel Solutions',
    description: 'Reach thousands of high-intent clients instantly with custom bulk WhatsApp broadcasting software panels, anti-ban structures, and logs.',
    canonical: 'https://www.kingsparrows.in/whatsapp-marketing',
    h1: 'WhatsApp Marketing Software & Broadcast Automation'
  },
  {
    path: 'case-studies',
    title: 'Client Case Studies & Marketing Results | Kingsparrows',
    description: 'Explore real-world case studies detailing how we scaled organic SEO traffic, optimized Google Ads conversion, and developed custom CRM systems.',
    canonical: 'https://www.kingsparrows.in/case-studies',
    h1: 'Digital Marketing & Custom Software Case Studies'
  },
  {
    path: 'industries',
    title: 'Industry Specific Marketing & CRM Solutions | Kingsparrows',
    description: 'Discover custom CRM systems and local marketing strategies for Healthcare, Construction, Real Estate, Education, Restaurants, Taxi fleet, and E-commerce.',
    canonical: 'https://www.kingsparrows.in/industries',
    h1: 'Industry Specific Digital Marketing & CRM Solutions'
  }
];

// Combine static routes and dynamic SEO routes
const allPages = [
  ...staticRoutes,
  ...seoPagesList.map(item => ({
    path: item.slug,
    title: item.title,
    description: item.description,
    canonical: `https://www.kingsparrows.in/${item.slug}`,
    h1: item.h1 || item.title
  }))
];

console.log(`Prerendering ${allPages.length} routes for static crawlers...`);

allPages.forEach(page => {
  let html = baseTemplate;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical"\s+href=".*?"\s*\/?>/s,
    `<link rel="canonical" href="${page.canonical}" />`
  );

  // Replace Open Graph Title & Description & URL
  html = html.replace(
    /<meta property="og:title"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta property="og:url"\s+content=".*?"\s*\/?>/s,
    `<meta property="og:url" content="${page.canonical}" />`
  );

  // Replace Twitter Title & Description
  html = html.replace(
    /<meta name="twitter:title"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description"\s+content=".*?"\s*\/?>/s,
    `<meta name="twitter:description" content="${page.description}" />`
  );

  // Replace Fallback H1
  html = html.replace(
    /<h1>.*?<\/h1>/s,
    `<h1>${page.h1}</h1>`
  );

  // Ensure target folder exists in dist
  const targetFolder = path.resolve(distDir, page.path);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Write index.html inside route folder
  fs.writeFileSync(path.resolve(targetFolder, 'index.html'), html, 'utf8');
});

console.log(`Prerendering complete! Created static HTML index files for ${allPages.length} routes.`);
