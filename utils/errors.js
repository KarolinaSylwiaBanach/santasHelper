class ValidationError extends Error {}

const handleError = (err, req, res, next) => {

    /*
        Jeżeli w programie byłaby możliwość, że wchodzimy do elementu, który nie istnieje to przydałby mi się taki kod:
    if(err instanceof ValidationError) {
            res
                .status(404)
                .render('error', {
                    message: 'Nie można znaleźć elementu o danym ID.',
                });
            return;
        }*/
    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
           message: err instanceof ValidationError ? err.message : 'Sorry, please try again later.',
        });


}

module.exports = {
    handleError,
    ValidationError,
}
