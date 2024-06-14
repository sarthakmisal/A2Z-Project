const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public/"));
app.use(fileUpload());

const execute = require("./connection");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/slider", async (req, res) => {
  res.render("slider.ejs", { sliders: await execute("select * from sliders") });
});

app.post("/update_slider/:id", (req, res) => {
  const data = req.body;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let uploadedFile = req.files.slider_image; // Ensure the name matches the input field name in the form
  const filePath = "public/uploads/" + data.slider_image;

  // Log form fields and file details for debugging
  console.log("Form Fields:", data);
  console.log("File Details:", uploadedFile);

  uploadedFile.mv(filePath, async (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).send("Error saving file.");
    }

    console.log(`File saved as ${filePath}`);
    // Uncomment the following lines after ensuring the file is uploaded correctly
    await execute(
      `update sliders set slider_title='${req.body.slider_title}',type= '${req.body.type}',slider_description='${req.body.slider_description}' where slider_id='${req.params.id}'`
    );
    res.redirect("/slider");
  });
});

app.get("/edit_slider/:id", async (req, res) => {
  res.render("edit_slider.ejs", {
    slider: await execute(
      `select * from sliders where slider_id='${req.params.id}'`
    ),
  });
});

app.post("/contact-us", async (req, res) => {
  // res.send(req.body);
  await execute(
    `insert into queries(name,email,subject,message,status)values('${req.body.name}','${req.body.email}','${req.body.subject}','${req.body.message}','active')`
  );
  res.redirect("http://localhost:3000/");
});

app.get("/queries", async (req, res) => {
  data = await execute("select * from queries where queries.status='active'");
  res.render("queries.ejs", { data: data });
});

app.get("/get_sliders", async (req, res) => {
  res.json(await execute("select * from sliders"));
});

app.get("/resolve_query/:id", async (req, res) => {
  await execute(
    `update queries set queries.status='inactive' where queries.id='${req.params.id}'`
  );
  res.send(
    "<script>alert('Query Resolved Successfully');location.href='/queries'</script>"
  );
});

// NEW SECTION STARTING
app.get("/landmarks", async (req, res) => {
  res.render("landmarks.ejs", {
    landmarks: await execute("select * from landmarks"),
  });
});
app.get("/edit_landmark/:id", async (req, res) => {
  res.render("edit_landmark.ejs", {
    landmark: await execute(
      `select * from landmarks where id='${req.params.id}'`
    ),
  });
});
app.post("/update_landmark/:id", async (req, res) => {
  const data = req.body;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let uploadedFile = req.files.logo; // Ensure the name matches the input field name in the form
  const filePath = "public/uploads/" + data.image;

  // Log form fields and file details for debugging
  console.log("Form Fields:", data);
  console.log("File Details:", uploadedFile);

  uploadedFile.mv(filePath, async (err) => {
    if (err) {
      console.error("Error saving file:", err);
      return res.status(500).send("Error saving file.");
    }

    console.log(`File saved as ${filePath}`);
    // Uncomment the following lines after ensuring the file is uploaded correctly
    await execute(
      `update landmarks set title='${req.body.title}',description='${req.body.description}' where id='${req.params.id}'`
    );
    res.redirect("/landmarks");
  });
});
app.get("/get_landmarks", async (req, res) => {
  res.json(await execute("select * from landmarks"));
});

//  SERVICES IMPLEMENTATION
app.get("/services", async (req, res) => {
  res.render("services.ejs", {
    services: await execute("select * from services"),
  });
});
app.get("/get_services", async (req, res) => {
  res.json(await execute("select * from services"));
});
app.get("/get_blogs", async (req, res) => {
  res.json(await execute("select * from blogs"));
});

// CONTACT US
app.get("/contacts", async (req, res) => {
  // res.send("Hey")
  res.render("contact_us.ejs", {
    contact: await execute("select * from contact"),
  });
});
app.get("/get_contacts", async (req, res) => {
  res.json(await execute("select * from contact"));
});
app.get("/edit_contact/:id", async (req, res) => {
  res.render("edit_contact.ejs", {
    contact: await execute(`select * from contact where id='${req.params.id}'`),
  });
});
app.post("/update_contact/:id", async (req, res) => {
  // res.send(req.body)
  data = req.body;
  await execute(
    `update contact set title="${data.title}",dialogue="${data.dialogue}",phone="${data.phone}",description="${data.description}",address="${data.address}",link="${data.link}",email="${data.email}",quote1="${data.quote1}",quote2="${data.quote2}",quote3="${data.quote3}",map="${data.map}" where contact.id="${req.params.id}"`
  );
  res.redirect("/contacts");
});

// MERGED CODE
session=require('express-session')
app.use(
  session({
    secret: "A2Z IT HUB",
    resave: true,
    saveUninitialized: true,
  })
);

// app.use(cors());

// app.get("/",(req,res)=>{
//     res.render('index.ejs')
//     // res.send("hhh")
// })

app.get("/about_slider", async (req, res) => {
  var about_slider = await execute("SELECT * FROM about_slider");
  res.render("about_slider.ejs", { about_slider: about_slider });
});

app.post("/save_about_slider", async (req, res) => {
  var about_slider_img = new Date().getTime() + req.files.about_slider_img.name;
  req.files.about_slider_img.mv("public/uploads/" + about_slider_img);
  var d = req.body;
  var sql = `INSERT INTO about_slider(about_slider_img,about_slider_heading, about_slider_desc) VALUES 
 ('${about_slider_img}','${d.about_slider_heading}','${d.about_slider_desc}')`;
  var data = await execute(sql);
  res.send(data);
});

app.get("/edit_about_slider/:id", async function (req, res) {
  var sql = `SELECT * FROM about_slider WHERE about_slider_id = '${req.params.id}'`;
  var data = await execute(sql);
  var obj = { about_slider_info: data };
  res.render("edit_about_slider.ejs", obj);
});

app.post("/update_about_slider", async function (req, res) {
  var d = req.body;
  if (req.files) {
    var about_slider_img = new Date().getTime() + req.files.about_slider_img.name;
    req.files.about_slider_img.mv("public/uploads/"+about_slider_img);
                            var sql=`UPDATE about_slider SET about_slider_img='${about_slider_img}'WHERE about_slider_id = '${req.body.about_slider_id}'`;
    await execute(sql);
  }
  var sql = `UPDATE about_slider SET about_slider_heading = '${d.about_slider_heading}'WHERE about_slider_id = '${req.body.about_slider_id}'`;
  var data = await execute(sql);
  res.redirect("/about_slider");
});
app.get("/delete_about_slider/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM about_slider WHERE about_slider_id = '${id}'`;
  var data = await execute(sql);
  // res.send(data);
  res.redirect("/about_slider");
});
app.get("/about_sliderapi", async function (req, res) {
  var about_slider = await execute("SELECT * FROM about_slider");
  res.send(about_slider);
});

app.get("/miss_vis", async (req, res) => {
  var miss_vis = await execute("SELECT * FROM miss_vis_tbl");
  res.render("miss_vis.ejs", { miss_vis: miss_vis });
});
app.post("/save_miss_vis", async (req, res) => {
  var d = req.body;
  var sql = `INSERT INTO miss_vis_tbl(about_miss,about_vis)VALUES('${d.about_miss}','${d.about_vis}')`;
  var data = await execute(sql);
  res.send(data);
  // res.redirect("/miss_vis")
});
app.get("/edit_miss_vis/:id", async function (req, res) {
  var sql = `SELECT * FROM miss_vis_tbl WHERE miss_vis_id = '${req.params.id}'`;
  var data = await execute(sql);
  var obj = { miss_vis_info: data };
  res.render("edit_miss_vis.ejs", obj);
});
app.post("/update_miss_vis", async function (req, res) {
  var d = req.body;
  var sql = `UPDATE miss_vis_tbl SET about_miss = '${d.about_miss}'WHERE miss_vis_id = '${req.body.miss_vis_id}'`;
  var data = await execute(sql);
  var sql = `UPDATE miss_vis_tbl SET about_vis = '${d.about_vis}'WHERE miss_vis_id = '${req.body.miss_vis_id}'`;
  var data = await execute(sql);
  res.redirect("/miss_vis");
});
app.get("/delete_miss_vis/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM miss_vis_tbl WHERE miss_vis_id = '${id}'`;
  var data = await execute(sql);
  res.send(data);
  // res.redirect("/miss_vis");
});
app.get("/miss_visapi", async function (req, res) {
  var miss_vis = await execute("SELECT * FROM miss_vis_tbl");
  res.send(miss_vis);
});

app.get("/about_our", async function (req, res) {
  var about_our = await execute("SELECT * FROM about_our");
  res.render("about_our.ejs", { about_our: about_our });
});

app.post("/save_about_our", async function (req, res) {
  var d = req.body;
  var sql = `INSERT INTO about_our(about_our_heading,about_our_desc)VALUES('${d.about_our_heading}','${d.about_our_desc}')`;
  var data = await execute(sql);
  // res.send(data);
  res.redirect("/about_our");
});

app.get("/edit_about_our/:id", async function (req, res) {
  var sql = `SELECT * FROM about_our WHERE about_our_id = '${req.params.id}'`;
  var data = await execute(sql);
  var obj = { about_our_info: data };
  res.render("edit_about_our.ejs", obj);
});
app.post("/update_about_our", async function (req, res) {
  var d = req.body;
  var sql = `UPDATE about_our SET about_our_heading = '${d.about_our_heading}'WHERE about_our_id = '${req.body.about_our_id}'`;
  var data = await execute(sql);
  var sql = `UPDATE about_our SET about_our_desc = '${d.about_our_desc}'WHERE about_our_id = '${req.body.about_our_id}'`;
  var data = await execute(sql);
  res.redirect("/about_our");
});
app.get("/delete_about_our/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM about_our WHERE about_our_id = '${id}'`;
  var data = await execute(sql);
  // res.send(data);
  res.redirect("/about_our");
});
app.get("/about_ourapi", async function (req, res) {
  var about_our = await execute("SELECT * FROM about_our");
  res.send(about_our);
});
app.get("/our_client", async function (req, res) {
  var our_client = await execute("SELECT * FROM our_client");
  res.render("our_client.ejs", { our_client: our_client });
});
app.post("/save_about_client", async function (req, res) {
  var d = req.body;
  var sql = `INSERT INTO our_client(client_info,client_name,client_pos)VALUES('${d.client_info}','${d.client_name}','${d.client_pos}')`;
  var data = await execute(sql);
  res.send(data);
  // res.redirect("/our_client")
});
app.get("/edit_our_client/:id", async function (req, res) {
  var sql = `SELECT * FROM our_client WHERE client_id = '${req.params.id}'`;
  // res.send(sql);
  var data = await execute(sql);
  var obj = { our_client_info: data };
  res.render("edit_our_client.ejs", obj);
});
app.post("/update_our_client", async function (req, res) {
  var d = req.body;
  var sql = `UPDATE our_client SET client_info = '${d.client_info}'WHERE client_id = '${req.body.client_id}'`;
  var data = await execute(sql);
  var sql = `UPDATE our_client SET client_name = '${d.client_name}'WHERE client_id = '${req.body.client_id}'`;
  var data = await execute(sql);
  var sql = `UPDATE our_client SET client_pos = '${d.client_pos}'WHERE client_id = '${req.body.client_id}'`;
  var data = await execute(sql);
  res.redirect("/our_client");
});
app.get("/delete_our_client/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM our_client WHERE client_id = '${id}'`;
  var data = await execute(sql);
  res.send(data);
  // res.redirect("/our_client");
});
app.get("/ourClientapi", async function (req, res) {
  var our_client = await execute("SELECT * FROM our_client");
  res.send(our_client);
});

app.get("/about_end", async function (req, res) {
  var img = await execute("SELECT * FROM company_logo");
  res.render("about_end.ejs", { img: img });
});
app.post("/save_about_end", async (req, res) => {
  var img = new Date().getTime() + req.files.img.name;
  req.files.img.mv("public/uploads/" + img);
  var d = req.body;
  var sql = `INSERT INTO company_logo(img) VALUES ('${img}')`;
  var data = await execute(sql);
  // res.send(data);
  res.redirect("/about_end");
});
app.get("/edit_img/:id", async function (req, res) {
  var sql = `SELECT * FROM company_logo WHERE company_id = '${req.params.id}'`;
  var data = await execute(sql);
  var obj = { img_info: data };
  res.render("edit_about_end.ejs", obj);
});
app.post("/update_about_end", async function (req, res) {
  var d = req.body;
  if (req.files) {
    var img = new Date().getTime() + req.files.img.name;
    req.files.img.mv("public/uploads/" + img);
    var sql = `UPDATE company_logo SET img='${img}'WHERE company_id = '${req.body.company_id}'`;
    await execute(sql);
  }

  res.redirect("/about_end");
});

app.get("/delete_img/:id", async function (req, res) {
  var id = req.params.id;
  var sql = `DELETE FROM company_logo WHERE company_id = '${id}'`;
  var data = await execute(sql);
  // res.send(data);
  res.redirect("/about_end");
});

app.get("/aboutEndapi", async function (req, res) {
  var img = await execute("SELECT * FROM company_logo");
  res.json(img);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
