module.exports.home = function(application, req, res){

    res.render('home');

};

module.exports.carregarEventos = function(application, req, res){

    var connection = application.config.dbConnection;
    var CalendarModel = new application.app.models.CalendarModel(connection);
    CalendarModel.buscarEventos(function(err, result){
        
        res.send(result);

    });
};

module.exports.adicionarEvento = function(application, req, res){

    var evento = req.body;
    var connection = application.config.dbConnection;
    var CalendarModel = new application.app.models.CalendarModel(connection);
    CalendarModel.salvarEvento(evento, function(err, result){
        
        res.send('ok');

    });


};