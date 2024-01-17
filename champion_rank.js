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