import * as React from 'react';
import {View,Text,TextInput,TouchableOpacity,FlatList,ScrollView,Alert,ToastAndroid,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class Exchange extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            reason:'',
            userId:firebase.auth().currentUser.email
        }
    }
    submit=(Name,Reason)=>{
           
            db.collection('UsersRequest').add({
                'Item' : Name,
                'Reason' : Reason,
                'UserId' : this.state.userId
            })
            this.setState({
                name:'',
                reason:''
            })
        }
    render(){
        return(
            <View>

                <TextInput
                placeholder='Item Name'
                keyboardType='ascii-capable'
                onChangeText={(text)=>{
                    this.setState({
                        name:text
                    })
                }}
                />

                <TextInput
                placeholder='Reason'
                onChangeText={(text)=>{
                    this.setState({
                        reason:text
                    })
                }}
                multiline={true}
                />

                <TouchableOpacity onPress={()=> this.submit(this.state.name,this.state.reason)}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}