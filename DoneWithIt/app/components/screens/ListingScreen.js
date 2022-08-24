import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../Card';
import Screen from './Screen';
import listingsApi from  '../api/listings'
import AppText from '../AppText';
import AppButton from '../AppButton';
import ActivityLoader from '../ActivityLoader';
import color from '../../config/color'
import useApi from '../hooks/useApi';


function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);
    console.log(getListingsApi)
  
  
    useEffect(() => {
      getListingsApi.request();
    }, []);
  
    return (
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        {/* <ActivityLoader visible={loading} /> */}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              thumbnailUrl = {item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate("ListingDetails", item)}
            />
          )}
        />
      </Screen>
    );
  }
  
  const styles = StyleSheet.create({
    screen: {
      padding: 20,
      backgroundColor: color.light,
    },
  });
  
  export default ListingsScreen;