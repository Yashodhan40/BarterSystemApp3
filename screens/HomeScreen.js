import * as React from 'react';
import {View,Text,FlatList} from 'react-native';

import db from '../config';

export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            allBooks:[],
            lastVisible:null
        }
    }
   
    
    render(){
        return(
            <View>
               
                                
            </View>
        )
    }
}