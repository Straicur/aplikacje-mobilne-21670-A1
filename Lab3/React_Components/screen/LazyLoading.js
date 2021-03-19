import React ,{Component ,Suspense}  from 'react';
import { View, Text} from 'react-native';
import styles from '../static/styles';

const Lazy = React.lazy(() => import('./ToLoad'))

export default class LazyLoading extends Component {
    render(){ 
        return (
            <View style = {styles.lazyLoading.lazyContainer}>
            <Text style = {styles.lazyLoading.lazyText}>Lazy Loading</Text>
            <View style = {styles.lazyLoading.lazyEx}>
                <Suspense fallback={<Text>Loading...</Text>}>
                    <Lazy length="100000"/>
                </Suspense>
            </View>
          </View>
        );
    }
}