import React from "react";
import PropTypes from "prop-types";
import { View, Picker, Text } from "react-native";
import styles from '../static/styles';
export default function Select(props) {
 return (
    <View>
        <Text style={styles.PickerSelect.pickerLabel}>{props.label}</Text>
        <Picker {...props}>
            {props.items.map(i => (
                <Picker.Item key={i.label} {...i} />
        ))}
        </Picker>
    </View>
    );
}
Select.propTypes = {
    items: PropTypes.array,
    label: PropTypes.string
};
