import React ,{Component}  from 'react';
import { ActivityIndicator,StyleSheet,View, Text } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default class FirstStepProgress extends Component {
    
    defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
          flex: 1,
          justifyContent: 'center'
        }
    };

    onStepComplete = () => {
        alert('Koniec :)');
    };
    render(){ 
        const progressStepsStyle = {
            activeStepIconBorderColor: '#686868',
            activeLabelColor: '#686868',
            activeStepNumColor: 'white',
            activeStepIconColor: '#686868',
            completedStepIconColor: '#686868',
            completedProgressBarColor: '#686868',
            completedCheckColor: '#4bb543'
          };
      
          const buttonTextStyle = {
            color: '#686868',
            fontWeight: 'bold'
          };
        return (
            <View style={{flex: 1, marginTop: 50 }}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep 
                    label="First Step"
                    scrollViewProps={this.defaultScrollViewProps}
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 1!</Text>
                            <View style={[styles.container, styles.horizontal]}>
                                
                                <ActivityIndicator size="large" color="#03fcf0" />
                            </View>
                            
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                    label="Second Step"
                    scrollViewProps={this.defaultScrollViewProps}
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 2 !</Text>
                            <View style={[styles.container, styles.horizontal]}>
                                
                                <ActivityIndicator size="large" color="#fc0331" />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep 
                    label="Third Step"
                    FinishBtnText={'Zakończ'}
                    onSubmit={this.onStepComplete}
                    scrollViewProps={this.defaultScrollViewProps}
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyle}
                    >
                        <View style={{ alignItems: 'center' }}>
                            <Text>Step 3 !</Text>
                            <View style={[styles.container, styles.horizontal]}>
                                
                                <ActivityIndicator size="small" color="#fc0331" />
                            </View> 
                        </View>
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 20,
      margin: 30
    }
});
  