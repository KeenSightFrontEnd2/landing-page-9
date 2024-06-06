import Image from "next/image";

export default function Features() {
  const featureCards = {
    header: `Our Services`,
    subheader: `Our services are tailored for the digital age. From AI analytics to custom software, we're your partners in progress,dedicated to driving efficiency and fostering growth for your business.`,
    content: [
      {
        text: `Custom Algorithm Development`,
        subtext: `Tailored quantitative strategies designed to meet your unique trading goals and risk profile.`,
        image: "/images/custom-algo.svg",
      },
      {
        text: `Rigorous Backtesting and Optimization`,
        subtext: `Ensure the robustness and performance of your algorithms before live trading.`,
        image: "/images/rigor.svg",
      },
      {
        text: `Seamless Platform Integration`,
        subtext: `Effortlessly deploy your algorithms on your preferred trading platforms.`,
        image: "/images/seamless.svg",
      },
      {
        text: `Real-Time Monitoring and Alerts`,
        subtext: `Stay informed about your algorithm's performance with real-time monitoring and alerts.`,
        image: "/images/realtime.svg",
      },
      {
        text: `Ongoing Support and Maintenance`,
        subtext: `Benefit from our expert support team, ensuring optimal performance and adaptability in evolving markets.`,
        image: "/images/ongoing.svg",
      },
    ],
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              The majority our customers do not understand their workflows.
            </h2>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none "
            data-aos-id-blocks
          >
            {featureCards.content.map((card) => {
              return (
                <div
                  key={card.text}
                  className="relative flex flex-col items-center  p-8 rounded-xl bg-gradient-to-b from-purple-600 to-transparent to-[90%]"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-blocks]"
                >
                  <Image
                    src={card.image}
                    width={64}
                    height={64}
                    alt={card.text}
                    className="mb-4 filter invert "
                  />

                  <h4 className="h4 mb-2 text-center">{card.text}</h4>
                  <p className="text-lg text-gray-400 text-center">{card.subtext}</p>
                </div>
              );
            })}

           
          </div>
        </div>
      </div>
    </section>
  );
}
