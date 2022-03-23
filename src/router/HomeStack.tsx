import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import ProductScren from '../Screens/ProductScreen';
import { StatusBar, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Stack = createNativeStackNavigator();

interface headerComponentProps{
    searchvalue:string,
    setsearchvalue:() => void,
}

const HeaderComponent = ({searchvalue,setsearchvalue}:headerComponentProps) => {
    return (
        <View style={{ backgroundColor: '#23cfcb' }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#23cfcb'} />
            <View style={{ margin: 10, padding: 5 ,backgroundColor: '#fff', flexDirection:'row',alignItems:'center'}} >
                <AntDesign size={22} name="search1" style={{marginRight:10,}} />
                <TextInput value={searchvalue} onChangeText={setsearchvalue} placeholder='Search...' style={{ height: 40,}} />
            </View>
        </View>
    )
}

const HomeStack = () => {
    const [searchValue, setSearchValue] = React.useState()
    return (
        <Stack.Navigator screenOptions={{
            header: () => <HeaderComponent searchvalue={searchValue} setsearchvalue={setSearchValue} />,
            headerStyle: {
                backgroundColor: 'red'
            }
        }}>
            <Stack.Screen name="HomeScreen" options={{ headerShown: true, }}  >
                {() => <HomeScreen searchValue={searchValue} />}
                </Stack.Screen>
            <Stack.Screen name="ProductScreen" options={{ headerShown: false }} component={ProductScren} />
        </Stack.Navigator>
    )
}

export default HomeStack

