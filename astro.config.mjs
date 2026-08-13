// @ts-check
import { defineConfig } from 'astro/config';

// Static output, no client framework, no integrations. The site is one page;
// the only JavaScript it ships is the ~20 lines that ask GitHub for the
// latest release.
export default defineConfig({
  // Set this once there's a real domain, then absolute og: URLs in
  // src/pages/index.astro can use Astro.site instead of the GitHub raw link.
  // site: 'https://…',
});
