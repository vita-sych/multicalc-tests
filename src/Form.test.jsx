import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';
import { OperandContext } from './context/OperandContext';

describe('Form test suite', () => {
  it('the button is disabled when the operand contains no value', async () => {
    render(
      <OperandContext.Provider value={0}>
        <Form />
      </OperandContext.Provider>
    );

    const user = userEvent.setup();
    const input = screen.getByDisplayValue(0);
    await user.clear(input);
    const button = screen.getByLabelText('submit');

    expect(button).toBeDisabled();
  });
});
