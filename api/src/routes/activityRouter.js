const { Router } = require('express');
const { getActivities, postActivities } = require('../handlers/activitiesHandler')

const activityRouter = Router();

activityRouter.get('/', getActivities)

activityRouter.post('/', postActivities)

module.exports = activityRouter;