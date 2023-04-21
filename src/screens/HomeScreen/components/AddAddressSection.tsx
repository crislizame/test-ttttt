import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Location from '../../../utils/icons/Location'
import colors from '../../../utils/colors'
import { useNavigation } from '@react-navigation/native'

function AddAddressSection (): JSX.Element {
  const { navigate } = useNavigation()
  return (
        <View style={{ backgroundColor: colors.backgroundPrimary, height: 120, justifyContent: 'center', flexDirection: 'row', borderTopStartRadius: 40, borderTopEndRadius: 40, marginTop: -18 }}>
          <View style={{ justifyContent: 'center', marginTop: -20 }}>
            <TouchableOpacity onPress={() => { navigate('AddDir' as never) }} style={{ flexDirection: 'row' }}>
            <Location/>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 21, letterSpacing: 1.5, color: colors.text.primary, fontWeight: '300' }}> Agregar dirección de entrega</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
  )
}

export default AddAddressSection
