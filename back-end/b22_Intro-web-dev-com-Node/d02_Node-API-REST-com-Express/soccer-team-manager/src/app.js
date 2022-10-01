const express = require('express');

const app = express();
app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/', (_req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (_req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const teamById = teams.find((team) => team.id === Number(id));
  
  return res.status(200).json({ team: teamById });
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  return res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const updatedTeamData = { ...req.body };

  const teamIndex = teams.findIndex((team) => team.id === Number(id));
  teams[teamIndex] = { ...teams[teamIndex], ...updatedTeamData };

  return res.status(200).json({ updatedTeam: teams[teamIndex] });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  return res.status(200).end();
});

module.exports = app;
