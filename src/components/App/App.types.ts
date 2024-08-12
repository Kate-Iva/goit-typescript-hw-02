type Links = {
    download: string;
    download_location: string;
    html: string;
    self: string;
  };
  
  type UserLinks = {
    followers: string;
    following: string;
    html: string;
    likes: string;
    photos: string;
    portfolio: string;
    self: string;
  };
  
  type ProfileImage = {
    large: string;
    medium: string;
    small: string;
  };
  
  type Social = {
    instagram_username: string | null;
    paypal_email: string | null;
    portfolio_url: string | null;
    twitter_username: string | null;
  };
  
  type User = {
    accepted_tos: boolean;
    bio: string | null;
    first_name: string;
    for_hire: boolean;
    id: string;
    instagram_username: string;
    last_name: string;
    links: UserLinks;
    location: string | null;
    name: string;
    portfolio_url: string | null;
    profile_image: ProfileImage;
    social: Social;
    total_collections: number;
    total_illustrations: number;
    total_likes: number;
    total_photos: number;
    total_promoted_illustrations: number;
    total_promoted_photos: number;
    twitter_username: string | null;
    updated_at: string | Date;
    username: string;
  };
  
  type TagSource = {
    ancestry: {
      category: {
        slug: string;
        pretty_slug: string;
      };
      type: {
        slug: string;
        pretty_slug: string;
      };
    };
    cover_photo: Omit<ImagesType, 'tags' | 'topic_submissions'> & {
      topic_submissions: {
        animals: {
          status: string;
          approved_on: string | Date;
        };
      };
    };
    title: string;
    type: string;
  };
  
  type Tag = {
    type: string;
    title: string;
    source?: TagSource;
  };
  
  export type ImagesType = {
    alt_description: string;
    alternative_slugs: {
      de: string;
      en: string;
      es: string;
      fr: string;
      it: string;
      ja: string;
      ko: string;
      pt: string;
    };
    asset_type: string;
    blur_hash: string;
    breadcrumbs: {
      slug: string;
      title: string;
      index: number;
      type: string;
    }[];
    color: string;
    created_at: string | Date;
    current_user_collections: any[];
    description: string;
    height: number;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: Links;
    promoted_at: null | any;
    slug: string;
    sponsorship: null | any;
    tags: Tag[];
    topic_submissions: {
      animals: {
        status: string;
        approved_on: string | Date;
      };
      updated_at: string | Date;
    };
    urls: {
      full: string;
      raw: string;
      regular: string;
      small: string;
      small_s3: string;
      thumb: string;
    };
    user: User;
    width: number;
  };