const express = require('express')
const router = express.Router()
const { HandleGetTransaction, HandleGetTransactionPeMonth, HandleGetMonthStats, HandleGetBarChart, HandleGetPieChart, HandleAllCombined } = require('../controllers/data.controllers')
router.get('/transactions', HandleGetTransaction)
router.get('/transactions/:month', HandleGetTransactionPeMonth)
router.get('/statistics/:month', HandleGetMonthStats)
router.get('/barchart/:month', HandleGetBarChart)
router.get('/piechart/:month', HandleGetPieChart)
router.get('/combined/:month', HandleAllCombined)
module.exports = router