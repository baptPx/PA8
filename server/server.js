let express = require('express')
let app = express()
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*") // permet les requetes pour n'importe quelle adresse
//   res.header("Access-Control-Allow-credentials", true)
//   // next();
// });

 app.use('/', express.static( '../your-leaf/build/'))
 app.use('/fct1', (req, res) => {
   res.json({v1: "testt"})
 })
// app.use('/setData', setData)

// app.get('/', (req, res) => {
//   console.log("root call");
//   res.write(getData)
//   // next()
// })


app.listen(4200)
