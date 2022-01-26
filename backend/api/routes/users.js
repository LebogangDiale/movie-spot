const express = require('express');
const router = express.Router();
const Database = require('../../database');

var postgres = new Database();
             

router.post('/register', (req, res, next) => {
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.body).map(key => [(key), req.body[key]]);

        const paramsvalues = Object.keys(req.body).map(key => req.body[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `moviespot_schema.fn_user_registration`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            console.log(data);
   
            res.status(201).json({
                message: 'Newly Added user',
                addedUser: data
            });
            resolve(data);

        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});

//login
router.get('/login/:email/:password', (req, res, next) => {
    debugger;
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.params).map(key => [(key), req.params[key]]);

        const paramsvalues = Object.keys(req.params).map(key => req.params[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `moviespot_schema.fn_user_login`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Login api run successfully',
                addedUser: data
            });
            resolve(data);

        })
        .catch((error) => {
            debugger;
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});



router.get('/checkEmail/:email', (req, res, next) => {
    debugger;
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.params).map(key => [(key), req.params[key]]);

        const paramsvalues = Object.keys(req.params).map(key => req.params[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `moviespot_schema.fn_email_address_exists`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: ' Email address do not exist',
                emailcheck: data
            });
            resolve(data);

        })
        .catch((error) => {
            debugger;
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});

//Delete user
router.patch('/deleteAccount/:email', (req, res, next) => {
    debugger;
    return new Promise((resolve, reject) => {
        let placeholder = '';
        let count = 1;
        const params = Object.keys(req.params).map(key => [(key), req.params[key]]);

        const paramsvalues = Object.keys(req.params).map(key => req.params[key]);

        if (Array.isArray(params)) {
            params.forEach(() => {
                placeholder += `$${count},`;
                count += 1;
            });
        } 

        placeholder = placeholder.replace(/,\s*$/, ''); 

        const functionName = `moviespot_schema.fn_delete_account`;

        const sql = `${functionName}(${placeholder})`;

        postgres.callFnWithResultsAdd(sql, paramsvalues)
        .then((data) => {
            debugger;
            console.log(data);
   
            res.status(201).json({
                message: 'Delete API ran successfully',
                cancelled: data
            });
            resolve(data);

        })
        .catch((error) => {
            debugger;
            console.log(error);
            res.status(500).json({
                message: 'bad Request',
                error: error,
                status: false
            });
            reject(error);
        })
    })
});


module.exports = router;
