import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => {
  // { bold: item.isBold, center: item.isCenter }
  return ({
    container: css`
      padding: 14px 0px;
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
    `,
    title: css`
      & > b {
        padding-right: 4px;
      }
      & > span{
        font-weight: 600;
      }
    `
  })
});

