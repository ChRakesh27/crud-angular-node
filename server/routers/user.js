
const { selectAll } = require("../sqlQueries")


function userRoutes(app, db) {
    app.get('/api/getUsers', async(req, res) => {
        try {
          const  selRes = await db.query(selectAll);
           res.json({
            msg: "success",
            data: selRes[0]
        })
       } catch (error) {
        console.log("🚀 ~ error", error)
        res.json({
            msg: "failed",
            error: error
        })
       }
    });

    app.get('/api/getUser/:id', async (req, res) => {
        try {
            let sigRes = selectAll +` WHERE id=${req.params.id}`;
            const  selRes =await db.query(sigRes)
            res.json({
                msg: "success",
                data: selRes[0]
            })
        } catch (error) {
            console.log("🚀 ~ error", error)
            res.json({
                msg: "failed",
                error: error
            })
                console.log("🚀 ~ error", error)
             
        }
    });

    app.post('/api/insertUser', async (req, res) => {
        try {
            let data = req.body;
            const insRes = 'INSERT INTO user SET ?';
            await db.query(insRes, data)
            const selRes = await db.query(selectAll)
            res.json({
                msg: "success",
                data: selRes[0]
            })
        } catch (error) {
            res.json({
                msg: "failed",
                error: error
            })
        }
    });

    app.put('/api/updateUser', async (req, res) => {
        try {
            data = req.body;
            const updRes = `UPDATE user SET username=?, password=?  WHERE id =?`;
            let sinRes = selectAll + ` WHERE id=${data.id}`
            await  db.query(updRes, [data.username, data.password, data.id])
            const selRes = await db.query(sinRes)
            res.json({
                msg: "success",
                data: selRes[0] 

            })
        } catch (error) {
            console.log("🚀 ~ error", error)
            
        }
    
    });

    app.delete('/api/deleteUser/:id', async (req, res) => {
        try {
            let data = req.params;
            const delRes = 'DELETE FROM user WHERE id=?';
            await  db.query(delRes, data.id)
            const selRes =await db.query(selectAll);
            res.json({
                msg: 'success',
                data: selRes[0]
            })
        } catch (error) {
            console.log("🚀 ~ error", error)
            
        }
            
    });
}


module.exports = userRoutes