const express = require('express');

const apiCredentials = require('../middlewares/apiCredentials');
const validateTeam = require('../middlewares/validateTeam');

// cria um router middleware
const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, _res, next) => {
  const id = Number(req.params.id);
  const isTeamExists = teams.some((t) => t.id === id);
  if (isTeamExists) {
    next();
  } else {
    const err = {
      statusCode: 400,
      message: 'invalid request id',
    };
    next(err);
  }
};

router.get('/', (_req, res) => res.json({ teams }));

router.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.status(200).json({ team });
});

router.post('/', validateTeam, (req, res, next) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    req.authorizedTeams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json({ team });
  } else {
    const err = {
      statusCode: 403,
      message: 'not allowed to add this new team',
    };
    next(err);
  }
});

router.put('/:id', validateTeam, existingId, (req, res) => {
  const id = Number(req.params.id);
  const index = teams.findIndex((t) => t.id === id);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(200).json({ updatedTeam: updated });
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const index = teams.findIndex((t) => t.id === id);
  teams.splice(index, 1);
  res.sendStatus(200).end();
});

module.exports = router;
