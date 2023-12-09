const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("project/final"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");


mongoose
    .connect("mongodb+srv://as155:dMusmnoNZyFIi78@csce242.2fpokqq.mongodb.net/?retryWrites=true&w=majoritynp")
    .then(() => console.log("Connected to mongodb..."))
    .catch((err) => console.error("could not connect to mongodb...", err));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/scheduling.html");
});

const scheduleSchema = new mongoose.Schema({
    name: String,
    times: String

});

const Appointment = mongoose.model("Appointment", scheduleSchema);

app.get("/api/appointments", (req, res) => {
    getSchedule(res);
});

const getSchedule = async (res) => {
    const appointments = await Appointment.find();
    res.send(appointments);
}

app.post("/api/appointments", upload.single("img"), (req, res) => {
    console.log("Received POST request to /api/appointments");
    const result = validateAppointment(req.body);

    if (result.error) {
        console.log("Validation error:", result.error.details[0].message);
        res.status(400).send(result.error.details[0].message);
        return;
    }

    console.log("Validated input:", req.body);

    const newAppointment = new Appointment({
        name: req.body.name,
        times: req.body.times,
    });

    if (req.file) {
        newAppointment.img = "images/" + req.file.filename;
    }

    createAppointment(newAppointment, res);
});


const createAppointment = async (newAppointment, res) => {
    const result = await newAppointment.save();
    res.send(newAppointment);
}

app.put("/api/appointments/:id" , upload.single("img"), (req, res) => {
    console.log(`Received PUT request to /api/appointments/${req.params.id}`);
    const result = validateAppointment(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
      }

    updateAppointment(req, res);
});

const updateAppointment = async (req, res) => {
    let fieldsToUpdate = {
        name: req.body.name,
        times: req.body.times

    };

    if (req.file) {
        fieldsToUpdate.img = "images/" + req.file.filename;
    }

    const result = await Appointment.updateOne({ _id: req.params.id }, fieldsToUpdate);
    const appointment = await Appointment.findById(req.params.id);
    res.send(appointment);
};

app.delete("/api/appointments/:id", upload.single("img"), (req, res) => {
    console.log(`Received DELETE request to /api/appointments/${req.params.id}`);
    removeAppointment(res, req.params.id);
});

const removeAppointment = async (res, id) =>{
    const appointment = await Appointment.findByIdAndDelete(id);
    res.send(appointment);
}

const validateAppointment = (appointment) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        name: Joi.string().min(3).required(),
        
       
    });
    console.log("Validating appointment:", appointment);
    return schema.validate(appointment);
};

app.listen(3000, () => {
    console.log("I'm Listening");
});

