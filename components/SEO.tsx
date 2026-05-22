
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
  title = "Consigning Women | Upscale Resale Boutique Dunwoody GA",
  description = "Atlanta's first choice for clothing consignment. Shop designer labels, current trends, and classic styles at Consigning Women in Dunwoody, GA — serving Sandy Springs, Buckhead, Brookhaven, and metro Atlanta.",
  canonical = "https://consigningwomenatlanta.com",
  ogType = "website",
  ogImage = "https://consigningwomenatlanta.com/logo.jpg",
  keywords = "consigning women dunwoody, consigning women atlanta, designer resale atlanta, upscale consignment dunwoody, luxury resale dunwoody, sandy springs consignment, buckhead consignment, brookhaven consignment"
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
      <meta name="geo.placename" content="Dunwoody" />
      <meta name="geo.position" content="33.9452;-84.3371" />
      <meta name="ICBM" content="33.9452, -84.3371" />
    </Helmet>
  );
};

export default SEO;
