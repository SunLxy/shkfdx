import { createStyles } from 'antd-style';
const useStyles = createStyles(({ css, token }) => {
  return ({
    base: css`
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      & > a {
        height: 32px;
        border-radius: 16px;
        min-width: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${token.colorPrimary};
        color: #fff;
        font-size: 12px;
        text-decoration: none;
      }
    `,
  })
});

export interface MainSelecrLayoutProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export const MainSelecrLayout = (props: MainSelecrLayoutProps) => {
  const { children, className, ...rest } = props;
  const { styles } = useStyles();
  return (
    <div {...rest} className={`${styles.base} ${className}`}>
      {children}
    </div>
  )
}