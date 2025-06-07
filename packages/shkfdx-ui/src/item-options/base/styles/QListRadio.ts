import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css, ...rest }) => {
  return ({
    container: css`
      box-sizing: border-box;
      padding: 0px 8px;
      &.q_list_radio_horizontal{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 6px 20px;
        flex-wrap: wrap;
      }
      &.q_list_radio_vertical{
        display: flex;
        flex-direction: column;
        align-items:  flex-start;
        justify-content:center;
        gap: 6px;
        flex-wrap: wrap;
      }
    `,
    item: css`
      font-size: 12px;
      padding: 2px 8px;
      border-radius: 4px;
      color: ${token.colorText};
      cursor: pointer;
      & > b {
        padding-right: 4px;
      }
      &.error{
        background-color: ${token.colorErrorBorder};
      }
      &.success{
        background-color: ${token.colorSuccessBorder};
      }
    `
  })
});

