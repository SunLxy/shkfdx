import { createStyles } from 'antd-style';
const useStyles = createStyles(({ css, token }) => {
  return ({
    base: css`
      position: absolute;
      top: 54px;
      right: 14px;
      display: inline-flex;
      flex-direction: column;
      color: ${token.colorPrimary};
      font-size: 12px;
      z-index: 9999;
      gap: 12px;
    `,
    span: css`
      cursor: pointer;
    `
  })
});


export interface TipButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**操作选项*/
  items: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>[]
}

/**整体布局*/
export const TipButton = (props: TipButtonProps) => {
  const { children, className, items, ...rest } = props;
  const { styles, cx } = useStyles();
  return (
    <div {...rest} className={cx(styles.base, className)}>
      {items.map((item, index) => {
        const { className, ...rest } = item;
        return <span key={index} {...rest} className={cx(styles.span, className)} >{item.children}</span>
      })}
    </div>
  )
}