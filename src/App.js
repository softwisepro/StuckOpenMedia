import React from 'react';
import Layout from './hocs/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import Questions from './container/pages/Questions';
import Tags from './container/pages/Tags';
import Popular from './container/pages/Popular';
import Timeline from './user/Timeline'

const App = () => {
  return (
      <Layout>
        <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/popular' element={<Popular/>} />

          <Route>
            <Route path='/user/jeck' element={<Timeline />} />
          </Route>

        </Routes>
        </div>
      </Layout>
  )
}

export default App