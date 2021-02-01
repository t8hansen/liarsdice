# Liars-Dice

Was a small project that I wanted to work on.

How to Play:

Everyone starts with 5 die and it goes around in a clockwise order until someone calls Bullshit or Exact. At the beginning of each round you will reroll your dice and only Reveal them when someone makes a Bullshit or Exact call.
The goal of the game is to be the only one with dice left.

It is a turn based game that allows you to choose one of the 3 options per turn (will go into more detail below):

1. Make a Higher Bet
2. Call Bullshit
3. Call Exact

Special Rule: 1s are Wildcards this means that a 1 can represent a 2, 3, 4, 5, and 6

1. Make a Higher Bet
   When making a bet, you will have to bet how many dice of a certain number you think are on the table cumalitively. As an example, you may call two 3s. By making this call you are indicating that within everyone's dice, you think that there are AT LEAST two 3's or 1's (since they are Wildcards) amongst all dice.
   Then the next person can make a call. To make a higher call in this scenario, you will either have to up the quantity of dice or bet a greater die face while having the same quantity.

Ex 1:
Player 1: Two 3s
Player 2's Options are: Two 4s, Two 5s, Two 6s or he could go Three 2s, Three 3s, and so forth
Player 2 cannot bet Two 2s though because the dice face is lower than the previous bet but can bet Three 2s because the quantity of dice he is betting is larger.

Now since 1s are wildcards they are worth a little more than double when betting, here is an example of what I mean.
Ex 2:
Player 1: Two 3s
Player 2: Two 6s (This is a viable call since he is betting a higher die value)
Player 3: One 1 (This is a viable call since 1s are worth a little over double)
Player 1: Three 2s (This is a viable call because 1s are only worth just a little over double)
Player 2: Four 6s (You can bet as high as you want as longer as it is more than the previous call)
Player 3: Two 1s (Like we talked about previously, 1s are just worth a little more than double)
Player 1: Five 2s (This is the next lowest call to be made)

2. Calling Bullshit
   This call is to be made when you don't think that there are at least the number of dice on the table that the previous person has bet on. Once you call Bullshit, everyone lifts their cup to reveal their dice. If you are correct, and there aren't enough dice then the person you called Bullshit on loses a die. If you are wrong in your call, you lose a die yourself.

Ex 3 (Correct Bullshit Call):
Player 1: Three 3s
Player 2: Two 1s (This is a higher call because 1s are worth just a bit over double)
Player 3: Bullshit
Now everyone reveals their dice, Player 1 had Zero 1s, Player 2 had One 1, and Player 3 had Zero 1s. Therefore cummalitively, there is only One 1 on the table and Player 2 would lose a die because he was wrong.

Ex 4 (Incorrect Bullshit Call):
Player 1: Three 3s
Player 2: Four 2s (This is a higher call because you are calling a higher quantity of dice)
Player 3: Bullshit
Now everyone reveals their dice, Player 1 had One 1 and One 2, Player 2 had Two 2s and Zero 1s, and Player 3 had Zero 2s or 1s. Therefore cummalitively, there is Four 2s on the table and Player 3 would lose a die because there were at least Four 2s.
As a sidenote, if there were greater than Four 2s cummatively then Player 3 would still lose a die because when you are making a bet, you are betting that there are AT LEAST that number of dice.

3. Calling Exact
   This is a call when you think that there are exactly that number of dice on the table. This is a risky call but a rewarding call. If you get an Exact call correct you gain a die, whereas if you get it wrong then you lose a die.

Ex 5 (Correct Exact Call):
Player 1: Five 2s
Player 2: Three 1s
Player 3: Exact
Now everyone reveals their dice, Player 1 had One 1, Player 2 had One 1, and Player 3 had One 1. Therefore cummalitively, there is only Three 1s on the table and Player 3 would gain a die because he was right.

Ex 6 (Incorrect Exact Call):
Player 1: Five 2s
Player 2: Six 2s
Player 3: Exact
Now everyone reveals their dice, Player 1 had Four 2s, Player 2 had Two 2s, and Player 3 had One 2. Therefore cummalitively, there is Seven 2s on the table and Player 3 would lose a die because there were more than Six 2s.

Gameplay:
Whoever gains/loses a die will be the first person to go in the next round. They can make any bet that they would like.

Ex 7 (Overall Gameplay in a 3 Person Game):
Player 1: One 2
Player 2: Two 2s
Player 3: Two 4s
Player 1: Three 2s
Player 2: Three 4s
Player 3: Bullshit
Now everyone reveals their dice, Player 1 had One 1, Player 2 had 1 4, and Player 3 had Zero 4s. Therefore cummalitively, there is only 2 1s or 4s on the table and Player 2 would lose a die because he was wrong.
Now everyone rerolls their dice and Player 2 starts the game.
Player 2: Three 5s
Player 3: Four 4s
Player 1: Exact
Now everyone reveals their dice, Player 1 had One 1 and One 4, Player 2 had No 4s, and Player 3 had Two 4s. Therefore cummalitively, there is Four 4s on the table and Player 1 would gain a die because he was right.
Now everyone rerolls their dice and Player 1 starts the game.
