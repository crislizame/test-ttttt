import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import Avatar from '../../components/Avatar'
import Search from '../../utils/icons/Search'
import CarouselHome from '../../components/CarouselHome'
import colors from '../../utils/colors'
import AddAddressSection from './components/AddAddressSection'
import RestaurantHorizontalList from '../../components/RestaurantHorizontalList'
import CategoriasHorizontalList from '../../components/CategoriasHorizontalList'
import FavoritosHorizontalList from '../../components/FavoritosHorizontalList'

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.containerHeader}>
          <Avatar/>
          <View style={{ justifyContent: 'center' }}>
            <Search/>
          </View>
        </View>
        <View>
          <CarouselHome/>
        </View>
        <AddAddressSection/>
        <View style={{ backgroundColor: colors.white, paddingVertical: 20, borderTopStartRadius: 40, borderTopEndRadius: 40, marginTop: -28, paddingHorizontal: 18, paddingTop: 40 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', letterSpacing: 1.5, marginLeft: 6 }}>RESTAURANTES</Text>
          </View>
          <View style={{ flex: 1, marginTop: 12 }}>
            <RestaurantHorizontalList/>
          </View>
          <View style={{ flex: 1, marginTop: 40 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', letterSpacing: 1.5, marginLeft: 6 }}>CATEGORÍAS</Text>
          </View>
          <View style={{ flex: 1, marginTop: 12 }}>
            <CategoriasHorizontalList/>
          </View>
          <View style={{ flex: 1, marginTop: 40 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', letterSpacing: 1.5, marginLeft: 6 }}>TUS FAVORITOS</Text>
          </View>
          <View style={{ flex: 1, marginTop: 12, marginBottom: 40 }}>
            <FavoritosHorizontalList/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
