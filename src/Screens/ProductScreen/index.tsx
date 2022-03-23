import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import product from '../../data/product'
import styles from './styles'
import QuantitySelector from '../../Components/QuantitySector';
import Button from '../../Components/Button';
import ImageCarousel from '../../Components/ImageCauousel';
import {useRoute} from '@react-navigation/native'


function ProductScren() {
  const [selectedLanguage, setSelectedLanguage] = React.useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = React.useState(1)
  const route =  useRoute();
  console.log(route.params);
  

  return (
    <ScrollView style={styles.root}>
      <View>
        <Text style={styles.title}>{product.title}</Text>
      </View>
      {/*  Image carouse */}
      <ImageCarousel images={product.images} />

      {/* option selector */}
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        {product.options.map((option, index) => <Picker.Item key={index} label={option} value={option} />)}
      </Picker>

      {/* Price */}
      <View>
        <Text style={styles.price}>
          from ${product.price}
          {product.oldPrice && (<Text style={styles.oldprice}>  ${product.oldPrice}</Text>)}
        </Text>
      </View>

      {/* Descripation */}
      <Text style={styles.descripation}>
        {product.description}
      </Text>

      {/* Quanity selector */}
      <QuantitySelector quantity={quantity} setquantity={setQuantity} />

      {/* button */}
     <View style={{marginBottom:10}}>
     <Button text={'Add To Cart'} onPress={() => { console.log("add to cart") }} />
      <Button text={'Buy Now'} onPress={() => {
        return console.log("buy now");
      }} />
     </View>
    </ScrollView>
  )
}

export default ProductScren