import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => {
  return ({
    container: css`
    `,
    item: css`
      font-size: 12px;
      color: ${token.colorText};
      & > b {
        padding-right: 4px;
      }
    `
  })
});

