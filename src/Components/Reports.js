import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import moment from "moment";
import * as XLSX from "xlsx";

const Reports = ({
  setRequestStatusAdminDataReports,
  reports,
  adminDetails,
}) => {
  const [value, setValue] = React.useState([null, null]);
  const classes = useStyles();
  const [data, setData] = useState([
    {
      travellersId: [null, null, null, null],
      travellersDetails: [
        {
          _id: "628fb90af431a200a81606e5",
          name: "Vishwas Chandrakant Purohit",
          number: "9619464943",
          designation: "",
        },
        {
          _id: "628fb90bf431a200a816070a",
          name: "Samruddha Vishwas Bhambure",
          number: "9833667587",
          designation: "",
        },
        {
          _id: "628fb90bf431a200a8160702",
          name: "Akshay Shivaling Khobare",
          number: "9420825595",
          designation: "",
        },
        {
          _id: "628fb90af431a200a8160630",
          name: "Rafique Nasir Pathan",
          number: "9021709966",
          designation: "",
        },
      ],
      source:
        "Sakal Digital, 2nd Floor, Sakal Media centre, Sakal Nagar, Gate, 1, AIMS Rd, Sarkar Wada, Ward No. 8, Aundh Gaon, Aundh, Pune, Maharashtra 411007, India",
      sourceLat: "18.5656143",
      sourceLong: "73.8110968",
      destination:
        "Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614, India",
      destinationLat: "19.0173708",
      destinationLong: "73.0379912",
      endDateTime: "2022-08-12T17:00:28.000Z",
      extendRequestDate: null,
      requestStatus: "APPROVED",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "APPROVED",
          Date: "2022-08-10T08:41:57.324Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-10T07:02:37.327Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "Meetings in CBD Belapur office",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 5,
      vehicleId: "629474fdf72e2f2c9d9620ab",
      agencyName: "undefined",
      vehicleName: "ERTIGA MARUTI",
      vehicleNo: "MH12UF4282",
      driverId: "629071a6fddc86fac162c299",
      driverName: "Hemant Narayan Kondhe",
      driverNo: 9011063929,
      startOTP: 107953,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90af431a200a81605c8"],
      updatedBy: ["628fb90af431a200a816032f"],
      _id: "62f3580d4a7d9126bd65fcf2",
      journeyNo: "SS1660114957327",
      selfTravellerId: "628fb90af431a200a81605c8",
      selfTravellerName: "Swapnil Jaykrishna Malpathak",
      selfTravellerNo: "9921283149",
      startDateTime: "2022-08-12T02:00:28.000Z",
      requestLocation: "MUMBAI",
      createdAt: "2022-08-10T07:02:37.335Z",
      updatedAt: "2022-08-10T08:41:57.324Z",
      __v: 0,
    },
    {
      travellersId: [],
      travellersDetails: [],
      source: "HR4Q+2F2, Range Hills, Pune, Maharashtra 411020, India",
      sourceLat: null,
      sourceLong: null,
      destination: "Kolhapur, Maharashtra, India",
      destinationLat: "16.7049873",
      destinationLong: "74.24325270000001",
      endDateTime: "2022-08-11T10:50:32.000Z",
      extendRequestDate: null,
      requestStatus: "CANCEL",
      oneWayOrRoundTrip: "OneWay",
      journeyStatus: [
        {
          Status: "CANCEL",
          Date: "2022-08-10T08:41:06.335Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-10T07:58:44.245Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "Showcase demo of APG rides ",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 1,
      vehicleId: null,
      agencyName: "Sakal",
      vehicleName: null,
      vehicleNo: null,
      driverId: null,
      driverName: null,
      driverNo: 0,
      startOTP: 0,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90af431a200a816034b"],
      updatedBy: [],
      _id: "62f365344a7d9126bd65fcf3",
      journeyNo: "HK1660118324245",
      selfTravellerId: "628fb90af431a200a816034b",
      selfTravellerName: "Ajit Shamkumar Patil",
      selfTravellerNo: "9881099300",
      startDateTime: "2022-08-11T08:50:32.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-10T07:58:44.259Z",
      updatedAt: "2022-08-10T08:41:06.335Z",
      __v: 0,
    },
    {
      travellersId: [],
      travellersDetails: [],
      source: "Pune, Maharashtra, India",
      sourceLat: "18.5204303",
      sourceLong: "73.8567437",
      destination:
        "32 MIDC, Trambakeshwar Road, Satpur Colony, MIDC, Satpur Colony, Nashik, Maharashtra 422007, India",
      destinationLat: "19.9910204",
      destinationLong: "73.74168279999999",
      endDateTime: "2022-08-20T12:30:41.000Z",
      extendRequestDate: null,
      requestStatus: "REJECTED",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "REJECTED",
          Date: "2022-08-18T11:24:02.454Z",
        },
        {
          Status: "APPROVED",
          Date: "2022-08-16T08:40:54.699Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-11T06:38:24.281Z",
        },
      ],
      journeyDates: ["2022-08-19", "2022-08-20"],
      requestedVehicleType: null,
      reason: "YIN Anniversary and blood donation event and colleges visit   ",
      rejectReasonOption: "",
      rejectReason: "tour cancel",
      capacity: 1,
      vehicleId: "629474fdf72e2f2c9d9620ab",
      agencyName: "undefined",
      vehicleName: "ERTIGA MARUTI",
      vehicleNo: "MH12UF4282",
      driverId: "629071a6fddc86fac162c299",
      driverName: "Hemant Narayan Kondhe",
      driverNo: 9011063929,
      startOTP: 103437,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90af431a200a81606d3"],
      updatedBy: ["628fb90af431a200a816032f"],
      _id: "62f4a3e04a7d9126bd65fcf6",
      journeyNo: "P31660199904281",
      selfTravellerId: "628fb90af431a200a81606d3",
      selfTravellerName: "Shyamsundar Shatrughna Madewar",
      selfTravellerNo: "7517096209",
      startDateTime: "2022-08-19T12:30:41.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-11T06:38:24.288Z",
      updatedAt: "2022-08-18T11:24:02.454Z",
      __v: 0,
    },
    {
      travellersId: [null, null, null],
      travellersDetails: [
        {
          _id: "0",
          name: "Devyani ",
          number: "9769024142",
          designation: "",
        },
        {
          _id: "0",
          name: "Abhay Tilak ",
          number: "9423569412",
          designation: "",
        },
        {
          _id: "628fb90bf431a200a8160700",
          name: "Prachee Shirish Kulkarni",
          number: "9764544848",
          designation: "",
        },
      ],
      source: "Pune, Maharashtra, India",
      sourceLat: "18.5204303",
      sourceLong: "73.8567437",
      destination: "Mumbai, Maharashtra, India",
      destinationLat: "19.0759837",
      destinationLong: "72.8776559",
      endDateTime: "2022-08-12T05:30:28.000Z",
      extendRequestDate: null,
      requestStatus: "APPROVED",
      oneWayOrRoundTrip: "OneWay",
      journeyStatus: [
        {
          Status: "APPROVED",
          Date: "2022-08-11T10:36:21.930Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-11T08:59:09.268Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "Recording of Saam TV",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 4,
      vehicleId: "628df39c3fcd87b66883763a",
      agencyName: "undefined",
      vehicleName: "ETIOS LIVA TOYOTA",
      vehicleNo: "MH12JZ8528",
      driverId: "629071a6fddc86fac162c29e",
      driverName: "Rajesh Chandrakant Kondhare",
      driverNo: 9922419001,
      startOTP: 107627,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["62f4b25fc0baa8460a88427f"],
      updatedBy: ["628fb90af431a200a816032f"],
      _id: "62f4c4dd4a7d9126bd65fcf8",
      journeyNo: "PM1660208349268",
      selfTravellerId: "628fb90bf431a200a8160700",
      selfTravellerName: "Prachee Shirish Kulkarni",
      selfTravellerNo: "9764544848",
      startDateTime: "2022-08-12T02:30:28.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-11T08:59:09.314Z",
      updatedAt: "2022-08-11T10:36:21.931Z",
      __v: 0,
    },
    {
      travellersId: [],
      travellersDetails: [],
      source: "Pune",
      sourceLat: "18.5204303",
      sourceLong: "73.8567437",
      destination: "Ahmednagar, Maharashtra, India",
      destinationLat: "19.0948287",
      destinationLong: "74.74797889999999",
      endDateTime: "2022-08-12T15:30:52.000Z",
      extendRequestDate: null,
      requestStatus: "APPROVED",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "APPROVED",
          Date: "2022-08-11T10:37:59.139Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-11T09:53:42.394Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "Clients and Agencies Visit",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 1,
      vehicleId: "629472eef72e2f2c9d96209d",
      agencyName: "undefined",
      vehicleName: "ERTIGA MARUTI",
      vehicleNo: "MH12UF4283",
      driverId: "629071a6fddc86fac162c2a0",
      driverName: "Tushar  Tikone",
      driverNo: 8888849504,
      startOTP: 106552,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90af431a200a816030f"],
      updatedBy: ["628fb90af431a200a816032f"],
      _id: "62f4d1a6596b7fa5ad9a00ef",
      journeyNo: "PA1660211622394",
      selfTravellerId: "628fb90af431a200a816030f",
      selfTravellerName: "Umakant Rajaram Pingale",
      selfTravellerNo: "9881099053",
      startDateTime: "2022-08-12T02:30:52.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-11T09:53:42.397Z",
      updatedAt: "2022-08-11T10:37:59.139Z",
      __v: 0,
    },
    {
      travellersId: [null, null],
      travellersDetails: [
        {
          _id: "0",
          name: "Vikram Nimbalakrlar",
          number: "9822840062",
          designation: "",
        },
        {
          _id: "628fb90af431a200a81603c6",
          name: "Mallikarjun Shivagonda Mugali",
          number: "9986111459",
          designation: "",
        },
      ],
      source: "595, Budhwar Peth, Pune, Maharashtra 411002, India",
      sourceLat: "18.5151788",
      sourceLong: "73.85731109999999",
      destination: "Bagalkote, Karnataka, India",
      destinationLat: "16.1691096",
      destinationLong: "75.6615029",
      endDateTime: "2022-08-20T17:30:39.000Z",
      extendRequestDate: null,
      requestStatus: "UNSERVICE",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "UNSERVICE",
          Date: "Mon Aug 15 2022 22:01:10 GMT+0000",
        },
        {
          Status: "PENDING",
          Date: "2022-08-12T09:31:07.265Z",
        },
      ],
      journeyDates: [
        "2022-08-16",
        "2022-08-17",
        "2022-08-18",
        "2022-08-19",
        "2022-08-20",
      ],
      requestedVehicleType: null,
      reason:
        "NAFED FPO Project: Meetings with District Commissioner office, identification of project villages of Bagalkot and Dharwad District",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 3,
      vehicleId: null,
      agencyName: "Sakal",
      vehicleName: null,
      vehicleNo: null,
      driverId: null,
      driverName: null,
      driverNo: 0,
      startOTP: 0,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90bf431a200a816078d"],
      updatedBy: [],
      _id: "62f61ddbb6af1fb2f312a2b7",
      journeyNo: "5B1660296667265",
      selfTravellerId: "628fb90bf431a200a816078d",
      selfTravellerName: "Jayprakash Kumar Kulkarni",
      selfTravellerNo: "9850209578",
      startDateTime: "2022-08-16T03:30:39.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-12T09:31:07.288Z",
      updatedAt: "2022-08-15T22:01:10.025Z",
      __v: 0,
    },
    {
      travellersId: [null, null, null, null],
      travellersDetails: [
        {
          _id: "628fb90bf431a200a816078c",
          name: "Ankit Maheshwari null",
          number: "7773944077",
          designation: "",
        },
        {
          _id: "628fb90af431a200a8160429",
          name: "Prasanna Girdhardas Devi",
          number: "9850992289",
          designation: "",
        },
        {
          _id: "62949875d5b379e733236069",
          name: "Hemant Ramesh Vandekar",
          number: "9881990019",
          designation: "",
        },
        {
          _id: "628fb90bf431a200a816078b",
          name: "Amol Dinkar Birari",
          number: "9850374264",
          designation: "",
        },
      ],
      source: "Budhwar Peth, Pune, Maharashtra 411002, India",
      sourceLat: "18.5158792",
      sourceLong: "73.85803969999999",
      destination: "Nashik, Maharashtra, India",
      destinationLat: "19.9974533",
      destinationLong: "73.78980229999999",
      endDateTime: "2022-08-18T17:29:06.000Z",
      extendRequestDate: null,
      requestStatus: "APPROVED",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "APPROVED",
          Date: "2022-08-17T10:22:38.169Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-17T05:37:36.019Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "Trivar Development Department Commissioner Meeting",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 5,
      vehicleId: "629472eef72e2f2c9d96209d",
      agencyName: "undefined",
      vehicleName: "ERTIGA MARUTI",
      vehicleNo: "MH12UF4283",
      driverId: "629071a6fddc86fac162c29e",
      driverName: "Rajesh Chandrakant Kondhare",
      driverNo: 9922419001,
      startOTP: 106179,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90bf431a200a816078d"],
      updatedBy: ["628fb90af431a200a816032f"],
      _id: "62fc7ea0b6af1fb2f312a2ba",
      journeyNo: "BN1660714656019",
      selfTravellerId: "628fb90bf431a200a816078d",
      selfTravellerName: "Jayprakash Kumar Kulkarni",
      selfTravellerNo: "9850209578",
      startDateTime: "2022-08-18T00:59:06.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-17T05:37:36.043Z",
      updatedAt: "2022-08-17T10:22:38.170Z",
      __v: 0,
    },
    {
      travellersId: [],
      travellersDetails: [
        {
          _id: "123467890",
          name: "Rushikesh Kakade",
          number: "7276748078",
          designation: "",
        },
      ],
      source: "Sakal office, Shivajinagar",
      sourceLat: null,
      sourceLong: null,
      destination: "Ankushrao Landge Auditorium, Bhosari",
      destinationLat: null,
      destinationLong: null,
      endDateTime: "2022-08-18T06:30:32.000Z",
      extendRequestDate: null,
      requestStatus: "REJECTED",
      oneWayOrRoundTrip: "OneWay",
      journeyStatus: [
        {
          Status: "REJECTED",
          Date: "2022-08-17T10:39:28.226Z",
        },
        {
          Status: "APPROVED",
          Date: "2022-08-17T10:17:33.635Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-17T06:20:49.509Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason:
        "The event material (Bags, Gift Hampers, Bouquet etc)             ",
      rejectReasonOption: "Driver Not available",
      rejectReason: "",
      capacity: 2,
      vehicleId: "629474fdf72e2f2c9d9620ab",
      agencyName: "undefined",
      vehicleName: "ERTIGA MARUTI",
      vehicleNo: "MH12UF4282",
      driverId: "629071a6fddc86fac162c299",
      driverName: "Hemant Narayan Kondhe",
      driverNo: 9011063929,
      startOTP: 102995,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["62f4b25fc0baa8460a88427f"],
      updatedBy: ["628fb90af431a200a816032f"],
      _id: "62fc88c1b6af1fb2f312a2bc",
      journeyNo: "SA1660717249509",
      selfTravellerId: "62f4b25fc0baa8460a88427f",
      selfTravellerName: "Foxberry  Technology",
      selfTravellerNo: "9067688688",
      startDateTime: "2022-08-18T04:30:32.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-17T06:20:49.516Z",
      updatedAt: "2022-08-17T10:39:28.226Z",
      __v: 0,
    },
    {
      travellersId: [],
      travellersDetails: [
        {
          _id: "123467890",
          name: "Amol Birari ",
          number: "9850374264",
          designation: "",
        },
        {
          _id: "123467890",
          name: "Mr Ninad Panse",
          number: "9850374264",
          designation: "",
        },
      ],
      source: "Sakal Office, Budhwar Peth, Pune",
      sourceLat: null,
      sourceLong: null,
      destination: "Sakal Office, Shivaji Udyamnagar, Kolhapur ",
      destinationLat: null,
      destinationLong: null,
      endDateTime: "2022-08-18T07:40:58.000Z",
      extendRequestDate: null,
      requestStatus: "UNSERVICE",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "UNSERVICE",
          Date: "Wed Aug 17 2022 19:31:10 GMT+0000",
        },
        {
          Status: "PENDING",
          Date: "2022-08-17T11:30:29.767Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "SIILC ABM course seminar at Kolhapur",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 3,
      vehicleId: null,
      agencyName: "Sakal",
      vehicleName: null,
      vehicleNo: null,
      driverId: null,
      driverName: null,
      driverNo: 0,
      startOTP: 0,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["62f4b25fc0baa8460a88427f"],
      updatedBy: [],
      _id: "62fcd155656588f03a5b1546",
      journeyNo: "SS1660735829767",
      selfTravellerId: "62f4b25fc0baa8460a88427f",
      selfTravellerName: "Foxberry  Technology",
      selfTravellerNo: "9067688688",
      startDateTime: "2022-08-18T01:00:58.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-17T11:30:29.777Z",
      updatedAt: "2022-08-17T19:31:10.308Z",
      __v: 0,
    },
    {
      travellersId: [],
      travellersDetails: [
        {
          _id: "123467890",
          name: "Ashutosh Ramgir",
          number: "9850936383",
          designation: "",
        },
      ],
      source: "Pune, Maharashtra, India",
      sourceLat: "18.5204303",
      sourceLong: "73.8567437",
      destination: "Mumbai, Maharashtra, India",
      destinationLat: "19.0759837",
      destinationLong: "72.8776559",
      endDateTime: "2022-08-18T07:30:54.000Z",
      extendRequestDate: null,
      requestStatus: "UNSERVICE",
      oneWayOrRoundTrip: "OneWay",
      journeyStatus: [
        {
          Status: "UNSERVICE",
          Date: "Thu Aug 18 2022 03:41:10 GMT+0000",
        },
        {
          Status: "PENDING",
          Date: "2022-08-18T03:40:26.554Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "Meeting.               ",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 2,
      vehicleId: null,
      agencyName: "Sakal",
      vehicleName: null,
      vehicleNo: null,
      driverId: null,
      driverName: null,
      driverNo: 0,
      startOTP: 0,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["62f4b25fc0baa8460a88427f"],
      updatedBy: [],
      _id: "62fdb4aa656588f03a5b1548",
      journeyNo: "PM1660794026554",
      selfTravellerId: "62f4b25fc0baa8460a88427f",
      selfTravellerName: "Foxberry  Technology",
      selfTravellerNo: "9067688688",
      startDateTime: "2022-08-18T04:41:54.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-18T03:40:26.557Z",
      updatedAt: "2022-08-18T03:41:10.516Z",
      __v: 0,
    },
    {
      travellersId: [],
      travellersDetails: [
        {
          _id: "123467890",
          name: "Abhijit Gadre",
          number: "7219611273",
          designation: "",
        },
      ],
      source: "Sakal office, Budhawar peth",
      sourceLat: null,
      sourceLong: null,
      destination: "Indapur",
      destinationLat: null,
      destinationLong: null,
      endDateTime: "2022-08-19T05:30:43.000Z",
      extendRequestDate: null,
      requestStatus: "APPROVED",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "APPROVED",
          Date: "2022-08-18T11:21:02.404Z",
        },
        {
          Status: "PENDING",
          Date: "2022-08-18T10:47:04.702Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "To visit our client in Indapur",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 2,
      vehicleId: "628df39c3fcd87b66883763a",
      agencyName: "undefined",
      vehicleName: "ETIOS LIVA TOYOTA",
      vehicleNo: "MH12JZ8528",
      driverId: "629071a6fddc86fac162c29e",
      driverName: "Rajesh Chandrakant Kondhare",
      driverNo: 9922419001,
      startOTP: 101848,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["62f4b25fc0baa8460a88427f"],
      updatedBy: ["628fb90af431a200a816032f"],
      _id: "62fe18a8656588f03a5b154a",
      journeyNo: "SI1660819624702",
      selfTravellerId: "62f4b25fc0baa8460a88427f",
      selfTravellerName: "Foxberry  Technology",
      selfTravellerNo: "9067688688",
      startDateTime: "2022-08-19T02:00:43.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-18T10:47:04.718Z",
      updatedAt: "2022-08-18T11:21:02.405Z",
      __v: 0,
    },
    {
      travellersId: [null],
      travellersDetails: [
        {
          _id: "0",
          name: "Neelkanth Sawant",
          number: "9967530727",
          designation: "",
        },
      ],
      source: "Matunga, Mumbai, Maharashtra, India",
      sourceLat: "19.0268747",
      sourceLong: "72.8553352",
      destination:
        "Plot No 27, Opposite St Francis School, Anutej Atharv society, Narveer Tanaji Wadi, Shivajinagar, Pune, Maharashtra 411005, India",
      destinationLat: "18.534368",
      destinationLong: "73.8487817",
      endDateTime: "2022-08-19T10:47:08.197Z",
      extendRequestDate: null,
      requestStatus: "UNSERVICE",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "UNSERVICE",
          Date: "Sun Aug 21 2022 19:45:10 GMT+0000",
        },
        {
          Status: "PENDING",
          Date: "2022-08-19T08:48:56.133Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "Visit to Pune office",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 2,
      vehicleId: null,
      agencyName: "Sakal",
      vehicleName: null,
      vehicleNo: null,
      driverId: null,
      driverName: null,
      driverNo: 0,
      startOTP: 0,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90bf431a200a8160739"],
      updatedBy: [],
      _id: "62ff4e78656588f03a5b154d",
      journeyNo: "MP1660898936133",
      selfTravellerId: "628fb90bf431a200a8160739",
      selfTravellerName: "Charudatt Kishore Gupte",
      selfTravellerNo: "9920466255",
      startDateTime: "2022-08-22T01:15:08.000Z",
      requestLocation: "MUMBAI",
      createdAt: "2022-08-19T08:48:56.142Z",
      updatedAt: "2022-08-21T19:45:10.055Z",
      __v: 0,
    },
    {
      travellersId: [null, null, null],
      travellersDetails: [
        {
          _id: "0",
          name: "Hemant Vandekar",
          number: "988199001",
          designation: "",
        },
        {
          _id: "628fb90af431a200a8160429",
          name: "Prasanna Girdhardas Devi",
          number: "9850992289",
          designation: "",
        },
        {
          _id: "628fb90bf431a200a816078d",
          name: "Jayprakash Kumar Kulkarni",
          number: "9850209578",
          designation: "",
        },
      ],
      source:
        "No. 595, Bhau Rangari Road, Budhwar Peth, Pune, Maharashtra 411002, India",
      sourceLat: "18.5181463",
      sourceLong: "73.85496189999999",
      destination: "Nashik, Maharashtra, India",
      destinationLat: "19.9974533",
      destinationLong: "73.78980229999999",
      endDateTime: "2022-08-24T16:00:06.000Z",
      extendRequestDate: null,
      requestStatus: "PENDING",
      oneWayOrRoundTrip: "RoundTrip",
      journeyStatus: [
        {
          Status: "PENDING",
          Date: "2022-08-23T10:01:48.494Z",
        },
      ],
      journeyDates: [],
      requestedVehicleType: null,
      reason: "To meet with Tribal Department Comissioner along with MDM Team",
      rejectReasonOption: null,
      rejectReason: null,
      capacity: 4,
      vehicleId: null,
      agencyName: "Sakal",
      vehicleName: null,
      vehicleNo: null,
      driverId: null,
      driverName: null,
      driverNo: 0,
      startOTP: 0,
      endOTP: 0,
      startOdoMeter: null,
      startOdoMeterImg: null,
      endOdoMeter: null,
      endOdoMeterImg: null,
      status: "Active",
      createdBy: ["628fb90bf431a200a816078c"],
      updatedBy: [],
      _id: "6304a58c656588f03a5b154f",
      journeyNo: "NN1661248908494",
      selfTravellerId: "628fb90bf431a200a816078c",
      selfTravellerName: "Ankit Maheshwari null",
      selfTravellerNo: "7773944077",
      startDateTime: "2022-08-24T00:59:06.000Z",
      requestLocation: "PUNE",
      createdAt: "2022-08-23T10:01:48.503Z",
      updatedAt: "2022-08-23T10:01:48.503Z",
      __v: 0,
    },
  ]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [exceldata, setExceldata] = React.useState([]);
  const [count, setCount] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getAdminReports = async () => {
    const reportsData = await setRequestStatusAdminDataReports({
      startDate: moment(value[0]).format("YYYY-MM-DD"),
      endDate: moment(value[1]).format("YYYY-MM-DD"),
      requestLocationOfAdmin: adminDetails.user?.adminLocation,
    });
    setData(reportsData);
  };

  const downloadExcel = (customHeadings) => {
    let dataSet = [];
    const removeKey = (k, { [k]: _, ...o }) => o;
    const removeKeys = (keys = [], o = {}) =>
      keys.reduce((r, k) => removeKey(k, r), o);
    dataSet = customHeadings;
    console.log("dataset", dataSet);
    const worksheet = XLSX.utils.json_to_sheet(dataSet);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "Reports.xlsx");
  };

  const CustomExcel = () => {
    const customHeadings = data.map((item) => ({
      "Journey No": item.journeyNo ? item.journeyNo : "-",
      "Traveller Name": item.selfTravellerName ? item.selfTravellerName : "-",
      "Traveller Mobile No": item.selfTravellerNo ? item.selfTravellerNo : "-",
      Source: item.source ? item.source : "-",
      Destination: item.destination ? item.destination : "-",
      "Start Date Time": item.startDateTime
        ? moment(item.startDateTime).format("DD MMM YYYY hh:mm a")
        : "-",
      "End Date Time": item.endDateTime
        ? moment(item.endDateTime).format("DD MMM YYYY hh:mm a")
        : "-",
      "Request Statu": item.requestStatus ? item.requestStatus : "-",
      "One Way Or RoundTrip": item.oneWayOrRoundTrip
        ? item.oneWayOrRoundTrip
        : "-",
      "Requested Vehicle Type": item.requestedVehicleType
        ? item.requestedVehicleType
        : "-",
      Reason: item.reason ? item.reason : "-",
      "Reject Reason Option": item.rejectReasonOption
        ? item.rejectReasonOption
        : "-",
      "Reject Reason": item.rejectReason ? item.rejectReason : "-",
      Capacity: item.capacity ? item.capacity : "-",
      "Agency Name": item.agencyName ? item.agencyName : "-",
      "Vehicle Name": item.vehicleName ? item.vehicleName : "-",
      "Vehicle No": item.vehicleNo ? item.vehicleNo : "-",
      "Driver Name": item.driverName ? item.driverName : "-",
      "Driver Mobile No": item.driverNo ? item.driverNo : "-",
      "Journey Start OdoMeter": item.startOdoMeter ? item.startOdoMeter : "-",
      "Journey End OdoMeter": item.endOdoMeter ? item.endOdoMeter : "-",
    }));
    console.log("Customm Excel", customHeadings);
    downloadExcel(customHeadings);
  };

  const handleClickGetData = () => {
    if (value[0] && value[1]) {
      getAdminReports();
    }
  };

  return (
    <div>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: 2,
            bgcolor: "background.paper",
            "& button": { m: 1 },
          }}
        >
          <div>
            <h1>Reports</h1>
          </div>
          <div>
            <Button
              variant="contained"
              size="small"
              onClick={CustomExcel}
              style={{ marginTop: 40 }}
            >
              Export data
            </Button>
          </div>
        </Box>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            m: 2,
            bgcolor: "background.paper",
            "& button": { m: 1 },
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Start Date"
              endText="End Date"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
          <div style={{ margin: 4, padding: 2 }}>
            <Button variant="contained" onClick={() => handleClickGetData()}>
              Get Data
            </Button>
          </div>
        </Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Journey No</TableCell>
                  <TableCell>Traveller Name</TableCell>
                  <TableCell>Traveller Mobile No</TableCell>

                  <TableCell>Source</TableCell>

                  <TableCell>Destination</TableCell>

                  <TableCell>Start Date Time</TableCell>
                  <TableCell>End Date Time</TableCell>
                  <TableCell>Request Status</TableCell>
                  <TableCell>One Way Or RoundTrip</TableCell>

                  <TableCell>Requested Vehicle Type</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Reject Reason Option</TableCell>
                  <TableCell>Reject Reason</TableCell>
                  <TableCell>Capacity</TableCell>

                  <TableCell>Agency Name</TableCell>
                  <TableCell>Vehicle Name</TableCell>
                  <TableCell>Vehicle No</TableCell>

                  <TableCell>Driver Name</TableCell>
                  <TableCell>Driver Mobile No</TableCell>

                  <TableCell>Start Odo Meter</TableCell>

                  <TableCell>End Odo Meter</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.length > 0 &&
                  data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row._id}
                        >
                          <TableCell>
                            {row && row.journeyNo ? row.journeyNo : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.selfTravellerName
                              ? row.selfTravellerName
                              : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.selfTravellerNo
                              ? row.selfTravellerNo
                              : "-"}
                          </TableCell>

                          <TableCell>
                            {row && row.source ? row.source : "-"}
                          </TableCell>

                          <TableCell>
                            {row && row.destination ? row.destination : "-"}
                          </TableCell>

                          <TableCell>
                            {row && row.startDateTime
                              ? moment(row.startDateTime).format(
                                  "DD MMM YYYY hh:mm a"
                                )
                              : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.endDateTime
                              ? moment(row.endDateTime).format(
                                  "DD MMM YYYY hh:mm a"
                                )
                              : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.requestStatus ? row.requestStatus : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.oneWayOrRoundTrip
                              ? row.oneWayOrRoundTrip
                              : "-"}
                          </TableCell>

                          <TableCell>
                            {row && row.requestedVehicleType
                              ? row.requestedVehicleType
                              : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.reason ? row.reason : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.rejectReasonOption
                              ? row.rejectReasonOption
                              : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.rejectReason ? row.rejectReason : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.capacity ? row.capacity : "-"}
                          </TableCell>
                          {/* <TableCell>{row && row.vehicleId ? row.vehicleId : '-'}</TableCell> */}
                          <TableCell>
                            {row && row.agencyName ? row.agencyName : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.vehicleName ? row.vehicleName : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.vehicleNo ? row.vehicleNo : "-"}
                          </TableCell>

                          <TableCell>
                            {row && row.driverName ? row.driverName : "-"}
                          </TableCell>
                          <TableCell>
                            {row && row.driverNo ? row.driverNo : "-"}
                          </TableCell>

                          <TableCell>
                            {row && row.startOdoMeter ? row.startOdoMeter : "-"}
                          </TableCell>

                          <TableCell>
                            {row && row.endOdoMeter ? row.endOdoMeter : "-"}
                          </TableCell>
                        </TableRow>
                      );
                    })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Reports;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: "#fcfcfc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appbar: {
    alignItems: "center",
    padding: "15px",
    background: "#0c1572 !important",
  },
  appbarBackIcon: {
    fontSize: "40px !important",
    "&:hover": {
      cursor: "pointer",
    },
  },
  main: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  profilePicture: {
    width: "200px !important",
    height: "200px !important",
    margin: "20px",
  },
  displayForm: {
    width: "350px",
    background: "white",
    borderRadius: "20px !important",
    margin: "20px",
    padding: "20px",
  },
  formSpacer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  middlePosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  group: {
    marginTop: "30px",
  },
}));
