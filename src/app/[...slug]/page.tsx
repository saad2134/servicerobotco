import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import BusinessCard from "../../components/BusinessCard";
import ClientPageWrapper from "../../components/ClientPageWrapper";
import LocalBusinessCardView from "../../components/LocalBusinessCardView";

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

// Scraped local asset list to keep local
const localFiles = [
  "logos/mark-email.png",
  "logos/mark.png",
  "logos/wordmark-email.png",
  "logos/wordmark-green.png",
  "logos/wordmark-on-light-bg.png",
  "logos/wordmark-square-green-transparent.png",
  "logos/wordmark-square-green.png",
  "logos/wordmark-square-transparent.png",
  "logos/wordmark-square-white.png",
  "logos/wordmark-white-transparent.png",
  "media/gausium-retail-cleaning.webp",
  "media/haidilao-bellabot-01.webp",
  "media/haidilao-bellabot-clip.webm",
  "media/industrial_robot_integration.jpg",
  "media/standard-bots-cnc-shop.webp",
  "media/standard-bots-machine-tending.webp",
  "media/standard-robots-foxconn-factory.webp",
  "media/standard-robots-toyota-plant.webp",
  "media/standard-robots-trusco-warehouse.webp",
  "media/universal-robots-palletizing.webp",
  "media/universal-robots-welding.webp"
];

// Helper to get page data from scraped JSON files
async function getPageData(slug?: string[]) {
  const fileParts = slug && slug.length > 0 ? slug : ["index"];
  const fileName = fileParts.join("_") + ".json";
  const filePath = path.join(process.cwd(), "scratch", "pages", fileName);
  
  try {
    const content = await fs.promises.readFile(filePath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

// Generate dynamic metadata matching the original live website SEO tags
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  if (slug && slug.length === 1 && slug[0] === "business-card") {
    return {
      title: "Digital Business Card | Service Robot Co.™",
      description: "Service Robot Co. digital business card. Interactive credentials, 24/7 dispatcher details, and print options.",
    };
  }

  const pageData = await getPageData(slug);
  if (!pageData) return { title: "Page Not Found | Service Robot Co." };

  const titleMatch = pageData.html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = pageData.html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || 
                    pageData.html.match(/<meta\s+content="([^"]+)"\s+name="description"/i);

  return {
    title: titleMatch ? titleMatch[1] : "Service Robot Co.",
    description: descMatch ? descMatch[1] : "Commercial Robotics Integrator",
  };
}

// LocalBusinessCardView is imported from Client Component

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // Custom Route: /business-card
  if (slug && slug.length === 1 && slug[0] === "business-card") {
    return <LocalBusinessCardView />;
  }

  const pageData = await getPageData(slug);
  if (!pageData) {
    notFound();
  }

  // Extract content inside body tag
  let bodyContent = pageData.html;
  const bodyMatch = pageData.html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) {
    bodyContent = bodyMatch[1];
  }

  // Strip native static bundles to avoid rehydration mismatch while keeping layout
  bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  // Strip duplicate header nav and footer elements from scraped templates
  bodyContent = bodyContent.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, "");
  bodyContent = bodyContent.replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, "");

  // Decode and rewrite Next.js optimized image URLs
  bodyContent = bodyContent.replace(/\/_next\/image\?url=%2F([^&,\s"]+)[^,\s"]*/g, (match: string, pathSegment: string) => {
    const decodedPath = decodeURIComponent(pathSegment);
    if (localFiles.includes(decodedPath)) {
      return `/${decodedPath}`;
    }
    return `https://servicerobotco.com/${decodedPath}`;
  });

  // Rewrite regular relative image/asset URLs to live production domain to avoid 404s
  bodyContent = bodyContent.replace(/(href|src)="\/((?!logos|media|next\.svg|vercel\.svg|window\.svg|globe\.svg|file\.svg)[^\s"]+)"/g, (match: string, attr: string, pathSegment: string) => {
    if (localFiles.includes(pathSegment)) {
      return `${attr}="/${pathSegment}"`;
    }
    const hasExtension = /\.[a-zA-Z0-9]{2,4}$/.test(pathSegment);
    if (!hasExtension) {
      return `${attr}="/${pathSegment}"`; // Page link, route locally
    }
    return `${attr}="https://servicerobotco.com/${pathSegment}"`; // Static file, route to live domain
  });
  
  // Inject mobile menu logic and custom interactivity on render
  const scriptToggler = `
    <script>
      (function() {
        // Toggle mobile menus dynamically
        var menuBtn = document.querySelector('button[aria-label="Open menu"]');
        var mobileMenu = document.querySelector('button[aria-label="Open menu"] + div') || 
                           document.querySelector('.lg\\\\:hidden');
        if (menuBtn && mobileMenu) {
          menuBtn.addEventListener('click', function() {
            var expanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
          });
        }
      })();
    </script>
  `;

  // Combine scraped HTML body and interactive script
  let fullHtml = bodyContent + scriptToggler;

  // Render Homepage and Contact Page with the embedded interactive React BusinessCard
  const isHomepage = !slug || slug.length === 0;
  const isContactPage = !!(slug && slug.length === 1 && slug[0] === "contact");
  const footerIndex = fullHtml.indexOf("<footer");

  if (footerIndex !== -1 && (isHomepage || isContactPage)) {
    const cardSectionHtml = `
      <section style="padding: 5rem 2rem; background-color: var(--bg-cream-dark); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); text-align: center;" class="no-print">
        <div style="max-width: 1200px; margin: 0 auto;">
          <h2 style="font-family: var(--font-serif); font-size: 2rem; color: var(--primary-green); margin-bottom: 1rem;">
            Service Robot Co.™ Operations Credentials
          </h2>
          <p style="color: var(--text-gray); font-size: 1rem; max-width: 500px; margin: 0 auto 2.5rem auto;">
            Hover to tilt, click to flip the card, or scan the dispatcher QR code. Use the printable digital card for physical dispatch folders.
          </p>
          <div id="business-card-placeholder"></div>
          <div style="margin-top: 2.5rem;">
            <a href="/business-card" class="bg-accent text-white px-6 py-3 rounded font-medium inline-block transition hover:bg-accent-hover">
              View Printable Operations Format →
            </a>
          </div>
        </div>
      </section>
    `;
    fullHtml = fullHtml.substring(0, footerIndex) + cardSectionHtml + fullHtml.substring(footerIndex);
  }

  return (
    <ClientPageWrapper htmlContent={fullHtml} isHomepageOrContact={isHomepage || isContactPage} />
  );
}
