/**
 * Contains the miscellaneous route handlers.
 * @author Charis Adu <https://github.com/Charis04>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
 module.exports = AppController;
