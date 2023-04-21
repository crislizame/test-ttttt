import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

function CarouselHome (): JSX.Element {
  const [entries] = React.useState([{ image: require('../../../assets/components/Slider/slider-1.png') }, { image: require('../../../assets/components/Slider/slider-1.png') }, { image: require('../../../assets/components/Slider/slider-1.png') }])
  const [activeSlide, setActiveSlide] = React.useState(0)
  const _renderItem = ({ item }: any): JSX.Element => {
    return (
            <View style={{ justifyContent: 'flex-start' }}>
                <Image resizeMode='contain' style={{ width: '100%', height: 250 }} source={item.image} />
            </View>
    )
  }
  const pagination = (): any => {
    return (
            <Pagination
              containerStyle={{ position: 'absolute', bottom: 0, right: 10, alignSelf: 'center' }}
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              dotContainerStyle={{ marginHorizontal: 4 }}
              dotStyle={styles.dotStyle}
              inactiveDotStyle={styles.inactiveDotStyle}
              inactiveDotOpacity={1}
              inactiveDotScale={1}
            />
    )
  }

  return (
        <>
            <Carousel
              data={entries}
              renderItem={_renderItem}
              sliderWidth={wp(100)}
              itemWidth={wp(100)}
              autoplay
              autoplayInterval={3000}
              loop
              onSnapToItem={(index) => { setActiveSlide(index) } }
            />
            {pagination()}
        </>
  )
}

export default CarouselHome
