class HomeController {
  async index(req, res) {
    res.json({
      msg: 'Bem vindo a api de nossa escola!'
    });
  }
}

export default new HomeController();
