import React, {useState} from 'react'
import {View, FlatList} from 'react-native'

import {styles} from './styles'

import {Profile} from '../../components/Profile'
import {ButtonAdd} from '../../components/ButtonAdd'
import {CategorySelect} from '../../components/CategorySelect'
import {ListHeader} from '../../components/ListHeader'
import {Appointment} from '../../components/Appointment'

export function Home() {
	const [category, setCategory] = useState('')

	const appointments = [
		{
			id: '1',
			guild: {
				id: '1',
				name: 'Legends',
				icon: null,
				owner: true
			},
			category: '1',
			date: '06/22 at 08:40pm',
			description:
				'asiodjas asoid ajsoiashc aosi aoiascoasj casuc scna sasho ixj'
		}
	]

	function handleCategorySelect(categoryId: string) {
		categoryId === category ? setCategory('') : setCategory(categoryId)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Profile />
				<ButtonAdd />
			</View>

			<CategorySelect
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>

			<View style={styles.content}>
				<ListHeader title="Scheduled matches" subtitle="total 6" />

				<FlatList
					data={appointments}
					keyExtractor={item => item.id}
					renderItem={({item}) => <Appointment data={item} />}
					style={styles.matches}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}
