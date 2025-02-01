const Marketing = require("../models/Marketing");

const getMarketing = async (req, res) => {
  try {
    const marketing = await Marketing.find();

    if (!marketing) {
      return res.status(404).json({ message: "Marketing not found" });
    }

    res.status(200).json({
      status_code: 200,
      message: "List Of Marketing",
      data: marketing,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMarketingById = async (req, res) => {
  try {
    const id = req.params.id;
    const marketing = await Marketing.findById(id);

    if (!marketing) {
      return res.status(404).json({ message: "Marketing not found" });
    }

    res.status(200).json({
      status_code: 200,
      message: "List Of Marketing By ID",
      data: marketing,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createMarketing = async (req, res) => {
  try {
    const marketing = new Marketing(req.body);
    await marketing.save();
    res.status(201).json({
      status_code: 201,
      message: "Marketing Successfully created",
      data: marketing,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMarketing = async (req, res) => {
  try {
    const marketing = await Marketing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!marketing) {
      return res.status(404).json({ message: "Marketing not found" });
    }
    await marketing.save();

    res.status(200).json({
      status_code: 200,
      message: "Update Marketing , NAME: " + req.body.name,
      data: marketing,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteMarketing = async (req, res) => {
  try {
    const marketing = await Marketing.findByIdAndDelete(req.params.id);
    if (!marketing) {
      return res.status(404).json({ message: "Marketing not found" });
    }
    res.status(200).json({
      status_code: 200,
      message: "Delete Marketing , NAME: " + req.body.name,
      data: marketing,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMarketing,
  getMarketing,
  getMarketingById,
  updateMarketing,
  deleteMarketing,
};
