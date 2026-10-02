export interface StoneProduct {
  id: string;
  name: string;
  category: 'marble' | 'granite' | 'sandstone' | 'red_sandstone' | 'limestone' | 'custom_stone';
  origin: string; // e.g. "Makrana / Rajsamand, Rajasthan", "Dholpur, Rajasthan", "Bansi Paharpur / Dausa, Rajasthan"
  color: string;
  pattern: string;
  finishes: string[];
  recommendedApplications: string[];
  standardThickness: string;
  surfaceTexture: string;
  description: string;
  image: string;
  technicalSpecsPlaceholder?: {
    density?: string;
    waterAbsorption?: string;
    compressiveStrength?: string;
    flexuralStrength?: string;
  };
}

export interface SculptureItem {
  id: string;
  title: string;
  category: 'statue' | 'portrait' | 'religious' | 'decorative' | 'architectural' | 'garden' | 'classical';
  material: string;
  heightPlaceholder: string;
  finish: string;
  description: string;
  image: string;
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  category: 'marble' | 'granite' | 'sandstone' | 'red_sandstone' | 'architecture' | 'interiors' | 'landscaping' | 'sculptures' | 'custom_work';
  location: string;
  stoneUsed: string;
  application: string;
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface EnquirySubmission {
  id?: string;
  userId?: string;
  userEmail: string;
  fullName: string;
  companyName?: string;
  country: string;
  phone?: string;
  enquiryType: 'quote' | 'export' | 'sample' | 'sculpture' | 'custom_portrait' | 'general';
  productCategory?: string;
  productName?: string;
  quantity?: string;
  dimensions?: string;
  finish?: string;
  projectType?: string;
  destinationPort?: string;
  message?: string;
  referenceImageUrl?: string;
  status: 'pending' | 'in_review' | 'quoted' | 'completed';
  createdAt?: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  companyName?: string;
  country?: string;
  phone?: string;
  role: 'customer' | 'admin';
  createdAt: string;
}
