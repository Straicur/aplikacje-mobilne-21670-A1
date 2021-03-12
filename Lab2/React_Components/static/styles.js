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

    styles.hookUseState = StyleSheet.create({
        hookContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        hookText: {
            color:'#000',
            fontSize:17,
        },
        hookTextEx: {
            color:'#bbb',
            fontSize:14,
        },
        hookEx: {
            flex: 1,
            backgroundColor: '#444',
            justifyContent: 'center',
            marginHorizontal: 16,
            marginVertical: 12,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderRadius: 8,
            fontSize: 24,
        },
        hookButtons: {
            flexDirection: 'row',
        },
        hookButton: {
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
    styles.restParameters = StyleSheet.create({
        restContainer: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginVertical:128,
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        restText: {
            color:'#000',
            fontSize:17,
        },
        restTextEx: {
            color:'#fff',
            fontSize:16,
        },
        restEx: {
            flex: 1,
            backgroundColor: '#949494',
            justifyContent: 'center',
            marginHorizontal: 16,
            marginVertical: 32,
            paddingHorizontal:16,
            paddingVertical:16,
            borderRadius:8,
            fontSize:24,
        },
        restButtons: {
            flexDirection: 'row-reverse',
        },
        restButton: {
            flex: 1,
            backgroundColor: '#C6B44C',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 6,
            marginVertical: 10,
            paddingVertical: 16,
            borderRadius:10,
            elevation: 10,
        }

    });
    styles.spreadOperator = StyleSheet.create({
        spreadContainer: {
            flex: 1,
            backgroundColor: '#CCE8F0',
            alignItems: 'stretch',
            justifyContent: 'center',
            marginVertical:64,
            textAlign : 'center',
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        spreadText: {
            color:'#000',
            fontSize:17,
        },
        spreadTextEx: {
            color:'#000',
            fontSize:13,
        },
        spreadEx: {
            flex: 1,
            backgroundColor: '#F6FBFC',
            justifyContent: 'center',
            marginVertical: 20,
            paddingHorizontal:16,
            paddingVertical:16,
            fontSize:24,
        },
        spreadButtons: {
            flexDirection: 'row',
        },
        spreadButton: {
            flex: 1,
            backgroundColor: '#65BAD2',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 10,
            marginVertical: 10,
            paddingVertical: 16,
            elevation: 10,
        }
    });
  

export default styles