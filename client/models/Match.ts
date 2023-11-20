// models/Match.ts
export interface Match {
	_id: string;
	teams: string[]; // Array of team IDs
	date: Date;
	location: string;
	// Other match-related details
  }
  