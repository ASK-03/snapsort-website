'use client';

import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { links } from "@/lib/content";

interface GitHubStarProps {
  repoUrl?: string;
  ariaLabel?: string;
}

const REPO_API_URL = "https://api.github.com/repos/ASK-03/SnapSort";

const GitHubStar: React.FC<GitHubStarProps> = ({
  repoUrl = links.github,
  ariaLabel = "Star ASK-03/SnapSort on GitHub",
}) => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    fetch(REPO_API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setStarCount(data.stargazers_count);
        }
      })
      .catch(() => setStarCount(null));
  }, []);

  // Prevent hydration mismatch by waiting until mounted
  if (!hasMounted) return null;

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
    >
      <Star className="h-4 w-4" />
      {starCount !== null ? (
        <span>{starCount.toLocaleString()}</span>
      ) : (
        <span>Star</span>
      )}
    </a>
  );
};

export default GitHubStar;
