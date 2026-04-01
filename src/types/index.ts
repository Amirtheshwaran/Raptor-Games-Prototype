export interface Game {
  id: string; // Used as slug
  title: string;
  genre: string;
  year?: number;
  description: string;
  controls: string;
  thumbnail: string;
  filePath: string;
  relatedSlugs: string[];
}
