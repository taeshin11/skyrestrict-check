'use client';

interface AdBannerProps {
  adKey?: string;
  width: number;
  height: number;
  className?: string;
}

export default function AdBanner({ adKey, width, height, className }: AdBannerProps) {
  const hasKey = adKey && adKey.length > 0;

  return (
    <div className={`ad-container flex justify-center items-center my-4 ${className || ''}`}>
      {hasKey ? (
        <ins
          className="adstera"
          data-key={adKey}
          data-format="banner"
          data-width={width}
          data-height={height}
        />
      ) : (
        <div
          className="bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-sm"
          style={{ width: Math.min(width, typeof window !== 'undefined' ? window.innerWidth - 32 : width), height }}
        >
          Ad Space — {width}&times;{height}
        </div>
      )}
    </div>
  );
}
