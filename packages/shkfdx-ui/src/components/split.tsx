import { createStyles } from 'antd-style';
const useStyles = createStyles(({ css, token }) => {
  return ({
    base: css`
    padding-bottom: 20px;
      & + & {
        border-top: 1px solid ${token.colorSplit};
        padding-top: 20px;
      }
    `,
  })
});

export interface SplitProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Split = (props: SplitProps) => {
  const { children, className, ...rest } = props;
  const { styles, cx } = useStyles();
  return (
    <div {...rest} className={cx(styles.base, className)}>
      {children}
    </div>
  )
}