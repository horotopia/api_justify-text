const express = require("express")
// const cookieParser = require('cookie-parser')

// Config
const port = 5000
const app = express()
// const logger = require("./middleware/logger")
// const swaggerDocumentation = require("./middleware/swaggerDocumentation")
// const authentication =  require("./routes/authentication")
// const justify = require("./routes/justify")
// app.use(cookieParser())
// app.use((req, res, next) => {
//     logger.info(`${req.method} ${req.path}`);
//     next();
// });


// Routes
// app.use('/api-docs', swaggerDocumentation)
// app.use('/api/auth', authentication.router)
// app.use('/api/justify', justify.router)



// Errors
// app.use((err, req, res, next) => {
//     logger.error(err.stack)
//     res.status(500).send("Erreur interne du serveur")
// });


// Listen
app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})