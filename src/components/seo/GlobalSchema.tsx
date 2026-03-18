export default function GlobalSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://asiatis.com.sg/#business',
        name: 'Asiatis Singapore',
        url: 'https://asiatis.com.sg',
        telephone: '+65 6950 0209',
        email: 'email@asiatis.com.sg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '541 Orchard Road, #09-01, Liat Towers',
          addressLocality: 'Singapore',
          postalCode: '238881',
          addressCountry: 'SG',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 1.3048,
          longitude: 103.8318,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: ['https://asiatis.com', 'https://asiatis.ca'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://asiatis.com.sg/#service',
        name: 'Asiatis B2B Translation Services',
        provider: { '@id': 'https://asiatis.com.sg/#business' },
        serviceType: 'Translation Services',
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 1.3048,
            longitude: 103.8318,
          },
          geoRadius: '50000',
        },
        description:
          'Expert B2B translation agency in Singapore specializing in European languages. Technical, medical, legal & commercial translation.',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
