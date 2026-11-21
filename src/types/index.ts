export interface CommunityLead {
  id: string;
  contact_handle: string;
  type: 'telegram' | 'email';
  source_section: 'hero_input' | 'direct_cta' | 'footer';
  created_at: string;
  status: 'pending' | 'verified';
}

export interface CommunityEvent {
  id: string;
  title: string;
  tag: string;
  description: string;
  stats: string;
  link_url: string;
  image_src: string;
  venue?: string;
  category: 'builder_summit' | 'trading_competition' | 'partnership_meetup';
}

export interface CommunityMetrics {
  members_count: string;
  offline_events: string;
  free_education_percent: string;
  global_partners: string;
}
