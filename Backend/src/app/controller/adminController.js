const Goods = require("../models/Good");

class AdminController {
  home(req, res, next) {
    res.render("admin/adhome", { layout: "admin" });
  }
  async create(req, res) {
    let form = new Goods(req.body);
    form.banchay = form.banchay === "on";
    form.giaban =
      Math.floor(parseInt(form.giagoc * ((100 - form.giamgia) / 100)) / 1000) *
      1000;
    form.hinhanh = req.file ? req.file.filename : "";
    try {
      await form.save();
      res.redirect("/admin/add");
    } catch (err) {
      res.send(err);
    }
  }
  async quanlysanpham(req, res) {
    try {
      let [good, count] = await Promise.all([
        Goods.find({}).lean(),
        Goods.countDocumentsWithDeleted({ deleted: true }),
      ]);
      res.render("admin/quanlysanpham", { layout: "admin", good, count });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async suasanpham(req, res) {
    try {
      let good = await Goods.findById(req.params.id).lean();
      res.render("admin/suasanpham", { layout: "admin", good });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async update(req, res) {
    try {
      let form = req.body;
      form.banchay = form.banchay === "on";
      form.giaban =
        Math.floor(
          parseInt(form.giagoc * ((100 - form.giamgia) / 100)) / 1000
        ) * 1000;
      form.hinhanh = req.file ? req.file.filename : req.body.oldImage;
      await Goods.updateOne({ _id: req.params.id }, form);
      res.redirect("/admin/quanlysanpham");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async softdelete(req, res) {
    try {
      await Goods.delete({ _id: req.params.id });
      res.redirect("/admin/quanlysanpham");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async trash(req, res) {
    try {
      let good = await Goods.findWithDeleted({ deleted: true });
      good = good.map((temp) => temp.toObject());
      res.render("admin/trash", { layout: "admin", good });
    } catch (err) {
      res.status(400).json({ error: "ERROR!" });
    }
  }
  async restore(req, res) {
    try {
      await Goods.restore({ _id: req.params.id });
      res.redirect("/admin/trash");
    } catch (err) {
      res.send("ERROR");
    }
  }
  async delete(req, res) {
    try {
      await Goods.deleteOne({ _id: req.params.id });
      res.redirect("/admin/trash");
    } catch (err) {
      res.send("ERROR");
    }
  }
}

module.exports = new AdminController();
