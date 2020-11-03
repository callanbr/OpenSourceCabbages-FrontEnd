import React from "react";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import { Image, Intro, H2, Container, Banner } from "../../Global";

export default function About(props) {
  const Bio = styled.div`
    padding: 60px 20px 5px;
    margin: 20px;
  `;

  const slideInLeftAnimation = keyframes`${slideInLeft}`;
  const SlideDiv = styled.div`
    animation: 2s ${slideInLeftAnimation};
  `;

  return (
    <>
      <Banner>
        <SlideDiv>
          <Intro>Meet The Cabbages!</Intro>
        </SlideDiv>
      </Banner>
      <Container>
        <Bio>
          <Image
            src="https://i.ibb.co/kXL09SP/brain.jpg"
            alt="Lincoln"
            className="image"
          ></Image>
          <H2>Lincoln Gage</H2>
          <p>
            Chupa chups macaroon sesame snaps sweet carrot cake brownie. Cotton
            candy powder tart gummies fruitcake halvah danish. Sweet roll
            topping gummies dessert dessert gummi bears gummi bears sugar plum.
            Carrot cake sugar plum soufflé cake brownie pie cake. Chocolate
            liquorice chocolate. Cotton candy cake tootsie roll jujubes pastry
            icing danish. Cake gummi bears wafer candy jelly carrot cake jelly
            beans. Powder jelly pastry. Powder carrot cake donut pie donut.
            Icing caramels chocolate cake gummies sweet roll candy jujubes
            croissant. Marshmallow croissant bonbon sesame snaps dragée wafer
            dragée. Jujubes croissant danish. Pastry jujubes carrot cake sweet
            dragée tiramisu bear claw. Brownie wafer cake sweet roll danish
            carrot cake bonbon liquorice halvah.
          </p>
        </Bio>

        <Bio>
          <Image
            src="https://i.ibb.co/q5tz22J/123677790-715174182710362-6615206298440617095-n.jpg"
            alt="Billy"
            className="image"
          ></Image>
          <H2>Billy Le</H2>
          <p>
            What sets me apart than other applicants is my willingness to learn,
            and grow from each experience. Upon seeing each experience you will
            see the applicant utilizing a mix of each end every encounter to
            ensure that their employers and customers are given top quality work
            and consideration. His skill will include out of the box thinking,
            excellent time utilization, and teamwork. Though being able to
            approach problems and solutions on my own. Teamwork and comradarie
            is a very important value to me. Developing more positive relations
            with teammates and customers is one of the core parts of making a
            more productive and safe workspace. If anything would set me apart
            from other applicants would be my ability to become a team player as
            well as utilizing most if not all prior experiences to ensure top
            quality work.
          </p>
        </Bio>

        <Bio>
          <Image
            src="https://i.ibb.co/CQtwZWJ/Anakaheadshot.jpg"
            alt="Anaka"
            className="image"
          ></Image>
          <H2>Anaka Norfleet</H2>
          <p>
            What sets me apart from everyone else stems from my background in
            nursing. During my 14+ years as an ER nurse, I have honed my
            communication skills by greeting people on one of the worst days of
            their lives, calming their fears and building their trust by
            employing active listening and then using the information obtained
            to combine with my technical skills to not only find a solution that
            meets their needs, but also allows me to anticipate needs they may
            not even know they have yet. I believe the key components of
            customer service include not only listening to the customer, but
            knowing what questions to ask in order to dig a little deeper. What
            a person perceives as their biggest problem is often not the root of
            the actual problem. My process of extracting information, using
            critical thinking to evaluate and prioritize what’s important and
            then employing the necessary technical skills to solve the problem
            is what enables me to efficiently create a solution to whatever
            problem a customer may experience.
          </p>
          <p>
            During my time as an ER nurse, I have been challenged many times to
            think outside the box in order to treat unique situations that
            people sometimes find themselves in. Never knowing what is coming
            through the door at any moment has prepared me to remain calm and
            think clearly under extremely stressful situations. Critical
            thinking coupled with creativity is the basis of ER nursing.
          </p>
          <p>
            I believe this combination of skills is not only rare to find in
            someone else, but it also extremely valuable to have in a software
            engineer.
          </p>
        </Bio>
      </Container>
    </>
  );
}
