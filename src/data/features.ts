export interface FeatureItem {
  id: number;
  imageDesktop: string;
  imageMobile: string;
  title: string;
  text: string; 
  isSecond?: boolean; 
}

export const featuresItems: FeatureItem[] = [
  {
    id: 1,
    imageDesktop: "/images/features-desktop-1.jpg",
    imageMobile: "/images/features-mobile-1.jpg",
    title: "The walkways of Indonesia spellbind",
    text: "Lorem ipsum dolor sit amet, conse<br class=\"br-mobile\">ctetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus.",
    isSecond: false,
  },
  {
    id: 2,
    imageDesktop: "/images/features-desktop-2.jpg",
    imageMobile: "/images/features-mobile-2.jpg",
    title: "Perfect beaches exude relaxation and fun",
    text: "Lorem ipsum dolor sit amet, conse<br class=\"br-mobile\">ctetur adip iscing elit. Fusce commodo magna et libero mollis rhoncus.",
    isSecond: true,
  },
];