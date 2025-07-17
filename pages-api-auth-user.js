import dbConnect from '../../../lib/db.js';
import User from '../../../models/User.js';
import protect from '../../../lib/authMiddleware.js';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      await protect(req, res, async () => {
        const user = await User.findById(req.user._id).select('-password');
        if (user) {
          res.status(200).json(user);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      });
    } catch (error) {
      res.status(401).json({ message: 'Not authorized' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}