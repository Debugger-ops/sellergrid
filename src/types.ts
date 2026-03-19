
export type Sentiment = 'positive' | 'negative' | 'neutral';
export type Platform = 'Amazon' | 'Flipkart' | 'Meesho' | 'Nykaa' | 'Shopify';
export type Priority = 'high' | 'medium' | 'low';
export type AccentColor = 'green' | 'yellow' | 'blue' | 'red';

export interface Review {
  id: string;
  author: string;
  initials: string;
  avatarGradient: string;
  platform: Platform;
  rating: number;
  text: string;
  time: string;
  sentiment: Sentiment;
  needsReply?: boolean;
}

export interface QueueItem {
  id: string;
  author: string;
  platform: Platform;
  rating: number;
  preview: string;
  priority: Priority;
}

export interface PlatformStat {
  name: Platform;
  count: number;
  color: string;
  percentage: number;
}

export interface Topic {
  label: string;
  count: number;
  hot?: boolean;
}

export interface KpiData {
  label: string;
  value: string;
  change: string;
  direction: 'up' | 'down';
  accent: AccentColor;
}

export interface StarRating {
  stars: number;
  count: number;
  percentage: number;
}
