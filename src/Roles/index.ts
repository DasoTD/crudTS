import express from 'express'
import {  createRole, updateRole, getAllRoles, getRole, deleteRole } from './role.controller';
const route = express.Router()

route.post('/role', createRole)
route.get('/role/:id', getRole)
route.get('/roles', getAllRoles)
route.put('/role/:id', updateRole)
route.delete('/role/:id', deleteRole)

export { route}