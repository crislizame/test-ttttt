import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.primary,
    borderWidth: 1
  },
  inactiveDotStyle: {
    borderWidth: 1,
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.gray
  }
})
