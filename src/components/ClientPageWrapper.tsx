'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import BusinessCard from './BusinessCard';

interface ClientPageWrapperProps {
  htmlContent: string;
  isHomepageOrContact: boolean;
}

export default function ClientPageWrapper({ htmlContent, isHomepageOrContact }: ClientPageWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const [portalTarget, setPortalTarget] = useState<Element | null>(null);

  useEffect(() => {
    setMounted(true);
    if (isHomepageOrContact) {
      const target = document.getElementById('business-card-placeholder');
      setPortalTarget(target);
    }
  }, [isHomepageOrContact, htmlContent]);

  return (
    <>
      {/* suppressHydrationWarning={true} disables warnings on scraped SSR nodes during hydration */}
      <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      {mounted && portalTarget && createPortal(<BusinessCard />, portalTarget)}
    </>
  );
}
