import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {

  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description: "Lorem Ipsum id eu amet amet dolor enim Feugiat in lectus pellentesque. Ullemcorper et. "
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100%'s of Diverse Classes",
      description: "Lorem Ipsum id eu amet amet dolor enim Feugiat in lectus pellentesque. Ullemcorper et. "
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description: "Lorem Ipsum id eu amet amet dolor enim Feugiat in lectus pellentesque. Ullemcorper et. "
    },
  ]

  const container = {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.2 }
      }
  }
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >

          <motion.div 
            className="md:mt-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x:-50, },
                visible: { opacity: 1, x: 0}
            }}
            >
            <Htext>MORE THAN JUST A GYM</Htext>
            <p className="mt-5 text-sm "> 
              We provide world class fitness class fitness equipment, trainers and classes to get you to your ultimate
              fitness goal with ease. We provide care into each and every member.
            </p>
          </motion.div>

            {/* Benefits */}
            <motion.div
              className="md:flex items-center justify-between gap-8 mt-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
            >
              { benefits.map((benefit: BenefitType) => (
                  <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                  />
              ))}
            </motion.div>

            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex"> 

              {/* Graphics */}
              <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitPageGraphic}
              />

              {/* Description */}
              <div>
                {/* Title */}
                <div className="relative">

                  <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">

                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5}}
                      variants={{
                        hidden: { opacity: 0, x: 50},
                        visible: { opacity: 1, x: 0}
                      }}
                      >
                      <Htext>
                        MILLIONS OF HAPPY MEMEBERS GETTING {" "}
                        <span className="text-primary-500">FIT</span>
                      </Htext>
                    </motion.div>
                  </div>
                </div>
                {/* Descript */}
                  <motion.div
                    initial= "hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: {opacity: 0, x: 50},
                      visible: {opacity: 1, x: 0 }
                    }}

                  >
                  <p className="my-5">
                    Join us for our Total Body Blast class, designed to push your limits and ignite your fitness journey! This high-energy workout combines strength training, cardio, and flexibility exercises for a comprehensive full-body experience. Suitable for all fitness levels, each session will challenge you with a mix of dynamic movements, resistance training, and engaging routines to keep you motivated.
                  </p>

                  <p className="mb-5">
                  Instructors will guide you through proper techniques and modifications, ensuring you get the most out of each exercise while minimizing the risk of injury. Come ready to sweat, have fun, and connect with a supportive community of fellow fitness enthusiasts.
                  </p>
                  </motion.div>
                {/* Button */}

                  <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z[-1] before:content-sparkles">
                      <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                      </ActionButton>
                    </div>
                  </div>
              </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits