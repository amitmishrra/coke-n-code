// import Footer from "./Components/footer"
import Header from "./Components/Header"

const CommonContainer = ({children}) =>{
return(
    <>
    <Header/>
    {children}
    {/* <Footer/> */}
    </>
)
}

export default CommonContainer