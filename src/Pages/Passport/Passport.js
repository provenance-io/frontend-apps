import React from 'react';
import styled from 'styled-components';
import { usePageTitle } from 'redux/hooks';
import { Wrapper } from 'Components';
import { Link } from 'react-router-dom';

const Content = styled.div`
  padding: 40px;
  color: ${({ theme }) => theme.FONT_PRIMARY };
  box-shadow: 0px 4px 44px rgba(0,0,0,0.9);
  background: ${({ theme }) => theme.BACKGROUND_CONTENT };
`;
const StepRow = styled.div`
  display: flex;
  padding-bottom: 70px;
  justify-content: space-between;
  align-content: flex-start;
`;
const StepTxt = styled.div`
  flex-basis: 50%;
`;
const StepImg = styled.img`
  max-height: 300px;
  max-width: 300px;
`;
const StepTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
`;
const StepInfo = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
`;
const ButtonLink = styled(Link)`
  display: inline-block;
  margin-top: 35px;
  font-size: 1.4rem;
  user-select: none;
  padding: 16px 20px;
  background: ${({ theme }) => theme.BUTTON_BACKGROUND };
  border-radius: 4px;
  &&& {
    color: ${({ theme }) => theme.FONT_WHITE };
  }
`;

const Passport = () => {
  usePageTitle('Passport Information');

  return (
    <Wrapper>
      <Content>
        <StepRow>
          <StepTxt>
            <StepTitle>Step 1</StepTitle>
            <StepInfo>Go to <a href="https://figure.com/login/register" target="_blank" rel="noreferrer">https://figure.com/login/register</a> and create or log into your account.</StepInfo>
          </StepTxt>
          <StepImg src={`${process.env.PUBLIC_URL}/assets/images/passportSteps/step1.webp`} alt="Passport Step 1" />
        </StepRow>
        <StepRow>
          <StepTxt>
            <StepTitle>Step 2</StepTitle>
            <StepInfo>Select “Link Provenance Wallet” from the wallet dropdown menu.</StepInfo>
          </StepTxt>
          <StepImg src={`${process.env.PUBLIC_URL}/assets/images/passportSteps/step2.webp`} alt="Passport Step 2" />
        </StepRow>
        <StepRow>
          <StepTxt>
            <StepTitle>Step 3</StepTitle>
            <StepInfo>A window will open up that will prompt you to enter the credentials for Provenance Wallet.</StepInfo>
          </StepTxt>
          <StepImg src={`${process.env.PUBLIC_URL}/assets/images/passportSteps/step3.webp`} alt="Passport Step 3" />
        </StepRow>
        <StepRow>
          <StepTxt>
            <StepTitle>Step 4</StepTitle>
            <StepInfo>Once you've connected your Provenance Wallet, Figure will autofill the details about you linking your wallet. Hit the “Submit” button.</StepInfo>
          </StepTxt>
          <StepImg src={`${process.env.PUBLIC_URL}/assets/images/passportSteps/step4.webp`} alt="Passport Step 4" />
        </StepRow>
        <StepRow>
          <StepTxt>
            <StepTitle>Step 5</StepTitle>
            <StepInfo>Set up your Figure Passport in order to fund your Provenance Wallet.</StepInfo>
          </StepTxt>
          <StepImg src={`${process.env.PUBLIC_URL}/assets/images/passportSteps/step5.webp`} alt="Passport Step 5" />
        </StepRow>
        <StepRow>
          <StepTxt>
            <StepTitle>Step 6</StepTitle>
            <StepInfo>Once you have completed your Figure Passport and are approved, you’ll receive an email confirming approval.  You can now use the BTC and/or ETH Bridge after logging in.</StepInfo>
          </StepTxt>
          <StepImg src={`${process.env.PUBLIC_URL}/assets/images/passportSteps/step6.webp`} alt="Passport Step 6" />
        </StepRow>
        <ButtonLink to="/">Return to dApplications</ButtonLink>
      </Content>
    </Wrapper>
  );
};

export default Passport;
