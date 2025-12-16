import { createStyles } from 'antd-style';
import { Fragment } from 'react/jsx-runtime';
const useStyles = createStyles(({ css, token }) => {
  return ({
    main: css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    title: css`
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      padding: 16px 0;
    `,
    base: css`
      flex: 1;
      /* height: 100%; */
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

export interface MainSelecrLayoutProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  title?: React.ReactNode
}

export const MainSelecrLayout = (props: MainSelecrLayoutProps) => {
  const { children, className, title, ...rest } = props;
  const { styles } = useStyles();
  return (
    <div className={`${styles.main} `}>
      {title ? <div className={styles.title}>{title}</div> : <Fragment />}
      <div {...rest} className={`${styles.base} ${className}`}>
        {children}
      </div>
    </div>
  )
}