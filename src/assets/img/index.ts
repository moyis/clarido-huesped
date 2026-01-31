// Direct imports for Astro image optimization
import profile from './profile.webp';
import cover1 from './covers/cover1.webp';

// Map string paths to imported images
export const images: Record<string, ImageMetadata> = {
  'profile.webp': profile,
  'covers/cover1.webp': cover1,
};

export { profile, cover1 };
