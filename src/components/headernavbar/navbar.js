import React from 'react';
import { connect } from 'react-redux';


const Navbar = props => {
    return (
        <div className='navbar'>
            {
                props.navbarLinks.map((link, index) => {
                    return (
                        <a 
                            className='navbar__link'
                            key={index}
                            onClick={() => console.log('trying to switch tab')}
                            >
                            {link.title}
                        </a>
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = state => {
    const { navbarLinks } = state.headerNavbar;
    return {
        navbarLinks
    }
}

export default connect(mapStateToProps)(Navbar);
