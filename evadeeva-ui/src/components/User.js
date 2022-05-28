import NavUser from "./User/NavUser"
import DetailUser from "./User/DetailUser"
import NavHeader from "./HomeComponents/Header"
import FindShop from "./HomeComponents/Subscribe"
import Footer from "./HomeComponents/Footer"
const User = () => {
    window.scrollTo(0,0)
    return (
        <div>
            <NavHeader />
            <NavUser />
            <DetailUser />
            <FindShop />
            <Footer />
        </div>
    )
}

export default User