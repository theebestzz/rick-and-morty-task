export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
}

export interface FilterProps {
  status: string;
  gender: string;
}

export interface CardProps {
  characters: Character[];
  status: string;
  gender: string;
}
