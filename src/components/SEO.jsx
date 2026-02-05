import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
    const siteTitle = 'Sarayut | Liquid Glass Portfolio';
    const defaultDescription = 'A futuristic portfolio built with iOS 26 Liquid Glass aesthetics, React, and Modern Web Technologies.';
    const defaultImage = 'https://bassarayut.github.io/og-image.jpg'; // Pending real OG image
    const siteUrl = 'https://bassarayut.github.io';

    const fullTitle = title ? `${title} | Sarayut` : siteTitle;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Sarayut",
                    "url": siteUrl,
                    "image": defaultImage,
                    "sameAs": [
                        "https://github.com/bassarayut",
                        "https://line.me/ti/p/~bbassarayut"
                    ],
                    "jobTitle": "Web Developer",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Freelance"
                    },
                    "description": defaultDescription
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
