exports.paginaInicial= (req, res, next) => {
    res.render('index')
    return;
}

exports.trataPost =(req, res) => {
    res.send('Ei, sou sua nova rota de post')
}