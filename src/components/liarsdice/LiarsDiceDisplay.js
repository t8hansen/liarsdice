/* eslint-disable linebreak-style */
/* eslint max-len: ["error", { "ignoreComments": true }]*/
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {Centered, BottomRight} from '../styling/centered';
import {Button, KIND, SIZE} from 'baseui/button';
import {Input} from 'baseui/input';
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
import pokerTable from '../../photos/poker-table.jpg';

const PHOTO_MAP = {
  1: one,
  2: two,
  3: three,
  4: four,
  5: five,
  6: six,
};

const PHOTO_MAP_CONST = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
};

const getPhoto = (number, i) => {
  return (
    <FlexCell
      marginTop = {'100px'}
    >
      <img
        key={i}
        src={PHOTO_MAP[number]}
        alt={PHOTO_MAP_CONST[number]}
        height={100}
        width={100}
      />
    </FlexCell>
  );
};

// <img src={pokerTable} height={400} width={700} />

export const LiarsDiceDisplay = () => {
  const [currentNumberOfDie, setCurrentNumberOfDie] = useState(5);
  const [diceNumbers, setDiceNumbers] = useState([]);
  const [betQuantity, setBetQuantity] = useState('');
  const [betNumber, setBetNumber] = useState('');
  const [logString, setLogString] = useState('');

  const reRollDice = () => {
    setDiceNumbers(rollDie(currentNumberOfDie));
  };

  const betLogString = (quantity, dieNumber, player) => {
    setLogString(`${logString}
    ${player} has bet ${quantity} ${dieNumber}s`);
  };

  const exactLogString = (player) => {
    setLogString(`${logString}
    ${player} has called Exact`);
  };

  const bullshitLogString = (player) => {
    setLogString(`${logString}
    ${player} has called Bullshit`);
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
          horizontalAlign = {'flex-end'}
          verticalAlign = {'start'}
        >
          <FlexCell
            width={'70%'}
          >
            <Flex
              horizontalAlign = {'center'}
            >
              {diceNumbers.length > 0 ? (diceNumbers.map((number, i) => {
                return (getPhoto(number, i));
              })):(
                <h3>
                  The Game is Starting
                </h3>
              )}
            </Flex>
          </FlexCell>
          <FlexCell
            borderStyle={'solid'}
            marginTop={'0px'}
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
      <Container>
        <Flex>
          <FlexCell>
            <Input
              value = {betQuantity}
              onChange= {(e) =>setBetQuantity(e.target.value)}
            />
            <Input
              value = {betNumber}
              onChange= {(e) =>setBetNumber(e.target.value)}
            />
            <Button
              onClick={()=>{
                betLogString(betQuantity, betNumber, 'Player 1');
              }}
              style={{marginLeft: '90%'}}
            >
              Bet
            </Button>
          </FlexCell>
        </Flex>
      </Container>
      <BottomRight>
      </BottomRight>
      <BottomRight>
        <Button
          onClick={()=>{
            bullshitLogString('Player 1');
          }}
          style={{marginLeft: '90%'}}
        >
          Bullshit
        </Button>
      </BottomRight>
      <BottomRight>
        <Button
          onClick={()=>{
            exactLogString('Player 1');
          }}
          style={{marginLeft: '90%'}}
        >
          Exact
        </Button>
      </BottomRight>
      <BottomRight>
        <Button
          onClick={()=>{
            reRollDice();
          }}
          style={{marginLeft: '90%'}}
        >
          Roll
        </Button>
      </BottomRight>
    </Container>
  );
};

export default LiarsDiceDisplay;
