export interface StatItem {
  id: number;
  number: string;
  description: string;
}

export interface StatsData {
  heading: string;
  text: string; 
  items: StatItem[];
}

export const statsData: StatsData = {
  heading: "By The Numbers",
  text: "Lorem ipsum dolor sit amet, <br class=\"br-mobile\"> consectetur adipiscing elit. Fusce <br class=\"br-mobile\"> commodo magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  items: [
    {
      id: 1,
      number: "100+",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero."
    },
    {
      id: 2,
      number: "43,000+",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo."
    },
    {
      id: 3,
      number: "30+",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero."
    }
  ]
};
