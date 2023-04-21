import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles'

function Avatar (): JSX.Element {
  return (
        <>
          <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={require('../../../assets/components/Avatar/avatar.jpg')} />
          </View>
        </>
  )
}

export default Avatar
