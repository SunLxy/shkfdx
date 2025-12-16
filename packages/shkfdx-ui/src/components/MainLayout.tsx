import { createStyles } from 'antd-style';
import { Fragment } from 'react/jsx-runtime';
const useStyles = createStyles(({ css }) => {
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
      height: 100%;
      width: 100%;
      padding: 14px;
      overflow: auto;
      box-sizing: border-box;
    `,
  })
});

export interface MainLayoutProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  title?: React.ReactNode
}
/**整体布局*/
export const MainLayout = (props: MainLayoutProps) => {
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