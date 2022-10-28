const express = require("express");
const router = express.Router();

const connection = require("../database.connect/connector");

const { Endpoint } = require("../controller/endpoint.js");

//สร้างแถว
router.post("/createCpu", new Endpoint().createEndpoint);

//ลบแถว
router.post("/deleteCpu/:id", new Endpoint().deleteEndpoint);

//แก้ไขข้อมูล
router.post("/updateCpu/:id", new Endpoint().updateEndpoint);

//รับข้อมูล Record ทั้งหมด
router.get("/getCpu", new Endpoint().getEndpoint);

//รับข้อมูลอันนึง
router.get("/getUserCpu", new Endpoint().getUserCpuEndpoint);

//รับข้อมูล Record เรียงลำดับมากไปน้อย
router.get("/getDesc", new Endpoint().getDescEndpoint);

//รับข้อมูล Record เรียงลำดับน้อยไปมาก
router.get("/getAsc", new Endpoint().getAscEndpoint);

//แสดงค่าสูงสุด
router.get("/getMax", new Endpoint().getMaxEndpoint);

router.get("/", function (req, res) {
  res.render("index", { title: "MVC 63050176" });
});

router.get("/edit/:id", new Endpoint().getEditEndpoint);

module.exports = router;
