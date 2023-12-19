import React from 'react'
import "./Homepage.css"
import "./Homepg.css"
import Dashboard from './dashboard/Dashboard'
import Navbar from './navbar/Navbar'
import TotalEmployeeIcon from './../icons/total-employee-icon.png'
import NewJoineesIcon from './../icons/new-joinees-icon.png'
import PeoplePresentIcon from './../icons/people-present-icon.png'
import RemoteIcon from './../icons/remote-icon.png'
import HolidayIcon from './../icons/holiday-icon.png'
import AddIcon from './../icons/add-icon.png'
import ProfilePic1 from './../icons/profile-pic-1.png'
import ProfilePic2 from './../icons/profile-pic-2.png'
import ProfilePic3 from './../icons/profile-pic-3.png'

const Homepage = () => {
	return (
		<div className='homepage-layout'>
			<Dashboard />
			<div className="homepage">
				<Navbar />
				<div className='homepage-content'>
					<div className='row'>
						<div className="col-sm-12 col-md-12 col-lg-9 p-0">
							<div className="row">

								<div className="col-6 col-md-3">
									<div className="mhp-small-block">
										<div className='mhp-small-block-text'>
											<p>Total People</p>
											<h4>267</h4>
										</div>
										<div className='mhp-small-block-img'><img src={TotalEmployeeIcon} alt="" /></div>
									</div>
								</div>

								<div className="col-6 col-md-3">
									<div className="mhp-small-block">
										<div className='mhp-small-block-text'>
											<p>New Joniees</p>
											<h4>14</h4>
										</div>
										<div className='mhp-small-block-img'><img src={NewJoineesIcon} alt="" /></div>
									</div>
								</div>

								<div className="col-6 col-md-3">
									<div className="mhp-small-block">
										<div className='mhp-small-block-text'>
											<p>People Present</p>
											<h4>192</h4>
										</div>
										<div className='mhp-small-block-img-3'><img src={PeoplePresentIcon} alt="" /></div>
									</div>
								</div>

								<div className="col-6 col-md-3">
									<div className="mhp-small-block">
										<div className='mhp-small-block-text'>
											<p>Remote</p>
											<h4>43</h4>
										</div>
										<div className='mhp-small-block-img-4'><img src={RemoteIcon} alt="" /></div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-12 col-md-6">
									<div className="mhp-top-col-1 col-12">
										<div className="mhp-medium-block-container">
											<div className='mhp-upcoming-event-text'>
												<p>Upcoming Events</p>
												<span>This Month</span>
											</div>
											<div className='mhp-upcoming-event-task-layout'>
												<div className='mhp-upcoming-event-task'>
													<div className='mhp-uet-pointer'><i class="fa-regular fa-circle-right"></i></div>
													<p className="mhp-uet-date">23 Jun</p>
													<div className='mhp-uet-arrow-right'><i class="fa-solid fa-arrow-right fa-sm"></i></div>
													<p className="mhp-uet-description">Diversity Workshop</p>
												</div>
												<div className='mhp-upcoming-event-task'>
													<div className='mhp-uet-pointer'><i class="fa-regular fa-circle-right"></i></div>
													<p className="mhp-uet-date">12 Jun</p>
													<div className='mhp-uet-arrow-right'><i class="fa-solid fa-arrow-right fa-sm"></i></div>
													<p className="mhp-uet-description">Welliness Fair: Boost your well-being with fitness challenges and information sessions.</p>
												</div>
												<div className='mhp-upcoming-event-task'>
													<div className='mhp-uet-pointer'><i class="fa-regular fa-circle-right"></i></div>
													<p className="mhp-uet-date">09 Jun</p>
													<div className='mhp-uet-arrow-right'><i class="fa-solid fa-arrow-right fa-sm"></i></div>
													<p className="mhp-uet-description">Team Building Retreat: Strengthen teamwork and collaboration.</p>
												</div>
												<div className='mhp-upcoming-event-task'>
													<div className='mhp-uet-pointer'><i class="fa-regular fa-circle-right"></i></div>
													<p className="mhp-uet-date">02 Jun</p>
													<div className='mhp-uet-arrow-right'><i class="fa-solid fa-arrow-right fa-sm"></i></div>
													<p className="mhp-uet-description">Financial Planning Seminar: Gain valuable financial insights.</p>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="col-12 col-md-6">
									<div className="mhp-medium-block-container">
										<div className='mhp-out-of-office-text'>
											<p>Who is out of Office</p>
										</div>

										<div className='mhp-out-of-office-layout'>
											<div className="mhp-out-of-office">
												<div className='mhp-off-date'>
													<p><i>Sick Leave</i></p>
													<p>Today</p>
												</div>
												<div className='mhp-off-member'>
													<div className='mhp-off-member-pro-pic'><img src={ProfilePic1} alt="" /></div>
													<div className='mhp-off-member-name-des'>
														<p className="mhp-off-member-name">Abby Normal</p>
														<p className="mhp-off-member-designation">Senior Frontend Developer</p>
													</div>
												</div>
											</div>

											<div className="mhp-out-of-office">
												<div className='mhp-off-date'>
													<p><i>Vacation Days</i></p>
													<p>20/05/23 - 30/05/23</p>
												</div>

												<div className='mhp-off-member'>
													<div className='mhp-off-member-pro-pic-2'><img src={ProfilePic2} alt="" /></div>
													<div className='mhp-off-member-name-des'>
														<p className="mhp-off-member-name">Wynn Dozeaplikayshun</p>
														<p className="mhp-off-member-designation">Sales Team Lead</p>
													</div>
												</div>
											</div>

											<div className="mhp-out-of-office">
												<div className='mhp-off-date'>
													<p><i>Vacation Days</i></p>
													<p>18/05/23 - 25/05/23</p>
												</div>

												<div className='mhp-off-member'>
													<div className='mhp-off-member-pro-pic'><img src={ProfilePic3} alt="" /></div>
													<div className='mhp-off-member-name-des'>
														<p className="mhp-off-member-name">Polly Ester Undawair</p>
														<p className="mhp-off-member-designation">Junior UI/UX Designer</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-12 col-md-12 col-lg-3 mt-md-5 mt-lg-0">
							<div className='mhp-calendar-layout'>
								<div className='mhp-calendar'>
									<div className="mhp-cal-month">
										<div className='mhp-cal-month-navigate-arrow'><i class="fa-solid fa-angle-left"></i></div>
										<p>June 2023</p>
										<div className='mhp-cal-month-navigate-arrow'><i class="fa-solid fa-angle-right"></i></div>
									</div>
									<table className='mhp-cal-table'>
										<thead>
											<tr className='mhp-cal-week-name'>
												<td>M</td>
												<td>T</td>
												<td>W</td>
												<td>T</td>
												<td>F</td>
												<td>S</td>
												<td>S</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td></td>
												<td></td>
												<td></td>
												<td>1</td>
												<td>2</td>
												<td>3</td>
												<td>4</td>
											</tr>
											<tr>
												<td>5</td>
												<td>6</td>
												<td>7</td>
												<td>8</td>
												<td>9</td>
												<td>10</td>
												<td>11</td>
											</tr>
											<tr>
												<td>12</td>
												<td>13</td>
												<td>14</td>
												<td>15</td>
												<td>16</td>
												<td>17</td>
												<td>18</td>
											</tr>
											<tr>
												<td>19</td>
												<td>20</td>
												<td>21</td>
												<td>22</td>
												<td>23</td>
												<td>24</td>
												<td>25</td>
											</tr>
											<tr>
												<td>26</td>
												<td>27</td>
												<td className='mhp-cal-seleted-date'>28</td>
												<td>29</td>
												<td>30</td>
												<td></td>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
								<div className='mhp-calendar-task-list-layout'>
									<div className='mhp-task-list-text'>
										<p>Holidays</p>
										<div className='mhp-announcement-add-new-button'>
											<div className='mhp-aanb-add-icon'><img src={AddIcon} alt="" /></div>
											<p>Add New</p>
										</div>
									</div>

									<div className='mhp-ctl-content'>
										<div className='mhp-ctl-icon-lay'>
											<div className='mhp-ctl-icon'><img src={HolidayIcon} alt="" /></div>
										</div>
										<p className='mhp-ctl-name'>Eid-al-Adha</p>
										<p className='mhp-ctl-date'>29/06/23</p>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div className='row mt-md-4'>
						<div className="col-sm-12 col-md-12 col-lg-9">
							<div className="mhp-announcements-layout">
								<div className='mhp-announcements-text'>
									<p>Announcements</p>
									<div className='mhp-announcement-add-new-button'>
										<div className='mhp-aanb-add-icon'><img src={AddIcon} alt="" /></div>
										<p>Add New</p>
									</div>
								</div>
								<div className='mhp-announcements-task-layout'>
									<div className='mhp-announcements-task'>
										<div className='at-pointer'><i class="fa-regular fa-circle-right"></i></div>
										<p className="mhp-at-date">02 Jul</p>
										<div className='at-arrow-right'><i class="fa-solid fa-arrow-right fa-sm"></i></div>
										<p className="mhp-at-description">New Employee Benefits Program: We are excited to announce the launch of our enhanced employee benefits program. Explore a range of comprehensive benefits designation to support your well-being and provide financial security.</p>
									</div>
									<div className='mhp-announcements-task'>
										<div className='at-pointer'><i class="fa-regular fa-circle-right"></i></div>
										<p className="mhp-at-date">02 May</p>
										<div className='at-arrow-right'><i class="fa-solid fa-arrow-right fa-sm"></i></div>
										<p className="mhp-at-description">Performance Management System Update: We are pleased to introduce our upgraded performance management system. Experience a more streamlined and intuitive interface, enabling you to set goals, provide feedback, and track your professional development more effectively</p>
									</div>
									<div className='mhp-announcements-task'>
										<div className='at-pointer'><i class="fa-regular fa-circle-right"></i></div>
										<p className="mhp-at-date">27 Apr</p>
										<div className='at-arrow-right'><i class="fa-solid fa-arrow-right fa-sm"></i></div>
										<p className="mhp-at-description">Training Workshops for Professional Growth: Enhance your skills and knowledge with our upcoming series of training workshops. From leadership development to technical skills, these workshops are designed to support your professional growth and success</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-12 col-lg-3">
							<div className="mhp-task-list-layout">
								<div className='mhp-task-list'>
									<div className='mhp-task-list-text'>
										<p>Task List</p>
										<div className='mhp-announcement-add-new-button'>
											<div className='mhp-aanb-add-icon'><img src={AddIcon} alt="" /></div>
											<p>Add New</p>
										</div>
									</div>
									<div className='mhp-task-layout'>
										<div className='mhp-task'>
											<div className='t-pointer'><i class="fa-regular fa-circle-right"></i></div>
											<p className="mhp-t-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nobis rerum corporis excepturi odio asperiores culpa quasi odit reiciendis!</p>
										</div>
										<div className='mhp-task'>
											<div className='t-pointer'><i class="fa-regular fa-circle-right"></i></div>
											<p className="mhp-t-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
										</div>
										<div className='mhp-task'>
											<div className='t-pointer'><i class="fa-regular fa-circle-right"></i></div>
											<p className="mhp-t-description last-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid corporis, eius veritatis veniam suscipit adipisci magni.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage
