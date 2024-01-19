// my goal is for a user to be able to select the 5 champions on their team
//(maybe from a drop down or one of those ios scroll lists?)
//tell if they "scale" (or if their win rates increase) over time

// the practical use of this is to see if you want the game to go long
// or if you want to try end it early (eg. snowball til opposingteam ff or something)

// I think Im going to attach win rate by time to each champion
// this means champion objects will also include a win rate by time
// for each period of time (maybe 5-10 minutes segments)
// I can then use the average of a team to calculate the win rate of that team

// in the big picture I want to beable to get win rates each day
// more than that feels like overkill
//if I can I'd like to get this data from op.gg/u.gg
// if not I might be able to get it from the riot api

// I think I'll need to make a new component for this
// and a new screen/page for this
// I'll need to make a new api call for this in some form.

//TODO: name of this file might be a misnomer

import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from './style_sheet'; // Assuming this is your styles file

//to start unti I sort out the api call I'll just hard code some data
const championWinRates = {
  name: "Karthus",
  winRates: [
    { time: 15, winRate: 45 },
    { time: 20, winRate: 47 },
    { time: 25, winRate: 50 },
    { time: 30, winRate: 53 },
    { time: 35, winRate: 55 },
    { time: 40, winRate: 57 },
  ],
};

export default function ChampionRank() {
  const data = {
    labels: championWinRates.winRates.map(item => `${item.time} min`),
    datasets: [{
      data: championWinRates.winRates.map(item => item.winRate),
    }]
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Champion Rank</Text>
      <Text style={styles.title}>Champion Name: {championWinRates.name}</Text>
      <Text style={styles.title}>Win Rates:</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 16}
        height={220}
        yAxisLabel="%"
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
