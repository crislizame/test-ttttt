import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import colors from '../../utils/colors'
import Star from '../../utils/icons/Star'

const data = [
  {
    image: require('../../../assets/images/mcdonalds.png'),
    back: require('../../../assets/images/headermc.png'),
    title: 'Mcdonalds',
    desc: 'Combo hamburguesa Bigmac',
    rating: '3.5',
    time: '10-50 min.',
    discount: 50
  },
  {
    image: require('../../../assets/images/melt.png'),
    back: require('../../../assets/images/headermelt.png'),
    title: 'MELT pizzas',
    desc: 'Pizza Mediana',
    rating: '4.5',
    time: '10-60 min.',
    discount: 30
  }
]
function FavoritosHorizontalList (): JSX.Element {
  const _renderItem = ({ item }: any): JSX.Element => {
    return (
      <View style={{ flexDirection: 'column', paddingVertical: 10, paddingRight: 10 }}>
        <View style={{ backgroundColor: colors.primary, position: 'absolute', zIndex: 1000, width: 40, height: 40, borderRadius: 40, justifyContent: 'center', flexDirection: 'row', left: 25, top: 28 }}>
          <View style={{ justifyContent: 'center' }}>
            <Image style={{ width: 50, height: 50, borderRadius: 8, resizeMode: 'cover' }} source={item.image} />
          </View>
        </View>
        <Image style={{ width: 300, height: 140, borderRadius: 20, resizeMode: 'stretch', marginBottom: 0, paddingBottom: 0 }} source={item.back} />
        <View style={{ paddingHorizontal: 5, marginTop: -8 }}>
          <View style={{ borderWidth: 1, borderTopWidth: 0, paddingHorizontal: 12, borderColor: colors.gray, borderBottomEndRadius: 15, borderBottomStartRadius: 15, paddingVertical: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2 }}>
          <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 3 }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, letterSpacing: 1 }}>{item.desc}</Text>
          </View>
          <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
            <Text style={{ fontSize: 15, letterSpacing: 1, fontWeight: '200' }}><Star/>{item.rating}</Text>
        </View>
        </View>
        <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 3 }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, letterSpacing: 1, color: colors.text.primary, fontWeight: 'bold' }}>{item.title}</Text>
          </View>
          <View style={{ justifyContent: 'flex-end', flexDirection: 'row', flex: 1 }}>
            <Text style={{ fontSize: 15, letterSpacing: 1, fontWeight: '200' }}>{item.time}</Text>
        </View>
        </View>
        </View>
        </View>
      </View>
    )
  }

  return (
    <FlatList showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={_renderItem} />
  )
}

export default FavoritosHorizontalList
