import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/admin", "/api"],
        },
        sitemap: "https://vectrax.astraventa.online/sitemap.xml",
    };
}
休息 / content
