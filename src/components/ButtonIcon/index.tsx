import React from 'react'
import {Text, Image, View} from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'

import {styles} from './styles'
import discordImg from '../../assets/discord.png'

type Props = RectButtonProps & {
	title: string
}

export function ButtonIcon({title, ...rest}: Props) {
	return (
		<RectButton style={styles.container} {...rest}>
			<View style={styles.iconWrapper}>
				<Image source={discordImg} style={styles.icon} />
			</View>
			<Text style={styles.title}>{title}</Text>
		</RectButton>
	)
}
