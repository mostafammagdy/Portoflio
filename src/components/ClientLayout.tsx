"use client";

import { useState, useCallback } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleComplete} />}
      {children}
    </>
  );
}
