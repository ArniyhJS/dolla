import React from "react";
import { FaTimes } from "react-icons/fa";

import { certifications } from "constants/constants";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionDivider,
} from "@/styles/GlobalComponents";

import {
  CertificationsContainer,
  CertificateWrapper,
  CertificationModal,
  CertificateCard,
  CertificateImg,
  CloseIcon,
  InfoWrapper,
  InfoText,
  InfoLink,
  InfoTitle,
} from "./Certifications.styled";

import { useCertification } from "./Certifications.rook";

function Certifications() {
  const { toggle, certImg, handleSetToggle, handleSetCertImg } =
    useCertification();

  return (
    <Section id="certifications">
      <SectionDivider divider />
      <SectionTitle>Certifications</SectionTitle>

      <CertificationsContainer>
        {certifications.map(
          ({ image, description, certifier, title, issued }, index) => (
            <CertificateCard key={index} onClick={handleSetToggle}>
              <CertificateImg src={image} onClick={handleSetCertImg} />

              <InfoWrapper>
                <InfoTitle>{title}</InfoTitle>
                <InfoText>{certifier}</InfoText>
                <InfoText>{issued}</InfoText>
              </InfoWrapper>
            </CertificateCard>
          )
        )}
      </CertificationsContainer>

      <CertificationModal toggle={toggle}>
        <CertificateWrapper onClick={handleSetToggle}>
          <CloseIcon toggle={toggle}>
            <FaTimes size="3rem" color="#fff" />
          </CloseIcon>
          <CertificateImg src={certImg} modal={true} />
        </CertificateWrapper>
      </CertificationModal>
    </Section>
  );
}

export default Certifications;
