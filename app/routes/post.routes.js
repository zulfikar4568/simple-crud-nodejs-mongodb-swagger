module.exports = (app) => {
  const posts = require('../controllers/post.controller');
  const router = require('express').Router();

  /**
 * @swagger
 * /api/posts:
 *  get:
 *    description: Use to request all the Data Post
 *    responses:
 *      '200':
 *         description: Successfull get the data
 *         contents:
 *            application/json:
 *              schema:
 */
  router.get('/', posts.findAll);

  /**
   * @swagger
   * /api/posts/:
   *  post:
   *    description: Create a new Posts
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *          example:
   *            title: "post baru"
   *            body: "Ini post"
   *            published: true
   *    responses:
   *      200:
   *        description: The post was success added
   *        content:
   *          application/json:
   *            schema:
   */

  router.post('/', posts.create);
  /**
   * @swagger
   * /api/posts/{id}:
   *  get:
   *    description: Use to get single data using ID
   *    parameters:
   *      - in: path
   *        name: id
   *        description: Insert your id Post in here
   *        schema:
   *          type: string
   *        required: true
   *    responses:
   *      '200':
   *         description: Successfull get the data
   *         contents:
   *            application/json:
   *              schema:
   */
  router.get('/:id', posts.findOne);
  /**
   * @swagger
   * /api/posts/{id}:
   *  put:
   *    description: This is for update the data
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: for update the data
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *          example:
   *            title: "Update the post"
   *            body: "For update the post"
   *            published: true
   *    responses:
   *      200:
   *        description: The post was updated
   *        content:
   *          application/json:
   *            schema:
   */
  router.put('/:id', posts.update);
  /**
   * @swagger
   * /api/posts/{id}:
   *  delete:
   *    description: Delete the data by id
   *    parameters:
   *    - in: path
   *      name: id
   *      schema:
   *        type: string
   *      required: true
   *      description: Post id
   *    responses:
   *      200:
   *        description: The post was deleted!
   *      400:
   *        description: The post not found!
   */
  router.delete('/:id', posts.delete);
  
  app.use('/api/posts', router);
}