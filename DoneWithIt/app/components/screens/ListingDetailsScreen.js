import React from 'react';
import {  KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import AppText from '../AppText';
import ListItem from '../ListItem';
import colors from '../../config/color'
import { Image } from 'react-native-expo-image-cache';
import { ScrollView } from 'react-native-gesture-handler';
import ContactSellerForm from '../ContactSellerForm';

function ListingDetailsScreen({route}) {
  const listing = route.params;
  const ur1 = listing.images[0].url.substring(8);
  const ur2 = ur1.split(".jpg"); 
  const url = "http://" + ur2[0] + ".jpg"
  
    return (
      <KeyboardAvoidingView style = {{flex : 1}} behavior = "position"  >

        <ScrollView style={styles.scrollView}>

        <Image style={styles.image} preview = {{uri : listing.images[0].thumbnailUrl}} tint = "light" uri = {listing.images[0].url} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
        
            <ListItem
              image={require("../../../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing = {listing}/>
        </View>

        </ScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
      },
      image: {
        width: "100%",
        height: 300,
      },
      price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: "500",
      },
      userContainer: {
        marginVertical: 40,
      },
    
})
export default ListingDetailsScreen;