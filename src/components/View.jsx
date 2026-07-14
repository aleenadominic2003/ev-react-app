import React, { useEffect, useState } from 'react'

import axios from 'axios'
import NavigationBar from './NavigationBar'

const View = () => {

    const[data,changData]=useState(

        [

            
        ]

    )
    const fetchData = () => {

        axios.post("http://localhost:3000/view").then(

            (response) => {

                changData(response.data)

            }

        ).catch()

    }
    useEffect(

        () => {

            fetchData()

        },[]

    )
  return (
    <div>
        <NavigationBar />
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row g-3">
           

          <div className="table-responsive">
  <table className="table table-bordered table-striped table-hover">
    <thead className="table-dark">
      <tr>

        <th>Booking ID</th>
    <th>Owner Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Vehicle Registration Number</th>
    <th>Vehicle Brand</th>
    <th>Vehicle Model</th>
    <th>Battery Capacity (kWh)</th>
    <th>Connector Type</th>
    <th>Charging Date</th>
    <th>Time Slot</th>
    <th>Estimated Units (kWh)</th>
    <th>Charging Bay Number</th>
  </tr>
</thead>

<tbody>
  {data.map((value, index) => (
    <tr key={index}>
      <td>{value.BookingID}</td>
      <td>{value.OwnerName}</td>
      <td>{value.Email}</td>
      <td>{value.Phone}</td>
      <td>{value.VehicleRegistrationNumber}</td>
      <td>{value.VehicleBrand}</td>
      <td>{value.VehicleModel}</td>
      <td>{value.BatteryCapacity}</td>
      <td>{value.ConnectorType}</td>
      <td>{value.ChargingDate}</td>
      <td>{value.TimeSlot}</td>
      <td>{value.EstimatedUnits}</td>
      <td>{value.ChargingBayNumber}</td>


          <td>
            <button className="btn btn-primary btn-sm">
              View Details
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            
           
        </div>

        </div>
    </div>
</div>


    </div>
  )
}

export default View