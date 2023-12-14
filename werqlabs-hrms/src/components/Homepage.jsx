import React from 'react'
import "./Homepage.css"
import Dashboard from './dashboard/Dashboard'
import Navbar from './navbar/Navbar'
import TotalEmployeeIcon from './../icons/total-employee-icon.png'
import NewJoineesIcon from './../icons/new-joinees-icon.png'

const Homepage = () => {
  return (
    <div className='homepage-layout'>
      <Dashboard />
      <div className="homepage">
        <Navbar />
        <div className='homepage-content'>
          <div className="hp-top row ">

            <div className="hp-top-col-1 col">
              <div className="row">
                <div className="small-block-container-1 col">
                  <div className="small-block">
                    <div className='small-block-text'>
                      <p>Total People</p>
                      <h4>267</h4>
                    </div>
                    <div className='small-block-img'><img src={TotalEmployeeIcon} alt="" /></div>
                  </div>
                </div>

                <div className="small-block-container-2 col">
                  <div className="small-block">
                    <div className='small-block-text'>
                      <p>New Joniees</p>
                      <h4>14</h4>
                    </div>
                    <div className='small-block-img'><img src={NewJoineesIcon} alt="" /></div>
                  </div>
                </div>
              </div>

              <div className="medium-block-container row">
                <div className='upcoming-event-text'>
                  <p>Upcoming Events</p>
                  <span>This Month</span>
                </div>
                <div className='upcoming-event-task'>
                  <div className='uet-pointer'><img src="" alt="" /></div>
                  <p className="uet-date">23 Jun</p>
                  <div className='uet-arrow-right'><img src="" alt="" /></div>
                  <p className="uet-description">Diversity Workshop</p>
                </div>
              </div>
            </div>

            <div className="hp-top-col-2 col">
              <div className="row">
                <div className="people-present col">people-present</div>
                <div className="remote col">remote</div>
              </div>

              <div className="out-of-office row">out-of-office</div>
            </div>

            <div className="hp-top-col-3 col">3</div>
          </div>



          <div className="hp-bottom row">
            <div className="announcements col">announcements</div>
            <div className="task-list col">task-list</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
