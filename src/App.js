import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";

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
  height: 100vh;
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

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const Heading = styled.h1`
  color: #333;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 20px;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 75%;
  }
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

const LocationButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <Container>
      <ContentContainer>
        <Heading>Wedding Invitation</Heading>
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
        <p>Join us in celebrating the union of...</p>
        <p>Kanakalaxmi</p>
        <p>Date: 10/12/2023</p>
        <p>Time: 11.41am</p>
        <div>
          <LocationButton href="https://maps.app.goo.gl/pRoZq7dzkcPGcjTd8">
            Location 1
          </LocationButton>
          <LocationButton href="https://maps.app.goo.gl/4sZt7bekQccGsdD49">
            Location 2
          </LocationButton>
        </div>
        <ControlButton onClick={toggleVideo}>
          {isVideoPlaying ? "Pause Video" : "Play Video"}
        </ControlButton>
      </ContentContainer>
    </Container>
  );
}

export default App;

//==============================================================>>>>
// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import ReactPlayer from "react-player";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   animation: ${fadeIn} 2s ease;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-image: url(${require("./assets/bgakka.png")}); // Replace with the correct path

//   @media (max-width: 768px) {
//     background-size: contain; /* Adjust the background size for smaller screens */
//   }
// `;

// const ContentContainer = styled.div`
//   position: relative;
//   z-index: 1;
// `;

// const Heading = styled.h1`
//   color: #333;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   margin-bottom: 20px;
// `;

// const VideoContainer = styled.div`
//   position: relative;
//   padding-top: 56.25%; /* 16:9 aspect ratio */
//   width: 100%;

//   @media (max-width: 768px) {
//     padding-top: 75%; /* Adjust the aspect ratio for smaller screens */
//   }
// `;

// const ControlButton = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const LocationButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: #3498db;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   margin-right: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// function App() {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//   const videoFileURL = require("./assets/wedding.mp4"); // Replace with the correct path

//   const toggleVideo = () => {
//     setIsVideoPlaying((prev) => !prev);
//   };

//   return (
//     <Container>
//       <ContentContainer>
//         <Heading>Wedding Invitation</Heading>
//         <VideoContainer>
//           <ReactPlayer
//             url={videoFileURL}
//             playing={isVideoPlaying}
//             loop
//             width="100%"
//             height="100%"
//             style={{ position: "absolute", top: 0, left: 0 }}
//           />
//         </VideoContainer>
//         <p>Join us in celebrating the union of...</p>
//         <p>Your Sister's Name & Her Partner's Name</p>
//         <p>Date: Wedding Date</p>
//         <p>Time: Wedding Time</p>
//         <div>
//           <LocationButton href="https://maps.app.goo.gl/pRoZq7dzkcPGcjTd8">
//             Location 1
//           </LocationButton>
//           <LocationButton href="https://maps.app.goo.gl/4sZt7bekQccGsdD49">
//             Location 2
//           </LocationButton>
//         </div>
//         <ControlButton onClick={toggleVideo}>
//           {isVideoPlaying ? "Pause Video" : "Play Video"}
//         </ControlButton>
//       </ContentContainer>
//     </Container>
//   );
// }

// export default App;

//================================================================>>below final
// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import ReactPlayer from "react-player";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   animation: ${fadeIn} 2s ease;
// `;

// const Heading = styled.h1`
//   color: #333;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   margin-bottom: 20px;
// `;

// const VideoContainer = styled.div`
//   position: relative;
//   padding-top: 56.25%; /* 16:9 aspect ratio */
//   width: 100%;

//   @media (max-width: 768px) {
//     padding-top: 75%; /* Adjust the aspect ratio for smaller screens */
//   }
// `;

// const ControlButton = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const LocationButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: #3498db;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   margin-right: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// function App() {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//   const videoFileURL = require("./assets/wedding.mp4"); // Replace with the correct path

//   const toggleVideo = () => {
//     setIsVideoPlaying((prev) => !prev);
//   };

//   return (
//     <Container>
//       <Heading>Wedding Invitation</Heading>
//       <VideoContainer>
//         <ReactPlayer
//           url={videoFileURL}
//           playing={isVideoPlaying}
//           loop
//           width="100%"
//           height="100%"
//           style={{ position: "absolute", top: 0, left: 0 }}
//         />
//       </VideoContainer>
//       <p>Join us in celebrating the union of...</p>
//       <p>Your Sister's Name & Her Partner's Name</p>
//       <p>Date: Wedding Date</p>
//       <p>Time: Wedding Time</p>
//       <div>
//         <LocationButton href="#location-1">Location 1</LocationButton>
//         <LocationButton href="#location-2">Location 2</LocationButton>
//       </div>
//       <ControlButton onClick={toggleVideo}>
//         {isVideoPlaying ? "Pause Video" : "Play Video"}
//       </ControlButton>
//     </Container>
//   );
// }

// export default App;

//======================================================>>>below raw
// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import ReactPlayer from "react-player";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   animation: ${fadeIn} 2s ease;
// `;

// const Heading = styled.h1`
//   color: #333;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   margin-bottom: 20px;
// `;

// const VideoContainer = styled.div`
//   position: relative;
//   padding-top: 56.25%; /* 16:9 aspect ratio */
//   width: 100%;
// `;

// const ControlButton = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const LocationButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: #3498db;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   margin-right: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// function App() {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(true);
//   const videoFileURL = require("./assets/wedding.mp4"); // Replace with the correct path

//   const toggleVideo = () => {
//     setIsVideoPlaying((prev) => !prev);
//   };

//   return (
//     <Container>
//       <Heading>Wedding Invitation</Heading>
//       <VideoContainer>
//         <ReactPlayer
//           url={videoFileURL}
//           playing={isVideoPlaying}
//           loop
//           width="100%"
//           height="100%"
//           style={{ position: "absolute", top: 0, left: 0 }}
//         />
//       </VideoContainer>
//       <p>Join us in celebrating the union of...</p>
//       <p>Your Sister's Name & Her Partner's Name</p>
//       <p>Date: Wedding Date</p>
//       <p>Time: Wedding Time</p>
//       <div>
//         <LocationButton href="#location-1">Location 1</LocationButton>
//         <LocationButton href="#location-2">Location 2</LocationButton>
//       </div>
//       <ControlButton onClick={toggleVideo}>
//         {isVideoPlaying ? "Pause Video" : "Play Video"}
//       </ControlButton>
//     </Container>
//   );
// }

// export default App;

//==========================================================>>>>Video and audio
// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import ReactPlayer from "react-player";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   animation: ${fadeIn} 2s ease;
// `;

// const Heading = styled.h1`
//   color: #333;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   margin-bottom: 20px;
// `;

// const VideoContainer = styled.div`
//   position: relative;
//   padding-top: 56.25%; /* 16:9 aspect ratio */
//   width: 100%;
// `;

// const ControlButton = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const LocationButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: #3498db;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   margin-right: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// function App() {
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const audioFileURL =
//     "https://drive.google.com/uc?id=1kNgIz4dtyYfbp7WNYoiecV5EOylLUFvy";
//   const videoFileURL = require("./assets/wedding.mp4"); // Replace with the correct path

//   const toggleMusic = () => {
//     setIsMusicPlaying((prev) => !prev);
//   };

//   return (
//     <Container>
//       {isMusicPlaying && (
//         <ReactPlayer
//           url={audioFileURL}
//           playing={isMusicPlaying}
//           loop
//           volume={0.5}
//           width={0}
//           height={0}
//           style={{ display: "none" }}
//         />
//       )}
//       <Heading>Wedding Invitation</Heading>
//       <VideoContainer>
//         <ReactPlayer
//           url={videoFileURL}
//           playing={true} // Video auto plays
//           loop
//           volume={0.5}
//           width="100%"
//           height="100%"
//           style={{ position: "absolute", top: 0, left: 0 }}
//         />
//       </VideoContainer>
//       <p>Join us in celebrating the union of...</p>
//       <p>Your Sister's Name & Her Partner's Name</p>
//       <p>Date: Wedding Date</p>
//       <p>Time: Wedding Time</p>
//       <div>
//         <LocationButton href="#location-1">Location 1</LocationButton>
//         <LocationButton href="#location-2">Location 2</LocationButton>
//       </div>
//       <ControlButton onClick={toggleMusic}>
//         {isMusicPlaying ? "Pause Music" : "Play Music"}
//       </ControlButton>
//     </Container>
//   );
// }

// export default App;

//=============================================================>>>>222
// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import ReactPlayer from "react-player";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   animation: ${fadeIn} 2s ease;
// `;

// const Heading = styled.h1`
//   color: #333;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   margin-bottom: 20px;
// `;

// const VideoContainer = styled.div`
//   position: relative;
//   padding-top: 56.25%; /* 16:9 aspect ratio */
//   width: 100%;
// `;

// const ControlButton = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const LocationButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: #3498db;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   margin-right: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// function App() {
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const audioFileURL =
//     "https://drive.google.com/uc?id=1kNgIz4dtyYfbp7WNYoiecV5EOylLUFvy";
//   const videoFileURL =
//     "https://drive.google.com/uc?id=1xRm1UfX4w5K-HVKWzElmYPHcaD6vSKpj"; // Replace with your video URL

//   const toggleMusic = () => {
//     setIsMusicPlaying((prev) => !prev);
//   };

//   return (
//     <Container>
//       {isMusicPlaying && (
//         <ReactPlayer
//           url={audioFileURL}
//           playing={isMusicPlaying}
//           loop
//           volume={0.5}
//           width={0}
//           height={0}
//           style={{ display: "none" }}
//         />
//       )}
//       <Heading>Wedding Invitation</Heading>
//       <VideoContainer>
//         <ReactPlayer
//           url={videoFileURL}
//           playing={true} // Video auto plays
//           loop
//           volume={0.5}
//           width="100%"
//           height="100%"
//           style={{ position: "absolute", top: 0, left: 0 }}
//         />
//       </VideoContainer>
//       <p>Join us in celebrating the union of...</p>
//       <p>Your Sister's Name & Her Partner's Name</p>
//       <p>Date: Wedding Date</p>
//       <p>Time: Wedding Time</p>
//       <div>
//         <LocationButton href="#location-1">Location 1</LocationButton>
//         <LocationButton href="#location-2">Location 2</LocationButton>
//       </div>
//       <ControlButton onClick={toggleMusic}>
//         {isMusicPlaying ? "Pause Music" : "Play Music"}
//       </ControlButton>
//     </Container>
//   );
// }

// export default App;

//https://drive.google.com/file/d/1kNgIz4dtyYfbp7WNYoiecV5EOylLUFvy/view?usp=sharing

// // src/App.js=========================================>>>>
// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";
// import ReactPlayer from "react-player";

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   text-align: center;
//   animation: ${fadeIn} 2s ease;
// `;

// const Heading = styled.h1`
//   color: #333;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   margin-bottom: 20px;
// `;

// const LocationImage = styled.img`
//   max-width: 100%;
//   border-radius: 8px;
//   margin-top: 20px;
// `;

// const ControlButton = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// const LocationButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: #3498db;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-top: 20px;
//   margin-right: 10px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #2980b9;
//   }
// `;

// function App() {
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const audioFileURL =
//     "https://drive.google.com/uc?id=1kNgIz4dtyYfbp7WNYoiecV5EOylLUFvy";

//   const toggleMusic = () => {
//     setIsMusicPlaying((prev) => !prev);
//   };

//   return (
//     <Container>
//       {isMusicPlaying && (
//         <ReactPlayer
//           url={audioFileURL}
//           playing={isMusicPlaying}
//           loop
//           volume={0.5}
//           width={0}
//           height={0}
//           style={{ display: "none" }}
//         />
//       )}
//       <Heading>Wedding Invitation</Heading>
//       <LocationImage
//         src="https://placekitten.com/400/300" // Replace with your location image URL
//         alt="Location"
//       />
//       <p>Join us in celebrating the union of...</p>
//       <p>Your Sister's Name & Her Partner's Name</p>
//       <p>Date: Wedding Date</p>
//       <p>Time: Wedding Time</p>
//       <div>
//         <LocationButton href="#location-1">Location 1</LocationButton>
//         <LocationButton href="#location-2">Location 2</LocationButton>
//       </div>
//       <ControlButton onClick={toggleMusic}>
//         {isMusicPlaying ? "Pause Music" : "Play Music"}
//       </ControlButton>
//     </Container>
//   );
// }

// export default App;
