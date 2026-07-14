import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <>
    <NavigationBar />

    <div className="container mt-5">
      <h1 className="text-center">EV CHARGING APP</h1>

      <h2 className="text-center mt-4">
        Welcome to Our EV Charging  App
      </h2>

      <p className="mt-3 text-center">
       EV Charging Management System is a web-based application developed to simplify the management of electric vehicle (EV) charging station bookings and customer information. The system allows users to reserve charging slots, register vehicle details, select charging preferences, and maintain booking records in a centralized MongoDB database. It provides an intuitive interface to add, view, update, and delete booking information, ensuring efficient scheduling and management of charging station resources.

Features
EV charging slot booking
Customer and vehicle registration
Store vehicle details (brand, model, registration number, battery capacity)
Manage charging schedules and time slots
      </p>
    </div>
    </>
  )
}

export default Home