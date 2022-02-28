import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const AppRoutes: React.FC = () => {
  return (

    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='repositories' element={<Repository />} >
        <Route path=':paramsRepository' element={<Repository />}>
          <Route path=':paramsProjectName' element={<Repository />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes;
