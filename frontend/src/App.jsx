import {Navbar} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <Router>
            <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>

              <Route path="/content" element={<Content/>}/>
              <Route path="/content/:id" element={<ContentDetails/>}/>

              <Route
                path="/user/*"
                element={
                  <ProtectedRoute>
                    <UserLayout/>
                  </ProtectedRoute>
                }
                >
                  <Route
                    path="reader/*"
                    element={
                    <ProtectedRoute allowedRoles={['reader','admin','admin']}>
                      <ReaderProfile/>
                    </ProtectedRoute>
                    }
                  >
                  </Route>
                  <Route
                    path="creator/*"
                    element={
                    <ProtectedRoute allowedRoles={['creator','admin','reader ']}>
                      <CreatorProfile/>
                    </ProtectedRoute>
                    }
                  >
                  </Route>
              </Route>

              <Route
                    path="/admin/*"
                    element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <AdminLayout/>
                    </ProtectedRoute>
                    }
              />
              <Route path="*" element={<Home/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
