import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Star from '../../utils/icons/Star'
import colors from '../../utils/colors'

const data = [
  {
    image: require('../../../assets/images/mcdonalds.png'),
    title: 'Mcdonalds',
    rating: '3.5',
    time: '10-50 min.',
    discount: 50
  },
  {
    image: require('../../../assets/images/melt.png'),
    title: 'MELT pizzas',
    rating: '4.5',
    time: '10-60 min.',
    discount: 30
  },
  {
    image: require('../../../assets/images/yokono.png'),
    title: 'YOKONO',
    rating: '3.5',
    time: '10-50 min.',
    discount: 20
  },
  {
    image: require('../../../assets/images/papajhons.png'),
    title: 'Papa Jhons',
    rating: '3.5',
    time: '10-50 min.',
    discount: 30
  }
]
function RestaurantHorizontalList (): JSX.Element {
  const _renderItem = ({ item }: any): JSX.Element => {
    return (
      <View style={{ flexDirection: 'column', paddingVertical: 10, paddingRight: 10 }}>
        <View style={{ backgroundColor: colors.primary, position: 'absolute', zIndex: 1000, width: 40, height: 40, borderRadius: 40, justifyContent: 'center', flexDirection: 'row', right: 6, top: 0 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: colors.white, fontSize: 12 }}>{item.discount}%</Text>
            <Text style={{ color: colors.white, fontSize: 12 }}>Dcto</Text>
          </View>
        </View>
        <Image style={{ width: 130, height: 130, marginBottom: 6, borderRadius: 20, resizeMode: 'cover' }} source={item.image} />
        <View style={{ justifyContent: 'center', flexDirection: 'row', marginBottom: 3 }}>
          <Text style={{ fontSize: 18, letterSpacing: 1 }}>{item.title}</Text>
        </View>
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={{ fontSize: 16, letterSpacing: 1, fontWeight: '200' }}><Star/>{item.rating} {item.time}</Text>
        </View>
      </View>
    )
  }

  return (
    <FlatList showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={_renderItem} />
  )
}

export default RestaurantHorizontalList
