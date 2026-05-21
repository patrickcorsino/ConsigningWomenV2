
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Consigning Women | Upscale Resale Boutique Atlanta",
  description = "Shop the best in upscale resale at Consigning Women Atlanta. Designer labels, current trends, and classic styles. Best consignment shop in Atlanta, Buckhead, and Brookhaven.",
  canonical = "https://consigningwomenatlanta.com",
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
  keywords = "consigning women atlanta, consigning atlanta, designer resale atlanta, upscale consignment atlanta, luxury resale atlanta, buckhead consignment, brookhaven consignment, women's fashion resale atlanta"
}) => {
  const siteTitle = title.includes("Consigning Women") ? title : `${title} | Consigning Women`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Consigning Women Upscale Resale" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo tags for Local SEO */}
      <meta name="geo.region" content="US-GA" />
      <meta name="geo.placename" content="Atlanta" />
      <meta name="geo.position" content="33.8;-84.3" />
      <meta name="ICBM" content="33.8, -84.3" />
    </Helmet>
  );
};

export default SEO;
