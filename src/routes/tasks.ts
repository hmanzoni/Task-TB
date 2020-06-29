import { Router, Request, Response } from 'express';

import Task from '../models/Task';
import validator from '../helpers/validator';
import formatDate from '../helpers/formatDate';
import selectIcon from '../helpers/selectIcon';

const router = Router();

router.route('/create')
  .get((req: Request, res: Response) => {
    const todayDate = new Date();
    let todayDateFormatted = formatDate(todayDate);
    res.render('tasks/create', {todayDateFormatted});
  })
  .post(async (req: Request, res: Response) => {

    const { title, description, state, date } = req.body;
    const {errorArr} = validator(title, description, state, date);
    const icon = selectIcon(state);
    const todayDateFormatted = formatDate(new Date(date));
    
    if ( errorArr.length !== 0 ) {
      res.render('tasks/create',{errorArr});
    } else {
      const newTask = new Task({ title, description, state, date, icon, todayDateFormatted });
      // console.log(newTask);
      await newTask.save();
      res.redirect('/tasks/list');
    }
  });

router.route('/list')
  .get(async (req: Request, res: Response) => {
    const tasks = await Task.find();
    // console.log(tasks);
    res.render('tasks/list', {tasks});
  });

router.route('/delete/:id')
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    // console.log(req.params);
    res.redirect('/tasks/list');
  });

router.route('/edit/:id')
  .get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const taskForEdit = await Task.findById(id);
    res.render('tasks/edit', {taskForEdit});
  })
  .post(async (req: Request, res: Response) => {

    const { id } = req.params;
    const { title, description, state, date } = req.body;
    const {errorArr} = validator(title, description, state, date);
    const icon = selectIcon(state);
    const todayDateFormatted = formatDate(new Date(date));

    if ( errorArr.length !== 0 ) {
      res.render('tasks/edit',{errorArr});
    } else {
      await Task.findByIdAndUpdate( id, { title, description, state, date, icon, todayDateFormatted });
      res.redirect('/tasks/list');
    }
  });

export default router;