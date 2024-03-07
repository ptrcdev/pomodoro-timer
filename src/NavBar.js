import React from 'react';
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faChartLine, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



function NavBar() {

    return (
        <div className='nav-container'>
            <div className="items-container">
                <div><img src={require('./media/logo.png')} /></div>
                <h1>Welcome!</h1>
                
            </div>


            

        </div>
    )
}

export default NavBar;

/*


    <div className='home'>
                    <FontAwesomeIcon icon={faHome} className='home-icon' />
                </div>
                <div>
                    <FontAwesomeIcon icon={faChartLine} className='statistics'/>
                </div>

                <div className='exit'>
            <FontAwesomeIcon icon={faSignOutAlt} className='statistics'/>
            </div>
*/ 