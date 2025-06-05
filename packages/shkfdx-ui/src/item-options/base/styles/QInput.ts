import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => {
  return ({
    input: css`
      &.error {
        color: ${token.colorError};
      }
    `
  })
});

