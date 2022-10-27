const { Plugin } = require("../controller/plugin");
class Logic {
  //Userสมัครข้อมูลมา มีusername password อาจมี if(รหัสผ่านจำนวนมากกว่า 8 ถ้าไม่ตรงเงื่อนไข return errorมา)

  //เพิ่มลงใน database
  createLogic = (cputable, res) => {
    //validate empthy

    new Plugin().createPlugin(cputable, res);
  };

  //ลบแถวใน Database
  deleteLogic = (cputable, res) => {
    new Plugin().deletePlugin(cputable, res);
  };

  //รับข้อมูลทุกอันใน Database
  getLogic = (res) => {
    new Plugin().getPlugin(res);
  };

  //รับข้อมูลบางอันใน Database
  getUserCpuLogic = (cputable, res) => {
    new Plugin().getUserCpuPlugin(cputable, res);
  };

  //แก้ไขข้อมูลใน Database
  updateLogic = (cputable, res) => {
    new Plugin().updateCpuPlugin(cputable, res);
  };

  //รับข้อมูลทุกอันใน Database เรียงลำดับค่ามากสุดมาก่อน
  getDescLogic = (res) => {
    new Plugin().getDescPlugin(res);
  };

  //รับข้อมูลทุกอันใน Database เรียงลำดับค่าน้อยสุดมาก่อน
  getAscLogic = (res) => {
    new Plugin().getAscPlugin(res);
  };

  //แสดงผลลัพธ์ค่าที่มากที่สุด
  getMaxLogic = (res) => {
    new Plugin().getMaxPlugin(res);
  };

  getEditLogic = (cputable, res) => {
    new Plugin().getEditPlugin(cputable, res);
  };
}
module.exports = { Logic };
