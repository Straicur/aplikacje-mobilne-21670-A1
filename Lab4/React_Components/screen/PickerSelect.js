import React ,{Component,useState}  from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../static/styles';
import Select from "./Select";

export default function PickerSelect() {
    const [podzespoly, setPodzespoly] = useState([
        { label: "", value: "" },
        { label: "Procesory", value: "Procesory" },
        { label: "Karty Graficzne", value: "Karty Graficzne" },
        { label: "Płyty główne", value: "Płyty główne" },
        { label: "Chłodzenia", value: "Chłodzenia" }
        ]);
    const [dostepne, setDostepne] = useState([
        { label: "", value: null, podzespoly: ["Procesory", "Karty Graficzne", "Płyty główne", "Chłodzenia"] },
        { label: "1", value: 1, podzespoly: ["Procesory"] },
        { label: "3", value: 2, podzespoly: ["Procesory", "Chłodzenia"] },
        { label: "GT 1030", value: 3, podzespoly: ["Karty Graficzne"] },
        { label: "2", value: 4, podzespoly: ["Chłodzenia"] },
        { label: "2", value: 4, podzespoly: ["Płyty główne"] }
        ]);
    const [availableDostepne, setAvailableDostepne] = useState([]);
    const [selectedPodzespol, setSelectedPodzespol] = useState(null);
    const [selectedDostepny, setSelectedDostepny] = useState(null);
    const [selection, setSelection] = useState("");
    return (
        <View style={styles.PickerSelect.container}>
            <View style={styles.PickerSelect.pickerContainer}>
                <View style={styles.PickerSelect.selectContainer}>
                    <Select
                        label="Podzespoły"
                        items={podzespoly}
                        selectedValue={selectedPodzespol}
                        onValueChange={podzespol => {
                            setSelectedPodzespol(podzespol);
                            setSelectedDostepny(null);
                            setAvailableDostepne(dostepne.filter(i =>
                                i.podzespoly.includes(podzespol)));
                        }}
                    />
                </View>
                <View style={styles.PickerSelect.selectContainer}>
                    <Select
                        label="Ilość"
                        items={availableDostepne}
                        selectedValue={selectedDostepny}
                        onValueChange={dostepny => {
                            setSelectedDostepny(dostepny);
                            setSelection(
                                ` Dostępne ${dostepne.find(i => i.value === 
                                    dostepny).label}`
                        );
                    }}
                    />
                </View>
            </View>
            <View style={styles.PickerSelect.selectionContainer}>
                <Text style={styles.PickerSelect.selection}>{selection}</Text>
            </View>
        </View>
        );
   }