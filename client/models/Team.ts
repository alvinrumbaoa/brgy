// models/Team.ts
import { PlayerProfile } from './Players';

export interface Team {
  _id: string;
  name: string;
  logo: string;
  description: string;
  members: PlayerProfile[];
  // Other team-related information
}
