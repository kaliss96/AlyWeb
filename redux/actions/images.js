import {SHOWLOGO, HIDELOGO} from './types'

export const showLogo = (state) => dispatch => {
    dispatch({
        type: SHOWLOGO,
        payload: state
    })
}

export const hideLogo = () => dispatch => {
    dispatch({
        type: HIDELOGO,
        payload: false
    })
}
