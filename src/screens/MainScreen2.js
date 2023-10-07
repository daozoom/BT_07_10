import React, { Component } from 'react'
import{
    Text,
    View,
    StatusBar,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'

export default MainScreen1 = function(){

    const data = [
        { key: '1', imageUrl: require('../images/flat-list-1.png'), text:'CLOTHING' },
        { key: '2', imageUrl: require('../images/flat-list-2.png'), text: 'ACCESSORIES' },
        { key: '3', imageUrl: require('../images/flat-list-3.png'), text: 'SHOES' },
        // Thêm các mục khác nếu cần
      ];
    
    const fll2 = [
        { key: '1', image: require('../images/flat-list-4.png'), isHighlighted: true },
        { key: '2', image: require('../images/flat-list-4.png'), isHighlighted: true },
        { key: '3', image: require('../images/flat-list-4.png'), isHighlighted: false },
      ];

    const highlightedItem = fll2.find(item => item.isHighlighted);
        if (highlightedItem) {
        highlightedItem.height = 600;
        }

    return(
        <SafeAreaView style={{width:'100%', height:'100%'}}>
            <StatusBar barStyle='dark-content'/>
            <View style={{width:'100%', height: '5%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1, paddingBottom: 5}}>
                <TouchableOpacity style={{width:'30%',height:'100%'}}>
                    <Image style={{width:'100%',height:'100%'}} resizeMode='contain' source={require('../images/icon_menu.png')}/>
                </TouchableOpacity>
                <Text style={{marginHorizontal: '14%'}}>Shopertino</Text>
                <TouchableOpacity style={{width:'30%',height:'100%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <Image style={{width:'100%',height:'100%'}} resizeMode='contain' source={require('../images/icon_tui.png')}/>
                    <View style={{width:'20%', height:'80%', position:'absolute', backgroundColor:'#fe7081', borderRadius:100, top:-8, right:35}}>
                        <Text style={{width:'100%', height:'100%',  textAlign:'center', top:5}}>3</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{width:'100%', height:'15%'}}>
                <FlatList
                    data={data}
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ width: 200, height: 100, margin: 10, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={typeof item.imageUrl === 'number' ? item.imageUrl : { uri: item.imageUrl }} style={{width: '100%', height:'100%', }} resizeMode='cover' />
                            <View style={{width: '100%', height:'100%', opacity:0.6296038, backgroundColor:'#000000', position:'absolute', justifyContent:'center', alignItems:'center', borderRadius:20,}}><Text style={{color:'white', fontSize:18}}>{item.text}</Text></View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={{width:'100%', height:'10%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:20}}>New Arrivals</Text>
            </View>
            <View style={{width:'100%', height:'50%'}}>
                <FlatList
                    data={fll2}
                    horizontal={true}
                    pagingEnabled 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={{ width: 380, height: item.height || 300, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4, justifyContent:'center', alignItems:'center'}}>
                            <Image source={typeof item.image === 'number' ? item.image : { uri: item.image }} style={{width: '100%', height:'100%', borderRadius: index === 0 ? 20 : 10,}} resizeMode='contain'/>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}