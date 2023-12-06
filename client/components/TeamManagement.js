import { useState, useEffect } from 'react';
import axios from 'axios';

const TeamManagement = () => {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [coachName, setCoachName] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch all teams
  const fetchTeams = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/teams');
      setTeams(response.data);
    } catch (error) {
      console.error('Error fetching teams:', error);
      // Handle error accordingly
    }
    setLoading(false);
  };

  // Function to handle the creation of a new team
  const createTeam = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('/api/teams', {
        name: teamName,
        coach: coachName,
        players: [], // Assuming no players initially
      });
      setTeams([...teams, response.data]); // Add the new team to the local state
      setTeamName(''); // Reset the form
      setCoachName('');
    } catch (error) {
      console.error('Error creating team:', error);
      // Handle error accordingly
    }
  };

  // Effect to fetch teams on component mount
  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
      <h1>Team Management</h1>
      {loading ? (
        <p>Loading teams...</p>
      ) : (
        <ul>
          {teams.map((team) => (
            <li key={team._id}>{team.name} - Coach: {team.coach}</li>
          ))}
        </ul>
      )}

      <form onSubmit={createTeam}>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Team Name"
          required
        />
        <input
          type="text"
          value={coachName}
          onChange={(e) => setCoachName(e.target.value)}
          placeholder="Coach Name"
          required
        />
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default TeamManagement;
