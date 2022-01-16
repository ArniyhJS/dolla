import React, { useState, useRef, useEffect } from "react";
import { BsDot } from "react-icons/bs";

import { TimeLineData } from "constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "styles/GlobalComponents";

import {
  Icon,
  SExperience,
  ExperienceContainer,
  CarouselItem,
  CarouselButton,
  CarouselItemImg,
  CarouselButtons,
  CarouselItemText,
  CarouselContainer,
  CarouselButtonDot,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./Experience.styled";

import { useTimeLine } from "./Experience.rook";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Experience = () => {
  const { activeItem, carouselRef, handleClick, handleScroll } = useTimeLine();

  return (
    <Section id="experience">
      <SectionDivider divider />
      <SectionTitle>Experience</SectionTitle>
      <SectionText>
        Passion for learning has always been the deep seated reason for going
        into programming and I have develop experience in frontend and it
        dynamics which includes;
      </SectionText>

      <ExperienceContainer>
        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Optimizing the user experience.
        </SExperience>

        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Using HTML, CSS, JavaScript and Frameworks to bring UI/UX concepts to
          actualization.
        </SExperience>

        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Developing and maintaining the user interface.
        </SExperience>

        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Implementing design on mobile websites.
        </SExperience>

        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Creating tools that improve site interaction regardless of the
          browser.
        </SExperience>

        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Managing software workflow.
        </SExperience>

        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Following SEO best practices.
        </SExperience>

        <SExperience>
          <Icon>
            <BsDot size="5rem" />
          </Icon>
          Fixing bugs and testing for usability.
        </SExperience>
      </ExperienceContainer>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                active={activeItem}
                id={`carousel__item-${index}`}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}{" "}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>

      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Experience;
