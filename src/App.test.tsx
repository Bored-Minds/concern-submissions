import { render, screen, fireEvent } from '@testing-library/react';
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

    test('state ID input only accepts alphanumeric characters', () => {
        render(<App />);

        const idInput = screen.getByLabelText('State Issued ID Number');
        fireEvent.change(idInput, { target: { value: 'ABC123!@#' } });
        expect(idInput).toHaveValue('ABC123');
    });

    test('SSN input only accepts numeric characters and has a max length of 4', () => {
        render(<App />);

        const ssnInput = screen.getByLabelText('Last 4 of SSN');
        fireEvent.change(ssnInput, { target: { value: '1234abcd' } });
        expect(ssnInput).toHaveValue('1234');
    });

    test('visibility icon is present in the SSN input', () => {
        render(<App />);
        const visibilityIcon = screen.getByTestId('VisibilityIcon');
        expect(visibilityIcon).toBeInTheDocument();
    });
});
