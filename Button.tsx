import React, { Component } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

interface ButtonProps {
    label: string;
    onPress?: () => void;
}

/**
 * @param param0 Text to display inside button
 * @returns 
 */
class Button extends Component<ButtonProps>{

    render() {
        const label = this.props.label;
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={this.props.onPress}>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Button;