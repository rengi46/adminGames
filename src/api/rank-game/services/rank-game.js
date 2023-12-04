'use strict';

/**
 * rank-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rank-game.rank-game');
