import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => {
  // { bold: item.isBold, center: item.isCenter }
  return ({
    container: css`
    `,
    item: css`
      font-size: 12px;
      color: ${token.colorText};
      &.bold {
        font-weight: 600;
      }
      &.center {
        text-align: center;
      }
    `
  })
});

