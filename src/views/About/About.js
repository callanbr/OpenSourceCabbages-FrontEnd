import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';
import { Image, Intro, H2, Container, Banner } from '../../Global';

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
            src='https://media-exp1.licdn.com/dms/image/C5603AQGUUNONrFZOlQ/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=T1pTDKpijvePZIkTqRY3gjOG5AtbZoT6HChpiqPdQdw'
            alt='Lincoln'
            className='image'
          ></Image>
          <H2>Lincoln Gage</H2>
          <p>
            A highly qualified technician with over five years of experience in
            computer systems, who can adapt to different situations as needed
            and decide what action to take with dependability and great
            judgement. Possessing skills that allow me to lead a team to
            accomplish the goals required and to delegate in order to achieve
            our tasks in a timely manner. Quick to learn new systems and
            techniques in order to troubleshoot or create systems needed to
            improve current operations. Worked previously with systems such as
            Cisco, DISA and familiar with their equipment.
          </p>
          <p>
            Skills
            <br />
            Troubleshooting systems | Create Infrastructure | Program
            switches/servers | Repair electronics | Floor Equipment Manager
            Review script and coding | Server Operation | Server Troubleshooting
            | Maintained Private server | Python | Azure | C# | Java | ASP.Net
            Core/Framework SQL | React | HTML | Maven | CSS | JavaScript | Sign
            Language
          </p>
          <p>
            Experience
            <br />
            Woz-U Online Coding School
            <br />
            September 2020 – November 2020 Class that taught me Java, Css,
            JavaScript, HTML, NoSQL, Maven, React, and furthered my
            understanding of SQL.
          </p>
          <p>
            Microsoft Software and Systems Academy Course
            <br />
            July 2020 – November 2020
            <br />
            Class that taught me C#, Azure, SQL, and ASP.NET over the course of
            five months. Creating, troubleshooting and understanding programming
            systems.
          </p>
          <p>
            Telephone and Personal Computer Repairman • United States Marine
            Corps
            <br />
            2018 – July 2020
            <br />
            Created and instructed co-workers on a new troubleshooting method
            for Uninterruptible Power Supplies, saving the Marine Corps a
            countless amount of money in replacement costs.
          </p>
          <p>
            Technician Controller • United States Marine Corps
            <br />
            2016 – 2018
            <br />
            Identified and installed new infrastructure to initialize an
            effective security measure, implementing identification scanning
            systems encompassing eight diverse Department of Defense
            installations on Okinawa, Japan.
          </p>
        </Bio>

        <Bio>
          <Image
            src='https://i.ibb.co/q5tz22J/123677790-715174182710362-6615206298440617095-n.jpg'
            alt='Billy'
            className='image'
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
            src='https://i.ibb.co/CQtwZWJ/Anakaheadshot.jpg'
            alt='Anaka'
            className='image'
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
