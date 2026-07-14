import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const Add = () => {

    const [input,changeInput]=useState(

      {
    BookingID: "",
    OwnerName: "",
    Email: "",
    Phone: "",
    VehicleRegistrationNumber: "",
    VehicleBrand: "",
    VehicleModel: "",
    BatteryCapacity: "",
    ConnectorType: "",
    ChargingDate: "",
    TimeSlot: "",
    EstimatedUnits: "",
    ChargingBayNumber: ""
}

    )

    const inputHandler = (event) => {

        changeInput({...input,[event.target.name]:event.target.value})

    }
    
    const readValue =() => {

      console.log(input)

      axios.post("http://localhost:3000/add",input).then(

        (response)=>{

          console.log(response.data)
          alert("Details added successfully")

        }

      ).catch(
        (error)=>{
            console.log(error)
            alert("Error inserting data")
        }
      )

    }

  return (
    <div>
        <NavigationBar />

    <div className="container">
  <div className="row">
    <div className="col col-12">

      <div className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Booking ID</label>
          <input
            type="text"
            className="form-control"
            name="BookingID"
            value={input.BookingID}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Owner Name</label>
          <input
            type="text"
            className="form-control"
            name="OwnerName"
            value={input.OwnerName}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="Email"
            value={input.Email}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="Phone"
            value={input.Phone}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Vehicle Registration Number</label>
          <input
            type="text"
            className="form-control"
            name="VehicleRegistrationNumber"
            value={input.VehicleRegistrationNumber}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Vehicle Brand</label>
          <input
            type="text"
            className="form-control"
            name="VehicleBrand"
            value={input.VehicleBrand}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Vehicle Model</label>
          <input
            type="text"
            className="form-control"
            name="VehicleModel"
            value={input.VehicleModel}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Battery Capacity (kWh)</label>
          <input
            type="text"
            className="form-control"
            name="BatteryCapacity"
            value={input.BatteryCapacity}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Connector Type</label>
          <input
            type="text"
            className="form-control"
            name="ConnectorType"
            value={input.ConnectorType}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Charging Date</label>
          <input
            type="date"
            className="form-control"
            name="ChargingDate"
            value={input.ChargingDate}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Time Slot</label>
          <input
            type="text"
            className="form-control"
            name="TimeSlot"
            value={input.TimeSlot}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Estimated Units (kWh)</label>
          <input
            type="text"
            className="form-control"
            name="EstimatedUnits"
            value={input.EstimatedUnits}
            onChange={inputHandler}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Charging Bay Number</label>
          <input
            type="text"
            className="form-control"
            name="ChargingBayNumber"
            value={input.ChargingBayNumber}
            onChange={inputHandler}
          />
        </div>

        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button className="btn btn-success" onClick={readValue}>Submit</button>

                </div>

      </div>

    </div>
  </div>
</div>


    </div>
  )
}

export default Add

