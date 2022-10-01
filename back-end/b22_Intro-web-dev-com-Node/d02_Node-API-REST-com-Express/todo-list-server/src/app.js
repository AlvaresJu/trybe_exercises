const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities', (_req, res) => res.status(200).json({ activities }));

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const activityById = activities.find((activity) => activity.id === Number(id));
  return res.status(200).json({ activity: activityById });
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const activitiesByStatus = activities.filter((activity) => activity.status === status);
  return res.status(200).json({ activities: activitiesByStatus });
});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  const activitiesByDescription = activities
    .filter((activity) => activity.description.toLowerCase().includes(q.toLowerCase()));
  return res.status(200).json({ activities: activitiesByDescription });
});

module.exports = app;
