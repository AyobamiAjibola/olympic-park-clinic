"use client";

import { useEffect, useState } from "react";
import { getStoreStatus_, getTodayHours } from "@/constants/helper";

export function useClinicStatus() {
  const [status, setStatus] = useState<(ReturnType<typeof getStoreStatus_> & { hours: string }) | null>(null);
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setStatus({ ...getStoreStatus_(now), hours: getTodayHours(now) });
    };
    update();
    const timer = window.setInterval(update, 30_000);
    window.addEventListener("focus", update);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("focus", update);
    };
  }, []);
  return status;
}
