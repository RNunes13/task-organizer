import { render, waitFor } from '@/tests';
import { Icon } from '../Icon';
import type { IconProps } from '../Icon';

const defaultProps: IconProps = {
  icon: 'system:close',
};

const setup = (props: IconProps = {}) =>
  render(<Icon {...defaultProps} {...props} />);

describe('Icon component', () => {
  it('should render without svg when there is no icon', async () => {
    const { queryByTestId } = setup({ icon: undefined });
    await waitFor(() => {
      expect(queryByTestId('icon_system_close')).not.toBeInTheDocument();
    });
  });

  it('should render without svg when there is non-standard name expected', async () => {
    const { queryByTestId } = setup({ icon: 'invalid' });
    await waitFor(() => {
      expect(queryByTestId('icon_system_close')).not.toBeInTheDocument();
    });
  });

  it('should render without svg when there is invalid name as library', async () => {
    const { queryByTestId } = setup({ icon: 'invalid:invalid' });
    await waitFor(() => {
      expect(queryByTestId('icon_system_close')).not.toBeInTheDocument();
    });
  });

  it('should render without svg when there is invalid name as icon name', async () => {
    const { queryByTestId } = setup({ icon: 'system:invalid' });
    await waitFor(() => {
      expect(queryByTestId('icon_system_close')).not.toBeInTheDocument();
    });
  });

  it('should render expected icon svg', async () => {
    const { getByTestId } = setup({
      icon: 'system:clear',
      fill: 'primary_50',
    });

    await waitFor(() => {
      const icon = getByTestId('icon_system_clear');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('fill', 'primary_50');
    });
  });
});
