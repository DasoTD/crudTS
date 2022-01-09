import express from 'express'
import {  createRole, updateRole, getAllRoles, getRole } from './role.controller';
const route = express.Router()

route.post('/role', createRole)
route.get('/role/:id', getRole)
route.get('/roles', getAllRoles)
route.put('/role/:id', updateRole)

export { route}