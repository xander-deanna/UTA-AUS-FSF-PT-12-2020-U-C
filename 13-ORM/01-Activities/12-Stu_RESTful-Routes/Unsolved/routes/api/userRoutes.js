const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id)
    if (!userData) {
      res.status(400).json({message: 'No User with this ID'});
    }
    res.status(200).json(UserData);
  }
  catch (err) { 
    res.status(500).json(err);
    }
});

// // UPDATE a user
// router.put('/:id', async (req, res) => {
// try {
//   const userData = await User.update(req.body, {
//     where: {
//       id: req.params.id,
//     }
//     res.json(userData)
// catch (err) {
//   res.json(err)
// }


// }





//   }).catch(;
//   ;
// });

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

module.exports = router;
