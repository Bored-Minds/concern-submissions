import { render, screen } from '@testing-library/react';
import App from './App';

describe('app test', () => {
    test('renders home screen with welcome text and identification fields', () => {
        render(<App />);

        const idInput = screen.getByLabelText('State Issued ID Number');
        const last4OfSocialInput = screen.getByLabelText('Last 4 of SSN');
        expect(idInput).toBeInTheDocument();
        expect(last4OfSocialInput).toBeInTheDocument();
    });

    test('id and ssn inputs have tooltips explaining further', () => {
        render(<App />);

        const idTooltip = screen.getByLabelText('This can be a Driver\'s License Number or State Issued Identification Number.');
        const last4OfSocialTooltip = screen.getByLabelText('The last 4 (four) digits of your Social Security Number.');

        expect(idTooltip).toBeInTheDocument();
        expect(last4OfSocialTooltip).toBeInTheDocument();
    });
});
