export interface InstagramPost {
  id: string;
  imageUrl: string;
  link: string;
  caption?: string;
  timestamp: Date;
  mediaType: 'image' | 'video' | 'carousel_album';
}

export interface InstagramError {
  message: string;
  type: string;
  code: number;
  error_subcode?: number;
  fbtrace_id: string;
}

export interface InstagramApiResponse {
  data: {
    id: string;
    media_type: string;
    media_url: string;
    thumbnail_url?: string;
    permalink: string;
    caption?: string;
    timestamp: string;
  }[];
  paging: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}