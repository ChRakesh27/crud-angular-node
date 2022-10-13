
const { selectAll } = require("../sqlQueries")
// const selectAll = `SELECT * FROM  ?`;
// console.log("🚀 ~ tablename", tablename);

function userRoutes(app, db) {


    app.get('/api/getUsers/:table', async (req, res) => {
        try {
            let sigRes = `select * from ${req.params.table}`;
            const selRes = await db.query(sigRes)
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
    app.get('/api/getMarks/:id', async (req, res) => {
        try {
            let sigRes = `select marks.*, login.* from marks, login where marks.id = '${req.params.id}' and login.id=marks.id`;
            const selRes = await db.query(sigRes)
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

    app.post('/api/insertUser/:id', async (req, res) => {
        try {
            let data = req.body;
            const insRes = `INSERT INTO ${req.params.id} SET ?`;

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
            const updRes = `UPDATE login SET username=?, password=?  WHERE id =?`;
            let sinRes = selectAll + ` WHERE id='${data.id}'`
            await db.query(updRes, [data.username, data.password, data.id])
            const selRes = await db.query(sinRes)
            res.json({
                msg: "success",
                data: selRes[0]

            })
        } catch (error) {
            console.log("🚀 ~ error", error)
        }
    });

    app.put('/api/updateMarks/:about', async (req, res) => {
        try {
            data = req.body;
            const updRes = `UPDATE marks SET ${req.params.about}=? WHERE id =?`;
            let sinRes = `select id ,${req.params.about} from marks WHERE id='${data.id}'`
            await db.query(updRes, [data.value, data.id])
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
            const delRes = 'DELETE FROM login WHERE id=?';
            await db.query(delRes, data.id)
            const selRes = await db.query(selectAll);
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