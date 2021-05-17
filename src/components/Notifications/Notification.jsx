import React, { useEffect } from 'react'
import ReactNotification, { store } from 'react-notifications-component'
import {connect} from 'react-redux'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'

const mapStateToProps = state => ({
    note: state.notification.note
})

const Notification = ({ note }) => {
	
	const createNotification = (title, message, type) => {
		store.addNotification({
			title: 'todas',
			message,
			type,
			container: 'top-center',
			dismiss: {
				duration: 2500,
				onScreen: true,
				pauseOnHover: true,
			},
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
		})
		
	}
	useEffect(() => {
		if (note?.msg)
			createNotification('', note.msg, note.type)
	}, [note])

	return (
        <ReactNotification/>
    )
}
export default connect(mapStateToProps)(Notification)