import { InstagramPost } from '@/types/instagram';

const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';
const FIELDS = 'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp';

export class InstagramService {
  private accessToken: string;

  constructor() {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
    if (!token) {
      throw new Error('Instagram access token is not configured');
    }
    this.accessToken = token;
  }

  async getRecentPosts(limit: number = 6): Promise<InstagramPost[]> {
    try {
      const response = await fetch(
        `${INSTAGRAM_API_URL}?fields=${FIELDS}&limit=${limit}&access_token=${this.accessToken}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Instagram posts');
      }

      const data = await response.json();
      
      return data.data.map((post: any) => ({
        id: post.id,
        imageUrl: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
        link: post.permalink,
        caption: post.caption,
        timestamp: new Date(post.timestamp),
        mediaType: post.media_type.toLowerCase()
      }));
    } catch (error) {
      console.error('Error fetching Instagram posts:', error);
      throw error;
    }
  }
}

export const instagramService = new InstagramService();