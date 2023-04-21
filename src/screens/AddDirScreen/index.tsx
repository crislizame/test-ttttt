import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import AddAddressSection from './components/AddAddressSection'
import MapView, { Marker } from 'react-native-maps'
import ButtonInputMap from '../../components/ButtonInputMap'
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from '../../utils/colors'

const AddDirScreen = (): JSX.Element => {
  const [location, setLocation] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  console.log('🚀 ~ file: index.tsx:11 ~ AddDirScreen ~ location:', location)

  useEffect(() => {
    void (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setLoading(false)
        alert('Acceso a la ubicación ha sido rechazado, por favor activa el permiso en la configuración de tu dispositivo.')
        return
      }
      const location = await Location.getCurrentPositionAsync({})
      const address = await Location.reverseGeocodeAsync(location.coords)
      await AsyncStorage.setItem('address', address[0].name as string)
      setLocation(location)
      setLoading(false)
    })()
  }, [])
  return (
    <ScrollView style={styles.container}>
      {loading && <Text>Cargando...</Text>}
      <ButtonInputMap />

      <View>
        <AddAddressSection />

        <MapView
          style={{ width: '100%', height: 240, zIndex: 10 }}
          provider='google'
          region={location == null ? null : location.coords}
        >
          <Marker
            key={1}
            coordinate={location?.coords}
          />
        </MapView>
      </View>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Agregar información de entrega</Text>
        <Text style={{ fontSize: 18, color: colors.text.gray }}>Depto, Oficina, Piso, Block</Text>
      </View>
      <View style={{ marginTop: 20, width: '100%', paddingHorizontal: 20, alignItems: 'stretch', flex: 1 }}>
        <TextInput multiline numberOfLines={5} style={{ borderWidth: 1, fontSize: 20, borderRadius: 20, flex: 1, height: 120, borderColor: colors.text.gray }} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity>
          <View style={{ backgroundColor: colors.primary, width: 340, marginTop: 40, height: 60, justifyContent: 'center', borderRadius: 10 }}>
            <View style={{ alignContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>AGREGAR DIRECCIÓN</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default AddDirScreen
