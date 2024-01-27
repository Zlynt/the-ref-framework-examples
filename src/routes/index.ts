import { Router } from 'express';
import usernameController from '../controllers/Username';

const router = Router({ mergeParams: true });

// Controller routes
router.use('/username', usernameController);

//#region View routes

// Main view
router.get('/', function (req, res) {
  res.render('root', {
    title: 'Username Generator',
  });
});

// About view
router.get('/about', function (req, res) {
  res.render('root', {
    title: 'Username Generator',
  });
});

//#endregion

export default router;
