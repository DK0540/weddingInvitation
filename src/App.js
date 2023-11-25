import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";
import qrm from "./assets/marriage.png";
import qrr from "./assets/ReciptionLocation.png";
import mane from "./assets/mane.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  animation: ${fadeIn} 2s ease;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${require("./assets/bgakka.png")});
  @media (max-width: 768px) {
    background-size: contain;
  }
`;

const Heading = styled.p`
  p {
    font-size: 2rem;
    font-weight: bold;
    position: relative;
    font-family: sans-serif;
    text-transform: uppercase;
    font-family: "Parisienne", cursive;
    margin-bottom: 20px;
    letter-spacing: 4px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 7s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
`;
const VideoContainer = styled.div`
  position: relative;
  margin: 0;
  padding-top: 56.25%;
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 75%;
  }
`;

const StyledParagraph = styled.p`
  color: #fff;
  font-family: "Noto Serif Kannada", serif;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #b4a0fe 0%, #3c2fe3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ControlButton = styled.button`
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

function HomeSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying((prev) => !prev);
  };
  const quotes = [
    "ಸಂತೋಷದ ಮದುವೆಗಳು ಆಳವಾದ ಸ್ನೇಹವನ್ನು ಆಧರಿಸಿವೆ. ಇದರ ಮೂಲಕ ನಾನು ಪರಸ್ಪರರ ಕಂಪನಿಯ ಪರಸ್ಪರ ಗೌರವ ಮತ್ತು ಸಂತೋಷವನ್ನು ಅರ್ಥೈಸುತ್ತೇನೆ",
    "ಸಂತೋಷದ ಮದುವೆಯು ಎರಡು ಉತ್ತಮ ಕ್ಷಮಿಸುವವರ ಒಕ್ಕೂಟವಾಗಿದೆ",
    "ಸಂತೋಷದ ದಾಂಪತ್ಯ ಎಂದರೆ ನೀವು ಪರಿಪೂರ್ಣ ಸಂಗಾತಿ ಅಥವಾ ಪರಿಪೂರ್ಣ ದಾಂಪತ್ಯವನ್ನು ಹೊಂದಿದ್ದೀರಿ ಎಂದಲ್ಲ. ಎರಡರಲ್ಲಿರುವ ಅಪೂರ್ಣತೆಗಳನ್ನು ಮೀರಿ ನೋಡಲು ನೀವು ಆಯ್ಕೆ ಮಾಡಿಕೊಂಡಿದ್ದೀರಿ ಎಂದರ್ಥ",
    "ಮದುವೆ ಎಂದರೆ ನಿಮ್ಮ ಉತ್ತಮ ಸ್ನೇಹಿತನೊಂದಿಗೆ ಜೀವನವನ್ನು ಹಂಚಿಕೊಳ್ಳುವುದು, ದಾರಿಯುದ್ದಕ್ಕೂ ಪ್ರಯಾಣವನ್ನು ಆನಂದಿಸುವುದು ಮತ್ತು ಪ್ರತಿ ಗಮ್ಯಸ್ಥಾನವನ್ನು ಒಟ್ಟಿಗೆ ತಲುಪುವುದು.",
    "ಸಂತೋಷದ ದಾಂಪತ್ಯದ ರಹಸ್ಯವೆಂದರೆ ಸರಿಯಾದ ವ್ಯಕ್ತಿಯನ್ನು ಕಂಡುಹಿಡಿಯುವುದು. ನೀವು ಯಾವಾಗಲೂ ಅವರೊಂದಿಗೆ ಇರಲು ಇಷ್ಟಪಡುತ್ತಿದ್ದರೆ ಅವರು ಸರಿ ಎಂದು ನಿಮಗೆ ತಿಳಿದಿದೆ.",
    "ಮದುವೆಯಲ್ಲಿ ಎರಡೂ ವ್ಯಕ್ತಿಗಳಿಗೆ ಯಾವುದೇ ಕೌಶಲ್ಯ ಬೇಕಾದರೆ, ಅದು ಕೇಳುವ ಕೌಶಲ್ಯ.",
    "ನಾವು ಯಾರನ್ನು ಮದುವೆಯಾಗುತ್ತೇವೆ ಎಂಬುದು ಜೀವನದ ಪ್ರಮುಖ ನಿರ್ಧಾರಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ಇದು ಸಂತೋಷ, ಬೆಳವಣಿಗೆ ಮತ್ತು ಯಶಸ್ಸಿನ ಮಟ್ಟವನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ, ಬೇರೆ ಯಾವುದೇ ಆಯ್ಕೆಯಂತೆ.",
    "ಯಶಸ್ವಿ ದಾಂಪತ್ಯಕ್ಕೆ ಅನೇಕ ಬಾರಿ ಪ್ರೀತಿಯಲ್ಲಿ ಬೀಳುವ ಅಗತ್ಯವಿರುತ್ತದೆ, ಯಾವಾಗಲೂ ಒಂದೇ ವ್ಯಕ್ತಿಯೊಂದಿಗೆ.",
    "ಸಂತೋಷದ ದಾಂಪತ್ಯವನ್ನು ಮಾಡುವಲ್ಲಿ ನೀವು ಎಷ್ಟು ಹೊಂದಾಣಿಕೆಯಾಗಿದ್ದೀರಿ ಎಂಬುದು ಮುಖ್ಯವಲ್ಲ, ಆದರೆ ನೀವು ಅಸಾಮರಸ್ಯವನ್ನು ಹೇಗೆ ಎದುರಿಸುತ್ತೀರಿ.",
    "ಕಾನೂನುಬದ್ಧ ಮದುವೆಯಿಲ್ಲದಿದ್ದರೂ ಪ್ರೀತಿಯು ನೈತಿಕವಾಗಿದೆ, ಆದರೆ ಪ್ರೀತಿಯಿಲ್ಲದೆ ಮದುವೆಯು ಅನೈತಿಕವಾಗಿದೆ.",
    "ನನ್ನ ಮಕ್ಕಳು ಮದುವೆಯಾಗಲು ಬಯಸುವ ರೀತಿಯ ಮದುವೆಯನ್ನು ನಾನು ಬಯಸುತ್ತೇನೆ.",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 20000);

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <SectionContainer backgroundColor="black">
      <Heading>
        <p>
          ಮದುವೆಯ <span style={{ margin: "20px" }}>ಮಮತೆಯ</span> ಕರೆಯೋಲೆ
        </p>
      </Heading>
      <QuotesContainer>
        <p>{quotes[quoteIndex]}</p>
      </QuotesContainer>
      <VideoContainer>
        {isVideoPlaying && (
          <ReactPlayer
            url="https://youtu.be/L1z29FMJs9Q"
            playing
            loop
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        )}
      </VideoContainer>
    </SectionContainer>
  );
}

const QuotesContainer = styled.div`
  color: #fff;
  margin-top: 20px;
  font-size: 18px;

  p {
    font-style: italic;
  }
`;

function ProgramsSection() {
  const cardsData = [
    {
      title: "ಮೆಹಂದಿ ಶಾಸ್ತ್ರ",
      date: "Date: 07/12/2023",
      place: "",
      background:
        "url('https://www.ashoksuren.com/wp-content/uploads/2019/02/ash8647.jpg')",
    },
    {
      title: "ಅರಿಶಿಣ ಶಾಸ್ತ್ರ",
      date: "Date: 08/12/2023",
      Place: "",
      background:
        "url('https://www.shutterstock.com/image-photo/haldi-turmeric-paste-closeup-capture-260nw-1177919803.jpg')",
    },
    {
      title: "ಶುಭ ವಿವಾಹ ಮುಹೂರ್ತ",
      date: "Date: 10/12/2023",
      time: "Time: 11:41 am",
      background:
        "url('https://i.pinimg.com/originals/2f/f7/0f/2ff70f606a33bfc6deca22849150e830.jpg')",
    },
    {
      title: "ಆರತಕ್ಷತೆ",
      date: "Date: 11/12/2023",
      time: "Time: 11:00 am",
      background:
        "url('https://t4.ftcdn.net/jpg/04/20/23/09/360_F_420230944_5zUmrpR5akRiCEZhhRtapMkpvd67Hw7C.jpg')",
    },
  ];

  return (
    <SectionContainer
      backgroundColor="white"
      style={{
        background: "-webkit-linear-gradient(0deg, #000000 0%, #48abe0 100%)",
      }}
    >
      <h1
        style={{
          fontSize: "medium",
          fontFamily: "Noto Serif Kannada",
          color: "#b2fffc",
        }}
      >
        ಸಹಕುಟುಂಬ ಸಮೇತರಾಗಿ ಆಗಮಿಸಿ ನಮ್ಮ ಆತಿಥ್ಯ ವನ್ನು ಸ್ವೀಕರಿಸಿ
        <p
          style={{
            color: "rgb(255 255 255)",
            textWrap: "balance",
            fontWeight: "600",
          }}
        >
          Come with your family and receive our hospitality
        </p>
      </h1>
      <CardsContainer>
        {cardsData.map((card, index) => (
          <Card key={index} style={{ backgroundImage: card.background }}>
            <StyledParagraph>{card.title}</StyledParagraph>
            <StyledParagraph>{card.date}</StyledParagraph>
            <StyledParagraph>{card.time}</StyledParagraph>
          </Card>
        ))}
      </CardsContainer>
    </SectionContainer>
  );
}

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: calc(
    25% - 20px
  ); /* Adjust the width as needed, considering the margin */
  margin: 10px;
  background-size: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  color: #fff;
  text-shadow: -1px -1px 0px #ffffff, -3px -2px 3px #000000;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QrCodeImage = styled.img`
  max-width: 100%;
  height: auto;
`;
function LocationSection() {
  return (
    <SectionContainer
      backgroundColor="#24242447"
      style={{
        background: "-webkit-linear-gradient(0deg, #000000 0%, #48abe0 100%)",
      }}
    >
      <QrCodeTitle>
        ಸ್ಥಳವನ್ನು ಪ್ರವೇಶಿಸಲು QR ಕೋಡ್ ಅನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಟ್ಯಾಪ್ ಮಾಡಿ{" "}
        <span
          style={{ color: "#f1f1f1", textWrap: "balance", fontWeight: "600" }}
        >
          {" "}
          (Scan or tap the QR code to access the location)
        </span>
      </QrCodeTitle>

      <FlexContainer>
        <QrCodeContainer>
          <QrCodeTitle style={{ color: "#ff881f" }}>
            ಮದುವೆ ಮಂಟಪ ಕ್ಕೆ ಆಗಮಿಸಲು{" "}
          </QrCodeTitle>
          <p
            style={{ color: "#f1f1f1", textWrap: "balance", fontWeight: "600" }}
          >
            Welcome to the Mehendi and Turmeric Ceremony traditions
          </p>
          <LocationButton href="https://maps.app.goo.gl/4sZt7bekQccGsdD49">
            <QrCodeImage src={qrm} alt="Wedding Hall QR Code" />
          </LocationButton>
        </QrCodeContainer>
        <QrCodeContainer>
          <QrCodeTitle style={{ color: "yellow" }}>
            ಆರತಕ್ಷತೆ ಸಮಾರಂಭ ಸ್ಥಳ{" "}
          </QrCodeTitle>
          <p
            style={{ color: "#f1f1f1", textWrap: "balance", fontWeight: "600" }}
          >
            venue for the Aaratakshate ceremony
          </p>
          <LocationButton href="https://maps.app.goo.gl/pRoZq7dzkcPGcjTd8">
            <QrCodeImage src={qrr} alt="Reception Hall QR Code" />
          </LocationButton>
        </QrCodeContainer>
      </FlexContainer>
      <QrCodeTitle
        style={{
          background:
            "-webkit-linear-gradient(0deg, rgb(245 19 19) 0%, rgb(72, 171, 224) 100%)",
          fontFamily: "'Cormorant Garamond', serif",
          letterSpacing: "3px",
        }}
      >
        Your presence is truly precious to us
        <p
          style={{
            color: "#f1f1f1",
            textWrap: "balance",
            fontWeight: "600",
          }}
        >
          Sri Bhujang Naik Smt Nagaveni & Family
        </p>
        <p style={{ color: "#f1f1f1", textWrap: "balance", fontWeight: "600" }}>
          Sri Late Lingaraj Kallur Smt Baby & Family
        </p>
      </QrCodeTitle>
      <p
        style={{
          color: "rgb(227 227 227)",
          textWrap: "balance",
          fontWeight: "bold",
          fontSize: "11px",
        }}
      >
        For wedding invitation websites, feel free to contact me at: Email:
        vishwa29naik@gmail.com Phone: 9972049933
      </p>
    </SectionContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const QrCodeContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const QrCodeTitle = styled.h3`
  color: #fff;
  font-size: 15px;
  margin-bottom: 10px;
`;

const LocationButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background-color: white;
  color: green;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: green;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
  text-align: center;
  background-color: ${(props) => props.backgroundColor || "transparent"};

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

function App() {
  return (
    <Container>
      <HomeSection />
      <ProgramsSection />
      <LocationSection />
    </Container>
  );
}

export default App;
