const {
  check,
  validationResult
} = require('express-validator/check');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    errorEmail: ''
  });
});

router.post('/', [check('email').isEmail().withMessage('must be an email'),
  check('pwd', 'passwords must be at least 5 chars long and contain one number')
  .isLength({
    min: 5
  })
  .matches(/\d/)
], function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    res.render('index', {
      title: 'Express',
      errorEmail: 'err'
    });
  }
  console.dir(req.body);
  res.end();
})

module.exports = router;