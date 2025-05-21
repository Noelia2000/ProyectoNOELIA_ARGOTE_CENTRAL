import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../ui"
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { LoginPage } from "../auth"
import { DcPage } from "../heroes/pages/DcPage"

export const AppRouter = () => {
  return (
    <>

    <Navbar/>

    <Routes>
        <Route path ="marvel" element={ <MarvelPage />}/>
        <Route path="dc" element={<DcPage/>}/>

        <Route path="dc" element={<LoginPage/>}/>

        <Route path="/" element={<Navigate to="/marvel"/>}/>

    </Routes>
    
    </>
  )
}
