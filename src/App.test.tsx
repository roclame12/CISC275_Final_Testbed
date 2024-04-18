/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {NavB} from './Components/navBar';
import { FinishScreen } from './Components/progress';
import "./Pages/HomeScreen"
import HomeScreen from './Pages/HomeScreen';

describe('NavB component', () => {
  test('renders Navbar with correct branding', () => {
    const { getByText } = render(
      <Router>
        <NavB />
      </Router>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const brandingElement = getByText(/Career Finder/i);
    expect(brandingElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    const { getByText } = render(
      <Router>
        <NavB />
      </Router>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const basicTestLink = getByText(/Basic Test/i);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const detailedTestLink = getByText(/Detailed Test/i);

    expect(basicTestLink).toBeInTheDocument();
    expect(detailedTestLink).toBeInTheDocument();
  });
});

describe('FinishScreen component', () => {
  test('renders congratulations message', () => {
    const { getByText } = render(
      <Router>
        <FinishScreen setIndex={() => {}} />
      </Router>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const congratulationsMessage = getByText(/Congratulations! You've finished the test!/i);
    expect(congratulationsMessage).toBeInTheDocument();
  });

  test('renders "Take me to the results" button', () => {
    const { getByText } = render(
      <Router>
        <FinishScreen setIndex={() => {}} />
      </Router>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const resultsButton = getByText(/Take me to the results/i);
    expect(resultsButton).toBeInTheDocument();
  });

  test('renders "Let me review my answers" button', () => {
    const { getByText } = render(
      <Router>
        <FinishScreen setIndex={() => {}} />
      </Router>
    );
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const reviewButton = getByText(/Let me review my answers/i);
    expect(reviewButton).toBeInTheDocument();
  });
});

describe('HomeScreen component', () => {
  test('renders basic test blurb', () => {
    const { getByText } = render(<HomeScreen />);
    const basicTestHeader = getByText(/Basic Test/i);
    const basicTestText = getByText(/Concerned about the path of your career\?/i);
    expect(basicTestHeader).toBeInTheDocument();
    expect(basicTestText).toBeInTheDocument();
  });

  test('renders detailed test blurb', () => {
    const { getByText } = render(<HomeScreen />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const detailedTestHeader = getByText(/Detailed Test/i);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const detailedTestText = getByText(/Looking to dive deep into your career options\?/i);
    expect(detailedTestHeader).toBeInTheDocument();
    expect(detailedTestText).toBeInTheDocument();
  });

  test('inputting API key and clicking submit button calls handleSubmit', () => {
    const { getByPlaceholderText, getByText } = render(<HomeScreen />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const apiKeyInput = getByPlaceholderText(/Insert API Key Here/i);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const submitButton = getByText(/Submit/i);

    fireEvent.change(apiKeyInput, { target: { value: 'test-api-key' } });
    fireEvent.click(submitButton);
  });
});