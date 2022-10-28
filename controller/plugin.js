const connection = require("../database.connect/connector");
class Plugin {
  //เขียนคำสั่ง SQL

  //เพิ่มลงใน database
  createPlugin = (cputable, res) => {
    let sql = `INSERT INTO cputable
        (
            id, 
            time_cpu,
            core_cpu
        )
        VALUES
        (
            ?, ?, ?
        )`;
    connection.query(
      sql,
      [cputable.id, cputable.time_cpu, cputable.core_cpu],
      function (err) {
        if (err) {
          console.log("error");
        } else {
          console.log("create row finish");
          return res.redirect("/getcpu");
        }
      }
    );
  };

  //ลบแถวใน Database
  deletePlugin = (cputable, res) => {
    let sql = ` DELETE FROM cputable 
                    WHERE id = ? `;
    connection.query(sql, [cputable.id], function (err) {
      if (err) {
        console.log("error");
      } else {
        console.log("delete row finish");
        //return res.redirect("tabledatabase/list", { title: "CPUListPage" })
        return res.redirect("/getCpu");
        //return res.status(201).send({ response: "delete finish" });
      }
    });
  };

  //รับข้อมูลทุกอันใน Database
  getPlugin = (res) => {
    let sql = ` SELECT id,time_cpu,core_cpu FROM cputable `;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log("error");
        console.log(err);
      } else {
        console.log("show database");
        return res.render("tabledatabase/list", {
          data: result,
          title: "CPUListPage",
        });
      }
    });
  };

  //รับข้อมูลบางอันใน Database
  getUserCpuPlugin = (cputable, res) => {
    let sql = ` SELECT id,time_cpu,core_cpu
                    FROM cputable 
                    WHERE id = ?`;
    connection.query(sql, [cputable.id], function (err, result) {
      if (err) {
        console.log("error");
      } else {
        return res.status(200).send({ response: result });
      }
    });
  };

  //แก้ไขข้อมูลใน Database
  updateCpuPlugin = (cputable, res) => {
    let sql = `UPDATE cputable
        SET time_cpu = ?, core_cpu = ?
        WHERE id = ?`;

    // console.table(cputable);

    connection.query(
      sql,
      [cputable.time_cpu, cputable.core_cpu, cputable.id],
      function (err, data) {
        if (err) {
          console.log("error");
          console.log(err);
        } else {
          console.log("update finished");
          console.log();
          // console.log();
          // return res.status(201).render("tabledatabase/list", {
          //   response: data,
          // });
          // res.redirect("tabledatabase/list");
          return res.status(201).redirect("/getCpu");
          // return res.status(201).send({ response: "update finished" });
        }
      }
    );
  };

  //รับข้อมูลทุกอันใน Database เรียงลำดับค่ามากสุดมาก่อน
  getDescPlugin = (res) => {
    let sql = ` SELECT id,time_cpu,core_cpu FROM cputable order by core_cpu desc `;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log("error");
        console.log(err);
      } else {
        console.log("show database desc");
        return res.render("tabledatabase/list", {
          data: result,
          title: "CPUListPage2",
        });
      }
    });
  };

  //รับข้อมูลทุกอันใน Database เรียงลำดับค่าน้อยสุดมาก่อน
  getAscPlugin = (res) => {
    let sql = ` SELECT id,time_cpu,core_cpu FROM cputable order by core_cpu asc `;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log("error");
        console.log(err);
      } else {
        console.log("show database asc");
        return res.render("tabledatabase/list", {
          data: result,
          title: "CPUListPage2",
        });
      }
    });
  };

  //แสดงผลลัพธ์ค่าที่มากที่สุด
  getMaxPlugin = (res) => {
    let sql = ` SELECT id,time_cpu,core_cpu FROM cputable where core_cpu = (SELECT max(core_cpu) FROM cputable);`;
    connection.query(sql, function (err, result) {
      if (err) {
        console.log("error");
        console.log(err);
      } else {
        console.log("show database max");
        return res.render("tabledatabase/list2", {
          data: result,
          title: "CPUListPage3",
        });
      }
    });
  };

  getEditPlugin = (cputable, res) => {
    let sql = ` Select * FROM cputable 
                    WHERE id = ? `;
    console.log("ID : " + [cputable.id]);
    connection.query(sql, [cputable.id], function (err, result) {
      if (err) {
        console.log("error");
      } else {
        console.table(result);
        console.log("select id by one finish");
        res.render("tabledatabase/edit", {
          title: "Edit Cpu",
          // data: rows[0],
          id: result[0].id,
          time_cpu: result[0].time_cpu,
          core_cpu: result[0].core_cpu,
        });
      }
    });
  };
}
module.exports = { Plugin };
