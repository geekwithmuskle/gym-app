import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import { ClassType } from "@/shared/types";
import Klass from "./Klass";


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ourClasses = ({ setSelectedPage}: Props) => {
    const klasses: Array<ClassType> = [
        {
            name: "Weight Training Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image1,
          },
          {
            name: "Yoga Classes",
            image: image2,
          },
          {
            name: "Ab Core Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image3,
          },
          {
            name: "Adventure Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image4,
          },
          {
            name: "Fitness Classes",
            image: image5,
          },
          {
            name: "Training Classes",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: image6,
          },
    ]
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div 
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >

            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden:  { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className="md:w-3/5">
                    <Htext>
                        OUR CLASSES
                    </Htext>

                    <p className="py-5">
                    Instructors will guide you through proper techniques and modifications, ensuring you get the most out of each exercise while minimizing the risk of injury. Come ready to sweat, have fun, and connect with a supportive community of fellow fitness enthusiasts.Whether you’re looking to build strength, improve endurance, or just shake up your routine, Total Body Blast is the perfect way to achieve your fitness goals. Sign up today and take the first step toward a healthier you!
                    </p>
                </div>

            </motion.div>

                <div
                    className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden"
                >
                    <ul className="w-[2800px] whitespace-nowrap">
                        {klasses.map((item: ClassType, index) => (
                            <Klass 
                                key={index}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>

        </motion.div>
    </section>
  )
}

export default ourClasses