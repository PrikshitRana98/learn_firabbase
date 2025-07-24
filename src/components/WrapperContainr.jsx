//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, useColorScheme, StatusBar, Switch } from 'react-native';
import colors from '../styles/colors';
// import { useSelector } from 'react-redux';

// create a component
const WrapperContainer = ({
    style = {},
    children
}) => {
    const  selectedTheme  = 'dark1'

    const [isDarkMode, setIsDarkMode] = React.useState(false);

    return (
        <View style={{
            ...styles.container,
            ...style,
            backgroundColor: selectedTheme == 'dark'||isDarkMode ? colors.themeColor : colors.whiteColor
        }}>
            <StatusBar barStyle={selectedTheme == 'dark'||isDarkMode ? 'light-content' : 'dark-content'} />
          
                <SafeAreaView style={{ flex: 1, paddingTop:10 }}>
                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10 }}>
                        <Text style={{ color: selectedTheme == 'dark' ? colors.whiteColor : colors.blackColor, fontSize: 18 }}>
                            {selectedTheme == 'dark' ? 'Dark Mode' : 'Light Mode'}
                        </Text>
                        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsDarkMode(previousState => !previousState)}
          value={isDarkMode}
        />
                        </View>
                    
                   
                    {children}
                </SafeAreaView>
                
                
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themeColor
    },
});

//make this component available to the app
export default WrapperContainer;
