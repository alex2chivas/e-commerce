import { SET_HEADER_LINKS, SET_NAVBAR_LINKS, CHANGE_NAVBAR_ACTIVE } from './types';

export const setHeaderLinks = links => {
    return ({
        type: SET_HEADER_LINKS,
        payload: links
    })
}

export const setNavbarLinks = links => {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: links
    })
}

export const changeNavbarActive = _id => {
    return ({
        type: CHANGE_NAVBAR_ACTIVE,
        payload: _id
    })
}