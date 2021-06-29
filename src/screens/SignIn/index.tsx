import React from 'react'
import {View, Text, Image, StatusBar} from 'react-native'

import {styles} from './styles'
import illustrationImg from '../../assets/illustration.png'

import {ButtonIcon} from '../../components/ButtonIcon'

export function SignIn() {
	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<Image
				source={illustrationImg}
				style={styles.image}
				resizeMode="stretch"
			/>
			<View style={styles.content}>
				<Text style={styles.title}>
					Easily {'\n'} organize {'\n'} your gameplays
				</Text>

				<Text style={styles.subtitle}>
					Create groups to play your favorite {'\n'} games with your friends
				</Text>

				<ButtonIcon title="Join with Discord" activeOpacity={0.7} />
			</View>
		</View>
	)
}
