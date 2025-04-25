// filepath: /home/belalsajal/projects/city-pickups/js/utils/imagePaths.js
/**
 * Utility to get the correct asset path based on environment
 * In local development, images are in /public/assets/images/
 * When deployed to GitHub Pages, they're in /assets/images/
 */

// Check if we're running on GitHub Pages or locally
export const getAssetPath = (filename) => {
  // Check if we're on GitHub Pages (domain contains github.io)
  const isGitHubPages = window.location.hostname.includes('github.io');
  
  // In local development, images are in /public/assets/images/
  // On GitHub Pages, they're in /assets/images/
  return isGitHubPages 
    ? `/city-pickups/assets/images/${filename}`
    : `/public/assets/images/${filename}`;
};