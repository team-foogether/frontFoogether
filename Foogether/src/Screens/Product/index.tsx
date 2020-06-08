import React, { Component } from 'react';

import {
      StyleSheet,
      Text,
      View
  } from 'react-native';
import Geocoder from 'react-native-geocoding';

import Geolocation from 'react-native-geolocation-service';

export default class mainProduct extends Component{ 
   constructor() {

          super()

          this.state = {
              latitude: 0,
              longitude: 0,
              error: null,
              Address: null,
              dong: ''
          }

      }

      async componentDidMount() {

          Geolocation.getCurrentPosition(

              (position) => {
                  this.setState({
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                  });
                  
                  Geocoder.from(position.coords.latitude, position.coords.longitude)
                      .then(json => {
                        console.log(json);
                        var addressComponent = json.results[0].address_components;
                        this.setState({
                          Address: addressComponent
                        });
                        console.log(addressComponent);
                        addressComponent.forEach(addr => {
                          console.log(addr.types);
                          console.log(addr.long_name);
                          if (addr.types.indexOf("sublocality_level_2") > 0) {
                            console.log(">>>", addr.long_name);
                            this.setState({ dong: addr.long_name });
                          }
                        });
                      })
                      .catch(error => console.warn(error));
              },

              (error) => {

                  // See error code charts below.

                  this.setState({

                          error: error.message

                      }),

                      console.log(error.code, error.message);

              },

              {
                  enableHighAccuracy: false,
                  timeout: 10000,
                  maximumAge: 100000
              }
          );
      }

      render() {
                return (
                    <View>
                    <Text>
                    { this.state.error ? < Text > Error : {this.state.error} </Text> : null}
                   
                    </Text>
                    <Text>{ this.state.dong }</Text>
  </View>
                    );
                }
            }
const styles = StyleSheet.create({

   MainContainer: {

              flex: 1,

              justifyContent: 'center',

              backgroundColor: '#f5fcff',

              padding: 11

          },

          text: {

              fontSize: 22,

              color: '#000',

              textAlign: 'center',

              marginBottom: 10

          },
      });
