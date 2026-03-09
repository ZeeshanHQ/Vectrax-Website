export default function StructuredData() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Vectrax",
        "operatingSystem": "Android, iOS",
        "applicationCategory": "DeveloperApplication",
        "description": "AI-powered mobile application to manage Supabase databases, generate SQL, scan for vulnerabilities, and monitor performance.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "author": {
            "@type": "Organization",
            "name": "Astraventa",
            "url": "https://astraventa.online"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
