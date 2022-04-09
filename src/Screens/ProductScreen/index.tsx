import React from 'react'
import { Text, View, ScrollView, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import styles from './styles'
import QuantitySelector from '../../Components/QuantitySector';
import Button from '../../Components/Button';
import ImageCarousel from '../../Components/ImageCauousel';
import { useRoute,useNavigation } from '@react-navigation/native'
import { Auth, DataStore } from 'aws-amplify';
import { Product } from '../../models';
import { CartProduct } from '../../models';


function ProductScren() {
  const [product, setProduct] = React.useState<Product | undefined>(undefined)
  const [selectedOption, setselectedOption] = React.useState();
  const [quantity, setQuantity] = React.useState(1)
  const route = useRoute();
  const navigation = useNavigation()

  React.useEffect(() => {
    if(product?.options){
      setselectedOption(product.options[0]);      
    }
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct)
  }, []);



  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return
    }

    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity: quantity,
      option: selectedOption,
      productId: product.id,
    })

    await DataStore.save(newCartProduct)
    navigation.navigate("ShoppingCart")
  }

  if (!product) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={'large'} color={"green"} />
    </View>
  }


  return (
    <ScrollView style={styles.root}>
      <View>
        <Text style={styles.title}>{product.title}</Text>
      </View>
      {/*  Image carouse */}
      <ImageCarousel images={product.images} />

      {/* option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={setselectedOption
        }>
        {product.options.map((option, index) => <Picker.Item key={index} label={option} value={option} />)}
      </Picker>


      {/* Price */}
      <View>
        <Text style={styles.price}>
          from ${product.price.toFixed(2)}
          {product.oldPrice && (<Text style={styles.oldprice}>  ${product.oldPrice.toFixed(2)}</Text>)}

          {/* For testing perpuse */}
          <Text>This is</Text>
        </Text>
      </View>

      {/* Descripation */}
      <Text style={styles.descripation}>
        {product.description}
      </Text>

      {/* Quanity selector */}
      <QuantitySelector quantity={quantity} setquantity={setQuantity} />

      {/* button */}
      <View style={{ marginBottom: 10 }}>
        <Button text={'Add To Cart'} onPress={onAddToCart} />
        <Button text={'Buy Now'} onPress={() => {
          return console.log("buy now");
        }} />                
      </View>      
    </ScrollView>
  )
}

export default ProductScren