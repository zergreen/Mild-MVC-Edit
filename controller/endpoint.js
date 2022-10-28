const { Logic } = require("./logic");
const models = require("../model/model");

class Endpoint {
  constructor() {
    this.dataCpu = models.dataCpuModel;
  }

  //เพิ่มลงใน database
  createEndpoint = (req, res) => {
    this.dataCpu.id = req.body.id;
    this.dataCpu.time_cpu = req.body.time_cpu;
    this.dataCpu.core_cpu = req.body.core_cpu;
    new Logic().createLogic(this.dataCpu, res);
  };

  //ลบแถวใน Database
  deleteEndpoint = (req, res) => {
    this.dataCpu.id = req.params.id;
    new Logic().deleteLogic(this.dataCpu, res);
  };

  //รับข้อมูลทุกอันใน Database
  getEndpoint = (req, res) => {
    new Logic().getLogic(res);
  };

  //รับข้อมูลบางอันใน Database
  getUserCpuEndpoint = (req, res) => {
    this.dataCpu.id = req.body.id;
    new Logic().getUserCpuLogic(this.dataCpu, res);
  };

  //แก้ไขข้อมูลใน Database
  updateEndpoint = (req, res) => {
    console.log("i comming to green");
    // var id = req.params.id;
    this.dataCpu.id = req.params.id;
    this.dataCpu.time_cpu = req.body.time_cpu;
    this.dataCpu.core_cpu = req.body.core_cpu;

    // console.table(this.dataCpu);
    // console.log("5555555555");

    new Logic().updateLogic(this.dataCpu, res);
  };

  //รับข้อมูลทุกอันใน Database เรียงลำดับค่ามากสุดมาก่อน
  getDescEndpoint = (req, res) => {
    new Logic().getDescLogic(res);
  };

  //รับข้อมูลทุกอันใน Database เรียงลำดับค่าน้อยสุดมาก่อน
  getAscEndpoint = (req, res) => {
    new Logic().getAscLogic(res);
  };

  //แสดงผลลัพธ์ค่าที่มากที่สุด
  getMaxEndpoint = (req, res) => {
    new Logic().getMaxLogic(res);
  };

  // ViralMemeEndpoint = (req, res) => {
  //    new Logic().getViralMemeLogic(res);
  // }

  getEditEndpoint = (req, res) => {
    this.dataCpu.id = req.params.id;
    new Logic().getEditLogic(this.dataCpu, res);
  };
}
module.exports = {
  Endpoint,
};
