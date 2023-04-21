import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (name: string, value: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(name, jsonValue)
  } catch (e) {
    console.log('Error storeData helper =>', e)
  }
}

export const getData = async (name: string): Promise<void> => {
  try {
    const jsonValue = await AsyncStorage.getItem(name)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log('Error getData helper =>', e)
  }
}
