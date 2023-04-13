import { Header } from "@components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h3 className="text-center font-lemon text-4xl text-eerie-80 my-6">
          Certitude <span className="text-basil">Care Services</span>
        </h3>
        <HeroDisplay />
        <div className="w-[89%] mx-auto space-y-10 my-10">
          <DisplayFeatures />
          <WelcomeCertitude />
          <MoreInfo />
        </div>
      </main>
      <footer className="bg-basil">
        <div className="w-[89%] mx-auto py-10">
          <div className="bg-white">
            <Image
              src="/asset_cqclogo_update.png"
              alt="asset_cqclogo_update"
              width={180}
              height={57}
            />
            <h4>Certitude Care Service</h4>
            <div className="bg-light-silver-40">
              <p>CQC overall rating</p>
              <p>Good</p>
              <p>16 February 2023</p>
              <button>See the report</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
function HeroDisplay() {
  return (
    <div
      className={`${mainOne[0]} h-[550px] flex justify-center items-center bg-no-repeat bg-cover`}
    >
      <div className="bg-white-90 min-w-[650px] font-segoe py-9 space-y-6 text-maverick">
        <h5 className="text-center font-normal text-2xl">
          Trusted Providers of <br />
          <span className="text-4xl text-center font-bold">
            Support and home care <br /> for your loved ones
          </span>
        </h5>
        <button className="bg-basil px-4 py-2 w-fit mx-auto block">
          More about us
        </button>
      </div>
    </div>
  );
}
function DisplayFeatures() {
  return (
    <div className="flex font-poppins justify-center xl:justify-between items-center mx-auto gap-4 flex-wrap">
      {mainFeatures.map((item) => (
        <div className="w-[290px] text-center bg-basil" key={item.heading}>
          <div className="relative h-[250px]">
            <Image
              src={item.img}
              alt={item.heading}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="space-y-4 p-6">
            <h4 className="font-semibold text-xl">{item.heading}</h4>
            <p>{item["sub-heading"]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WelcomeCertitude() {
  return (
    <section className="bg-certitude-intro-bg h-[600px] bg-cover bg-no-repeat flex justify-center items-center font-poppins">
      <div className="w-[750px] mx-auto text-center text-white text-xl">
        <h4 className="text-4xl font-bold mb-6">
          Welcome to Certitude Care Service
        </h4>
        <p className="mb-1">
          Certitude Care Service recognises the importance of community, of
          supporting and influencing how we live within these communities now,
          in the past and in the future. Reto Care Ltd are proud to be on the
          Staffordshire/Cheshire boarders; we are the local independent care
          providers of choice.
        </p>
        <p>
          Our flexible approach to personal care means that we are also able to
          provide a comprehensive support service for respite or emergency
          situations – often a preferred alternative to moving into residential
          care. This can be a simple drop-in service or more comprehensive
          24-hour live-in care, depending upon the requirements of the customer
          and their family.
        </p>
        <button className="bg-aegean text-base font-segoe px-6 py-2 w-fit mx-auto mt-10 block">
          Find Out More
        </button>
      </div>
    </section>
  );
}
function MoreInfo() {
  return (
    <div className="bg-for-more-info-bg font-semibold py-14 font-poppins">
      <p className="text-3xl text-white text-center">
        For more information please contact{" "}
        <span className="underline decoration-2">+447533906575</span>
      </p>
    </div>
  );
}
const mainFeatures = [
  {
    img: "/specialist-services.png",
    heading: "Specialist Services",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
  {
    img: "/home-care.png",
    heading: "Home Care",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
  {
    img: "/community-assistant.png",
    heading: "Community Assistant",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
  {
    img: "/live-in-care.png",
    heading: "Live in Care",
    "sub-heading":
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has English.",
  },
];
const mainOne = [
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
  "bg-[url('/hero-section-bg.png')]",
];
