/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Text, View, StyleSheet,FlatList,Image,TextInput, TouchableOpacity,SearchBar, Alert} from 'react-native';




export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      dataSource:[
        {
         name: 'Abhijit Bhaduri',
       
         company: 'Founder Abhijit Bhaduri & Associates',
         id:0,
         pic:require('./1.png')
        },{
         name: 'Aparna Ballakur',
       
         company: 'Former CHRO,PayU',
         id:1,
         pic:require('./1.png')
        },
        {
         name: 'Niranjan Chintam',
         
         id:2,
         company: 'kellton Tech Solution',
         pic:require('./1.png')
        },
        {
         name: 'Sachin Tendulkar',
       
         company: 'Cricket',
         id:3,
         pic:require('./1.png')
        },
        {
          name: 'Abhijit Bhaduri',
        
          company: 'Founder Abhijit Bhaduri & Associates',
          id:0,
          pic:require('./1.png')
         },{
          name: 'Aparna Ballakur',
        
          company: 'Former CHRO,PayU',
          id:1,
          pic:require('./1.png')
         },
         {
          name: 'Niranjan Chintam',
          
          id:2,
          company: 'kellton Tech Solution',
          pic:require('./1.png')
         },
         {
          name: 'Sachin Tendulkar',
        
          company: 'Cricket',
          id:3,
          pic:require('./1.png')
         }
      ],
      text: '',
    }
    this.arrayholder = [] ;
    this.arrayholder = dataSource;
  }
  SearchFilterFunction(text){
     
    const newData = this.arrayholder.filter(function(item){
        const itemData = item.name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.state.newData,
        text: text
    })
}

  render() 
  {
    return (
      <View>
        <View style={styles.header}>
        <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search Here"
        />
    
        </View>
          <FlatList
          extraData={this.state}
           dataSource={this.state.dataSource}
           renderItem={({item}) =>
           ( 
             <TouchableOpacity onPress={() =>this.Show(item)}  style ={{  padding:10}}>
               <View style={styles.inner_box}>
                 <View style={{flex:0.5}}>
                   <Image style={styles.image} source={item.pic}/>
                 </View>
                   <View style={{flex:2}}>
                    <Text style={{marginTop:10,fontWeight: 'bold',fontSize: 15,fontStyle:'Arial'}}>{item.name}</Text>
  
                    <Text style={{marginTop:10,fontStyle:'Arial'}}>{item.company}</Text>
                  </View>
               </View>
              </TouchableOpacity>
            )}
          />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header:{
   
    
  },
  inner_box:{

    flexDirection:'row',
    backgroundColor:'#E7E9EE',
    borderWidth: 0.5,
    padding:10,
     borderRadius:15,
  },
  image:{
  width:70,
  height:70,
  borderRadius:150,
  }, 
  TextInputStyleClass:{
        
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7 ,
    backgroundColor : "#FFFFFF"
         
    }
});

