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
  List,
  ListItem,
  ListIcon,
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
          <List>
            <ListItem>Paul M. Murphy</ListItem>
            <ListItem>Technical Consulting and Business Analysis</ListItem>
            <ListItem>
              Focus on optimization and efficiency, new development
            </ListItem>
            <ListIcon as="ChevronRightIcon"></ListIcon>
            <ListItem>
              Python, Javascript, Rust experience. I 🤍 Rust lol
            </ListItem>
            <ListIcon as="ChevronRightIcon"></ListIcon>
            <ListItem>
              I think that web3 has potential to disrupt a lot more than it
              already has
            </ListItem>
            <ListIcon as="ChevronRightIcon"></ListIcon>
            <ListItem>
              I work well in faster paced, more collaborative environments
            </ListItem>

            <br />
            <ListItem>Pauly</ListItem>
            <ListItem>
              I enjoy cooking, golfing, movies and working out
            </ListItem>
            <ListIcon as="ChevronRightIcon"></ListIcon>
            <ListItem>I have a large family and enjoy being with them</ListItem>
            <ListItem>
              From South Bend, Purdue - Krannert, Moved to Chicago
            </ListItem>
            <ListIcon as="ChevronRightIcon"></ListIcon>
            <ListItem>
              I believe decentralization and equity are related
            </ListItem>
            <ListIcon as="ChevronRightIcon"></ListIcon>
            <ListItem>My computer is never too far away</ListItem>
            <ListItem>College Football Saturdays are unbeatable</ListItem>
            <ListItem>
              I was all state for 3 years in high school in lacrosse, but I am
              also from Indiana
            </ListItem>
            <br />

            <ListItem>BigDogP7177</ListItem>
            <ListItem>Top 150 in Madden 22 during late covid</ListItem>
            <ListItem>Absolute dier in call of duty</ListItem>
            <ListItem>I hate minecraft, mad boring...</ListItem>
          </List>
          Pauly from South Bend.
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
          <List>
            <ListItem>Bachelor Of Science, Economics</ListItem>
            <ListItem>Certificate: Entrepreneurship and Innovation</ListItem>
            <ListItem>Certificate: Applied Data Science</ListItem>
            <ListItem>Certificate: Management Consulting</ListItem>
          </List>

          <HStack>
            <p>💻</p>
            <h1>Online Courses</h1>
          </HStack>
          <List>
            <ListItem>Udemy: Solidity</ListItem>
            <ListItem>More...</ListItem>
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
