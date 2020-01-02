import React from 'react';
import {MatchPage} from './MatchPage'
import {UserContext} from'../contexts/UserContext';

import {render, screen, waitForElement} from '@testing-library/react';


test('initially should display "calculating..." message', () => {
    render(<UserContext.Provider value={{users: []}}><MatchPage/></UserContext.Provider>)
    expect(screen.queryByText('your match is:')).toBeNull()
    expect(screen.queryByText('calculating...')).not.toBeNull()
});

test('after calculating should display match', async () => {
  const  users =  [{birthday: '12/1/1990', fullName: 'Albert'}];
  const {queryByText, container} = render(<UserContext.Provider value={{users}}><MatchPage/></UserContext.Provider>)
  await waitForElement(() => queryByText('your match is:'),
    {container}
  );
  expect(document.querySelector('.container').textContent).toBe('Albert');
    
});