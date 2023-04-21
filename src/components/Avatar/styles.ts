import { StyleSheet } from 'react-native'
import colors from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  avatarContainer: {
    flexDirection: 'row'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: colors.borderColor
  }
})
