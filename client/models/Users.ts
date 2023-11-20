export interface User {
	_id: string;
	email: string;
	password: string;
	role: 'player' | 'admin';
	// Additional fields like name, profile image, etc.
  }