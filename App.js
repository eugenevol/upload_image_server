import React,  { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';

export default function App() {



  let data = new FormData();


// get image uri

  let uri_1=Image.resolveAssetSource(require('./ball_1.jpg')).uri // not working on web
  let uri_2=Image.resolveAssetSource(require('./ball_2.jpg')).uri

let url="https://uploadfilesserver.eugenevolkov.repl.co/upload"

//  const [selectedImages,setSelectedImages]=useState([uri_1,uri_2])

console.log('uri',uri_1)


data.append("content",{type:'image/jpeg', uri:'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/201a148e3d40baa81d8ef06e316b5ca2', name:'ball.jpg'} )


// console.log(data)




function upload(){

fetch(url, {
  method: "post",
   headers: {
         "Content-Type": "multipart/form-data",
    },
  body: data,
})

.then(res => {res.json()

// console.log('res',res)
}
)
  .then(final => {

    console.log(
      "Success")}
     
    )
    
  //    .catch(err => {
  //   console.error("error uploading images: ", err);
  // });

}


upload()




  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Image to upload
      </Text>
      <Card>
       <Image  source={require('./ball_1.jpg')}/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
