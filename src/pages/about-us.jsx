import { Header } from "@components";
import SubHeader from "@components/SubHeader";
import { Footer, MoreInfo } from "@pages";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div>
      <Header />
      <main className="w-[89%] mx-auto mb-10">
        <SubHeader
          title={"About Certitude Care Services"}
          img={"bg-about-CCS-bg"}
        />
        <section className="bg-dandelion font-poppins text-eerie-80 space-y-20 px-16 py-20">
          <div className="flex gap-16">
            <div className="relative min-w-[300px] w-[40%] h-[300px]">
              <Image src="/who-we-are.png" alt="who-we-are" fill />
            </div>
            <div className="flex-1 [&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-2xl [&>h4]:font-medium ">
              <h4>Who we are</h4>
              <p>
                Certitude Care is an established community based care and
                support provider. We provide Domiciliary Care and 24-hour
                Live-in Care in the comfort and security of your own home. In
                addition to this, we provide Day and Night Sitting Services and
                Respite Care.
              </p>
              <p>
                Our commitment to working with vulnerable adults, their families
                and carers enables us to develop person centred services that
                are sensitive to needs; adaptable to circumstances; innovative
                in delivery and clear in outcomes.
              </p>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex-1 [&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-2xl [&>h4]:font-medium ">
              <h4>What do we do?</h4>
              <p>
                We provide great quality domiciliary care for people within the
                comfort of their own homes.
              </p>

              <p>
                We have been providing excellent customer care for many years
                now and we take great pride in our service.
              </p>

              <p>
                Please feel free to call, email or meet us for an informal chat
                should you require any information about the services that we
                offer.
              </p>
            </div>
            <div className="relative min-w-[300px] w-[50%] h-[330px]">
              <Image src="/what-do-we-do.png" alt="what-do-we-do" fill />
            </div>
          </div>
          <div className="w-[50%] [&>p]:text-base [&>p]:leading-8 space-y-4 [&>p]:font-light [&>h4]:text-2xl [&>h4]:font-medium ">
            <h4>Specialisms/Services</h4>
            <p>
              Dementia, Learning disabilities, Mental health conditions,
              Personal care, Physical disabilities, Sensory impairments, Caring
              for adults under 65 yrs, Caring for adults over 65 yrs.
            </p>
          </div>
        </section>
        <section className="[&>*]:text-center [&>h4]:font-semibold [&>h4]:text-xl [&>h5]:text-lg [&>h5]:font-medium [&>p]:font-light [&>p]:leading-8 font-poppins max-w-[1124px] mx-auto space-y-4 my-6 py-10">
          <h4>CQC Inspected</h4>
          <p>
            Certitude Care services was registered by CQC on 23 March 2017. The
            assessment showed that our services <br /> assessed are likely to be
            safe, effective, caring, responsive and well-led. We are awaiting a
            full inspection from the <br /> CQC.
          </p>
          <h5>When inspected by them, the assessments could include:</h5>
          <p>
            site visits <br /> criminal record checks
            <br /> interviews with key managers
            <br /> a detailed review of how the service is run
            <br /> evidence to demonstrate that our service is safe, effective,
            responsive, caring and well-led
          </p>
          <p>
            Follow-up inspections of new services are undertaken regularly
            following registration.
          </p>
          <h4>Who runs this service</h4>
          <p>
            Certitude care Services is run by Certitude care Services <br /> Mrs
            Regina Ekie Taku <br /> Registered Manager and nominated individual
          </p>
          <h4>Specialisms/services</h4>
          <p>
            Dementia, Learning disabilities, Mental health conditions, Personal
            care, Physical disabilities, Sensory impairments, <br /> Caring for
            adults under 65 yrs, Caring for adults over 65 yrs
          </p>
          <Image
            src="/cqc.png"
            width={190}
            height={60}
            alt="cqc.png"
            className="mx-auto"
          />
        </section>
        <MoreInfo />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;