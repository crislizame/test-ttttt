import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import colors from '../../utils/colors'
import Close from '../../utils/icons/Close'
import AsyncStorage from '@react-native-async-storage/async-storage'

function ButtonInputMap (): JSX.Element {
  const [address, setAddress] = React.useState<string>('Sin dirección')
  useEffect(() => {
    void (async () => {
      const add = await AsyncStorage.getItem('address')
      setAddress(add as string)
    })()
  }, [])
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 60,
          position: 'absolute',
          top: 120,
          zIndex: 2000
        }}
      >
        <View
          style={{
            height: 60,
            backgroundColor: 'white',
            borderRadius: 40,
            width: '100%',
            borderWidth: 0.5,
            zIndex: 1000,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.17,
            shadowRadius: 2.54,
            elevation: 3,
            borderColor: colors.gray,
            justifyContent: 'center',
            paddingHorizontal: 20
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, color: colors.text.primary }}
              >
                {address}
              </Text>
            </View>
            <TouchableOpacity>
              <View>
                <Close />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  )
}

export default ButtonInputMap
