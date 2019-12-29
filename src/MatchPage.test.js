import React from 'react';
import {MatchPage} from './MatchPage'
import {UserContext} from'./contexts/UserContext';

import {render, screen} from '@testing-library/react';


test('initially should display "calculating..." message', () => {
    render(<UserContext.Provider value={{users: []}}><MatchPage/></UserContext.Provider>)
    expect(screen.queryByText('your match is:')).toBeNull()
    expect(screen.queryByText('calculating...')).not.toBeNull()
});