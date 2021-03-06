const express = require('express');

const UserMoviesService = require('../services/userMovies');
const validationHandler = require('../utils/middleware/validationHandler');

const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');

function userMoviesApi(app) {
  const router = express.Router();
  app.use('/api/user-movies', router);

  const userMoviesService = new UserMoviesService();

  router.get(
    '/',
    validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
      const { userId } = req.query;

      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });

        res.status(200).json({
          data: userMovies,
          message: 'user movies listed'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    validationHandler({ createUserMovieSchema }),
    async function(req, res, next) {
      const { body: userMovie } = req;

      try {
        const createUserMovieId = await userMoviesService.createUserMovies({ 
            userMovie 
        });

        res.status(200).json({
          data: createUserMovieId,
          message: 'user movies created'
        });
      } catch (error) {
        next(error);
      }
    });

    router.delete(
        '/:userMovieId',
        validationHandler({ userMovieId: movieIdSchema }, 'params'),
        async function(req, res, next) {
          const { userMovieId } = req.params;
    
          try {
            const deleteUserMovieid = await userMoviesService.deleteUserMovie({ 
                userMovieId 
            });
    
            res.status(200).json({
              data: deleteUserMovieid,
              message: 'user movie deleted'
            });
          } catch (error) {
            next(error);
          }
        }
    );    
}

module.exports = userMoviesApi