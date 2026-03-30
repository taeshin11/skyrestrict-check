'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  adKey: string;
  width: number;
  height: number;
  className?: string;
}

export default function AdBanner({ adKey, width, height, className }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (!adKey || loaded.current || !adRef.current) return;
    loaded.current = true;

    const container = adRef.current;

    // Create atOptions script
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.text = `
      atOptions = {
        'key' : '${adKey}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;
    container.appendChild(optionsScript);

    // Create invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    invokeScript.async = true;
    container.appendChild(invokeScript);

    return () => {
      // Cleanup on unmount
      if (container) {
        container.innerHTML = '';
        loaded.current = false;
      }
    };
  }, [adKey, width, height]);

  if (!adKey) {
    return null;
  }

  return (
    <div className={`ad-container flex justify-center items-center my-4 ${className || ''}`}>
      <div ref={adRef} style={{ width, height, overflow: 'hidden' }} />
    </div>
  );
}
