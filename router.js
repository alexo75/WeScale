import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './home_screen';
import PrevGameInfo from './prev_game_info';

const Stack = createNativeStackNavigator();

function router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="GameInfo" component={PrevGameInfo} />
        </Stack.Navigator>
    );
}

export default router;
