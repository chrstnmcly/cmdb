const express = require("express");
const router = express.Router();
const User = require('../models/users');
const peripherals = require('../models/peripherals');
const Hdfd = require('../models/hdfd');
const Apc = require('../models/apc');
const Ap = require('../models/ap');
const Servers = require('../models/servers');
const Switches_ = require('../models/switches_');
const Naco_projector = require('../models/naco_projector');
const Naco_printers = require('../models/naco_printers');
const Naco_biometric = require('../models/naco_biometric');
const Naco_ap = require('../models/naco_ap');
const Dssci_projector = require('../models/dssci_projector');
const Dssci_printer = require('../models/dssci_printer');
const Dssci_biometric = require('../models/dssci_biometric');
const Dssci_phone = require('../models/dssci_phone');
const Dssci_shredder = require('../models/dssci_shredder');
const Dssci_ap = require('../models/dssci_ap');
const multer = require('multer');
const fs = require("fs");
var async = require('async');

router.get('/', (req, res) => {
  res.render('telephone');
});

// STATUS - TELEPHONE
router.put("/updateStatus/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await User.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - PERIPHERALS
router.put("/updateStatusPerp/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await peripherals.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - HDFD
router.put("/updateStatusHDFD/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Hdfd.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - APC
router.put("/updateStatusAPC/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Apc.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - AP
router.put("/updateStatusAP/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Ap.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - SERVERS
router.put("/updateStatusServers/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Servers.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - SWITCHES
router.put("/updateStatusSwitches_/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Switches_.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - NACO PROJECTOR
router.put("/updateStatusNACOPRO/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Naco_projector.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - NACO PRINTERS
router.put("/updateStatusNACOPRI/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Naco_printers.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - NACO BIOMETRICS
router.put("/updateStatusNACOBIO/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Naco_biometric.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - NACO AP
router.put("/updateStatusNACOAP/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Naco_ap.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS - DSSCI - PROJECTOR
router.put("/updateStatusDSSCIPRO/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Dssci_projector.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS DSSCI - PRINTER
router.put("/updateStatusDSSCIPRI/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Dssci_printer.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS DSSCI - BIO
router.put("/updateStatusDSSCIBIO/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Dssci_biometric.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS DSSCI - PHONE
router.put("/updateStatusDSSCIPHONE/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Dssci_phone.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS DSSCI - SHREDDER 
router.put("/updateStatusDSSCISHRED/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Dssci_shredder.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});

//STATUS DSSCI - AP
router.put("/updateStatusDSSCIAP/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    // Update the status of the item in the database
    await Dssci_ap.findByIdAndUpdate(id, { status });

    res.json({ message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update status" });
  }
});










// image uploads
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads");
    },
    // filename
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
})

var upload = multer({
    storage: storage,
}).single("image");


//insert user in route - telephones
router.post("/add", upload, async (req, res) => {
    try {
      const user = new User({
        serialNumber: req.body.serialNumber,
        User: req.body.User,
        brand: req.body.brand,
        model: req.body.model,
        image: req.file.filename,
      });
      await user.save();
      req.session.message = {
        type: "success",
        message: "asset added successfully",
      };
      res.redirect("/home");
    } catch (err) {
      res.json({ message: err.message, type: "danger" });
    }
  });

//insert peripherals in route
router.post("/add_peripherals", upload, async (req, res) => {
  try {
    const Peripherals = new peripherals({
      serialNumber: req.body.serialNumber,
      brand: req.body.brand,
      tag: req.body.tag,
      location: req.body.location,
      image: req.file.filename,
    });
    await Peripherals.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/peripherals");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert hard drive fd in route
router.post("/add_hdfd", upload, async (req, res) => {
  try {
    const hdfd = new Hdfd({ // initialize the hdfd model
      serialNumber: req.body.serialNumber,
      image: req.file.filename,
    });
    await hdfd.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/hdfd");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert apc in route
router.post("/add_apc", upload, async (req, res) => {
  try {
    const apc = new Apc({
      tag: req.body.tag,
      location: req.body.location,
      image: req.file.filename,
    });
    await apc.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/apc");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert servers in route
router.post("/add_servers", upload, async (req, res) => {
  try {
    const servers = new Servers({ 
      server: req.body.server,
      tag: req.body.tag,
      image: req.file.filename,
    });
    await servers.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/servers");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert switch in route
router.post("/add_switches_", upload, async (req, res) => {
  try {
    const switches_ = new Switches_({ 
      brand: req.body.brand,
      tag: req.body.tag,
      department: req.body.department,
      location: req.body.location,
      image: req.file.filename,
    });
    await switches_.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/switches_");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert ap in route
router.post("/add_ap", upload, async (req, res) => {
  try {
    const ap = new Ap({ 
      serialNumber: req.body.serialNumber,
      tag: req.body.tag,
      area: req.body.area,
      location: req.body.location,
      image: req.file.filename,
    });
    await ap.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/ap");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert naco_projectors in route
router.post("/add_naco_projector", upload, async (req, res) => {
  try {
    const naco_projector = new Naco_projector({ 
      serialNumber: req.body.serialNumber,
      brand: req.body.brand,
      tag: req.body.tag,
      roomLocation: req.body.roomLocation,
      image: req.file.filename,
    });
    await naco_projector.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/naco_projector");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert naco_printers in route
router.post("/add_naco_printers", upload, async (req, res) => {
  try {
    const naco_printers = new Naco_printers({ 
      tag: req.body.tag,
      roomLocation: req.body.roomLocation,
      image: req.file.filename,
    });
    await naco_printers.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/naco_printers");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert naco_bio in route
router.post("/add_naco_bio", upload, async (req, res) => {
  try {
    const naco_biometric = new Naco_biometric({ 
      unitNumber: req.body.unitNumber,
      serialNumber: req.body.serialNumber,
      brand: req.body.brand,
      tag: req.body.tag,
      ip: req.body.ip,
      roomLocation: req.body.roomLocation,
      image: req.file.filename,
    });
    await naco_biometric.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/naco_biometric");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert dssci projector in route
router.post("/add_dssci_projector", upload, async (req, res) => {
  try {
    const dssci_projector = new Dssci_projector({ 
      serialNumber: req.body.serialNumber,
      brand: req.body.brand,
      tag: req.body.tag,
      image: req.file.filename,
    });
    await dssci_projector.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/dssci_projector");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert dssci printer in route
router.post("/add_dssci_printer", upload, async (req, res) => {
  try {
    const dssci_printer = new Dssci_printer({ 
      serialNumber: req.body.serialNumber,
      roomLocation: req.body.roomLocation,
      tag: req.body.tag,
      image: req.file.filename,
    });
    await dssci_printer.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/dssci_printer");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert dssci biometric in route
router.post("/add_dssci_biometric", upload, async (req, res) => {
  try {
    const dssci_biometric = new Dssci_biometric({ 
      unitNumber: req.body.unitNumber,
      serialNumber: req.body.serialNumber,
      brand: req.body.brand,
      tag: req.body.tag,
      ip: req.body.ip,
      roomLocation: req.body.roomLocation,
      image: req.file.filename,
    });
    await dssci_biometric.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/dssci_biometric");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert dssci phone in route
router.post("/add_dssci_phone", upload, async (req, res) => {
  try {
    const dssci_phone = new Dssci_phone({ 
      tag: req.body.tag,
      image: req.file.filename,
    });
    await dssci_phone.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/dssci_phone");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert dssci shredder in route
router.post("/add_dssci_shredder", upload, async (req, res) => {
  try {
    const dssci_shredder = new Dssci_shredder({ 
      tag: req.body.tag,
      image: req.file.filename,
    });
    await dssci_shredder.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/dssci_shredder");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert dssci ap in route
router.post("/add_dssci_ap", upload, async (req, res) => {
  try {
    const dssci_ap = new Dssci_ap({ 
      serialNumber: req.body.serialNumber,
      roomLocation: req.body.roomLocation,
      tag: req.body.tag,
      image: req.file.filename,
    });
    await dssci_ap.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/dssci_ap");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

//insert naco ap in route
router.post("/add_naco_ap", upload, async (req, res) => {
  try {
    const naco_ap = new Naco_ap({ 
      serialNumber: req.body.serialNumber,
      roomLocation: req.body.roomLocation,
      area: req.body.area,
      tag: req.body.tag,
      image: req.file.filename,
    });
    await naco_ap.save();
    req.session.message = {
      type: "success",
      message: "asset added successfully",
    };
    res.redirect("/naco_ap");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});








//routes for homepage
router.get("/home", (req, res) => {
    User.find().exec()
        .then((users) => {
            res.render("home", {
                title: "Home page",
                users: users,
            });
        })
        .catch((err) => {
            res.json({ message: err.message });
        });
});

//router for telephones
router.get("/telephone", (req, res) => {
  User.find().exec()
      .then((users) => {
          res.render("telephone", {
              title: "telephone",
              users: users,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for peripherals
router.get("/peripherals", (req, res) => {
  peripherals.find().exec()
      .then((peripherals) => {
          res.render("peripherals", {
              title: "peripherals",
              peripherals: peripherals,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for hdfd
router.get("/hdfd", (req, res) => {
  Hdfd.find().exec()
      .then((hdfd) => {
          res.render("hdfd", {
              title: "hdfd",
              hdfd: hdfd,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for apc
router.get("/apc", (req, res) => {
  Apc.find().exec()
      .then((apc) => {
          res.render("apc", {
              title: "apc",
              apc: apc,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for servers
router.get("/servers", (req, res) => {
  Servers.find().exec()
      .then((servers) => {
          res.render("servers", {
              title: "servers",
              servers: servers,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for sw
router.get("/switches_", (req, res) => {
  Switches_.find().exec()
      .then((switches_) => {
          res.render("switches_", {
              title: "switches_",
              switches_: switches_,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for ap
router.get("/ap", (req, res) => {
  Ap.find().exec()
      .then((ap) => {
          res.render("ap", {
              title: "ap",
              ap: ap,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});
//router for naco
router.get("/naco", (req, res) => {
  res.render("naco", {
    title: "naco",
  });
});
//router for naco_projector
router.get("/naco_projector", (req, res) => {
  Naco_projector.find().exec()
      .then((naco_projector) => {
          res.render("naco_projector", {
              title: "naco_projector",
              naco_projector: naco_projector,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for naco_printers
router.get("/naco_printers", (req, res) => {
  Naco_printers.find().exec()
      .then((naco_printers) => {
          res.render("naco_printers", {
              title: "naco_printers",
              naco_printers: naco_printers,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for naco_bio
router.get("/naco_biometric", (req, res) => {
  Naco_biometric.find().exec()
      .then((naco_biometric) => {
          res.render("naco_biometric", {
              title: "naco_biometric",
              naco_biometric: naco_biometric,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for dssci
router.get("/dssci", (req, res) => {
  res.render("dssci", {
    title: "dssci",
  });
});

//router for dssci-projector
router.get("/dssci_projector", (req, res) => {
  Dssci_projector.find().exec()
      .then((dssci_projector) => {
          res.render("dssci_projector", {
              title: "dssci_projector",
              dssci_projector: dssci_projector,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for dssci-printer
router.get("/dssci_printer", (req, res) => {
  Dssci_printer.find().exec()
      .then((dssci_printer) => {
          res.render("dssci_printer", {
              title: "dssci_printer",
              dssci_printer: dssci_printer,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for dssci-biometric
router.get("/dssci_biometric", (req, res) => {
  Dssci_biometric.find().exec()
      .then((dssci_biometric) => {
          res.render("dssci_biometric", {
              title: "dssci_biometric",
              dssci_biometric: dssci_biometric,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for dssci-phone
router.get("/dssci_phone", (req, res) => {
  Dssci_phone.find().exec()
      .then((dssci_phone) => {
          res.render("dssci_phone", {
              title: "dssci_phone",
              dssci_phone: dssci_phone,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//roueter for dssci shredder
router.get("/dssci_shredder", (req, res) => {
  Dssci_shredder.find().exec()
      .then((dssci_shredder) => {
          res.render("dssci_shredder", {
              title: "dssci_shredder",
              dssci_shredder: dssci_shredder,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for dssci ap
router.get("/dssci_ap", (req, res) => {
  Dssci_ap.find().exec()
      .then((dssci_ap) => {
          res.render("dssci_ap", {
              title: "dssci_ap",
              dssci_ap: dssci_ap,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});

//router for naco ap
router.get("/naco_ap", (req, res) => {
  Naco_ap.find().exec()
      .then((naco_ap) => {
          res.render("naco_ap", {
              title: "naco_ap",
              naco_ap: naco_ap,
          });
      })
      .catch((err) => {
          res.json({ message: err.message });
      });
});







//router for edit telephones
router.get("/edit/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const user = await User.findById(id);
      if (!user) {
          return res.redirect("/");
      }
      res.render("edit_users", {
          title: "Edit user",
          user,
      });
  } catch (err) {
      console.error(err);
      res.redirect("/telephones");
  }
});

//router for edit peripherals
router.get("/edit_peripherals/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const peripheralsObj = await peripherals.findById(id); 
      if (!peripheralsObj) {
          return res.redirect("/");
      }
      res.render("edit_peripherals", {
          title: "Edit peripherals",
          peripherals: peripheralsObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/peripherals");
  }
});

//router for edit hdfd
router.get("/edit_hdfd/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const hdfdObj = await Hdfd.findById(id); 
      if (!hdfdObj) {
          return res.redirect("/");
      }
      res.render("edit_hdfd", {
          title: "Edit hdfd",
          hdfd: hdfdObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/hdfd");
  }
});

//router for edit apc
router.get("/edit_apc/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const apcObj = await Apc.findById(id); 
      if (!apcObj) {
          return res.redirect("/");
      }
      res.render("edit_apc", {
          title: "Edit apc",
          apc: apcObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/apc");
  }
});

//router for edit servers
router.get("/edit_servers/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const serversObj = await Servers.findById(id); 
      if (!serversObj) {
          return res.redirect("/");
      }
      res.render("edit_servers", {
          title: "Edit servers",
          servers: serversObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/servers");
  }
});

//router for edit sw
router.get("/edit_switches_/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const switches_Obj = await Switches_.findById(id); 
      if (!switches_Obj) {
          return res.redirect("/");
      }
      res.render("edit_switches_", {
          title: "Edit switches_",
          switches_: switches_Obj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/switches_");
  }
});

//router for edit ap
router.get("/edit_ap/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const apObj = await Ap.findById(id); 
      if (!apObj) {
          return res.redirect("/");
      }
      res.render("edit_ap", {
          title: "Edit ap",
          ap: apObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/ap");
  }
});

//router for edit naco_projector
router.get("/edit_naco_projector/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const naco_projectorObj = await Naco_projector.findById(id); 
      if (!naco_projectorObj) {
          return res.redirect("/");
      }
      res.render("edit_naco_projector", {
          title: "Edit naco_projector",
          naco_projector: naco_projectorObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/naco_projector");
  }
});

//router for edit naco_printers
router.get("/edit_naco_printers/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const naco_printersObj = await Naco_printers.findById(id); 
      if (!naco_printersObj) {
          return res.redirect("/");
      }
      res.render("edit_naco_printers", {
          title: "Edit naco_printers",
          naco_printers: naco_printersObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/naco_printers");
  }
});

//router for edit naco_biometrics
router.get("/edit_naco_biometric/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const naco_biometricObj = await Naco_biometric.findById(id); 
      if (!naco_biometricObj) {
          return res.redirect("/");
      }
      res.render("edit_naco_biometric", {
          title: "Edit naco_biometric",
          naco_biometric: naco_biometricObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/naco_biometric");
  }
});

//router for edit dssci biometrics
router.get("/edit_dssci_projector/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const dssci_projectorObj = await Dssci_projector.findById(id); 
      if (!dssci_projectorObj) {
          return res.redirect("/");
      }
      res.render("edit_dssci_projector", {
          title: "Edit dssci_projector",
          dssci_projector: dssci_projectorObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/dssci_projector");
  }
});


//router for edit dssci printer
router.get("/edit_dssci_printer/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const dssci_printerObj = await Dssci_printer.findById(id); 
      if (!dssci_printerObj) {
          return res.redirect("/");
      }
      res.render("edit_dssci_printer", {
          title: "Edit dssci_printer",
          dssci_printer: dssci_printerObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/dssci_printer");
  }
});

//router for edit dssci printer
router.get("/edit_dssci_biometric/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const dssci_biometricObj = await Dssci_biometric.findById(id); 
      if (!dssci_biometricObj) {
          return res.redirect("/");
      }
      res.render("edit_dssci_biometric", {
          title: "Edit dssci_biometric",
          dssci_biometric: dssci_biometricObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/dssci_biometric");
  }
});

//router for edit dssci phone
router.get("/edit_dssci_phone/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const dssci_phoneObj = await Dssci_phone.findById(id); 
      if (!dssci_phoneObj) {
          return res.redirect("/");
      }
      res.render("edit_dssci_phone", {
          title: "Edit dssci_phone",
          dssci_phone: dssci_phoneObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/dssci_phone");
  }
});

//router for edit dssci shredder
router.get("/edit_dssci_shredder/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const dssci_shredderObj = await Dssci_shredder.findById(id); 
      if (!dssci_shredderObj) {
          return res.redirect("/");
      }
      res.render("edit_dssci_shredder", {
          title: "Edit dssci_shredder",
          dssci_shredder: dssci_shredderObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/dssci_shredder");
  }
});

//router for edit dssci ap
router.get("/edit_dssci_ap/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const dssci_apObj = await Dssci_ap.findById(id); 
      if (!dssci_apObj) {
          return res.redirect("/");
      }
      res.render("edit_dssci_ap", {
          title: "Edit dssci_ap",
          dssci_ap: dssci_apObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/dssci_ap");
  }
});

//router for edit naco ap
router.get("/edit_naco_ap/:id", async (req, res) => {
  try {
      const id = req.params.id;
      const naco_apObj = await Naco_ap.findById(id); 
      if (!naco_apObj) {
          return res.redirect("/");
      }
      res.render("edit_naco_ap", {
          title: "Edit naco_ap",
          naco_ap: naco_apObj, 
      });
  } catch (err) {
      console.error(err);
      res.redirect("/naco_ap");
  }
});









//routes for image update - telephones
router.post("/update/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    User: req.body.User,
    brand: req.body.brand,
    model: req.body.model,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  User.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/telephone");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - peripherals
router.post("/update_peripherals/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    brand: req.body.brand,
    tag: req.body.tag,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  peripherals.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/peripherals");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - hdfd
router.post("/update_hdfd/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Hdfd.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/hdfd");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - apc
router.post("/update_apc/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    tag: req.body.tag,
    location: req.body.location,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Apc.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/apc");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - servers
router.post("/update_servers/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serverName: req.body.serverName,
    tag: req.body.tag,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Servers.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/servers");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - switches
router.post("/update_switches_/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    brand: req.body.brand,
    tag: req.body.tag,
    department: req.body.department,
    location: req.body.location,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Switches_.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/switches_");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - ap
router.post("/update_ap/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    tag: req.body.tag,
    area: req.body.area,
    location: req.body.location,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Ap.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/ap");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - naco projector
router.post("/update_naco_projector/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    brand: req.body.brand,
    tag: req.body.tag,
    roomLocation: req.body.roomLocation,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Naco_projector.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/naco_projector");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - naco printers
router.post("/update_naco_printers/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    tag: req.body.tag,
    department: req.body.department,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Naco_printers.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/naco_printers");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - naco biometric
router.post("/update_naco_biometric/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    unitNumber: req.body.unitNumber,
    serialNumber: req.body.serialNumber,
    brand: req.body.brand,
    tag: req.body.tag,
    ip: req.body.ip,
    location: req.body.location,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Naco_biometric.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/naco_biometric");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image udate - dssci projector
router.post("/update_naco_projector/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    brand: req.body.brand,
    tag: req.body.tag,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Naco_projector.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/naco_projector");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - dssci printer
router.post("/update_naco_printer/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    tag: req.body.tag,
    roomLocation: req.body.roomLocation,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Naco_printer.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/naco_printer");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - dssci biometric
router.post("/update_dssci_biometric/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    unitNumber: req.body.unitNumber,
    serialNumber: req.body.serialNumber,
    brand: req.body.brand,
    tag: req.body.tag,
    ip: req.body.ip,
    roomLocation: req.body.roomLocation,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Dssci_biometric.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/dssci_biometric");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - dssci phone
router.post("/update_dssci_phone/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    tag: req.body.tag,
    image: req.file.filename,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Dssci_phone.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/dssci_phone");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - dscci shredder
router.post("/update_dssci_shredder/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    tag: req.body.tag,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Dssci_shredder.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/dssci_shredder");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - dssci ap
router.post("/update_dssci_ap/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    roomLocation: req.body.roomLocation,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Dssci_ap.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/dssci_ap");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});

//router for image update - naco ap
router.post("/update_naco_ap/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync(".uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image; // Retain the old image filename
  }

  const updatedFields = {
    serialNumber: req.body.serialNumber,
    roomLocation: req.body.roomLocation,
    area: req.body.area,
    tag: req.body.tag,
    image: new_image, // Assign the new_image variable as the value of the image field
    dateUpdated: new Date() // Set the current date as the update date (year-month-day format)
  };

  Naco_ap.findByIdAndUpdate(id, updatedFields, { new: true })
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "Asset updated successfully",
      };
      res.redirect("/naco_ap");
    })
    .catch((err) => {
      res.json({ message: err.message, type: "danger" });
    });
});




// delete asset route - telephones
router.get("/delete/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await User.findByIdAndRemove(id);
    if (result.image != "") {
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/telephone");
  } catch (err) {
    res.json({ message: err.message });
  }
});

// router for delete peripherals
router.get("/delete_peripherals/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await peripherals.findByIdAndRemove(id);
    if (result.image != "") {
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/peripherals");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete hdfd
router.get("/delete_hdfd/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Hdfd.findByIdAndRemove(id);
    if (result && result.image != "") {
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/hdfd");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete apc
router.get("/delete_apc/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Apc.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/apc");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete servers
router.get("/delete_servers/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Servers.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/servers");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete sw
router.get("/delete_switches_/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Switches_.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/switches_");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete ap
router.get("/delete_ap/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Ap.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/ap");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete naco_projectors
router.get("/delete_naco_projector/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Naco_projector.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/naco_projector");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete naco_printers
router.get("/delete_naco_printers/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Naco_printers.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/naco_printers");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete naco_biometrics
router.get("/delete_naco_biometric/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Naco_biometric.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/naco_biometric");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete dssci projector
router.get("/delete_dssci_projector/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Dssci_projector.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/dssci_projector");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete dssci printer
router.get("/delete_dssci_printer/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Dssci_printer.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/dssci_printer");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete dssci biometric
router.get("/delete_dssci_biometric/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Dssci_biometric.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/dssci_biometric");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete dssci phone
router.get("/delete_dssci_phone/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Dssci_phone.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/dssci_phone");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete dssci shredder
router.get("/delete_dssci_shredder/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Dssci_shredder.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/dssci_shredder");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete dssci ap
router.get("/delete_dssci_ap/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Dssci_ap.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/dssci_ap");
  } catch (err) {
    res.json({ message: err.message });
  }
});

//router for delete naco ap
router.get("/delete_naco_ap/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const result = await Naco_ap.findByIdAndRemove(id);
    if (result && result.image != "") { 
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (err) {
        console.log(err);
      }
    }
    req.session.message = {
      type: "info",
      message: "asset deleted successfully",
    };
    res.redirect("/naco_ap");
  } catch (err) {
    res.json({ message: err.message });
  }
});





//router for add asset - telephones
router.get("/add", (req, res) => {
    res.render("add_users", { title: "Add users"})
});

//router for add peripherals
router.get("/add_peripherals", (req, res) => {
  res.render("add_peripherals", { title: "Add peripherals"})
});

//router for add hdfd
router.get("/add_hdfd", (req, res) => {
  res.render("add_hdfd", { title: "Add hdfd"})
});

//router for add apc
router.get("/add_apc", (req, res) => {
  res.render("add_apc", { title: "Add apc"})
});

//router for add servers
router.get("/add_servers", (req, res) => {
  res.render("add_servers", { title: "Add Servers"});
});

//router for sw
router.get("/add_switches_", (req, res) => {
  res.render("add_switches_", { title: "Add switches"});
});

//router for ap
router.get("/add_ap", (req, res) => {
  res.render("add_ap", { title: "Add ap"});
});

//router for naco_projectors
router.get("/add_naco_projector", (req, res) => {
  res.render("add_naco_projector", { title: "Add naco projector"});
});

//router for naco printers
router.get("/add_naco_printers", (req, res) => {
  res.render("add_naco_printers", { title: "Add naco printers"});
});

//router for naco biometrics
router.get("/add_naco_bio", (req, res) => {
  res.render("add_naco_bio", { title: "Add naco bio"});
});

//router for dssci projector
router.get("/add_dssci_projector", (req, res) => {
  res.render("add_dssci_projector", { title: "Add dssci projector"});
});

//router for dssci printer
router.get("/add_dssci_printer", (req, res) => {
  res.render("add_dssci_printer", { title: "Add dssci printer"});
});

//router for dssci biometric
router.get("/add_dssci_biometric", (req, res) => {
  res.render("add_dssci_biometric", { title: "Add dssci biometric"});
});

//router for dssci phone
router.get("/add_dssci_phone", (req, res) => {
  res.render("add_dssci_phone", { title: "Add dssci phone"});
});

//router for dssci shredder
router.get("/add_dssci_shredder", (req, res) => {
  res.render("add_dssci_shredder", { title: "Add dssci shredder"});
});

//router for dssci ap
router.get("/add_dssci_ap", (req, res) => {
  res.render("add_dssci_ap", { title: "Add dssci ap"});
});

//router for naco ap
router.get("/add_naco_ap", (req, res) => {
  res.render("add_naco_ap", { title: "Add naco_ap"});
});



module.exports = router;