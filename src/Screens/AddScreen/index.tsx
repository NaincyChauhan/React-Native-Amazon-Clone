import { View, Text, TextInput, ScrollView, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list'
import React from 'react'
import styles from './styles';
import Button from '../../Components/Button';
import { Auth, DataStore } from 'aws-amplify';
import { CartProduct, Order } from '../../models';
import { OrderProduct } from '../../models';
import { useNavigation } from '@react-navigation/native';

const countryis = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = React.useState(countryis[0].code)
    const [fullname, setFullname] = React.useState()
    const [city, setCity] = React.useState()
    const [address, setAddress] = React.useState()
    const [addressError, setAddressError] = React.useState()
    const [phonenumber, setPhonenumber] = React.useState()
    const navigation = useNavigation()

    const saveOrder = async () => {
        const userData = await Auth.currentAuthenticatedUser();
        // create a new order
        const newOrder = await DataStore.save(
            new Order({
                userSub: userData.attributes.sub,
                fullName: fullname,
                phoneNumber: phonenumber,
                country,
                city,
                address
            })
        )

        // fetch all cart items
        const cartItems = await DataStore.query(CartProduct, cp =>
            cp.userSub('eq', userData.attributes.sub),
        )

        // attach all cart items to the order
        await Promise.all(
            cartItems.map(cartItem => DataStore.save(new OrderProduct({
                quantity:cartItem.quantity,
                option:cartItem.option,
                productId:cartItem.productId,
                orderId: newOrder.id,
            })))
        )

        // delete all cart item
        await Promise.all(
            cartItems.map(cartItem => DataStore.delete(cartItem))
        )

        // redirect home
        navigation.navigate("Home")
    };

    const checkout = () => {
        console.log("this is address",address);
        
        if (!fullname) {
            Alert.alert("please Enter your Full name")
        }
        
        if (!phonenumber) {
            Alert.alert("please Enter your phonenumber")
        }
        if (addressError) {
            Alert.alert('Please Fill the all errors')
        }
        saveOrder();
    }

    const validateAddress = () => {
        if (address.length < 3) {
            setAddressError('Address is to sort')
        }
    }

    return (
        <ScrollView style={styles.root}>
            <View style={styles.row}>
                <Picker
                    style={{ borderWidth: 1, borderColor: 'red' }}
                    selectedValue={country}
                    onValueChange={(item) => {
                        setCountry(item)
                    }}>
                    {
                        countryis.map((country, index) => (
                            <Picker.Item key={index} value={country.code} label={country.name} />
                        ))
                    }
                </Picker>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Full Name(First and Last Name)</Text>
                <TextInput style={styles.input} placeholder="Enter your fullname" value={fullname} onChangeText={setFullname} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput keyboardType={'numeric'} style={styles.input} placeholder="Enter your Phone Number" value={phonenumber} onChangeText={setPhonenumber} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput value={address} onEndEditing={validateAddress} onChangeText={(text) => { setAddress(text); setAddressError("") }} style={styles.input} placeholder="Enter your City Name" />
                {
                    addressError ? (
                        <Text style={{ color: 'red' }}>{addressError}</Text>
                    ) : null
                }
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput style={styles.input} placeholder="Enter your City Name" value={city} onChangeText={(text) => setCity(text)} />
            </View>

            <Button text='Checkout' onPress={checkout} />
        </ScrollView>
    )
}

export default AddressScreen