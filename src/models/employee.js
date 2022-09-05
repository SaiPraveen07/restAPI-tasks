const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema(
  {
    tasks: {
      type: String,
      required: [true, "please add tasks"],
    },
    projectId: {
      type: String,
      required: [true, "please add projectId"],
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "please add description"],
      trim: true,
    },
    taskId: {
      type: String,
      required: [true, "please add  taskId"],
      trim: true,
    },
    startdate: {
      type: Date,
    },
    enddate: {
      type: Date,
    },
    assignee: {
      type: String,
    },
    reportingto: {
      type: String,
    },
    creationdate: {
      type: Date,
    },
    updation: {
      type: Date,
    },
    createdby: {
      type: String,
    },
    updatedby: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
