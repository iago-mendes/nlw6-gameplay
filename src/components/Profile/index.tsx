import React from 'react'
import {View, Text} from 'react-native'
import {Avatar} from '../Avatar'

import {styles} from './styles'

export function Profile() {
	return (
		<View style={styles.container}>
			<Avatar urlImage="https://github.com/iago-mendes.png" />
			<View>
				<View style={styles.user}>
					<Text style={styles.greeting}>Hello,</Text>
					<Text style={styles.username}>Iago</Text>
				</View>
				<Text style={styles.message}>Today is victory day</Text>
			</View>
		</View>
	)
}
