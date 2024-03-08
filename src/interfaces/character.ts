export interface CharacterInfo {
  region: string;
  realm: string;
  name: string;
}

export interface CharacterData {
  name: string;
  race: string;
  class: string;
  active_spec_name: string;
  faction: string;
  thumbnail_url: string;
  region: string;
  realm: string;
  mythic_plus_scores_by_season: Array<{
    scores: {
      all: number
    }
  }>
}