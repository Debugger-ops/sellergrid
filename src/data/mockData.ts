import type { Review, QueueItem, PlatformStat, Topic, KpiData, StarRating } from '../types';

export const kpiData: KpiData[] = [
  { label: 'TOTAL REVIEWS THIS MONTH', value: '4,821', change: '↑ 18% vs last month', direction: 'up', accent: 'green' },
  { label: 'AVERAGE RATING', value: '4.2 ★', change: '↓ 0.2 this week', direction: 'down', accent: 'yellow' },
  { label: 'AI RESPONSES SENT', value: '1,347', change: '↑ 94% auto-resolved', direction: 'up', accent: 'blue' },
  { label: 'PENDING RESPONSE', value: '47', change: '↑ 12 urgent', direction: 'down', accent: 'red' },
];

export const reviews: Review[] = [
  {
    id: '1', author: 'Priya S.', initials: 'PS',
    avatarGradient: 'linear-gradient(135deg,#ffc85c,#ff9900)',
    platform: 'Amazon', rating: 5,
    text: 'Absolutely love this product! Arrived 2 days early, packaging was perfect and the quality exceeded my expectations.',
    time: '2 min ago', sentiment: 'positive',
  },
  {
    id: '2', author: 'Arjun M.', initials: 'AM',
    avatarGradient: 'linear-gradient(135deg,#ff5c5c,#c0392b)',
    platform: 'Flipkart', rating: 2,
    text: 'Received wrong color variant. Contacted support 3 times, no resolution yet. Very disappointed with the experience.',
    time: '8 min ago', sentiment: 'negative', needsReply: true,
  },
  {
    id: '3', author: 'Neha K.', initials: 'NK',
    avatarGradient: 'linear-gradient(135deg,#5c9fff,#3b82f6)',
    platform: 'Meesho', rating: 4,
    text: 'Good product overall. Delivery was slightly delayed but the product itself is great. Would recommend to friends.',
    time: '15 min ago', sentiment: 'positive',
  },
  {
    id: '4', author: 'Rohit V.', initials: 'RV',
    avatarGradient: 'linear-gradient(135deg,#00e5a0,#059669)',
    platform: 'Nykaa', rating: 3,
    text: 'Average experience. Product is okay but the description was misleading about the size. Might return it.',
    time: '22 min ago', sentiment: 'neutral',
  },
  {
    id: '5', author: 'Divya S.', initials: 'DS',
    avatarGradient: 'linear-gradient(135deg,#ffc85c,#f59e0b)',
    platform: 'Amazon', rating: 5,
    text: 'Third time buying this! Consistent quality every single time. Best brand in this category without a doubt.',
    time: '31 min ago', sentiment: 'positive',
  },
];

export const queueItems: QueueItem[] = [
  { id: '1', author: 'Arjun M.', platform: 'Flipkart', rating: 2, preview: 'Received wrong color variant...', priority: 'high' },
  { id: '2', author: 'Vikram P.', platform: 'Amazon', rating: 1, preview: 'Complete waste of money, product broke after 2 days...', priority: 'high' },
  { id: '3', author: 'Sneha R.', platform: 'Meesho', rating: 3, preview: 'Delivery was delayed by 5 days, I needed it urgently...', priority: 'medium' },
  { id: '4', author: 'Karan T.', platform: 'Nykaa', rating: 2, preview: "The product doesn't match the description at all...", priority: 'medium' },
  { id: '5', author: 'Meena L.', platform: 'Shopify', rating: 3, preview: 'Would appreciate faster shipping options in future...', priority: 'low' },
];

export const platformStats: PlatformStat[] = [
  { name: 'Amazon',   count: 1842, color: '#ff9900', percentage: 76 },
  { name: 'Flipkart', count: 1203, color: '#2874f0', percentage: 50 },
  { name: 'Meesho',   count: 872,  color: '#f97316', percentage: 36 },
  { name: 'Shopify',  count: 541,  color: '#00e5a0', percentage: 22 },
  { name: 'Nykaa',    count: 363,  color: '#9c59d1', percentage: 15 },
];

export const topics: Topic[] = [
  { label: 'Delivery speed',    count: 412, hot: false },
  { label: 'Packaging damage',  count: 198, hot: true  },
  { label: 'Product quality',   count: 374, hot: false },
  { label: 'Wrong item',        count: 87,  hot: true  },
  { label: 'Value for money',   count: 301, hot: false },
  { label: 'Easy returns',      count: 156, hot: false },
  { label: 'Size mismatch',     count: 143, hot: true  },
  { label: 'Great support',     count: 223, hot: false },
  { label: 'Repeat purchase',   count: 189, hot: false },
];

export const starRatings: StarRating[] = [
  { stars: 5, count: 2796, percentage: 58 },
  { stars: 4, count: 1061, percentage: 22 },
  { stars: 3, count: 482,  percentage: 10 },
  { stars: 2, count: 289,  percentage: 6  },
  { stars: 1, count: 193,  percentage: 4  },
];

export const trendData = [110,108,90,80,70,60,55,50,65,60,55,45,42,39,50,45,40,35,30];
export const negativeData = [125,124,118,115,112,108,110,112,118,115,112,108,106,104,110,108,106,102,100];
export const trendLabels = ['Mar 1','','','','Mar 5','','','','','Mar 10','','','','','Mar 15','','','','Mar 19'];