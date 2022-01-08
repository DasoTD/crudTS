import express  from "express";

//import { Router } from 'express';
//const route = express.Router()
const roleRoute = () => {
  //const router = Router();
  const router = express.Router();

  router.post('/roles', (req, res) => {
    // TODO logic for creating role
  });

  router.get('/roles', (req, res) => {
    // TODO logic for retrieving roles
  });

  router.get('/roles/:id', (req, res) => {
    // TODO logic for retrieving role
  });

  router.put('/roles/:id', (req, res) => {
    // TODO logic for updating role
  });

  router.delete('/roles/:id', (req, res) => {
    // TODO logic for deleting role
  });

  return router;
};