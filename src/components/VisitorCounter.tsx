'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState({ today: 0, total: 0 });

  useEffect(() => {
    fetch('/api/visitors')
      .then((res) => res.json())
      .then((data) => setCount(data))
      .catch(() => {});
  }, []);

  return (
    <div className="flex gap-4 text-xs text-[#64748B]">
      <span>Today: {new Intl.NumberFormat('en-US').format(count.today)}</span>
      <span>|</span>
      <span>Total: {new Intl.NumberFormat('en-US').format(count.total)}</span>
    </div>
  );
}
