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
            marginHorizontal: 54,
            marginVertical: 46,
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

    styles.filterSort = StyleSheet.create({
        filterSortContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        filterSortText: {
            color:'#000',
            fontSize:17,
        },
        filterSortTextEx: {
            color:'#bbb',
            fontSize:14,
        },
        filterSortEx: {
            flex: 1,
            backgroundColor: '#a1a1a1',
            justifyContent: 'center',
            textAlign:'center',
            padding:2,
            margin:1,
            borderRadius: 8,
            fontSize: 10,
           
        },
        filterSortButtons: {
            flexDirection: 'row',
        },
        filterSortButton: {
            flex: 1,
            backgroundColor: '#BD8EFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 6,
            marginHorizontal: 4,
            marginVertical: 10,
            paddingVertical: 16,
            borderRadius:30,
            elevation: 10,
        }
    });
    styles.lazyLoading = StyleSheet.create({
        lazyContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginVertical:128,
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        lazyText: {
            color:'#000',
            fontSize:17,
        },
        lazyTextEx: {
            color:'#fff',
            fontSize:16,
        },
        lazyEx: {
            flex: 1,
            backgroundColor: '#949494',
            justifyContent: 'center',
            marginHorizontal: 16,
            marginVertical: 32,
            paddingHorizontal:16,
            paddingVertical:16,
            borderRadius:8,
            fontSize:24,
        }
    });
    

  

export default styles