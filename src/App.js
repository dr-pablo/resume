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
  VStack,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Journey from "./Journey";
import { Projects as Proj } from "./Projects";

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <img src={me} alt="me animation" />
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
  <div id="section1" className="section section1">
    <header className="Section-header">About Me</header>
    <Box className="me-content">
      <List spacing={3}>
        <h2>Paul M. Murphy </h2>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>Technical Consulting and
          Business Analysis
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Efficiency, optimization, and automation are a few passions
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          Python, Javascript, Rust experience. I 🤍 Rust
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>Terrific visualization
          specialist and truly enjoy deriving insights from data
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>I think that web3 has
          potential to disrupt a lot more than it already has
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>I work well in faster
          paced, more collaborative environments
        </ListItem>

        <br />
        <h3>Pauly </h3>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>I enjoy cooking, golfing,
          watching movies, and working out
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>I have a large family and
          enjoy being with them
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>
          From South Bend, Purdue - Krannert, Moved to Chicago
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>Decentralization and equity
          are related
        </ListItem>

        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>My computer is never too
          far away
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>College Football Saturdays
          are unbeatable
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>I was all state for 3 years
          in high school in lacrosse (robbed my senior year)
        </ListItem>
        <br />

        <h3>BigDogP7177</h3>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>Top 150 in Madden 22 during
          late covid
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>Absolute dier in call of
          duty
        </ListItem>
        <ListItem>
          <ListIcon as={ChevronRightIcon}></ListIcon>Patiently waiting for the
          next elder scrolls...
        </ListItem>
      </List>
    </Box>
  </div>
);

const Education = () => (
  <>
    <div id="section2" className="section section2">
      <header className="Section-header">Education</header>
      <Box className="education-content">
        <VStack>
          <List spacing={3}>
            <h1>🚂 Purdue University</h1>

            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>Bachelor Of Science,
              Economics
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>Certificate:
              Entrepreneurship and Innovation
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>Certificate: Applied
              Data Science
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>Certificate: Management
              Consulting
            </ListItem>

            <h1>💻 Online Courses</h1>
            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>Udemy: Solidity
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>Coursera: Rust
            </ListItem>

            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>Princeton (Coursera):
              Algorithms I
            </ListItem>
            <h1>🎮 Microsoft Learn</h1>
            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>
              <Link
                href="https://learn.microsoft.com/api/achievements/share/en-us/Pauly-2154/24BXD3BV?sharingId=F36BD12D88A7A487"
                isExternal
                target="__blank"
                color={"inherit"}
              >
                Azure: Core Data Concepts
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon}></ListIcon>
              Azure Developer Certificate in progress...
            </ListItem>
          </List>
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
        <VStack>
          <Journey />
        </VStack>
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
