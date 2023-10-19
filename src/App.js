import me from "./me.png";
import React, { useEffect } from "react";
import "./App.css";
import { ConnectModal } from "./ConnectModal";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Journey from "./Journey";
import { Projects as Proj } from "./Projects";

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBubbleClick = (sectionId) => {
    setModalContent(sectionId);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // Disable scrolling behavior
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling behavior when the component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const bubbles = document.getElementsByClassName("bubble");
    const originalZIndices = [];

    // Store original z-indices
    for (let i = 0; i < bubbles.length; i++) {
      originalZIndices.push(bubbles[i].style.zIndex);
      bubbles[i].style.zIndex = 0;
    }

    return () => {
      // Restore original z-indices when the component unmounts or modal closes
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].style.zIndex = originalZIndices[i];
      }
    };
  }, [isModalOpen]);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={me} />
        <h1>Paul Murphy</h1>
        <ConnectModal />
      </header>
      <div className="bubble bubble1" onClick={() => openModal("section1")}>
        About Me
      </div>
      <div className="bubble bubble2" onClick={() => openModal("section2")}>
        Education
      </div>
      <div className="bubble bubble3" onClick={() => openModal("section3")}>
        Experience
      </div>
      <div className="bubble bubble4" onClick={() => openModal("section4")}>
        Projects
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay className="overlay" />
        <ModalContent>
          <ModalBody>
            {modalContent === "section1" && <AboutMe />}
            {modalContent === "section2" && <Education />}
            {modalContent === "section3" && <Experience />}
            {modalContent === "section4" && <Projects />}
          </ModalBody>
          <ModalFooter>
            <ModalCloseButton className="modal-button" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;

const AboutMe = () => (
  <>
    <div id="section1" className="section section1">
      <header className="Section-header">About Me</header>
      <Box className="me-content">
        <p>
          Pauly from South Bend. Went to Saint Joseph High School and played
          lacrosse. Played travel year round through high school but hung up the
          cleats when i went to college. Decided to go to Purdue since i Had
          family who said good things. Went focused on investment banking and to
          study economics/finance. Found a passioin for data
          analytics/programming. Never thought I could do it but turns out its a
          lot of fun to build. Joined Kappa Sigma Fraternity (Chi Chapter) and
          was President of the Alpha Omicron Pledge Class. After my sophomore
          year I interned in indianapolis for Indiana Farm Bureau Insurance. Did
          a lot of market research and automation. While in indy found a lot of
          entreprenuerial inspirations from{" "}
          <a>Robert Kiyosaki Rich Dad, Poor Dad.</a>
        </p>
        <p>
          Start a real estate firm with my older brother and we bought renovated
          and rented out multiple units in the indianapolis area. He was the
          money guy i was ops. We both hustled tho. While going back and forth
          from purdue to indy to work for MJM RE during my junior year I really
          started to solidify a massive change from being quite out there to
          being much more academic and business focused. Around this time I got
          exposed to Crypto currency mainly ethereum and this has been a great
          development. I began to learn how to program smart contracts and
          interact with the chain via scripts and web apps. I continued to work
          on these and a few others through the rest of my college career. I ran
          the Anvil start up career fair bringing over 30 startup companies from
          around the nation to Purdue to recruit interns and team. We mainly
          would build and hangout together as a entr minded group. Many founded
          and have exited from the anvil. Fast forward to graduation and after
          moving a lot of academic focuses from econ/banking/ib to data and
          development i still finished my BS in economics and graduated from
          Krannert. I accepted a position from Accelerated Growth Advisors, a
          small cosulting practice in the heart of Chicago, serving smb, npo and
          publicly traded companies accounting and data needs. this was a great
          experience where for a bit over a year i drank from a firehose
          learning data warehouse development, business intelligence techniques,
          developing my ability present and persuade. While it was a good
          experience, the company was later acquired and that marked the end of
          my time there. After this I went after my entr dreams of founding a
          fintech/blockchain company. I started consulting on a few smaller
          projects I discovered via internet acquaintances. After getting a bit
          of a footing I developed Cribz DAO and the product Cribz HELOC which
          is a platform that can process a home equity line of credit and
          distribute the credit via crypto currency on chain. This was build on
          avalanche and was never able to go live due to concerns around
          legality of the forclosure process we had defined. While I worked on
          Cribz fro a bit longer I soon shelved it with hopes of revisting in
          the future to help redefine how property owners can take a stronger
          grasp of there equity. See projects for more. After this i continued
          consulting on new and old projects of peers. Over the past couple
          years I have grown significantly in my developemnt skill set and
          recently started applying to larger companies for employment so that i
          can also development under a more senior mentor who can help identify
          any bad habits. I have a number of other projects you can view{" "}
          <a>here</a>
        </p>
        <p>
          In my personal life I enjoy being with family and friends, working
          out, playing golf, and reading about tech and web3. I enjoy cooking as
          well as fighting (muay thai) I have always been very curious and
          havent been known to shy away from finding out what i am curious
          about. I am a horror movie coneseur. If my stomach turns you win.
          Building apps and tools for my own enjoyment is also soemthing i like
          to do in my freetime as well as watching tv. troling on twitter or x
          is great, I dont really have a real account. investing since i was
          like 16. Literally had my mom create a brokerage account so i could
          trade underage lol. 1 exit. (mjm real estate, tombstone -- Sept 2023
          $xxxxxxxxx???) I thrive in fast paced environments, pressure makes
          diamonds. I believe one area i stand above is the ability to
          communicate effectively over technical lines. I have experience
          talking schema and pipelines with a dev team and the next call explain
          the positives and tell the story to a client. BUT FR WHADDUP NERD???
        </p>
      </Box>
    </div>
  </>
);

const Education = () => (
  <>
    <div id="section2" className="section section2">
      <header className="Section-header">Education</header>
      <Box className="education-content">
        <VStack>
          <HStack>
            <p>🚂</p>
            <h1>Purdue University</h1>
          </HStack>
          <ul>
            <li>Bachelor Of Science, Economics</li>
            <li>Certificate: Entrepreneurship and Innovation</li>
            <li>Certificate: Applied Data Science</li>
            <li>Certificate: Management Consulting</li>
          </ul>

          <HStack>
            <p>💻</p>
            <h1>Online Courses</h1>
          </HStack>
          <ul>
            <li>Udemy: Solidity</li>
            <li>More...</li>
          </ul>
        </VStack>
      </Box>
    </div>
  </>
);

const Experience = () => (
  <>
    <div id="section3" className="section section3">
      <header className="Section-header">Experience</header>
      <Box className="experience-content">
        <Journey />
      </Box>
    </div>
  </>
);

const Projects = () => (
  <>
    <div id="section4" className="section section4">
      <header className="Section-header">Projects</header>
      <Box className="projects-content">
        <Proj />
      </Box>
    </div>
  </>
);
