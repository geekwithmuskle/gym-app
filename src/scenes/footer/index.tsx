import Logo from "@/assets/Logo.png"

type Props = {}

const Footer = ({}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">

          {/* Box 1 */}
          <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              &copy; Evogym All Rights Reserved
            </p>
          </div>
          {/* Box 2 */}
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold"> Links </h4>
            <p className="mt-5">et. dullam noris sectuer ueur fallam</p>
            <p className="mt-5">et. dullam noris sectuer ueur fallam</p>
            <p className="mt-5">Ullam dot et. nectuer parllem ser</p>
          </div>
          
          {/* Box 3 */}
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="mt-5">Fullam dotnoris sectuer ueur fallam</p>
            <p className="mt-5">et. dullam noris sectuer ueur fallam</p>
            <p className="mt-5">Ullam dot et. nectuer parllem ser</p>
          </div>
         

        </div>
    </footer>
  )
}

export default Footer