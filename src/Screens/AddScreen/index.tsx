import { View, Text, TextInput , ScrollView, Alert} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list'
import React from 'react'
import styles from './styles';
import Button from '../../Components/Button';

const countryis = countryList.getData();

const AddressScreen = () => {
    const [country, setCountry] = React.useState(countryis[0].code)
    const [fullname, setFullname] = React.useState()
    const [city, setCity] = React.useState()
    const [address, setAddress] = React.useState()
    const [addressError, setAddressError] = React.useState()
    const [phonenumber, setPhonenumber] = React.useState()

    const checkout = () => {
        if(!fullname){
            Alert.alert("please Enter your Full name")
        }
        if(!phonenumber){
            Alert.alert("please Enter your phonenumber")
        }
        if(addressError){
            Alert.alert('Please Fill the all errors')
        }
    }

    const validateAddress = () => {
        if(address.length < 3){
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
                <TextInput value={address} onEndEditing={validateAddress} onChangeText={(text) => {setAddress(text); setAddressError("")}} style={styles.input} placeholder="Enter your City Name" />
                {
                    addressError ? (
                        <Text style={{color:'red'}}>{addressError}</Text>
                    ) : null
                }
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput style={styles.input} placeholder="Enter your City Name" value={city} onChangeText={(text) => setCity(text)} />
            </View>

            <View style={[styles.row, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={[styles.input, styles.halfrow]} placeholder="Enter your City Name" />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput style={[styles.input, styles.halfrow]} placeholder="Enter your City Name" />
                </View>
            </View>

            <Button text='Checkout' onPress={checkout} />
        </ScrollView>
    )
}

export default AddressScreen