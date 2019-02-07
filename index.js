import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const LoadingView = (props) => {
    return (
        <View style={[{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 0, bottom: 0, right: 0, left: 0 }, props.moreStyle]}>
            <ActivityIndicator color={props.indicatorColor} />
        </View>
    );
};
export default LoadingView;