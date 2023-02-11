import Image from "next/image"
import Logo from "../static/logo.png"
const styles = {

    wrapper: "md:p-5 justify-between bg-[#FCC017] md:flex",
    bannerNav: "md:gap-5 space-y-2 md:p-2 justify-center justify-between items-center flex flex-col text-sm md:flex-row md:space-y-0",
    logoContainer: "flex align-center justify-center md:justify-start object-contain cursor-pointer",
    accentedButton: "bg-black text-white rounded-full cursor-pointer"

}

const Header = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.logoContainer}>
              <Image 
              src={Logo}
              width={200}
              height={20}
              />
            </div>
            <div className={styles.bannerNav}>
              <div className="cursor-pointer">Our Story</div>
              <div className="cursor-pointer">Membership</div>
              <div className="cursor-pointer">Write</div>
              <div className="cursor-pointer">Sign In</div>
              <div className={styles.accentedButton}>Get Started</div>
            </div>
            
        </div>
    )
}
export default Header

