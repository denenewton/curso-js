class HomeController {
  index(req, res) {
    res.json({
      mensagem: 'bem vindo a este servidor'
    });
  }
}
export default new HomeController();
