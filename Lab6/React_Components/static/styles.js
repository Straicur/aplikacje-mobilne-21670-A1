import { StyleSheet } from 'react-native';

const styles = {}
    styles.home = StyleSheet.create({
        homeContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#000',
        },
        homeButton: {
            flex: 1,
            backgroundColor: '#c2e0dd',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 44,
            marginVertical: 18,
            borderRadius:30,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 10,
        },
        homeText: {
            fontSize: 25,
        },

    });
    styles.imageScreen = StyleSheet.create({
        title:{
            color:'#000',
            fontSize:40,
        },
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            padding:2
        },
        textContainer:{
            height:'8%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text:{
            color:'#000',
            fontSize:20,
        },
        body:{
            backgroundColor:'#fff',
            padding:2
        },
        center:{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
    
    styles.connectionScrreen = StyleSheet.create({
        body: {
            flex: 1,
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#CDFCE2',
          },
          detail: {
            fontSize: 12,
            textAlign: 'center',
            fontSize:25,
            margin:5,
            color: '#000000',
          },
          title:{
            color:'#000',
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center',
          }
    });
    styles.asyncScreen = StyleSheet.create({
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            
        },
        button:{
            backgroundColor:"#fff",
            paddingHorizontal:'10%',
            paddingVertical:'5%',
            margin:'5%',
            borderRadius:10,
            borderWidth: 1,
        },
        title:{
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center', 
            marginBottom:30
        },
        text:{
            fontSize:22,
            fontWeight:'bold',
            textAlign: 'center', 
        },
        input:{
            backgroundColor:"#fff",
            flexDirection: 'row',
            padding:5,
            margin:4,
        }
    });
    styles.syncScreen = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            padding:1,
          },
        title:{
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center', 
        },
        context:{
            padding:8
        }
    });
    styles.lazyscreen = StyleSheet.create({
        body: {
            flex: 1,
            backgroundColor: '#fff',
          },
        container:{
            display:'flex',
            flexDirection:'column',
            width:'100%'
        },
        text:{
            fontSize:22,
            fontWeight:'bold',
            textAlign: 'center', 
            padding:2
        },
        textContainer:{
            alignItems: 'center',
            justifyContent: 'center'
        },
        icons:{
            backgroundColor:'#B7FFBE',
            flexDirection:'row',
            paddingHorizontal:'2%',
            width:'100%'
        }
    });
    styles.resizableScreen = StyleSheet.create({
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            backgroundColor:'#CDE9FC'
        },
        center:{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text:{
            fontSize:40,
            color:'black',
            textAlign:'center'
        }
    });    
    styles.screen = StyleSheet.create({
        image: {
            width: 435, 
            height: 250,
        },
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            backgroundColor:'white'
        },

    });
    export default styles