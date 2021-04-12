import React, {useState, useEffect} from 'react'
import { Text, SafeAreaView, Button, FlatList, Image, View } from 'react-native'

export default () => {

  const [movies, setMovies] = useState([])

  const handleLoadButton = async () => {
    const req = await fetch("https://jsonplaceholder.typicode.com/photos")
    const json = await req.json()

    
    if(json) {
      setMovies(json)
    }
  }
  return (
    <SafeAreaView>
      <Button title="Carregar Filmes" onPress={handleLoadButton} />
      <Text>Total de filmes: {movies.length}</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Image source={{uri: item.url}} />
            <Text>{item.title}</Text>
          </View>
            
        )}
      />
    </SafeAreaView>
  )
}