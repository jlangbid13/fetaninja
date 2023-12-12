// scheduleRoutes.js
import express from 'express';
import {
  getBookings,
  getBooking,
  createBooking,
  deleteBooking,
  updateBooking,
} from '../controllers/scheduleController.js';

const router = express.Router();

router.get('/', getBookings);
router.get('/:id', getBooking);
router.post('/', createBooking);
router.delete('/:id', deleteBooking);
router.patch('/:id', updateBooking);

export default router;
