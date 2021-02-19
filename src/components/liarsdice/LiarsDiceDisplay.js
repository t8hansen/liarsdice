/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "ignoreComments": true }]*/
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {Centered, BottomRight} from '../styling/centered';
import {Button, KIND, SIZE} from 'baseui/button';
import {Input} from 'baseui/input';
import {Select} from 'baseui/select';
import {Block} from 'baseui/block';
import {Textarea} from 'baseui/textarea';

import Container from '../LayoutComponents/container';
import Flex from '../LayoutComponents/flexLayout';
import FlexCell from '../LayoutComponents/flexCell';

import {rollDie} from './rollDie';
import one from '../../photos/1.gif';
import two from '../../photos/2.jpg';
import three from '../../photos/3.gif';
import four from '../../photos/4.gif';
import five from '../../photos/5.gif';
import six from '../../photos/6.gif';
// import pokerTable from '../../photos/poker-table.jpg';

import {
  NumberOptions,
  NumberOfPlayersOptions,
  PHOTO_MAP,
  PHOTO_MAP_CONST}
  from './const.js';
const numWords = require('num-words');

const getPhoto = (number, i) => {
  return (
    <img
      key={i}
      src={PHOTO_MAP[number]}
      alt={PHOTO_MAP_CONST[number]}
      height={100}
      width={100}
    />
  );
};

// <img src={pokerTable} height={400} width={700} />

export const LiarsDiceDisplay = () => {
  const [numPlayers, setNumPlayers] = useState([{label: '1', id: 1}]);
  const [currentNumberOfDie, setCurrentNumberOfDie] = useState(5);
  const [diceNumbers, setDiceNumbers] = useState([]);
  const [betQuantity, setBetQuantity] = useState('');
  const [betNumber, setBetNumber] = useState([{label: '1', id: '1'}]);
  const [logString, setLogString] = useState('');
  const [betLog, setBetLog] = useState({quantity: '0', dieNumber: '0'});
  const [rolled, setRolled] = useState(false);

  const reRollDice = () => {
    setDiceNumbers(rollDie(currentNumberOfDie));
    setRolled(true);
  };

  // will be false if it is a valid bet
  const bettingRulesNotFollowed = (quantity, dieNumber) => {
    const currentQuantity = parseInt(quantity);
    const currentDieNumber = parseInt(dieNumber);

    const previousQuantity = parseInt(betLog['quantity']);
    const previousDieNumber = parseInt(betLog['dieNumber']);

    if (previousDieNumber === 0 && previousQuantity === 0) {
      return false;
    } else if (currentDieNumber !== 1 &&
       previousDieNumber !== 1 &&
      (currentQuantity > previousQuantity ||
         currentDieNumber > previousDieNumber)) {
      // false due to bet quantity or bet number being larger
      return false;
    } else if (currentDieNumber === 1 &&
      previousDieNumber === 1 &&
      currentQuantity > previousQuantity) {
      // false due to 1s being worth more than double
      return false;
    } else if (currentDieNumber === 1 &&
    previousDieNumber !== 1 &&
    currentQuantity * 2 > previousQuantity) {
      // false due to 1s being worth more than double
      return false;
    } else if (currentDieNumber !== 1 &&
    previousDieNumber === 1 &&
    currentQuantity > previousQuantity * 2) {
      // false due to 1s being worth more than double
      return false;
    } else {
      return true;
    }
  };

  const betLogString = (quantity, dieNumber, player) => {
    if (quantity === '') {
      setLogString(`${logString}
    Please enter in the quantity of dice`);
    } else if (bettingRulesNotFollowed(quantity, dieNumber)) {
      setLogString(`${logString}
    Please enter in a higher bet than the previous call`);
    } else {
      setLogString(`${logString}
    ${player} has bet ${numToWordCapitalize(quantity)} ${dieNumber}s`);
      setBetLog({quantity: quantity, dieNumber: dieNumber});
    }
  };

  const exactLogString = (player) => {
    setLogString(`${logString}
    ${player} has called Exact`);
    setRolled(false);
  };

  const bullshitLogString = (player) => {
    setLogString(`${logString}
    ${player} has called Bullshit`);
    setRolled(false);
  };

  const nextHighestOnesCall = () => {
    if (parseInt(betLog['dieNumber']) === 0) {
      return 1;
    } else if (parseInt(betLog['dieNumber']) === 1) {
      return parseInt(betLog['quantity']) + 1;
    } else {
      return Math.ceil(parseInt(betLog['quantity']) / 2);
    }
  };

  const nextHighestCall = () => {
    if (parseInt(betLog['dieNumber']) === 0) {
      return [1, 2];
    } else if (parseInt(betLog['dieNumber']) === 6 &&
    parseInt(betLog['quantity']) % 2 === 1) {
      return [parseInt(betLog['quantity']) + 1, 2];
    } else if (parseInt(betLog['dieNumber']) === 6 &&
    parseInt(betLog['quantity']) % 2 === 0) {
      return [parseInt(betLog['quantity'])/2, 1];
    } else if (parseInt(betLog['dieNumber']) === 1) {
      return [parseInt(betLog['quantity']*2 + 1), 2];
    } else {
      return [betLog['quantity'], parseInt(betLog['dieNumber']) + 1];
    }
  };

  const bumpTheNumber = () => {
    if (parseInt(betLog['dieNumber']) === 0) {
      return [1, 2];
    } else {
      return [parseInt(betLog['quantity']) + 1, parseInt(betLog['dieNumber'])];
    }
  };

  const numToWordCapitalize = (number) => {
    const numToWord = numWords(number);
    return numToWord.charAt(0).toUpperCase() + numToWord.slice(1);
  };

  const visualizeNumPlayers = (numberOfPlayers) => {
    const playerArray = [];
    for (let i = 1; i < numberOfPlayers + 1; i ++) {
      playerArray.push(
          <Container
            key = {i}
            height = {'30px'}
          >
            {`Player ${i}`}
            <Button
              height={'20px'}
              size={SIZE.mini}
            >
              Join
            </Button>
          </Container>);
    }
    return playerArray;
  };

  return (
    <Container>
      <Link to='/'>Homepage</Link>
      <Centered>
        <h1>
        Liars Dice
        </h1>
      </Centered>
      <Container>
        <Flex
          horizontalAlign = 'flex-end'
          verticalAlign = {'start'}
        >
          <FlexCell
            width={'70%'}
          >
            <Flex
              horizontalAlign = {'start'}
            >
              <FlexCell>
                <Container>
                  <Select
                    options = {NumberOfPlayersOptions}
                    value = {numPlayers}
                    onChange= {(e) => setNumPlayers(e.value)}
                    maxDropdownHeight={'200px'}
                    clearable={false}
                    height = {SIZE.mini}
                    disabled={rolled}
                  />
                  {visualizeNumPlayers(numPlayers[0].id)}
                </Container>
              </FlexCell>
              <FlexCell>
                <Container
                  borderStyle={'solid'}
                >
                  {diceNumbers.length > 0 ? (diceNumbers.map((number, i) => {
                    return (getPhoto(number, i));
                  })):(
                    <h3>
                      The Game is Starting
                    </h3>
                  )}
                </Container>
              </FlexCell>
            </Flex>
          </FlexCell>
          <FlexCell
            borderStyle={'solid'}
            marginTop={'0px'}
            width={'30%'}
          >
            <Container
              borderStyle={'solid'}
            >
              <Textarea
                value ={logString}
                disabled={true}
                overrides={{
                  Input: {
                    style: {
                      maxHeight: '600px',
                      minHeight: '300px',
                      minWidth: '300px',
                      resize: 'both',
                    },
                  },
                  InputContainer: {
                    style: {
                      maxWidth: '100%',
                      width: 'min-content',
                    },
                  },
                }}
              />
            </Container>
          </FlexCell>
        </Flex>
      </Container>
      <Container
        borderStyle='solid'
      >
        <Flex
          borderStyle='solid'
          horizontalAlign='space-between'
        >
          <Flex
            width={'50%'}
          >
            <Block
              horizontalAlign = 'start'
              verticalAlign= 'start'
              display='grid'
              gridTemplateColumns={`repeat(2,1fr)`}
              gridGap = 'scale10'
              height = 'auto'
              width = '100%'
            >
              <Container>
                {`Quick Bets`}
              </Container>
              <Button
                onClick={()=>{
                  betLogString(nextHighestOnesCall(), '1', 'Player 1');
                }}
                overrides={{BaseButton: {style: {width: '100%'}}}}
                disabled={!rolled}
              >
                {`${numToWordCapitalize(nextHighestOnesCall())} 1s`}
              </Button>
              <div style = {{height: '10px'}} />
              <Button
                onClick={()=>{
                  betLogString(
                      nextHighestCall()[0],
                      nextHighestCall()[1],
                      'Player 1');
                }}
                overrides={{BaseButton: {style: {width: '100%'}}}}
                disabled={!rolled}
              >
                {`${numToWordCapitalize(
                    nextHighestCall()[0])} ${nextHighestCall()[1]}s`}
              </Button>
              <div style = {{height: '10px'}} />
              <Button
                onClick={()=>{
                  betLogString(
                      bumpTheNumber()[0],
                      bumpTheNumber()[1],
                      'Player 1');
                }}
                overrides={{BaseButton: {style: {width: '100%'}}}}
                disabled={!rolled}
              >
                {`${numToWordCapitalize(
                    bumpTheNumber()[0])} ${bumpTheNumber()[1]}s`}
              </Button>
              <div style = {{height: '10px'}} />
              <div style = {{height: '10px'}} />
              <Container>
                Bet Amount
              </Container>
              <Container width='60px'>
                <Input
                  value = {betQuantity}
                  onChange= {(e) =>setBetQuantity(e.target.value)}
                  overrides={{ControlContainer: {style: {width: '10px'}}}}
                  size={SIZE.mini}
                />
              </Container>
              <div style = {{height: '10px'}} />
              <div style = {{height: '10px'}} />
              <Container>
                Number
              </Container>
              <Select
                options = {NumberOptions}
                value = {betNumber}
                onChange= {(e) => setBetNumber(e.value)}
                maxDropdownHeight={'200px'}
                clearable={false}
                height = {SIZE.mini}
              />
              <div style = {{height: '10px'}} />
              <Button
                onClick={()=>{
                  betLogString(betQuantity, betNumber[0].id, 'Player 1');
                }}
                overrides={{BaseButton: {style: {width: '60px'}}}}
                disabled={!rolled}
              >
                Bet
              </Button>
            </Block>

          </Flex>
          <Block
            horizontalAlign = 'start'
            verticalAlign= 'start'
            display='grid'
            gridTemplateColumns={`repeat(1,1fr)`}
            gridGap = 'scale10'
            height = 'auto'
            width = '25%'
          >
            <FlexCell>
              <Button
                onClick={()=>{
                  bullshitLogString('Player 1');
                }}
                overrides={{BaseButton: {style: {width: '60px'}}}}
                disabled={!rolled || betLog['dieNumber'] === '0'}
              >
                Bullshit
              </Button>
            </FlexCell>
            <div style = {{height: '10px'}} />
            <FlexCell>
              <Button
                onClick={()=>{
                  exactLogString('Player 1');
                }}
                overrides={{BaseButton: {style: {width: '60px'}}}}
                disabled={!rolled || betLog['dieNumber'] === '0'}
              >
                {'Exact   '}
              </Button>
            </FlexCell>
            <div style = {{height: '10px'}} />
            <FlexCell>
              <Button
                onClick={()=>{
                  reRollDice();
                }}
                disabled={rolled}
              >
                Roll
              </Button>
            </FlexCell>
          </Block>
        </Flex>
      </Container>
    </Container>
  );
};

export default LiarsDiceDisplay;
