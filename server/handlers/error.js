
// Eine generische Funktion die immer den Error-Status-Code zurückgibt 
// oder 500 wenn etwas serverseitig fehlschlägt.
function errorHandler(error, request, response, next){
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Ups, da ist was schief gelaufen :("
        }
    })
}

module.exports = errorHandler;