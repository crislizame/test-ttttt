import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  containerHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18, position: 'absolute', top: 1, zIndex: 1000, width: wp(100) }
})
