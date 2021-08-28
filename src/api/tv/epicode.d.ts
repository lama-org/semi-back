export interface Episode {
  air_date: string;
  crew: [Crew];
  episode_number: number;
  guest_stars: [GuestStars];
  name: string;
  overview: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Crew {
  id: number;
  credit_id: number;
  name: string;
  department: string;
  job: string;
  profile_path: string;
}

export interface GuestStars {
  id: number;
  name: string;
  credit_id: number;
  character: string;
  order: number;
  profile_path: string;
}
