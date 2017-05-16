/**
 * main router file for /words path
 */


import _ from 'lodash';
import express from 'express';
import WordsController from './words.controller';

const ctrl = new WordsController();

const router = express.Router();
router.get('/', ctrl.getWords.bind(ctrl));

export default router;
