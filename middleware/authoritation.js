"use strict"
const { Histoty } = require('../models')

const authorization = (req, res, next) => {
    const UserId = +req.user.id
    const id = +req.params.id
    Histoty.findOne({ where: { id } })
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'Data not found' })
            } else if (data.UserId === UserId) {
                next()
            } else {

            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = authorization
