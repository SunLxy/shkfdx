import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => {
  return ({
    base: css`
      display: flex;
      flex-direction: column;
      gap: 6px;
      &+&{
        margin-top: 8px;
      }
      & > b {
        padding-right: 4px;
      }
      &.is_options {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    `,
    error: css`
      color: ${token.colorError};
      background-color: ${token.colorErrorBg};
      font-size: 12px;
      width: 100%;
      text-align: right;
      padding: 4px;
    `
  })
});

