/**
 * 使用媒体查询调整样式
*/
import { Outlet } from 'react-router';
import { NavLink } from "react-router-dom"
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => {
  return ({
    base: css`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      & > header{
        height: 40px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        overflow: auto;
        & > .navlink {
          align-self: stretch;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-decoration:none;
          color: ${token.colorText};
        }
        & > .navlink::after {
          content: ' ';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        & > .navlink:hover::after {
          border-color: ${token.colorPrimaryBorder};
        }

        & > .navlink + .navlink {
          margin-left: 20px;
        }
        & > .navlink.active {
          color: ${token.colorPrimary};
          &.navlink::after {
            border-color:${token.colorPrimaryBorder};
          }
        }
      }

      & > main {
        flex: 1;
        overflow: auto;
      }
    `,
  })
});

export const RootRoute = () => {
  const { styles } = useStyles()
  return <div className={styles.base}>
    <header>
      <NavLink className="navlink" to="/data_science">数据科学</NavLink>
      <NavLink className="navlink" to="/database">数据库</NavLink>
      <NavLink className="navlink" to="/introduction_to_artificial_intelligence">人工智能</NavLink>
      <NavLink className="navlink" to="/software_engineering">软件工程</NavLink>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
}
