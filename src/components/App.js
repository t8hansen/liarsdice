import React from 'react';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import {BrowserRouter, Route} from 'react-router-dom';
import LiarsDiceDisplay from './liarsdice/LiarsDiceDisplay.js';
import Homepage from './Homepage.js';

const engine = new Styletron();

const App = () => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div>
          <BrowserRouter>
            <div>
              <Route path ="/" exact component={Homepage} />
              <Route path ="/liarsdice" exact component={LiarsDiceDisplay} />
            </div>
          </BrowserRouter>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
