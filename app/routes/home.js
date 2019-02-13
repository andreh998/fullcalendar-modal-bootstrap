module.exports = function(application){

    application.get('/', function(req, res){
        application.app.controllers.calendarController.home(application, req, res);
    });

    application.post('/carregarEventos', function(req, res){
        application.app.controllers.calendarController.carregarEventos(application, req, res);
    });

    application.post('/adicionarEvento', function(req, res){
        application.app.controllers.calendarController.adicionarEvento(application, req, res);
    });

};