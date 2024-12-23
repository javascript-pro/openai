import React from "react";
import { Metadata } from 'next';

// Optionally define metadata (sets <title>, <meta> tags, etc.)
export const metadata: Metadata = {
  title: 'Home - Public Landing Page',
  description: 'A publicly accessible landing page',
};

// If you want *strict* static generation (no dynamic content), use:
export const dynamic = 'error'; 
// or, if you want to do Incremental Static Regeneration, for example:
// export const revalidate = 3600; // re-generate every hour

export default function HomePage() {
  return (
    <main>
        <h1>I am chat</h1>
    </main>
  );
}
