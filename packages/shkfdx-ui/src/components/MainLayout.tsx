import { createStyles } from 'antd-style';
const useStyles = createStyles(({ css }) => {
  return ({
    base: css`
      height: 100%;
      width: 100%;
      padding: 14px;
      overflow: auto;
      box-sizing: border-box;
    `,
  })
});

export interface MainLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}
/**整体布局*/
export const MainLayout = (props: MainLayoutProps) => {
  const { children, className, ...rest } = props;
  const { styles } = useStyles();
  return (
    <div {...rest} className={`${styles.base} ${className}`}>
      {children}
    </div>
  )
}