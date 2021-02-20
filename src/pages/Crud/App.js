import React from 'react'
import { Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import UserList from './Views/UserList'
import UserForm from './Views/UserForm'
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return(
        <Navigator 
            initialRouteName="UserList"
            screenOptions={screenOptions}
        >
            <Screen 
                name="UserList" 
                component={UserList} 
                options={({navigation}) => {
                    return {
                        title: "Lista de Usuarios",
                        headerRight: () => (
                            <Button
                                    icon={
                                        <Icon
                                        name="plus"
                                        size={15}
                                        color="white"
                                        />
                                    }
                                onPress={() => navigation.navigate("UserForm")}
                                type="clear"
                                color="#fff"
                            ></Button>
                        ),
                    }
                }}    
            />
            <Screen 
                name="UserForm" 
                component={UserForm} 
                options={{
                    title: "Formulario de Usuarios"
                }}
            
            />
        </Navigator>
  )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    HeaderTitleStyle: {
        fontWeight: 'bold'
    }
}

export default App