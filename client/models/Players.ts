import { User } from './Users';

export interface PlayerProfile {
  user: User;
  skills: string[];
  experience: number; // Years of experience, for example
  position: string; // Playing position
  // Other player-specific information
}