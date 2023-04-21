import React from 'react'
import { Text, View } from 'react-native'
import Location from '../../../utils/icons/Location'
import colors from '../../../utils/colors'

function AddAddressSection (): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: colors.backgroundPrimary,
        height: 150,
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        zIndex: 1
      }}
    >
      <View style={{ justifyContent: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Location />
          <View style={{ justifyContent: 'center' }}>
            <Text
              style={{
                fontSize: 21,
                letterSpacing: 1.5,
                color: colors.text.primary,
                fontWeight: '300'
              }}
            >
              {' '}
              Agregar dirección de entrega
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default AddAddressSection
