// import dependencies
import express from "express";
const router = express.Router();


import {id_check_api} from "../controllers/identity-check-api.js"
import {address_check_api} from "../controllers/address-check-api.js"
import {police_check_api} from "../controllers/police-check-api.js"
import {status_check_api} from "../controllers/status-check-api.js"
import {pending_certificate_request_api} from "../controllers/pending-certificate-request-api.js"
import {fetch_certificate_details_api} from "../controllers/fetch-certificate-details-api.js"
import {update_status_api} from "../controllers/update-status-api.js"

//routes
router.get("/Identity-Check", id_check_api);
router.get("/Address-Check", address_check_api);
router.get("/Police-Check", police_check_api);
router.get("/Status-Check", status_check_api);
router.get("/Fetch-Pending-Requests", pending_certificate_request_api);
router.get("/Fetch-Certificate-Details", fetch_certificate_details_api);
router.get("/Update-Certificate-Status", update_status_api);

export default router;