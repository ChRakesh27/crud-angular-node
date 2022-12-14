const express = require('express');
const mysql = require('mysql');
var cors = require('cors');
const { selectAll } = require('./sqlQueries');

// connect mysql database..
var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'collage_db'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('connected... ');
});

// express routes..
const app = express();
app.use(express.json());
app.use(cors())


app.get('/api/getUsers', (req, res) => {
    db.query(selectAll, (err, result) => {
        if (err) {
            res.json({
                msg: "failed",
                error: err
            })
        } else {

            res.json({
                msg: "success",
                data: result
            })
        }
        // console.log(result);
    });


});


app.get('/api/getUser/:id', (req, res) => {
    let sql = `SELECT * FROM user WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) {
            res.json({
                msg: "failed",
                error: err
            })
        } else {

            res.json({
                msg: "success",
                data: result
            })
        }
        // console.log(result);
    });
});

app.post('/api/insertUser', (req, res) => {
    let data = req.body;
    let sql = 'INSERT INTO user SET ?';
    db.query(sql, data, (err, result) => {
        if (err) {
            res.json({
                msg: "failed",
                error: err
            })
        } else {
            db.query(selectAll, (err, result1) => {
                if (err) {
                    res.json({
                        msg: "failed",
                        error: err
                    })
                } else {
                    res.json({
                        msg: "success",
                        data: result1
                    })
                }
                // console.log(result);
            });
        
        }
    })
});


app.put('/api/updateUser', (req, res) => {
    data = req.body;
    let sql1 = `SELECT * FROM user WHERE id=${req.query.id}`
    let sql = `UPDATE user SET username=?, password=?  WHERE id =?`;
    db.query(sql, [data.username, data.password, data.id], (err, result) => {
        if (err) {
            res.json({
                msg: "failed",
                error: err
            })
        } else {
            db.query(sql1,(err,result)=>{
                if(err) {
                    res.json({
                        msg:"failed",
                        error:err
                    })
                }else{
                   res.json({
                        msg: "success",
                        data: result
                    })
                }
            })
        }
      
        // console.log(result);
    });
});

app.delete('/api/deleteUser/:id', (req, res) => {
    let sql = 'DELETE FROM user WHERE id=?';
    let data = req.params;
    let sql1 = 'select * from user';
    db.query(sql, data.id, (err, result) => {
        console.log(data);
        if (err) {
            // console.log("error");
            res.json({
                msg:"failed in delete",
                error:err
            })
        }else{
            db.query(sql1,(err,result)=>{
                if(err){
                    res.json({
                        msg:"failed",
                        error:err
                    })
                }else{
                    res.json({
                        msg:"success",
                        data:result
                    })
                }
            })
        }
    });
});


// start server done
app.listen('3000', () => {
    console.log("started...http://localhost:3000");
})



