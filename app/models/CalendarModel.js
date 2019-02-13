function CalendarController(connection){
    this._connection = connection();
};

CalendarController.prototype.buscarEventos = function(callback){
    this._connection.query('SELECT * FROM eventos', callback);
};

CalendarController.prototype.salvarEvento = function(evento, callback){
    this._connection.query('INSERT INTO eventos SET ?', evento, callback);
};

module.exports = function(){
    return CalendarController;
};
