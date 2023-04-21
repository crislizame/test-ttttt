import React from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'

const data = [
  {
    image: require('../../../assets/images/hamburguesas.png'),
    title: 'HAMBURGUESAS'
  },
  {
    image: require('../../../assets/images/italiana.png'),
    title: 'ITALIANA'
  },
  {
    image: require('../../../assets/images/pizzas.png'),
    title: 'PIZZAS'
  }
]
function CategoriasHorizontalList (): JSX.Element {
  const _renderItem = ({ item }: any): JSX.Element => {
    return (
      <View style={{ paddingVertical: 5, paddingRight: 10 }}>
          <ImageBackground resizeMode='contain' style={{ borderRadius: 20, width: 200, height: 90 }} imageStyle={{ borderRadius: 20, opacity: 0.8 }} source={item.image} >
          <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', marginVertical: 4, marginHorizontal: 6, borderRadius: 15 }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', height: '100%', width: '100%' }}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, letterSpacing: 1.5, color: 'white', fontWeight: '800' }}>{item.title}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  return (
    <FlatList showsHorizontalScrollIndicator={false} horizontal data={data} renderItem={_renderItem} />
  )
}

export default CategoriasHorizontalList
