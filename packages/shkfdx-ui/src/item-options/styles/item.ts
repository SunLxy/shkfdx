import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css }) => {
  return ({
    base: css`
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: 12px;
      border-bottom: 1px solid ${token.colorSplit};
      padding-bottom: 8px;
      & + & {
        padding-top: 8px;
      }
      & > b {
        padding-right: 4px;
      }
      &.is_options {
        display: flex;
        flex-direction: row;
      }
      &.is_translate{
        padding-bottom: 0px;
      }
    `,
    error: css`
      position: absolute;
      bottom: -12px;
      right: 0;
      color: ${token.colorError};
      font-size: 10px;
    `,
    warn: css`
      position: absolute;
      bottom: -12px;
      left: 0;
      color: ${token.colorWarning};
      font-size: 10px;
    `,
    analysis: css`
      position: absolute;
      bottom: -12px;
      left: 0;
      color: ${token.colorError};
      font-size: 10px;
    `,
    translate: css`
      font-size: 10px;
      width: 100%;
      text-align: left;
      padding: 4px;
      background-color: ${token.colorFillContent};
      border-radius: 3px;
      margin-top: 8px;
    `
  })
});

