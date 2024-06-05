const Router = require('express')
const router = new Router()

const houseRouter = require('./houseRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/house', houseRouter)

module.exports = router