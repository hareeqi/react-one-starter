import React from 'react';
import { Alert, OneProvider, Link, View, css } from 'react-one-ui';

export default class App extends React.Component {
    render() {
        return (
            <OneProvider>
                <View style={styles.container}>
                    <Link title="Click me" onPress={() => Alert.alert('Chane ./src/app.js and see the changes')} />
                </View>
            </OneProvider>
        );
    }
}

const styles = css({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
