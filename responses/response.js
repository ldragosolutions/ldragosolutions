class Response {

    done = (msg, data) => {
        const responseData = {
            status: "SUCCESS",
            message: msg,
            data: data
        };

        wLogger.info(responseData);
        return res.json(responseData);


    };
    error = (msg, data) => {
        const responseData = {
            status: "FAILURE",
            message: msg,
            data: data
        };
        wLogger.error(responseData);
        return res.json(responseData);
    };

}
let response = new Response();
module.exports = response;