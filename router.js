import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './home_screen';
import PrevGameInfo from './prev_game_info';
import ItemSearchScreen from './item_search_page';
import ChampionRank from './champion_rank';

const Stack = createNativeStackNavigator();

function router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="GameInfo" component={PrevGameInfo} />
            <Stack.Screen name="ItemSearchScreen" component={ItemSearchScreen} />
            <Stack.Screen name="ChampionRank" component={ChampionRank} />
        </Stack.Navigator>
    );
}

export default router;
