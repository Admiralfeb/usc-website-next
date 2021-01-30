import { render } from '@testing-library/react';
import { EngToggleGroup } from 'components/builds/engToggleGroup';

describe('EngToggleGroup', () => {
  it('should render', () => {
    render(<EngToggleGroup handleEngLevelChange={jest.fn()} engLevel={null} />);
  });

  it('should display as 2', () => {
    const result = render(
      <EngToggleGroup handleEngLevelChange={jest.fn()} engLevel={2} />
    );

    expect(result.getByTestId('tgl0')).not.toHaveClass('Mui-selected');
    expect(result.getByTestId('tgl1')).not.toHaveClass('Mui-selected');
    expect(result.getByTestId('tgl2')).toHaveClass('Mui-selected');
    expect(result.getByTestId('tgl3')).not.toHaveClass('Mui-selected');
  });
});
