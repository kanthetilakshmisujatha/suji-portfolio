import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Rajiv Gandhi University of Knowledge Technologies, Nuzvid..</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;01/09/2019 - 25/04/2025</h2>
                        <p>Pursuing B.Tech  Final Year in Computer Science Engineering from 'Rajiv Gandhi University of Knowledge Technologies'.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation