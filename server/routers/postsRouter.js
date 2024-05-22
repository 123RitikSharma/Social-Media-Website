const router = require('express').Router();
const postsController = require('../controllers/postsController');
const requireUser = require('../middlewares/requireUser');

router.post('/',requireUser,postsController.createPostController);
router.post("/like",requireUser,postsController.likeAndUnlikePost);
router.put('/',requireUser,postsController.updatePostController);
//put is used to update the post
router.delete('/',requireUser,postsController.deletePostController);
module.exports = router;