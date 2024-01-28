import React, { useEffect, useState } from "react";

export default function Router() {
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      if (
        typeof window !== "undefined" &&
        location !== window.location.pathname
      ) {
        setLocation(window.location.pathname);
      }
    }, 100);
  }, []);

  function navigate(basepath: string) {
    window.history.pushState({}, "", basepath);
  }

  return { location, navigate };
}
