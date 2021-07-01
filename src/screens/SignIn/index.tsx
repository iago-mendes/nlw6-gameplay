import React from 'react'
import {View, Text, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {styles} from './styles'
import illustrationImg from '../../assets/illustration.png'

import {ButtonIcon} from '../../components/ButtonIcon'

export function SignIn() {
	const {navigate} = useNavigation()

	function handleSignIn() {
		navigate('Home')
	}

	return (
		<View style={styles.container}>
			<Image
				source={illustrationImg}
				style={styles.image}
				resizeMode="stretch"
			/>
			<View style={styles.content}>
				<Text style={styles.title}>
					Connect {'\n'} and organize your {'\n'} gameplays
				</Text>

				<Text style={styles.subtitle}>
					Create groups to play your favorite {'\n'} games with your friends
				</Text>

				<ButtonIcon title="Join with Discord" onPress={handleSignIn} />
			</View>
		</View>
	)
}
